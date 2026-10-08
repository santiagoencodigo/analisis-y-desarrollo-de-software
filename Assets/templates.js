/* ============================================================
   TEMPLATES.JS — Lógica editorial reutilizable para apuntes ADSO
   ============================================================

   Ubicación:  ./Assets/templates.js
   Requiere:   Bootstrap 5 JS cargado antes (para el navbar)

   Changelog:
     2026-10-07 — Añadido theme switcher con 6 temas y persistencia
                  en localStorage. API pública expuesta en window.AdsoTheme.

   ============================================================ */


/* ============================================================
   0. APLICACIÓN INMEDIATA DEL TEMA (antes de DOMContentLoaded)
   Se ejecuta al cargar el script (al final del body).
   Para eliminar el FOUC por completo, añade esto en <head>:

     <script>
       try{var t=localStorage.getItem('adso-theme');
       if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}
     </script>

   ============================================================ */

(function () {
    'use strict';
    try {
        var saved = localStorage.getItem('adso-theme');
        if (saved && saved !== 'blue') {
            document.documentElement.setAttribute('data-theme', saved);
        }
    } catch (e) { /* localStorage no disponible */ }
})();


/* ============================================================
   MÓDULO PRINCIPAL
   ============================================================ */

(function () {
    'use strict';

    /* ============================================================
       Constantes y utilidades
       ============================================================ */

    const THEME_KEY = 'adso-theme';
    const DEFAULT_THEME = 'blue';

    const THEMES = [
        { id: 'blue',   label: 'Azul',    aria: 'Tema azul oscuro (por defecto)' },
        { id: 'green',  label: 'Verde',   aria: 'Tema verde inspirado en Starbucks' },
        { id: 'purple', label: 'Morado',  aria: 'Tema morado inspirado en Nubank' },
        { id: 'orange', label: 'Naranja', aria: 'Tema naranja cálido' },
        { id: 'light',  label: 'Claro',   aria: 'Tema claro tipo papel' },
        { id: 'dark',   label: 'Oscuro',  aria: 'Tema oscuro monocromático' }
    ];

    const prefersReducedMotion =
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function $all(...selectors) {
        const set = new Set();
        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => set.add(el));
        });
        return Array.from(set);
    }

    function $first(...selectors) {
        for (const sel of selectors) {
            const el = document.querySelector(sel);
            if (el) return el;
        }
        return null;
    }

    /* ============================================================
       Estado del tema
       ============================================================ */

    function getCurrentTheme() {
        try {
            const stored = localStorage.getItem(THEME_KEY);
            if (stored && THEMES.some(t => t.id === stored)) return stored;
        } catch (e) { /* ignore */ }

        const attr = document.documentElement.getAttribute('data-theme');
        if (attr && THEMES.some(t => t.id === attr)) return attr;

        return DEFAULT_THEME;
    }

    function setTheme(themeId, options) {
        if (!THEMES.some(t => t.id === themeId)) themeId = DEFAULT_THEME;

        const opts = options || {};
        const html = document.documentElement;

        // Transición suave solo cuando el usuario cambia manualmente
        if (opts.animate && !prefersReducedMotion) {
            html.classList.add('bm-theme-transition');
            clearTimeout(setTheme._t);
            setTheme._t = setTimeout(() => {
                html.classList.remove('bm-theme-transition');
            }, 450);
        }

        if (themeId === DEFAULT_THEME) {
            html.removeAttribute('data-theme');
        } else {
            html.setAttribute('data-theme', themeId);
        }

        try { localStorage.setItem(THEME_KEY, themeId); } catch (e) { /* ignore */ }

        // Sincronizar estado visual del switcher
        document.querySelectorAll('.bm-theme-swatch').forEach(sw => {
            const isActive = sw.getAttribute('data-theme') === themeId;
            sw.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        // Emitir evento custom por si otro script lo necesita
        window.dispatchEvent(new CustomEvent('adso:themechange', {
            detail: { theme: themeId }
        }));
    }

    // API pública
    window.AdsoTheme = {
        get: getCurrentTheme,
        set: (id) => setTheme(id, { animate: true }),
        list: () => THEMES.map(t => t.id)
    };

    /* ============================================================
       Inyección del botón en el navbar
       ============================================================ */

    function buildThemeSwitcher() {
        const li = document.createElement('li');
        li.className = 'nav-item bm-theme-switcher';
        li.setAttribute('data-bm-theme-switcher', '');

        const current = getCurrentTheme();

        // Botón principal
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'bm-theme-toggle';
        btn.setAttribute('aria-label', 'Cambiar tema visual');
        btn.setAttribute('aria-haspopup', 'true');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<i class="fa-solid fa-palette" aria-hidden="true"></i>';

        // Panel
        const panel = document.createElement('div');
        panel.className = 'bm-theme-panel';
        panel.setAttribute('role', 'listbox');
        panel.setAttribute('aria-label', 'Temas disponibles');

        // Header del panel
        const header = document.createElement('div');
        header.className = 'bm-theme-panel__header';
        header.textContent = 'Tema';
        panel.appendChild(header);

        // Grid de swatches
        const grid = document.createElement('div');
        grid.className = 'bm-theme-grid';

        THEMES.forEach(theme => {
            const sw = document.createElement('button');
            sw.type = 'button';
            sw.className = 'bm-theme-swatch';
            sw.setAttribute('data-theme', theme.id);
            sw.setAttribute('role', 'option');
            sw.setAttribute('aria-selected', theme.id === current ? 'true' : 'false');
            sw.setAttribute('aria-label', theme.aria);
            sw.setAttribute('title', theme.aria);

            const preview = document.createElement('span');
            preview.className = 'bm-theme-swatch__preview';
            preview.setAttribute('aria-hidden', 'true');

            const label = document.createElement('span');
            label.className = 'bm-theme-swatch__label';
            label.textContent = theme.label;

            sw.appendChild(preview);
            sw.appendChild(label);
            grid.appendChild(sw);
        });

        panel.appendChild(grid);
        li.appendChild(btn);
        li.appendChild(panel);

        return li;
    }

    function initThemeSwitcher() {
        const navbarNav = $first('.navbar-nav');
        if (!navbarNav) return;

        // Evitar duplicados si el script se ejecuta dos veces
        if (navbarNav.querySelector('[data-bm-theme-switcher]')) return;

        const switcher = buildThemeSwitcher();
        navbarNav.appendChild(switcher);

        const toggle = switcher.querySelector('.bm-theme-toggle');
        const panel  = switcher.querySelector('.bm-theme-panel');

        function openPanel() {
            switcher.classList.add('is-open');
            toggle.setAttribute('aria-expanded', 'true');
        }

        function closePanel() {
            switcher.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        }

        function togglePanel() {
            if (switcher.classList.contains('is-open')) closePanel();
            else openPanel();
        }

        // Click en botón
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            togglePanel();
        });

        // Click en swatch → cambiar tema
        switcher.querySelectorAll('.bm-theme-swatch').forEach(sw => {
            sw.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = sw.getAttribute('data-theme');
                setTheme(id, { animate: true });
                closePanel();
            });
        });

        // Cerrar al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!switcher.contains(e.target)) closePanel();
        });

        // Cerrar con Escape
        switcher.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && switcher.classList.contains('is-open')) {
                closePanel();
                toggle.focus();
            }
        });

        // Cerrar al hacer click en cualquier enlace del navbar (móvil)
        navbarNav.querySelectorAll('a.nav-link, a.dropdown-item').forEach(link => {
            link.addEventListener('click', closePanel);
        });

        // Navegación con flechas dentro del grid
        const swatches = Array.from(switcher.querySelectorAll('.bm-theme-swatch'));
        swatches.forEach((sw, idx) => {
            sw.addEventListener('keydown', (e) => {
                let next = null;
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    next = swatches[(idx + 1) % swatches.length];
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    next = swatches[(idx - 1 + swatches.length) % swatches.length];
                } else if (e.key === 'Home') {
                    next = swatches[0];
                } else if (e.key === 'End') {
                    next = swatches[swatches.length - 1];
                }
                if (next) {
                    e.preventDefault();
                    next.focus();
                }
            });
        });
    }

    /* ============================================================
       Init general de la página
       ============================================================ */

    function init() {

        /* --------------------------------------------------------
           Referencias del DOM
           -------------------------------------------------------- */
        const progressBar = document.querySelector('.bm-progress-bar');
        const topBtn      = document.querySelector('.bm-top');
        const toc         = document.getElementById('bm-toc');
        const tocToggle   = $first('.bm-toc__toggle', '.bm-toc-toggle');
        const tocNav      = $first('.bm-toc__nav',    '.bm-toc-nav');
        const sections    = document.querySelectorAll('.bm-content section[id]');
        const tocLinks    = $all('.bm-toc__link', '.bm-toc-link');

        const navHeight = parseInt(
            getComputedStyle(document.documentElement)
                .getPropertyValue('--nav-height')
        , 10) || 60;

        /* --------------------------------------------------------
           Theme switcher
           -------------------------------------------------------- */
        initThemeSwitcher();

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
           -------------------------------------------------------- */
        let activeId = '';
        const visibleSections = new Map();

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
                        visibleSections.set(id, entry.boundingClientRect.top);
                    } else {
                        visibleSections.delete(id);
                    }
                });

                let bestId = '';
                let bestTop = Infinity;
                visibleSections.forEach((top, id) => {
                    if (top < bestTop) { bestTop = top; bestId = id; }
                });

                if (bestId) setActiveLink(bestId);
                else computeActiveFromScroll();
            }, {
                rootMargin: `-${navHeight + 40}px 0px -55% 0px`,
                threshold: [0, 0.25, 0.5, 1]
            });

            sections.forEach(section => activeObserver.observe(section));
        }

        /* --------------------------------------------------------
           4) Un solo listener de scroll
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

        updateProgress();
        updateTopBtn();
        computeActiveFromScroll();

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
           6) Reveal con IntersectionObserver
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
           9) Recalcular al redimensionar
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
           10) Sincronizar con hash inicial / popstate
           -------------------------------------------------------- */
        function syncFromHash() {
            const hash = window.location.hash.substring(1);
            if (!hash) return;
            const target = document.getElementById(hash);
            if (!target) return;
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