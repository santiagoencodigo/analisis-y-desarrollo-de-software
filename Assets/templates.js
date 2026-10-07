/* ============================================================
   TEMPLATES.JS — Lógica editorial reutilizable para apuntes ADSO
   ============================================================

   Ubicación:  ./Assets/templates.js
   Requiere:   Bootstrap 5 JS cargado antes (para el navbar)

   Estructura HTML esperada (todas las clases son opcionales;
   si no existen, la lógica relacionada se omite sin errores):

       .bm-progress > .bm-progress-bar
       .bm-toc#bm-toc
           .bm-toc__toggle                → botón toggle móvil
           .bm-toc__link[href="#id"]      → enlaces del índice
       .bm-content section[id]             → secciones detectables
       .bm-reveal                          → elementos que aparecen fade-up
       .bm-top                             → botón volver arriba

   Convención:
       - Secciones activas se detectan por `id` en `.bm-content section[id]`.
       - Los links del TOC deben apuntar a esos mismos ids con `#id`.
       - Todos los elementos usan `__` (BEM) pero se aceptan los alias
         antiguos (`.bm-toc-link`, `.bm-toc-inner`, etc.) por compatibilidad.

   ============================================================ */

(function () {
    'use strict';

    /* ============================================================
       Utilidades
       ============================================================ */

    const prefersReducedMotion =
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /**
     * Selector múltiple: devuelve todos los elementos que coincidan
     * con cualquiera de los selectores dados.
     */
    function $all(...selectors) {
        const set = new Set();
        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => set.add(el));
        });
        return Array.from(set);
    }

    /**
     * Devuelve el primer elemento que coincida con cualquiera
     * de los selectores dados.
     */
    function $first(...selectors) {
        for (const sel of selectors) {
            const el = document.querySelector(sel);
            if (el) return el;
        }
        return null;
    }


    /* ============================================================
       Init
       ============================================================ */

    function init() {

        /* --------------------------------------------------------
           Referencias del DOM (con soporte para nomenclatura antigua
           y nueva)
           -------------------------------------------------------- */
        const progressBar = document.querySelector('.bm-progress-bar');
        const topBtn      = document.querySelector('.bm-top');
        const toc         = document.getElementById('bm-toc');
        const tocToggle   = $first('.bm-toc__toggle', '.bm-toc-toggle');
        const tocNav      = $first('.bm-toc__nav',    '.bm-toc-nav');
        const sections    = document.querySelectorAll('.bm-content section[id]');
        const tocLinks    = $all('.bm-toc__link', '.bm-toc-link');

        // Offset dinámico basado en la altura real del navbar
        const navHeight = parseInt(
            getComputedStyle(document.documentElement)
                .getPropertyValue('--nav-height')
        , 10) || 60;

        /* --------------------------------------------------------
           1) Barra de progreso
           -------------------------------------------------------- */
        function updateProgress() {
            if (!progressBar) return;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0
                ? Math.min(100, (scrollTop / docHeight) * 100)
                : 0;
            progressBar.style.width = progress + '%';
        }

        /* --------------------------------------------------------
           2) Botón volver arriba
           -------------------------------------------------------- */
        function updateTopBtn() {
            if (!topBtn) return;
            topBtn.classList.toggle('is-visible', window.scrollY > 600);
        }

        /* --------------------------------------------------------
           3) Sección activa en el TOC
           Estrategia:
             a) IntersectionObserver para saber qué secciones están
                visibles en el viewport.
             b) Elegimos la más "alta" de las visibles.
             c) Fallback con scroll si IntersectionObserver no existe.
           -------------------------------------------------------- */
        let activeId = '';
        const visibleSections = new Map(); // id → top

        function setActiveLink(newId) {
            if (newId === activeId) return;
            activeId = newId;

            tocLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (!href || href.charAt(0) !== '#') return;
                link.classList.toggle('is-active', href.substring(1) === newId);
            });
        }

        function computeActiveFromScroll() {
            if (!sections.length) return;

            const scrollPos = window.scrollY + navHeight + 100;
            let currentId = '';

            sections.forEach(section => {
                const sectionTop =
                    section.getBoundingClientRect().top + window.scrollY;
                if (sectionTop <= scrollPos) currentId = section.id;
            });

            const scrollBottom = window.innerHeight + window.scrollY;
            if (scrollBottom >= document.documentElement.scrollHeight - 4) {
                currentId = sections[sections.length - 1].id;
            }

            setActiveLink(currentId);
        }

        if ('IntersectionObserver' in window && sections.length) {
            const activeObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const id = entry.target.id;
                    if (entry.isIntersecting) {
                        const top = entry.boundingClientRect.top;
                        visibleSections.set(id, top);
                    } else {
                        visibleSections.delete(id);
                    }
                });

                // Elegimos la sección visible más cercana al top
                let bestId = '';
                let bestTop = Infinity;
                visibleSections.forEach((top, id) => {
                    if (top < bestTop) { bestTop = top; bestId = id; }
                });

                if (bestId) {
                    setActiveLink(bestId);
                } else {
                    // Si no hay visibles, caemos al cálculo por scroll
                    computeActiveFromScroll();
                }
            }, {
                rootMargin: `-${navHeight + 40}px 0px -55% 0px`,
                threshold: [0, 0.25, 0.5, 1]
            });

            sections.forEach(section => activeObserver.observe(section));
        }

        /* --------------------------------------------------------
           4) Un solo listener de scroll (con rAF)
           -------------------------------------------------------- */
        let ticking = false;

        function onScroll() {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                updateProgress();
                updateTopBtn();
                if (!('IntersectionObserver' in window)) {
                    computeActiveFromScroll();
                }
                ticking = false;
            });
        }

        window.addEventListener('scroll', onScroll, { passive: true });

        // Estado inicial
        updateProgress();
        updateTopBtn();
        computeActiveFromScroll(); // activa el link correcto al cargar

        /* --------------------------------------------------------
           5) Botón volver arriba
           -------------------------------------------------------- */
        if (topBtn) {
            topBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
            });
        }

        /* --------------------------------------------------------
           6) Animación reveal con IntersectionObserver
           -------------------------------------------------------- */
        const revealEls = document.querySelectorAll('.bm-reveal');

        if ('IntersectionObserver' in window && !prefersReducedMotion) {
            const revealObserver = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target;
                    const delay = parseInt(el.dataset.delay || '0', 10);
                    setTimeout(() => el.classList.add('is-visible'), delay);
                    obs.unobserve(el);
                });
            }, {
                threshold: 0.08,
                rootMargin: '0px 0px -60px 0px'
            });

            revealEls.forEach(el => revealObserver.observe(el));
        } else {
            revealEls.forEach(el => el.classList.add('is-visible'));
        }

        /* --------------------------------------------------------
           7) Toggle del TOC en móvil
           - Guarda la altura real para animar suave
           - Escape para cerrar
           - aria-expanded actualizado
           -------------------------------------------------------- */
        if (tocToggle && toc) {
            function openToc() {
                toc.classList.add('is-open');
                tocToggle.setAttribute('aria-expanded', 'true');
                if (tocNav) tocNav.style.maxHeight = tocNav.scrollHeight + 'px';
            }

            function closeToc() {
                toc.classList.remove('is-open');
                tocToggle.setAttribute('aria-expanded', 'false');
                if (tocNav) tocNav.style.maxHeight = '';
            }

            tocToggle.addEventListener('click', () => {
                if (toc.classList.contains('is-open')) closeToc();
                else openToc();
            });

            // Cierra con Escape si el foco está dentro del TOC
            toc.addEventListener('keydown', e => {
                if (e.key === 'Escape' && toc.classList.contains('is-open')) {
                    closeToc();
                    tocToggle.focus();
                }
            });
        }

        /* --------------------------------------------------------
           8) Smooth scroll para enlaces del TOC
           -------------------------------------------------------- */
        tocLinks.forEach(link => {
            link.addEventListener('click', e => {
                const href = link.getAttribute('href');
                if (!href || href.charAt(0) !== '#') return;

                const target = document.getElementById(href.substring(1));
                if (!target) return;

                e.preventDefault();

                const offset = navHeight + 30;
                const top =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    offset;

                window.scrollTo({
                    top,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });

                // Cierra el TOC si estamos en móvil
                if (window.innerWidth < 1024 &&
                    toc && toc.classList.contains('is-open')) {
                    toc.classList.remove('is-open');
                    if (tocToggle)
                        tocToggle.setAttribute('aria-expanded', 'false');
                }

                if (history.pushState) {
                    history.pushState(null, '', href);
                }
            });
        });

        /* --------------------------------------------------------
           9) Recalcular al redimensionar (debounced)
           -------------------------------------------------------- */
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                computeActiveFromScroll();
                if (tocNav && toc && toc.classList.contains('is-open')) {
                    tocNav.style.maxHeight = tocNav.scrollHeight + 'px';
                }
            }, 150);
        });

        /* --------------------------------------------------------
           10) Sincronizar con el hash inicial / popstate
           -------------------------------------------------------- */
        function syncFromHash() {
            const hash = window.location.hash.substring(1);
            if (!hash) return;
            const target = document.getElementById(hash);
            if (!target) return;

            // Dejamos que el navegador haga el scroll nativo;
            // solo actualizamos el link activo.
            setActiveLink(hash);
        }

        window.addEventListener('hashchange', syncFromHash);
        window.addEventListener('popstate', syncFromHash);

        if (window.location.hash) {
            setTimeout(syncFromHash, 100);
        }
    }


    /* ============================================================
       Bootstrap del script
       ============================================================ */

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();