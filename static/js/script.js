// ---------------------------------------------------------------------------
// Data (paper Table "Quantitative results on the RefRef test set")
// Each row: [PSNR, masked PSNR, SSIM, LPIPS, DMAE] per category; null = not reported.
// ---------------------------------------------------------------------------
const METRICS = [
    { key: 'psnr',  label: 'PSNR',       higher: true,  digits: 2 },
    { key: 'psnrm', label: 'Masked PSNR', short: 'PSNR<sub>M</sub>', higher: true,  digits: 2 },
    { key: 'ssim',  label: 'SSIM',       higher: true,  digits: 2 },
    { key: 'lpips', label: 'LPIPS',      higher: false, digits: 2 },
    { key: 'dmae',  label: 'DMAE',       higher: false, digits: 2 },
];

const CATEGORIES = [
    { key: 'convex',    label: 'Convex single-material' },
    { key: 'nonconvex', label: 'Nonconvex single-material' },
    { key: 'multi',     label: 'Nonconvex multi-material' },
    { key: 'all',       label: 'Entire dataset' },
];

const RESULTS = {
    synthetic: [
        { name: 'NeuS',          rows: [[19.62, 14.91, 0.63, 0.17, 1.50], [19.91, 14.04, 0.65, 0.23, 1.57], [19.34, 15.07, 0.62, 0.20, 1.65], [19.65, 14.65, 0.63, 0.17, 1.58]] },
        { name: 'Splatfacto',    rows: [[18.63, 14.32, 0.79, 0.33, 16.38], [19.06, 14.32, 0.74, 0.33, 12.23], [19.95, 15.41, 0.77, 0.33, 10.70], [19.39, 14.81, 0.76, 0.33, 12.31]] },
        { name: 'Zip-NeRF',      rows: [[19.84, 16.42, 0.76, 0.35, 1.35], [21.08, 16.03, 0.78, 0.24, 1.05], [22.24, 16.99, 0.82, 0.21, 1.72], [21.50, 16.68, 0.80, 0.24, 1.52]] },
        { name: 'TNSR',          rows: [[18.96, 11.79, 0.78, 0.22, 1.26], [19.15, 11.55, 0.83, 0.24, 1.47], [17.68, 10.34, 0.76, 0.18, 1.70], [18.65, 11.15, 0.78, 0.19, 1.49]] },
        { name: 'MS-NeRF',       rows: [[18.86, 15.48, 0.73, 0.35, 2.18], [20.12, 15.47, 0.75, 0.29, 1.79], [21.41, 16.41, 0.78, 0.26, 1.86], [20.34, 15.78, 0.76, 0.30, 2.08]] },
        { name: 'RayDef',        rows: [[20.42, 16.59, 0.73, 0.40, 0.80], [20.71, 16.06, 0.70, 0.36, 0.88], [21.92, 17.07, 0.74, 0.32, 0.94], [21.16, 16.58, 0.73, 0.34, 0.88]] },
        { name: 'RoseNeRF',      rows: [[18.24, 11.63, 0.67, 0.43, null], [18.89, 11.80, 0.65, 0.42, null], [18.48, 14.34, 0.65, 0.43, null], [18.54, 12.59, 0.66, 0.43, null]] },
        { name: 'NU-NeRF',       rows: [[20.30, 21.28, 0.73, 0.32, 0.73], [20.46, 20.89, 0.71, 0.28, 0.51], [19.96, 17.00, 0.72, 0.33, 0.75], [20.24, 19.72, 0.72, 0.31, 0.66]] },
        { name: 'NeRRF',         rows: [[13.49, 12.96, 0.45, 0.74, 1.73], [14.28, 13.34, 0.52, 0.65, 1.94], [13.10, 12.06, 0.53, 0.74, 2.01], [13.65, 12.74, 0.51, 0.70, 1.93]] },
        { name: 'TransparentGS', rows: [[14.82, 11.58, 0.69, 0.36, 0.21], [16.44, 12.25, 0.68, 0.31, 0.20], [15.69, 10.62, 0.72, 0.31, 0.24], [15.83, 11.44, 0.70, 0.32, 0.22]] },
        { name: 'R3F (ours)',    ours: true,   rows: [[23.36, 19.53, 0.83, 0.18, 0.09], [21.76, 16.32, 0.79, 0.20, 0.18], [20.90, 16.88, 0.81, 0.18, 0.12], [22.01, 17.57, 0.82, 0.18, 0.13]] },
        { name: 'Oracle†',       oracle: true, rows: [[32.66, 26.12, 0.96, 0.05, 0.08], [28.65, 20.49, 0.93, 0.08, 0.07], [28.68, 21.23, 0.92, 0.10, 0.06], [29.34, 21.76, 0.93, 0.08, 0.07]] },
    ],
    real: [
        { name: 'NeuS',          rows: [[19.16, 15.90, 0.62, 0.34, null], [19.75, 14.79, 0.62, 0.32, null], [18.73, 15.87, 0.61, 0.36, null], [18.86, 15.80, 0.61, 0.35, null]] },
        { name: 'Splatfacto',    rows: [[16.23, 15.45, 0.68, 0.42, null], [16.30, 14.39, 0.67, 0.40, null], [16.19, 15.32, 0.67, 0.43, null], [16.20, 15.28, 0.67, 0.43, null]] },
        { name: 'Zip-NeRF',      rows: [[20.57, 16.94, 0.77, 0.31, null], [21.32, 16.26, 0.76, 0.27, null], [20.30, 17.09, 0.75, 0.32, null], [20.40, 17.01, 0.75, 0.32, null]] },
        { name: 'TNSR',          rows: [[17.08, 13.33, 0.63, 0.42, null], [17.95, 13.37, 0.68, 0.33, null], [15.82, 13.09, 0.59, 0.48, null], [16.14, 13.14, 0.60, 0.46, null]] },
        { name: 'MS-NeRF',       rows: [[19.41, 16.13, 0.72, 0.41, null], [20.10, 15.20, 0.71, 0.38, null], [19.28, 15.97, 0.71, 0.40, null], [19.35, 15.94, 0.71, 0.40, null]] },
        { name: 'RayDef',        rows: [[19.24, 16.34, 0.71, 0.44, null], [19.83, 15.56, 0.69, 0.42, null], [18.80, 16.27, 0.69, 0.46, null], [18.93, 16.23, 0.69, 0.45, null]] },
        { name: 'NU-NeRF',       rows: [[18.96, 16.53, 0.65, 0.38, null], [19.35, 15.48, 0.64, 0.39, null], [18.45, 16.27, 0.65, 0.38, null], [18.59, 16.25, 0.65, 0.38, null]] },
        { name: 'TransparentGS', rows: [[17.00, 13.40, 0.61, 0.36, null], [16.88, 12.67, 0.58, 0.33, null], [15.62, 12.15, 0.57, 0.40, null], [15.89, 12.36, 0.58, 0.39, null]] },
        { name: 'R3F (ours)',    ours: true,   rows: [[19.72, 16.45, 0.72, 0.34, null], [18.75, 14.12, 0.65, 0.38, null], [19.39, 16.24, 0.71, 0.34, null], [19.39, 16.13, 0.71, 0.34, null]] },
    ],
};

// ---------------------------------------------------------------------------
// Qualitative comparison scenes
// ---------------------------------------------------------------------------
const METHOD_NAMES = {
    gt: 'Ground Truth', zip: 'Zip-NeRF', ms: 'MS-NeRF', nu: 'NU-NeRF', nerrf: 'NeRRF',
    tgs: 'TransparentGS', r3f: 'R3F (ours)', oracle: 'Oracle', splat: 'Splatfacto',
    ray: 'RayDef', neus: 'NeuS',
};

const QUAL_GROUPS = [
    {
        id: 'qual-synthetic', label: 'Synthetic scenes', dir: 'synthetic', default: 'r3f',
        methods: ['zip', 'ms', 'nu', 'nerrf', 'tgs', 'r3f', 'oracle'],
        scenes: [{ id: 'cube', label: 'Cube background' }, { id: 'dog', label: 'Sphere background' }, { id: 'torus', label: 'Environment map' }],
    },
    {
        id: 'qual-real', label: 'Real scenes', dir: 'real', default: 'r3f',
        methods: ['splat', 'tgs', 'zip', 'ms', 'ray', 'nu', 'r3f'],
        scenes: [{ id: 'courtyard', label: 'Courtyard' }, { id: 'lookout', label: 'Lookout Deck' }, { id: 'livingroom', label: 'Living Room' }],
    },
];

const FAIL_STRIP = ['gt', 'splat', 'tgs', 'neus', 'zip', 'ms', 'ray', 'nu', 'r3f'];

const imgPath = (dir, sceneId, m) => `./static/images/wacv/${dir}/${sceneId}_${m}.jpg?v=2`;
const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';

function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
        if (k === 'class') node.className = v;
        else if (k === 'html') node.innerHTML = v;
        else if (k === 'text') node.textContent = v;
        else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
        else node.setAttribute(k, v);
    }
    children.forEach(c => node.appendChild(c));
    return node;
}

function chip(label, active, onclick, extraClass = '') {
    return el('button', {
        class: `chip ${extraClass}${active ? ' is-active' : ''}`,
        'aria-pressed': active ? 'true' : 'false',
        text: label,
        onclick,
    });
}

// ---------------------------------------------------------------------------
// Qualitative comparison: one slider per scene, method (left) vs ground truth (right)
// ---------------------------------------------------------------------------
function makeCompare(dir, scene) {
    const leftImg = el('img', { alt: '' });
    const rightImg = el('img', { src: imgPath(dir, scene.id, 'gt'), alt: `Ground truth, ${scene.label}` });
    const leftWrap = el('div', { class: 'compare-left-wrap' }, [leftImg]);
    const leftLabel = el('span', { class: 'compare-label left' });
    const range = el('input', { type: 'range', min: '0', max: '100', value: '50', class: 'compare-range', 'aria-label': `Comparison slider, ${scene.label}` });
    const box = el('div', { class: 'compare' }, [
        rightImg, leftWrap,
        el('div', { class: 'compare-handle', 'aria-hidden': 'true' }),
        leftLabel,
        el('span', { class: 'compare-label right', text: 'Ground Truth' }),
        range,
    ]);

    function setPos(p) {
        p = Math.max(0, Math.min(100, p));
        box.style.setProperty('--pos', p + '%');
        leftWrap.style.width = p + '%';
        range.value = p;
    }
    const posFromEvent = e => {
        const rect = box.getBoundingClientRect();
        return (e.clientX - rect.left) / rect.width * 100;
    };
    // Mouse: the split follows the cursor. Touch/pen: drag. Keyboard: the visually hidden range input.
    let dragging = false;
    box.addEventListener('pointerdown', e => { dragging = true; box.setPointerCapture(e.pointerId); setPos(posFromEvent(e)); });
    box.addEventListener('pointermove', e => { if (e.pointerType === 'mouse' || dragging) setPos(posFromEvent(e)); });
    box.addEventListener('pointerup', () => { dragging = false; });
    box.addEventListener('pointercancel', () => { dragging = false; });
    range.addEventListener('input', () => setPos(Number(range.value)));
    setPos(50);

    const figure = el('figure', { class: 'qual-item' }, [box, el('figcaption', { text: scene.label })]);
    return {
        figure,
        setMethod(m) {
            leftImg.src = imgPath(dir, scene.id, m);
            leftImg.alt = `${METHOD_NAMES[m]}, ${scene.label}`;
            leftLabel.textContent = METHOD_NAMES[m];
        },
    };
}

function initCompare() {
    QUAL_GROUPS.forEach(group => {
        const root = document.getElementById(group.id);
        const chips = el('div', { class: 'chip-row', role: 'group', 'aria-label': `${group.label}: method` });
        const grid = el('div', { class: 'qual-grid' });
        const compares = group.scenes.map(scene => makeCompare(group.dir, scene));
        compares.forEach(c => grid.appendChild(c.figure));

        function select(m) {
            compares.forEach(c => c.setMethod(m));
            chips.replaceChildren(...group.methods.map(x => chip(METHOD_NAMES[x], x === m, () => select(x))));
        }

        root.append(
            el('div', { class: 'qual-head' }, [el('span', { class: 'chip-group-label', text: group.label }), chips]),
            grid,
        );
        select(group.default);
    });
}

function initStage() {
    const stage = document.getElementById('stage');
    const slides = [...stage.querySelectorAll('.stage-slide')];
    const tabs = [...document.querySelectorAll('.stage-tabs [data-slide]')];
    const captions = [...document.querySelectorAll('.stage-caption')];
    let current = 0;

    function show(i) {
        current = (i + slides.length) % slides.length;
        slides.forEach((slide, k) => {
            const active = k === current;
            slide.classList.toggle('is-active', active);
            slide.setAttribute('aria-hidden', active ? 'false' : 'true');
            const video = slide.querySelector('video');
            if (active) video.play().catch(() => {});
            else video.pause();
        });
        tabs.forEach((tab, k) => {
            tab.classList.toggle('is-active', k === current);
            tab.setAttribute('aria-selected', k === current ? 'true' : 'false');
        });
        captions.forEach((cap, k) => cap.classList.toggle('is-active', k === current));
    }

    stage.querySelector('.stage-arrow.prev').addEventListener('click', () => show(current - 1));
    stage.querySelector('.stage-arrow.next').addEventListener('click', () => show(current + 1));
    tabs.forEach(tab => tab.addEventListener('click', () => show(Number(tab.dataset.slide))));
    stage.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') show(current - 1);
        if (e.key === 'ArrowRight') show(current + 1);
    });
}

function initFailStrip() {
    const strip = document.getElementById('fail-strip');
    FAIL_STRIP.forEach(m => {
        strip.appendChild(el('figure', {}, [
            el('img', { src: `./static/images/wacv/fail/${m}.jpg`, alt: `${METHOD_NAMES[m]} on a real multi-object scene`, loading: 'lazy' }),
            el('figcaption', { text: m === 'gt' ? 'GT' : METHOD_NAMES[m].replace(' (ours)', '') }),
        ]));
    });
}

// ---------------------------------------------------------------------------
// Quantitative tables
// ---------------------------------------------------------------------------
function rankClasses(values, higher) {
    // Returns 'best' / 'second' / '' for each value; ties share a rank.
    const distinct = [...new Set(values.filter(v => v !== null))].sort((a, b) => higher ? b - a : a - b);
    return values.map(v => v === null ? '' : v === distinct[0] ? 'best' : v === distinct[1] ? 'second' : '');
}

function initQuantitative() {
    const state = { category: 3 };
    const categoryPicker = document.getElementById('category-picker');
    const tables = [
        { el: document.getElementById('results-synthetic'), rows: RESULTS.synthetic, metrics: [0, 1, 2, 3, 4] },
        // Real scenes have no ground-truth geometry, so no DMAE column.
        { el: document.getElementById('results-real'), rows: RESULTS.real, metrics: [0, 1, 2, 3] },
    ];

    function renderTable({ el: table, rows, metrics }) {
        const ci = state.category;
        const ranks = metrics.map(mi => rankClasses(rows.map(r => r.rows[ci][mi]), METRICS[mi].higher));
        const head = el('thead', {}, [el('tr', {}, [
            el('th', { text: 'Method' }),
            ...metrics.map(mi => el('th', { class: 'num', html: `${METRICS[mi].short || METRICS[mi].label} ${METRICS[mi].higher ? '↑' : '↓'}` })),
        ])]);
        const body = el('tbody', {}, rows.map((r, ri) => el('tr', { class: r.ours ? 'row-ours' : r.oracle ? 'row-oracle' : '' }, [
            el('td', { text: r.name }),
            ...metrics.map((mi, k) => {
                const v = r.rows[ci][mi];
                return el('td', { class: `num ${ranks[k][ri]}`, text: v === null ? '–' : v.toFixed(METRICS[mi].digits) });
            }),
        ])));
        table.replaceChildren(head, body);
    }

    function render() {
        categoryPicker.replaceChildren(...CATEGORIES.map((c, i) =>
            chip(c.label, state.category === i, () => { state.category = i; render(); })));
        tables.forEach(renderTable);
    }

    render();
}

// ---------------------------------------------------------------------------
// Page setup
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = themeToggleBtn.querySelector('i');
    const anuLogo = document.querySelector('img[alt="ANU Logo"]');

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const dark = theme === 'dark';
        themeIcon.classList.toggle('fa-moon', !dark);
        themeIcon.classList.toggle('fa-sun', dark);
        anuLogo.src = dark ? './static/images/ANU_dark.png' : './static/images/ANU_light.png';
    }

    let savedTheme = null;
    try { savedTheme = localStorage.getItem('theme'); } catch (e) {}
    if (savedTheme) applyTheme(savedTheme);

    initStage();
    initFailStrip();
    initCompare();
    initQuantitative();

    themeToggleBtn.addEventListener('click', () => {
        const next = isDark() ? 'light' : 'dark';
        applyTheme(next);
        try { localStorage.setItem('theme', next); } catch (e) {}
    });

    const copyBtn = document.getElementById('copy-bibtex');
    copyBtn.addEventListener('click', () => {
        const text = document.getElementById('bibtex').textContent;
        navigator.clipboard.writeText(text).then(() => {
            copyBtn.querySelector('span:last-child').textContent = 'Copied';
            setTimeout(() => { copyBtn.querySelector('span:last-child').textContent = 'Copy'; }, 1500);
        });
    });
});
