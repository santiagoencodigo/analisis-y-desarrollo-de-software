/* ============================================================
    
Cambio del 6/10/2026: Para tener homogeneas cada una de las paginas-

    TEMPLATE.JS — Lógica del template editorial para apuntes ADSO
    
   ============================================================

   Ubicación esperada:
       ./Assets/template.js

   Requisitos previos:
       - Bootstrap 5 JS debe estar cargado ANTES (para el navbar).
       - Este script va al final del <body> o con atributo `defer`.

   Estructura HTML que espera (todas las clases son opcionales;
   si no existen, la lógica relacionada se omite sin errores):

       .bm-progress > .bm-progress-bar
       .bm-toc (id="bm-toc", con clase .bm-toc)
           .bm-toc-toggle            → botón para abrir/cerrar en móvil
           .bm-toc-link[href="#id"]  → enlaces del índice
       .bm-content section[id]       → secciones detectables como "activas"
       .bm-reveal                    → elementos que aparecen con fade-up
       .bm-top                       → botón volver arriba

   Convención:
       - Secciones activas se detectan por `id` en `.bm-content section[id]`.
       - Los links del TOC deben apuntar a esos mismos ids con `#id`.

   ============================================================ */

(function () {
    'use strict';

    /* ============================================================
       Utilidades
       ============================================================ */

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ============================================================
       Init
       ============================================================ */

    function init() {

        /* --------------------------------------------------------
           Referencias del DOM
           -------------------------------------------------------- */
        const progressBar = document.querySelector('.bm-progress-bar');
        const topBtn      = document.querySelector('.bm-top');
        const toc         = document.getElementById('bm-toc');
        const tocToggle   = document.querySelector('.bm-toc-toggle');
        const sections    = document.querySelectorAll('.bm-content section[id]');
        const tocLinks    = document.querySelectorAll('.bm-toc-link');

        /* --------------------------------------------------------
           Funciones de actualización
           -------------------------------------------------------- */

        // 1) Barra de progreso de lectura
        function updateProgress() {
            if (!progressBar) return;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
            progressBar.style.width = progress + '%';
        }

        // 2) Visibilidad del botón volver arriba
        function updateTopBtn() {
            if (!topBtn) return;
            topBtn.classList.toggle('is-visible', window.scrollY > 600);
        }

        // 3) Detección de sección activa en el TOC
        function updateActiveLink() {
            if (!sections.length || !tocLinks.length) return;

            const scrollPos = window.scrollY + 160; // margen para activar un poco antes
            let currentId = '';

            sections.forEach(function (section) {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                if (sectionTop <= scrollPos) {
                    currentId = section.id;
                }
            });

            // Si llegamos al final de la página, marcamos la última sección
            const scrollBottom = window.innerHeight + window.scrollY;
            if (scrollBottom >= document.documentElement.scrollHeight - 4) {
                currentId = sections[sections.length - 1].id;
            }

            tocLinks.forEach(function (link) {
                const href = link.getAttribute('href');
                if (!href || href.charAt(0) !== '#') return;
                link.classList.toggle('is-active', href.substring(1) === currentId);
            });
        }

        /* --------------------------------------------------------
           UN SOLO listener de scroll
           Todas las actualizaciones dentro del mismo rAF
           -------------------------------------------------------- */
        let ticking = false;

        function onScroll() {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(function () {
                updateProgress();
                updateTopBtn();
                updateActiveLink();
                ticking = false;
            });
        }

        window.addEventListener('scroll', onScroll, { passive: true });

        // Estado inicial
        updateProgress();
        updateTopBtn();
        updateActiveLink();

        /* --------------------------------------------------------
           Botón volver arriba
           -------------------------------------------------------- */
        if (topBtn) {
            topBtn.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
            });
        }

        /* --------------------------------------------------------
           Animación reveal con IntersectionObserver
           -------------------------------------------------------- */
        const revealEls = document.querySelectorAll('.bm-reveal');

        if ('IntersectionObserver' in window && !prefersReducedMotion) {
            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const delay = parseInt(el.dataset.delay || '0', 10);
                        setTimeout(function () {
                            el.classList.add('is-visible');
                        }, delay);
                        observer.unobserve(el);
                    }
                });
            }, {
                threshold: 0.08,
                rootMargin: '0px 0px -60px 0px'
            });

            revealEls.forEach(function (el) {
                observer.observe(el);
            });
        } else {
            revealEls.forEach(function (el) {
                el.classList.add('is-visible');
            });
        }

        /* --------------------------------------------------------
           Toggle de tabla de contenido en móvil
           -------------------------------------------------------- */
        if (tocToggle && toc) {
            tocToggle.addEventListener('click', function () {
                const isOpen = toc.classList.toggle('is-open');
                tocToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
        }

        /* --------------------------------------------------------
           Smooth scroll para enlaces internos del TOC
           -------------------------------------------------------- */
        document.querySelectorAll('.bm-toc-link').forEach(function (link) {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (!href || href.charAt(0) !== '#') return;

                const target = document.querySelector(href);
                if (!target) return;

                e.preventDefault();

                const offset = 90;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: top,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });

                // Cierra el TOC si estamos en móvil
                if (window.innerWidth < 1024 && toc && toc.classList.contains('is-open')) {
                    toc.classList.remove('is-open');
                    if (tocToggle) tocToggle.setAttribute('aria-expanded', 'false');
                }

                if (history.pushState) {
                    history.pushState(null, '', href);
                }
            });
        });
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