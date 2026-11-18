/**
 * Dra. Carina Giuri — interacciones del sitio
 * Sin dependencias. <dialog> nativo para menú y bottom sheets.
 */
(() => {
    'use strict';

    const WA_NUMBER = '5493865447836';
    const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Enlaces de WhatsApp con mensaje precargado ---------- */
    $$('[data-wa]').forEach((a) => { a.href = waLink(a.dataset.wa); });

    /* ---------- Datos de tratamientos ---------- */
    const treatments = {
        flebologia: {
            title: 'Flebología', cat: 'Vascular', subtitle: 'Salud vascular integral',
            desc: 'Abordamos la patología venosa desde un enfoque médico y estético. Diagnóstico preciso mediante ecodoppler y tratamientos mínimamente invasivos —escleroterapia para “secar” arañitas, láser transdérmico o microcirugía ambulatoria— según la necesidad de cada paciente.',
            target: 'Personas con pesadez en las piernas, hinchazón, dolor o calambres nocturnos, o que presentan várices y arañitas visibles que desean tratar por salud o por estética.',
            benefits: ['Alivio del dolor y la pesadez en las piernas.', 'Mejora estética de várices y arañitas.', 'Prevención de complicaciones vasculares.', 'Recuperación rápida, sin reposo prolongado.']
        },
        inyectables: {
            title: 'Inyectables faciales', cat: 'Rostro', subtitle: 'Toxina botulínica y ácido hialurónico',
            desc: 'La toxina botulínica relaja los músculos que generan arrugas de expresión; el ácido hialurónico repone volúmenes, hidrata en profundidad y perfila rasgos. Siempre con productos de primera línea y técnicas que priorizan la naturalidad.',
            target: 'Quienes desean suavizar arrugas de frente y patas de gallo, dar volumen a los labios, definir pómulos o refrescar su apariencia sin pasar por quirófano.',
            benefits: ['Rostro más descansado y luminoso.', 'Atenuación visible de arrugas dinámicas.', 'Hidratación profunda y mejor calidad de piel.', 'Resultados naturales que respetan tu expresión.']
        },
        bioestimulacion: {
            title: 'Bioestimulación', cat: 'Rostro', subtitle: 'Regeneración de colágeno',
            desc: 'Inyectables como Profhilo, HarmonyCa o Radiesse que estimulan a tus propias células a producir nuevo colágeno y elastina. No solo rellenan: reparan la estructura de la piel.',
            target: 'Pieles con flacidez leve a moderada, falta de luminosidad o textura irregular. Ideal como prevención desde los 30 o como reparación en pieles maduras.',
            benefits: ['Efecto tensor natural y progresivo.', 'Más firmeza y elasticidad.', 'Luminosidad duradera.', 'Previene el descolgamiento facial.']
        },
        rinomodelacion: {
            title: 'Rinomodelación', cat: 'Rostro', subtitle: 'Perfilado nasal sin cirugía',
            desc: 'Corrección estética de la nariz con ácido hialurónico de alta densidad. Permite rectificar el dorso, elevar la punta y armonizar el perfil en una sesión de unos 30 minutos, sin anestesia general ni postoperatorio.',
            target: 'Quienes desean mejorar la forma de su nariz (giba dorsal, punta caída) sin los tiempos de recuperación de una rinoplastia.',
            benefits: ['Resultado visible al terminar la sesión.', 'Sin yesos, férulas ni reposo.', 'Procedimiento reversible y ajustable.', 'Mayor armonía del perfil.']
        },
        mesoterapia: {
            title: 'Mesoterapia', cat: 'Piel', subtitle: 'Nutrición dérmica directa',
            desc: 'Microinyecciones de vitaminas, minerales y aminoácidos en la capa media de la piel. Revitaliza, hidrata y tensa sin aportar volumen.',
            target: 'Quienes buscan mejorar la textura de la piel, tratar la flacidez leve o la celulitis y la grasa localizada.',
            benefits: ['Hidratación profunda y luminosidad.', 'Estímulo de colágeno.', 'Menor retención de líquidos.', 'Mejor calidad de piel.']
        },
        prp: {
            title: 'Plasma rico en plaquetas', cat: 'Piel', subtitle: 'Bioestimulación autóloga',
            desc: 'Usamos los factores de crecimiento de tu propia sangre para regenerar tejidos. Un tratamiento 100 % biocompatible que acelera la reparación celular.',
            target: 'Quienes buscan un rejuvenecimiento facial natural, mejorar cicatrices o recuperar la calidad del cabello.',
            benefits: ['Regeneración de tejidos.', 'Más elasticidad y firmeza.', 'Sin riesgo de alergia: es tu propio plasma.', 'Efecto revitalizante progresivo.']
        },
        peeling: {
            title: 'Peeling químico', cat: 'Piel', subtitle: 'Renovación celular',
            desc: 'Ácidos médicos que exfolian las capas dañadas de la piel para que surja una piel nueva, más suave y uniforme.',
            target: 'Manchas, acné, poros dilatados o arrugas finas superficiales.',
            benefits: ['Unifica el tono.', 'Reduce imperfecciones y marcas de acné.', 'Estimula la renovación celular.', 'Suaviza la textura del rostro.']
        },
        pellets: {
            title: 'Pellets hormonales', cat: 'Bienestar', subtitle: 'Reemplazo hormonal bioidéntico',
            desc: 'Un pequeño implante subcutáneo, del tamaño de un grano de arroz, que libera hormonas bioidénticas de forma constante y fisiológica para equilibrar los niveles que decaen con la edad.',
            target: 'Mujeres en perimenopausia o menopausia y hombres en andropausia con fatiga, baja libido, sofocos, insomnio, cambios de humor o dificultad para bajar de peso.',
            benefits: ['Más energía y vitalidad.', 'Mejora del deseo sexual.', 'Mejor sueño y estado de ánimo.', 'Protección ósea y cardiovascular.']
        },
        antiage: {
            title: 'Medicina anti-age', cat: 'Bienestar', subtitle: 'Nutrigenómica orthomolecular',
            desc: 'Un enfoque integral que va más allá de la estética. A partir de estudios personalizados diseñamos un plan de suplementación y alimentación para optimizar el funcionamiento celular y combatir el estrés oxidativo.',
            target: 'Personas sanas que quieren seguir estándolo, o con fatiga, estrés o envejecimiento prematuro, que buscan potenciar su salud desde adentro.',
            benefits: ['Sistema inmune más fuerte.', 'Mayor rendimiento físico y mental.', 'Piel, cabello y uñas más sanos.', 'Prevención del envejecimiento celular.']
        }
    };

    /* ---------- Diálogos ---------- */
    const closeDialog = (dlg) => {
        if (!dlg || !dlg.open || dlg.classList.contains('is-closing')) return;
        if (reduceMotion) { dlg.close(); return; }
        dlg.classList.add('is-closing');
        const done = () => {
            dlg.classList.remove('is-closing');
            dlg.style.transform = '';
            dlg.close();
        };
        dlg.addEventListener('animationend', done, { once: true });
        setTimeout(() => dlg.open && dlg.classList.contains('is-closing') && done(), 400);
    };

    const openDialog = (id) => {
        const dlg = document.getElementById(id);
        if (!dlg || dlg.open) return;
        $$('dialog[open]').forEach((d) => d.close());
        dlg.showModal();
        $$('[data-swipe-scroll], .tsheet-content', dlg).forEach((el) => { el.scrollTop = 0; });
    };

    document.addEventListener('click', (e) => {
        const opener = e.target.closest('[data-open]');
        if (opener) { e.preventDefault(); openDialog(opener.dataset.open); return; }

        const closer = e.target.closest('[data-close]');
        if (closer) {
            const dlg = closer.closest('dialog');
            const href = closer.getAttribute('href');
            if (dlg && href && href.startsWith('#')) {
                // En enlaces del menú: cerrar en el acto y luego navegar.
                e.preventDefault();
                dlg.close();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
                history.replaceState(null, '', href);
            } else if (dlg) {
                closeDialog(dlg);
            }
        }
    });

    $$('dialog').forEach((dlg) => {
        // Escape con animación
        dlg.addEventListener('cancel', (e) => { e.preventDefault(); closeDialog(dlg); });
        // Tocar el fondo cierra
        dlg.addEventListener('click', (e) => {
            if (e.target !== dlg) return;
            const r = dlg.getBoundingClientRect();
            const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
            if (!inside) closeDialog(dlg);
        });
    });

    /* Deslizar hacia abajo para cerrar (bottom sheets en mobile).
       Se arrastra desde la cabecera, o desde el contenido cuando ya está arriba de todo. */
    $$('.sheet').forEach((sheet) => {
        const scroller = $('[data-swipe-scroll]', sheet);
        let y0 = null, dy = 0, dragging = false, fromHandle = false;

        sheet.addEventListener('touchstart', (e) => {
            if (window.innerWidth >= 720 || e.touches.length > 1 || e.target.closest('button, a')) return;
            fromHandle = !!e.target.closest('[data-swipe-handle]');
            const atTop = scroller && scroller.contains(e.target) && scroller.scrollTop <= 0;
            if (!fromHandle && !atTop) return;
            y0 = e.touches[0].clientY; dy = 0; dragging = false;
        }, { passive: true });

        sheet.addEventListener('touchmove', (e) => {
            if (y0 === null) return;
            dy = e.touches[0].clientY - y0;
            if (!dragging) {
                if (dy < -4 || (!fromHandle && scroller.scrollTop > 0)) { y0 = null; return; }
                if (dy > 6) { dragging = true; sheet.style.transition = 'none'; }
            }
            if (dragging) {
                e.preventDefault();
                sheet.style.transform = `translateY(${Math.max(0, dy)}px)`;
            }
        }, { passive: false });

        const end = () => {
            if (y0 === null) return;
            y0 = null;
            if (!dragging) return;
            dragging = false;
            sheet.style.transition = 'transform .25s cubic-bezier(.22,.8,.24,1)';
            if (dy > Math.min(140, sheet.offsetHeight * 0.22)) {
                sheet.style.transform = 'translateY(100%)';
                setTimeout(() => { sheet.close(); sheet.style.transform = ''; sheet.style.transition = ''; }, 240);
            } else {
                sheet.style.transform = '';
                setTimeout(() => { sheet.style.transition = ''; }, 260);
            }
        };
        sheet.addEventListener('touchend', end);
        sheet.addEventListener('touchcancel', end);
    });

    /* ---------- Ficha de tratamiento ---------- */
    const fillTreatment = (key) => {
        const t = treatments[key];
        if (!t) return false;
        $('#t-img').src = `assets/img/tratamientos/${key}.jpg`;
        $('#t-cat').textContent = t.cat;
        $('#t-title').textContent = t.title;
        $('#t-subtitle').textContent = t.subtitle;
        $('#t-desc').textContent = t.desc;
        $('#t-target').textContent = t.target;
        $('#t-benefits').replaceChildren(...t.benefits.map((b) => {
            const li = document.createElement('li');
            li.textContent = b;
            return li;
        }));
        $('#t-cta').href = waLink(`Hola Dra. Giuri, quisiera consultar por ${t.title.toLowerCase()}.`);
        return true;
    };
    $$('[data-treatment]').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (fillTreatment(btn.dataset.treatment)) openDialog('treatment');
        });
    });

    /* ---------- Tabs de trayectoria ---------- */
    const tabs = $$('[role="tab"]');
    const selectTab = (tab) => {
        tabs.forEach((t) => {
            const on = t === tab;
            t.setAttribute('aria-selected', String(on));
            t.tabIndex = on ? 0 : -1;
            document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
        });
        tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        const body = tab.closest('dialog').querySelector('[data-swipe-scroll]');
        if (body) body.scrollTop = 0;
    };
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => selectTab(tab));
        tab.addEventListener('keydown', (e) => {
            const map = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
            if (!(e.key in map)) return;
            e.preventDefault();
            const next = tabs[(map[e.key] + tabs.length) % tabs.length];
            selectTab(next); next.focus();
        });
    });

    /* ---------- Formulario → WhatsApp ---------- */
    const form = $('#booking-form');
    if (form) {
        const name = $('#f-name', form);
        name.addEventListener('input', () => name.removeAttribute('aria-invalid'));
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const n = name.value.trim();
            if (!n) { name.setAttribute('aria-invalid', 'true'); name.focus(); return; }
            const reason = $('#f-reason', form).value;
            const place = form.elements.place.value;
            const text = `Hola Dra. Giuri, soy ${n}. Quisiera pedir un turno.\nMotivo: ${reason}\nSede: ${place}`;
            window.open(waLink(text), '_blank', 'noopener');
        });
    }

    /* ---------- Header + barra fija ---------- */
    const header = $('#site-header');
    const dock = $('#dock');
    const contact = $('#contacto');
    let contactVisible = false;
    let typing = false;

    const updateDock = () => dock && dock.classList.toggle('is-hidden', contactVisible || typing);
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Ocultar la barra mientras se escribe (teclado abierto en mobile)
    document.addEventListener('focusin', (e) => { if (e.target.matches('input, select, textarea')) { typing = true; updateDock(); } });
    document.addEventListener('focusout', () => { typing = false; updateDock(); });

    if ('IntersectionObserver' in window) {
        new IntersectionObserver(([e]) => { contactVisible = e.isIntersecting; updateDock(); }, { threshold: 0.05 }).observe(contact);

        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach((en) => {
                if (!en.isIntersecting) return;
                en.target.classList.add('is-in');
                revealObs.unobserve(en.target);
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
        $$('.reveal').forEach((el) => revealObs.observe(el));

        const navLinks = $$('.nav a');
        const navObs = new IntersectionObserver((entries) => {
            entries.forEach((en) => {
                if (!en.isIntersecting) return;
                navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${en.target.id}`));
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean).forEach((s) => navObs.observe(s));
    } else {
        $$('.reveal').forEach((el) => el.classList.add('is-in'));
    }

    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
})();
