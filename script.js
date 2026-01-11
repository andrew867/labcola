const moleculeData = {
  limonene: {
    scale: 20,
    atoms: [
      { x: 0, y: -1.5, z: 0, e: 'C' },
      { x: -1, y: -0.5, z: 0.3, e: 'C' },
      { x: -1, y: 0.8, z: -0.2, e: 'C' },
      { x: 0, y: 1.5, z: 0, e: 'C' },
      { x: 1, y: 0.8, z: 0.2, e: 'C' },
      { x: 1, y: -0.5, z: -0.3, e: 'C' },
      { x: 2, y: 1.2, z: 0, e: 'C' },
      { x: 2.5, y: 0.2, z: 0.5, e: 'C' },
      { x: -2, y: 1.5, z: 0, e: 'C' },
      { x: 0, y: 2.8, z: 0, e: 'C' }
    ],
    bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [4, 6], [6, 7], [2, 8], [3, 9]]
  },
  cinnamaldehyde: {
    scale: 18,
    atoms: [
      { x: -2.5, y: 0, z: 0, e: 'C' },
      { x: -1.5, y: -0.8, z: 0.2, e: 'C' },
      { x: -0.3, y: -0.5, z: 0, e: 'C' },
      { x: 0.5, y: -1.3, z: -0.2, e: 'C' },
      { x: 1.7, y: -1, z: 0, e: 'C' },
      { x: 2.2, y: 0.2, z: 0.3, e: 'C' },
      { x: 1.4, y: 1, z: 0.5, e: 'C' },
      { x: 0.2, y: 0.7, z: 0.3, e: 'C' },
      { x: -3.3, y: 0.8, z: 0, e: 'O' }
    ],
    bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 2], [0, 8, 'double']]
  },
  linalool: {
    scale: 16,
    atoms: [
      { x: -2.8, y: 0, z: 0, e: 'C' },
      { x: -1.8, y: -0.8, z: 0.3, e: 'C' },
      { x: -0.5, y: -0.3, z: 0, e: 'C' },
      { x: 0.3, y: -1, z: -0.5, e: 'C' },
      { x: 1.6, y: -0.5, z: -0.3, e: 'C' },
      { x: 2.2, y: 0.5, z: 0.2, e: 'C' },
      { x: 1.5, y: 1.5, z: 0.5, e: 'C' },
      { x: 0, y: 1, z: 0.4, e: 'OH' },
      { x: -0.5, y: 2, z: 0, e: 'C' },
      { x: -3.8, y: 0.5, z: 0.3, e: 'C' }
    ],
    bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [2, 7], [2, 8], [0, 9]]
  },
  terpineol: {
    scale: 19,
    atoms: [
      { x: 0, y: -1.5, z: 0, e: 'C' },
      { x: -1.2, y: -0.7, z: 0.3, e: 'C' },
      { x: -1.2, y: 0.7, z: 0, e: 'C' },
      { x: 0, y: 1.5, z: -0.3, e: 'C' },
      { x: 1.2, y: 0.7, z: -0.5, e: 'C' },
      { x: 1.2, y: -0.7, z: -0.2, e: 'C' },
      { x: 0, y: 2.7, z: 0, e: 'OH' },
      { x: 2.3, y: 1.3, z: -0.8, e: 'C' },
      { x: -2.3, y: 1.3, z: 0.5, e: 'C' },
      { x: 2.3, y: -1.3, z: 0.2, e: 'C' }
    ],
    bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [3, 6], [4, 7], [2, 8], [5, 9]]
  },
  eugenol: {
    scale: 18,
    atoms: [
      { x: -2.5, y: 0, z: 0, e: 'C' },
      { x: -1.5, y: -0.8, z: 0.2, e: 'C' },
      { x: -0.2, y: -0.5, z: 0, e: 'C' },
      { x: 0.5, y: -1.3, z: -0.3, e: 'C' },
      { x: 1.7, y: -1, z: -0.1, e: 'C' },
      { x: 2.3, y: 0.2, z: 0.3, e: 'C' },
      { x: 1.5, y: 1, z: 0.5, e: 'C' },
      { x: 0.3, y: 0.7, z: 0.3, e: 'C' },
      { x: 3.5, y: 0.5, z: 0.5, e: 'OH' },
      { x: -0.3, y: 1.8, z: 0.5, e: 'O' }
    ],
    bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 2], [5, 8], [7, 9]]
  },
  vanillin: {
    scale: 20,
    atoms: [
      { x: 0, y: -1.2, z: 0, e: 'C' },
      { x: -1, y: -0.4, z: 0.2, e: 'C' },
      { x: -1, y: 0.9, z: 0, e: 'C' },
      { x: 0, y: 1.7, z: -0.3, e: 'C' },
      { x: 1, y: 1, z: -0.5, e: 'C' },
      { x: 1, y: -0.3, z: -0.3, e: 'C' },
      { x: 0, y: 3, z: -0.5, e: 'O' },
      { x: -2, y: 1.6, z: 0.3, e: 'OH' },
      { x: 2, y: -1, z: -0.5, e: 'O' },
      { x: 0, y: -2.5, z: 0.2, e: 'O' }
    ],
    bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [3, 6, 'double'], [2, 7], [5, 8], [0, 9]]
  },
  caffeine: {
    scale: 17,
    atoms: [
      { x: 0, y: -1.5, z: 0, e: 'C' },
      { x: -1.3, y: -0.8, z: 0.3, e: 'N' },
      { x: -1.3, y: 0.6, z: 0.2, e: 'C' },
      { x: 0, y: 1.4, z: -0.2, e: 'N' },
      { x: 1.3, y: 0.7, z: -0.5, e: 'C' },
      { x: 1.3, y: -0.7, z: -0.4, e: 'N' },
      { x: 0, y: 2.7, z: -0.3, e: 'C' },
      { x: 2.4, y: 1.4, z: -0.8, e: 'O' },
      { x: 0, y: -2.8, z: 0.1, e: 'O' },
      { x: -2.6, y: -1.5, z: 0.7, e: 'C' },
      { x: 2.6, y: -1.4, z: -0.7, e: 'C' }
    ],
    bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [3, 6], [4, 7, 'double'], [0, 8, 'double'], [1, 9], [5, 10]]
  },
  furfural: {
    scale: 24,
    atoms: [
      { x: 0, y: -1, z: 0, e: 'C' },
      { x: -1, y: -0.2, z: 0.3, e: 'C' },
      { x: -0.6, y: 1.1, z: 0.2, e: 'C' },
      { x: 0.7, y: 1.2, z: -0.3, e: 'C' },
      { x: 1.1, y: -0.1, z: -0.5, e: 'O' },
      { x: 0, y: -2.3, z: 0.1, e: 'O' }
    ],
    bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 5, 'double']]
  }
};

const atomColors = {
  C: '#64748b',
  H: '#cbd5e1',
  O: '#ef4444',
  N: '#3b82f6',
  OH: '#f97316'
};

const tabActiveClasses = ['bg-red-600', 'text-white', 'shadow-lg', 'shadow-red-600/50'];
const tabInactiveClasses = ['bg-slate-800', 'text-slate-300', 'hover:bg-slate-700'];

const setupBubbles = () => {
  const bubbleLayer = document.getElementById('bubble-layer');
  if (!bubbleLayer) return;

  const bubbleCount = 20;
  for (let i = 0; i < bubbleCount; i += 1) {
    const bubble = document.createElement('div');
    const delay = Math.random() * 5;
    const duration = 3 + Math.random() * 4;

    bubble.className = 'absolute bottom-0 w-2 h-2 bg-white rounded-full opacity-20';
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animation = `float ${duration}s linear infinite`;
    bubble.style.animationDelay = `${delay}s`;
    bubbleLayer.appendChild(bubble);
  }
};

const setupTabs = () => {
  const tabButtons = Array.from(document.querySelectorAll('[data-tab]'));
  const tabPanels = Array.from(document.querySelectorAll('[data-tab-panel]'));

  if (!tabButtons.length) return;

  const setActiveTab = (tabName) => {
    tabButtons.forEach((button) => {
      const isActive = button.dataset.tab === tabName;

      button.classList.remove(...tabActiveClasses, ...tabInactiveClasses);
      button.classList.add(...(isActive ? tabActiveClasses : tabInactiveClasses));
      button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    tabPanels.forEach((panel) => {
      const isActive = panel.dataset.tabPanel === tabName;
      panel.classList.toggle('hidden', !isActive);
    });
  };

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => setActiveTab(button.dataset.tab));
  });

  setActiveTab('overview');
};

const setupAccordions = () => {
  const accordions = Array.from(document.querySelectorAll('[data-accordion]'));

  accordions.forEach((accordion) => {
    const toggle = accordion.querySelector('[data-accordion-toggle]');
    const content = accordion.querySelector('[data-accordion-content]');
    const iconOpen = accordion.querySelector('[data-chevron="open"]');
    const iconClosed = accordion.querySelector('[data-chevron="closed"]');

    if (!toggle || !content) return;

    toggle.addEventListener('click', () => {
      const willOpen = content.classList.contains('hidden');
      content.classList.toggle('hidden');
      toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');

      if (iconOpen && iconClosed) {
        iconOpen.classList.toggle('hidden', !willOpen);
        iconClosed.classList.toggle('hidden', willOpen);
      }
    });
  });
};

const drawBond = (ctx, x1, y1, x2, y2, type) => {
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = type === 'double' ? 3 : 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  if (type === 'double') {
    ctx.beginPath();
    const dx = y2 - y1;
    const dy = x1 - x2;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const offsetX = (dx / len) * 3;
    const offsetY = (dy / len) * 3;
    ctx.moveTo(x1 + offsetX, y1 + offsetY);
    ctx.lineTo(x2 + offsetX, y2 + offsetY);
    ctx.stroke();
  }
};

const drawAtom = (ctx, x, y, element, size) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = atomColors[element] || '#64748b';
  ctx.fill();
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 2;
  ctx.stroke();
};

const setupMolecules = () => {
  const canvases = Array.from(document.querySelectorAll('canvas[data-structure]'));

  canvases.forEach((canvas) => {
    const structure = canvas.dataset.structure;
    const data = moleculeData[structure];

    if (!data) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { atoms, bonds, scale } = data;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let rotation = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = rotation * 0.02;
      const rotY = Math.sin(time) * 0.4;
      const rotX = Math.cos(time * 0.7) * 0.3;

      bonds.forEach((bond) => {
        const [i, j, type] = bond;
        const a1 = atoms[i];
        const a2 = atoms[j];
        const x1 = centerX + (a1.x * Math.cos(rotY) - a1.z * Math.sin(rotY)) * scale;
        const y1 = centerY + (a1.y * Math.cos(rotX) - (a1.x * Math.sin(rotY) + a1.z * Math.cos(rotY)) * Math.sin(rotX)) * scale;
        const x2 = centerX + (a2.x * Math.cos(rotY) - a2.z * Math.sin(rotY)) * scale;
        const y2 = centerY + (a2.y * Math.cos(rotX) - (a2.x * Math.sin(rotY) + a2.z * Math.cos(rotY)) * Math.sin(rotX)) * scale;
        drawBond(ctx, x1, y1, x2, y2, type || 'single');
      });

      atoms.forEach((atom) => {
        const x = centerX + (atom.x * Math.cos(rotY) - atom.z * Math.sin(rotY)) * scale;
        const y = centerY + (atom.y * Math.cos(rotX) - (atom.x * Math.sin(rotY) + atom.z * Math.cos(rotY)) * Math.sin(rotX)) * scale;
        drawAtom(ctx, x, y, atom.e, atom.e === 'OH' || atom.e === 'O' ? 11 : 9);
      });

      rotation += 1;
      requestAnimationFrame(animate);
    };

    animate();
  });
};

const setupIcons = () => {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
};

const initialize = () => {
  setupBubbles();
  setupTabs();
  setupAccordions();
  setupMolecules();
  setupIcons();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}
