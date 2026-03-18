/* ============================================================
   MIDNIGHT ARCTIC SOLUTIONS LLC — MAIN SCRIPT
   Cart, Modals, Nav, Chat, Forms, Animations
   ============================================================ */

'use strict';

/* ── PRODUCT DATA ───────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: 'Standard Manual Wheelchair',
    category: 'Wheelchairs',
    description: 'Durable steel-frame wheelchair with removable footrests and padded armrests. Ideal for daily indoor and outdoor use.',
    features: ['Foldable for easy transport', 'Removable swing-away footrests', 'Padded seat and back', '300 lb weight capacity', 'Desk-length armrests'],
    sku: 'WC-001',
    icon: 'fa-solid fa-wheelchair',
    color: '#E8F3FB',
    featured: true,
  },
  {
    id: 2,
    name: 'Lightweight Transport Chair',
    category: 'Wheelchairs',
    description: 'Ultra-lightweight aluminum transport wheelchair designed for assisted travel. Compact and easy to maneuver.',
    features: ['Only 19 lbs total weight', 'Aluminum frame', 'Rear flip-back armrests', 'Carry bag included', '250 lb weight capacity'],
    sku: 'WC-002',
    icon: 'fa-solid fa-wheelchair-move',
    color: '#E8F3FB',
    featured: false,
  },
  {
    id: 3,
    name: 'Power Electric Wheelchair',
    category: 'Wheelchairs',
    description: 'Heavy-duty power wheelchair with joystick control and long-range rechargeable battery. Physician order required for insurance coverage.',
    features: ['Joystick navigation', 'Up to 18 miles per charge', 'Adjustable seating system', 'Elevating footrests available', 'Multiple speed settings'],
    sku: 'WC-003',
    icon: 'fa-solid fa-bolt',
    color: '#E8F3FB',
    featured: true,
  },
  {
    id: 4,
    name: 'Standard Folding Walker',
    category: 'Walkers',
    description: 'Classic foldable aluminum walker for stable everyday walking support. Height-adjustable to fit most users.',
    features: ['Tool-free height adjustment', 'Folds flat for storage', 'Non-slip rubber tips', 'Lightweight aluminum frame', '300 lb weight capacity'],
    sku: 'WLK-001',
    icon: 'fa-solid fa-person-walking-with-cane',
    color: '#E8F5E9',
    featured: true,
  },
  {
    id: 5,
    name: 'Rollator Walker with Seat',
    category: 'Walkers',
    description: '4-wheel rollator with padded seat, backrest, and hand brakes. Perfect for users who need occasional rest while walking.',
    features: ['4-wheel design with hand brakes', 'Padded fold-down seat', 'Storage pouch included', 'Height-adjustable handles', 'Folds compactly'],
    sku: 'WLK-002',
    icon: 'fa-solid fa-person-walking',
    color: '#E8F5E9',
    featured: true,
  },
  {
    id: 6,
    name: 'Hemi Folding Walker',
    category: 'Walkers',
    description: 'Low-profile hemi walker designed for users who can only use one hand or arm. Ideal post-stroke or after upper-limb injury.',
    features: ['One-hand operation design', 'Adjustable height', 'Four non-slip rubber tips', 'Lightweight and portable', '250 lb capacity'],
    sku: 'WLK-003',
    icon: 'fa-solid fa-hand',
    color: '#E8F5E9',
    featured: false,
  },
  {
    id: 7,
    name: 'Full-Electric Hospital Bed',
    category: 'Beds & Accessories',
    description: 'Full-electric hospital bed with head, foot, and height adjustments via remote control. Medicare-eligible with physician order.',
    features: ['Full electric — head, foot, height', 'Wireless remote control', 'Side rail compatibility', '450 lb weight capacity', 'Pressure-reducing mattress available'],
    sku: 'BED-001',
    icon: 'fa-solid fa-bed',
    color: '#FFF3E0',
    featured: true,
  },
  {
    id: 8,
    name: 'Semi-Electric Hospital Bed',
    category: 'Beds & Accessories',
    description: 'Semi-electric bed with motorized head/foot control and manual height adjustment. Cost-effective option for home care settings.',
    features: ['Electric head and foot control', 'Manual height adjustment', 'Steel welded frame', 'Compatible with most mattresses', '350 lb weight capacity'],
    sku: 'BED-002',
    icon: 'fa-solid fa-bed-pulse',
    color: '#FFF3E0',
    featured: false,
  },
  {
    id: 9,
    name: 'Half Bed Rails (Pair)',
    category: 'Beds & Accessories',
    description: 'Universal half-length bed assist rails for standard and hospital beds. Provides repositioning support and fall prevention.',
    features: ['Universal fit for most beds', 'Easy tool-free installation', 'Sturdy steel construction', 'Foam-padded grips', 'Height and length adjustable'],
    sku: 'BED-003',
    icon: 'fa-solid fa-grip-lines',
    color: '#FFF3E0',
    featured: false,
  },
  {
    id: 10,
    name: 'Bedside Commode',
    category: 'Bathroom Safety',
    description: 'Adjustable-height bedside commode with removable bucket and padded armrests. Suitable for post-surgical or limited mobility patients.',
    features: ['Adjustable height 17"–21"', 'Removable bucket with lid', 'Padded seat and armrests', '300 lb weight capacity', 'Folds flat for storage'],
    sku: 'BTH-001',
    icon: 'fa-solid fa-toilet',
    color: '#F3E5F5',
    featured: false,
  },
  {
    id: 11,
    name: 'Shower Chair with Back',
    category: 'Bathroom Safety',
    description: 'Sturdy aluminum shower chair with full back support and non-slip rubber tips. Ideal for seated bathing and reduced fall risk.',
    features: ['Full back support', 'Non-slip rubber feet', 'Drainage holes in seat', 'Tool-free assembly', '300 lb capacity'],
    sku: 'BTH-002',
    icon: 'fa-solid fa-shower',
    color: '#F3E5F5',
    featured: false,
  },
  {
    id: 12,
    name: 'Grab Bar — 24 Inch',
    category: 'Bathroom Safety',
    description: 'Stainless steel ADA-compliant grab bar for bathroom wall mounting. Provides reliable support near toilets, showers, and tubs.',
    features: ['ADA compliant design', 'Stainless steel construction', '1.5" diameter for secure grip', 'Concealed flange mounting', '250 lb capacity'],
    sku: 'BTH-003',
    icon: 'fa-solid fa-grip-horizontal',
    color: '#F3E5F5',
    featured: false,
  },
  {
    id: 13,
    name: 'Electric Patient Lift',
    category: 'Lifts & Transfers',
    description: 'Electric full-body patient lift for safe transfer between bed, wheelchair, and seated positions. Reduces caregiver strain significantly.',
    features: ['Electric motor with hand control', 'Spreader bar with sling hooks', '400 lb weight capacity', 'Six-point cradle design', 'Emergency stop function'],
    sku: 'LFT-001',
    icon: 'fa-solid fa-arrow-up-from-bracket',
    color: '#E0F2F1',
    featured: true,
  },
  {
    id: 14,
    name: 'Transfer Belt / Gait Belt',
    category: 'Lifts & Transfers',
    description: 'Heavy-duty canvas transfer belt for safe patient transfers and ambulation assist. Standard equipment for caregivers and therapists.',
    features: ['60" adjustable length', 'Quick-release metal buckle', 'Multiple grip handles', 'Machine washable', 'Available in multiple sizes'],
    sku: 'LFT-002',
    icon: 'fa-solid fa-grip-lines-vertical',
    color: '#E0F2F1',
    featured: false,
  },
  {
    id: 15,
    name: 'CPAP Machine',
    category: 'Respiratory',
    description: 'Auto-adjusting CPAP therapy device for obstructive sleep apnea treatment. Prescription required. Humidifier chamber included.',
    features: ['Auto-adjusting pressure 4–20 cmH₂O', 'Integrated heated humidifier', 'Data recording for compliance', 'Quiet operation < 26 dBA', 'Travel-friendly design'],
    sku: 'RESP-001',
    icon: 'fa-solid fa-lungs',
    color: '#E8EAF6',
    featured: true,
  },
  {
    id: 16,
    name: 'Portable Oxygen Concentrator',
    category: 'Respiratory',
    description: 'Lightweight portable oxygen concentrator for supplemental oxygen therapy. FAA-approved for air travel. Physician order required.',
    features: ['1–5 LPM flow settings', 'Battery life up to 8 hours', 'FAA-approved for travel', 'Weighs under 5 lbs', 'AC/DC power options'],
    sku: 'RESP-002',
    icon: 'fa-solid fa-wind',
    color: '#E8EAF6',
    featured: false,
  },
  {
    id: 17,
    name: 'Nebulizer Machine',
    category: 'Respiratory',
    description: 'Compressor nebulizer for aerosol medication delivery. For use with asthma, COPD, and other respiratory conditions.',
    features: ['Quiet piston compressor', 'Complete kit with mouthpiece and mask', 'Adult and pediatric masks included', 'Easy-clean design', 'Medication cup 6 ml capacity'],
    sku: 'RESP-003',
    icon: 'fa-solid fa-spray-can',
    color: '#E8EAF6',
    featured: false,
  },
  {
    id: 18,
    name: 'Digital Blood Pressure Monitor',
    category: 'Monitoring',
    description: 'Validated upper-arm digital blood pressure and pulse monitor with memory storage. Clinically accurate and easy to use at home.',
    features: ['Clinically validated accuracy', '60-reading memory storage', 'Irregular heartbeat detection', 'Large LCD display', 'Standard and large cuffs included'],
    sku: 'MON-001',
    icon: 'fa-solid fa-heart-pulse',
    color: '#FCE4EC',
    featured: false,
  },
  {
    id: 19,
    name: 'Pulse Oximeter',
    category: 'Monitoring',
    description: 'Fingertip pulse oximeter for SpO₂ and pulse rate monitoring. Compact, portable, and ideal for home or clinical spot-checking.',
    features: ['SpO₂ and PR measurement', 'Rotating display (4 directions)', 'Auto power-off', 'Low battery indicator', 'Includes carrying case and lanyard'],
    sku: 'MON-002',
    icon: 'fa-solid fa-droplet',
    color: '#FCE4EC',
    featured: false,
  },
  {
    id: 20,
    name: 'Underarm Crutches (Pair)',
    category: 'Mobility Aids',
    description: 'Adjustable aluminum underarm crutches for post-surgery or injury rehabilitation. Comfortable foam pads on axillary rests and hand grips.',
    features: ['Adjustable height for adults', 'Foam-padded axillary rest', 'Non-slip rubber tips', 'Lightweight aluminum', '300 lb capacity'],
    sku: 'MOB-001',
    icon: 'fa-solid fa-person-cane',
    color: '#E8F5E9',
    featured: false,
  },
  {
    id: 21,
    name: 'Knee Scooter / Knee Walker',
    category: 'Mobility Aids',
    description: 'Steerable knee scooter for lower leg or foot injuries. A comfortable alternative to crutches for non-weight-bearing recovery.',
    features: ['Padded knee platform', 'Steerable front wheel', 'Adjustable height', 'Hand-operated brake', 'Basket accessory available'],
    sku: 'MOB-002',
    icon: 'fa-solid fa-bicycle',
    color: '#E8F5E9',
    featured: true,
  },
  {
    id: 22,
    name: 'Forearm / Lofstrand Crutches',
    category: 'Mobility Aids',
    description: 'Ergonomic forearm crutches for long-term mobility support. Preferred by users with permanent or chronic conditions.',
    features: ['Forearm cuff design', 'Height-adjustable', 'Contoured handgrip', 'Wide base rubber tips', 'Available in standard and tall sizes'],
    sku: 'MOB-003',
    icon: 'fa-solid fa-hand-holding-medical',
    color: '#E8F5E9',
    featured: false,
  },
  {
    id: 23,
    name: 'Nitrile Exam Gloves — Box of 100',
    category: 'Supplies',
    description: 'Powder-free nitrile examination gloves for clinical or home care use. Latex-free, puncture-resistant, and available in multiple sizes.',
    features: ['Powder-free', 'Latex-free nitrile', 'Textured fingertips for grip', 'FDA 510(k) cleared', 'Sizes: S, M, L, XL'],
    sku: 'SUP-001',
    icon: 'fa-solid fa-hand',
    color: '#FAFAFA',
    featured: false,
  },
  {
    id: 24,
    name: 'Disposable Face Masks — Box of 50',
    category: 'Supplies',
    description: 'ASTM Level 1 three-ply disposable face masks for medical and general use. Fluid resistant with adjustable nose wire.',
    features: ['ASTM Level 1 rated', '3-ply construction', 'Fluid-resistant outer layer', 'Adjustable nose wire', 'Elastic earloops'],
    sku: 'SUP-002',
    icon: 'fa-solid fa-head-side-mask',
    color: '#FAFAFA',
    featured: false,
  },
];

/* ── STATE ──────────────────────────────────────────────────── */
let cart = [];
let currentFilter = 'all';
let searchQuery = '';

/* ── UTILITY ────────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

function showToast(msg, type = '') {
  const toast = $('toast');
  toast.textContent = msg;
  toast.className = 'toast show' + (type ? ' toast-' + type : '');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.className = 'toast'; }, 3000);
}

function formatTime() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

/* ── COUNTER ANIMATION ──────────────────────────────────────── */
function animateCounters() {
  $$('[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1400;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current);
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

// Run counters when stats bar enters viewport
const statsBar = document.querySelector('.stats-bar');
if (statsBar) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounters();
        io.disconnect();
      }
    });
  }, { threshold: 0.3 });
  io.observe(statsBar);
}

/* ── NAVIGATION ─────────────────────────────────────────────── */
const header    = $('siteHeader');
const hamburger = $('hamburger');
const navLinks  = $('navLinks');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
  updateActiveNav();
}, { passive: true });

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('mobile-open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

function updateActiveNav() {
  const sections = ['home', 'products', 'about', 'certifications', 'faq', 'contact'];
  const offset = 80;
  let active = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - offset) active = id;
  });
  $$('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === active);
  });
}

/* ── SMOOTH SCROLL for anchor links ────────────────────────── */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute('href'));
  if (target) {
    e.preventDefault();
    const top = target.offsetTop - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  }
});

/* ── PRODUCT RENDERING ──────────────────────────────────────── */
function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const matchFilter = currentFilter === 'all' || p.category === currentFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });
}

function isInCart(id) {
  return cart.some(item => item.id === id);
}

function buildProductCard(p, container) {
  const inCart = isInCart(p.id);
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = p.id;
  card.innerHTML = `
    <div class="product-img" style="background:${p.color};">
      <i class="${p.icon}" style="color:var(--color-blue);"></i>
      <span class="product-category-tag">${p.category}</span>
    </div>
    <div class="product-body">
      <div class="product-name">${p.name}</div>
      <div class="product-desc">${p.description}</div>
      <div class="product-sku">SKU: ${p.sku}</div>
      <div class="product-actions">
        <button class="btn-add-quote${inCart ? ' added' : ''}" data-id="${p.id}">
          <i class="fa-solid ${inCart ? 'fa-check' : 'fa-cart-plus'}"></i>
          ${inCart ? 'Added' : 'Add to Quote'}
        </button>
        <button class="btn-details" data-id="${p.id}" title="View Details">
          <i class="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </div>`;
  container.appendChild(card);
}

function renderProducts() {
  const grid   = $('productGrid');
  const noRes  = $('noResults');
  const filtered = getFilteredProducts();
  grid.innerHTML = '';
  if (filtered.length === 0) {
    noRes.style.display = 'flex';
    noRes.style.flexDirection = 'column';
    noRes.style.alignItems = 'center';
  } else {
    noRes.style.display = 'none';
    filtered.forEach(p => buildProductCard(p, grid));
  }
}

function renderFeatured() {
  const grid = $('featuredProductGrid');
  if (!grid) return;
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 6);
  featured.forEach(p => buildProductCard(p, grid));
}

renderFeatured();
renderProducts();

/* ── FILTER TABS ────────────────────────────────────────────── */
$$('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    $$('.filter-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    currentFilter = tab.dataset.filter;
    renderProducts();
  });
});

/* ── SEARCH ─────────────────────────────────────────────────── */
const searchInput = $('productSearch');
if (searchInput) {
  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = searchInput.value.trim();
      renderProducts();
    }, 220);
  });
}

/* ── PRODUCT DETAIL MODAL ───────────────────────────────────── */
function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  $('productModalTitle').textContent = p.name;
  $('productModalBody').innerHTML = `
    <div class="product-detail">
      <div class="product-detail-img" style="background:${p.color};">
        <i class="${p.icon}" style="color:var(--color-blue);"></i>
      </div>
      <div class="product-detail-meta">
        <span class="product-detail-tag">${p.category}</span>
        <span class="product-detail-tag">SKU: ${p.sku}</span>
      </div>
      <p>${p.description}</p>
      <div class="product-detail-features">
        <h4>Key Features</h4>
        <ul>${p.features.map(f => `<li><i class="fa-solid fa-check"></i>${f}</li>`).join('')}</ul>
      </div>
      <div style="padding-top:8px;">
        <button class="btn btn-primary btn-block btn-add-quote${isInCart(id) ? ' added' : ''}" data-id="${id}">
          <i class="fa-solid ${isInCart(id) ? 'fa-check' : 'fa-cart-plus'}"></i>
          ${isInCart(id) ? 'Added to Quote Cart' : 'Add to Quote Cart'}
        </button>
      </div>
    </div>`;
  openModal('productModal', 'productModalOverlay');
}

/* ── CART ───────────────────────────────────────────────────── */
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p || isInCart(id)) return;
  cart.push(p);
  updateCartUI();
  showToast(`"${p.name}" added to your quote cart.`, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
  showToast('Item removed from quote cart.');
}

function clearCart() {
  cart = [];
  updateCartUI();
  showToast('Quote cart cleared.');
}

function updateCartUI() {
  // Count badge
  const count = cart.length;
  $('cartCount').textContent = count;

  // Refresh all add-to-quote buttons across the page
  $$('.btn-add-quote').forEach(btn => {
    const id = parseInt(btn.dataset.id, 10);
    const added = isInCart(id);
    btn.innerHTML = `<i class="fa-solid ${added ? 'fa-check' : 'fa-cart-plus'}"></i>${added ? 'Added' : 'Add to Quote'}`;
    btn.classList.toggle('added', added);
  });

  // Cart items list
  const itemsEl  = $('cartItems');
  const emptyEl  = $('cartEmpty');
  const footerEl = $('cartFooter');

  if (count === 0) {
    itemsEl.innerHTML = '';
    itemsEl.appendChild(emptyEl);
    emptyEl.style.display = 'flex';
    footerEl.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  footerEl.style.display = 'flex';
  $('cartTotalItems').textContent = count;

  const existing = itemsEl.querySelectorAll('.cart-item');
  existing.forEach(e => e.remove());

  cart.forEach(p => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.dataset.id = p.id;
    div.innerHTML = `
      <div class="cart-item-icon" style="background:${p.color};"><i class="${p.icon}"></i></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-cat">${p.category} &mdash; ${p.sku}</div>
      </div>
      <button class="cart-item-remove" data-id="${p.id}" title="Remove"><i class="fa-solid fa-xmark"></i></button>`;
    itemsEl.appendChild(div);
  });
}

/* ── CART PANEL OPEN/CLOSE ──────────────────────────────────── */
function openCartPanel() {
  $('cartPanel').classList.add('open');
  $('cartOverlay').classList.add('active');
  $('cartPanel').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeCartPanel() {
  $('cartPanel').classList.remove('open');
  $('cartOverlay').classList.remove('active');
  $('cartPanel').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

$('cartBtn').addEventListener('click', openCartPanel);
$('cartClose').addEventListener('click', closeCartPanel);
$('cartOverlay').addEventListener('click', closeCartPanel);
$('clearCartBtn').addEventListener('click', clearCart);

/* ── GENERIC MODAL HELPERS ──────────────────────────────────── */
function openModal(modalId, overlayId) {
  $(modalId).classList.add('open');
  $(overlayId).classList.add('active');
  $(overlayId).setAttribute('aria-hidden', 'false');
  if (modalId !== 'productModal') document.body.style.overflow = 'hidden';
}
function closeModal(modalId, overlayId) {
  $(modalId).classList.remove('open');
  $(overlayId).classList.remove('active');
  $(overlayId).setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

$('productModalClose').addEventListener('click', () => closeModal('productModal', 'productModalOverlay'));
$('productModalOverlay').addEventListener('click', () => closeModal('productModal', 'productModalOverlay'));
$('quoteModalClose').addEventListener('click', () => closeModal('quoteModal', 'quoteModalOverlay'));
$('quoteModalOverlay').addEventListener('click', () => closeModal('quoteModal', 'quoteModalOverlay'));
$('successModalClose').addEventListener('click', () => { closeModal('successModal', 'successModalOverlay'); });
$('successModalOverlay').addEventListener('click', () => closeModal('successModal', 'successModalOverlay'));

/* ── PROCEED TO QUOTE ───────────────────────────────────────── */
$('proceedQuoteBtn').addEventListener('click', () => {
  closeCartPanel();
  // Build items summary
  const summaryEl = $('quoteItemsSummary');
  summaryEl.innerHTML = `<h4>Items in Your Request (${cart.length})</h4>
    <div class="quote-item-list">
      ${cart.map(p => `<div class="quote-item-row"><i class="fa-solid fa-chevron-right"></i><span>${p.name} <em>(${p.sku})</em></span></div>`).join('')}
    </div>`;
  openModal('quoteModal', 'quoteModalOverlay');
});

/* ── DELEGATED CLICK HANDLER ────────────────────────────────── */
document.addEventListener('click', e => {
  // Add to quote buttons
  const addBtn = e.target.closest('.btn-add-quote');
  if (addBtn) {
    const id = parseInt(addBtn.dataset.id, 10);
    if (!isInCart(id)) {
      addToCart(id);
    } else {
      openCartPanel();
    }
    return;
  }

  // Details buttons
  const detailBtn = e.target.closest('.btn-details');
  if (detailBtn) {
    openProductModal(parseInt(detailBtn.dataset.id, 10));
    return;
  }

  // Remove from cart
  const removeBtn = e.target.closest('.cart-item-remove');
  if (removeBtn) {
    removeFromCart(parseInt(removeBtn.dataset.id, 10));
    return;
  }

  // Filter tabs in product section linked from home "featured products"
  const filterLink = e.target.closest('[data-filter-link]');
  if (filterLink) {
    const filter = filterLink.dataset.filterLink;
    $$('.filter-tab').forEach(t => {
      const match = t.dataset.filter === filter;
      t.classList.toggle('active', match);
      t.setAttribute('aria-selected', match);
    });
    currentFilter = filter;
    renderProducts();
    return;
  }
});

/* ── QUOTE FORM ─────────────────────────────────────────────── */
function validateField(inputId, errorId, rules) {
  const el = $(inputId);
  const errEl = $(errorId);
  const val = el.value.trim();
  let error = '';
  if (rules.required && !val) error = 'This field is required.';
  else if (rules.email && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) error = 'Please enter a valid email address.';
  else if (rules.phone && val && !/^[\d\s\-()+.]{7,}$/.test(val)) error = 'Please enter a valid phone number.';
  el.classList.toggle('error', !!error);
  errEl.textContent = error;
  return !error;
}

$('quoteForm').addEventListener('submit', e => {
  e.preventDefault();
  const v1 = validateField('qFirstName', 'qFirstNameErr', { required: true });
  const v2 = validateField('qLastName',  'qLastNameErr',  { required: true });
  const v3 = validateField('qEmail',     'qEmailErr',     { required: true, email: true });
  const v4 = validateField('qPhone',     'qPhoneErr',     { required: true, phone: true });
  if (!v1 || !v2 || !v3 || !v4) return;

  const btn = $('submitQuoteBtn');
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting…';

  // Simulate async submission (replace with actual fetch/API call)
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Quote Request';
    closeModal('quoteModal', 'quoteModalOverlay');
    clearCart();
    $('quoteForm').reset();
    openModal('successModal', 'successModalOverlay');
  }, 1800);
});

/* ── CONTACT FORM ───────────────────────────────────────────── */
$('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const v1 = validateField('cName',    'cNameErr',    { required: true });
  const v2 = validateField('cEmail',   'cEmailErr',   { required: true, email: true });
  const v3 = validateField('cSubject', 'cSubjectErr', { required: true });
  const v4 = validateField('cMessage', 'cMessageErr', { required: true });
  if (!v1 || !v2 || !v3 || !v4) return;

  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    $('contactForm').reset();
    showToast('Message sent! We\'ll be in touch shortly.', 'success');
  }, 1600);
});

/* ── FAQ ACCORDION ──────────────────────────────────────────── */
$$('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // Close all
    $$('.faq-item').forEach(fi => {
      fi.classList.remove('open');
      fi.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    // Toggle clicked
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ── CHAT WIDGET ────────────────────────────────────────────── */
const chatToggle   = $('chatToggle');
const chatWindow   = $('chatWindow');
const chatUnread   = $('chatUnread');
const chatInput    = $('chatInput');
const chatSend     = $('chatSend');
const chatMessages = $('chatMessages');

const BOT_RESPONSES = {
  'browse products':      'Great! You can explore our full catalog by clicking the <strong>Products</strong> tab in the navigation, or <a href="#products">click here</a>. Use the category filters to narrow down by type.',
  'request a quote':      'Requesting a quote is easy! Add the items you need to your Quote Cart using the <strong>"Add to Quote"</strong> button on any product, then click the cart icon to submit your request. No payment needed.',
  'do you accept medicare': 'Yes! Midnight Arctic Solutions LLC is enrolled as an authorized DMEPOS supplier. We work with Medicare and Medicaid. Contact us with your information and we\'ll verify coverage eligibility for the specific equipment.',
  'contact team':         'You can reach us by:<br>📞 <strong>(601) 521-9329</strong><br>📧 <a href="mailto:info@midnightarcticsolutions.com">info@midnightarcticsolutions.com</a><br>📍 5500 Mianeh St, Unit D, Mission, TX 78574<br><br>Or use the <a href="#contact">Contact form</a> on this page.',
  default:                'Thanks for your message! A team member will respond to detailed inquiries within 1 business day. For immediate help, please call <strong>(601) 521-9329</strong> or use our <a href="#contact">Contact form</a>.',
};

function addChatMessage(text, isUser = false) {
  const msg = document.createElement('div');
  msg.className = `chat-msg${isUser ? ' chat-msg--user' : ''}`;
  msg.innerHTML = `
    <div class="chat-bubble"><p>${text}</p></div>
    <span class="chat-time">${formatTime()}</span>`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
  const typing = document.createElement('div');
  typing.className = 'chat-msg chat-typing';
  typing.id = 'typingIndicator';
  typing.innerHTML = `<div class="chat-bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`;
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTyping() {
  const t = $('typingIndicator');
  if (t) t.remove();
}

function getBotResponse(msg) {
  const lower = msg.toLowerCase();
  for (const [key, val] of Object.entries(BOT_RESPONSES)) {
    if (key !== 'default' && lower.includes(key)) return val;
  }
  return BOT_RESPONSES.default;
}

function sendChatMessage(text) {
  if (!text.trim()) return;
  // Remove quick replies
  const qr = $('quickReplies');
  if (qr) qr.remove();
  addChatMessage(text, true);
  chatInput.value = '';
  showTyping();
  setTimeout(() => {
    removeTyping();
    addChatMessage(getBotResponse(text));
  }, 900 + Math.random() * 600);
}

chatToggle.addEventListener('click', () => {
  const isOpen = chatWindow.classList.toggle('open');
  chatToggle.classList.toggle('open', isOpen);
  chatToggle.setAttribute('aria-expanded', isOpen);
  if (isOpen) {
    chatUnread.classList.add('hidden');
    chatInput.focus();
  }
});

$('chatMinimize').addEventListener('click', () => {
  chatWindow.classList.remove('open');
  chatToggle.classList.remove('open');
  chatToggle.setAttribute('aria-expanded', 'false');
});

chatSend.addEventListener('click', () => sendChatMessage(chatInput.value));
chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendChatMessage(chatInput.value); });

document.addEventListener('click', e => {
  const qr = e.target.closest('.quick-reply');
  if (qr) {
    sendChatMessage(qr.dataset.msg);
  }
});

/* ── FOOTER YEAR ────────────────────────────────────────────── */
$('footerYear').textContent = new Date().getFullYear();

/* ── KEYBOARD: ESC CLOSES MODALS / CART ────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  closeCartPanel();
  closeModal('quoteModal',   'quoteModalOverlay');
  closeModal('productModal', 'productModalOverlay');
  closeModal('successModal', 'successModalOverlay');
  chatWindow.classList.remove('open');
  chatToggle.classList.remove('open');
});

/* ── LAZY SCROLL ANIMATION ──────────────────────────────────── */
const animEls = document.querySelectorAll('.why-card, .cert-card, .step');
if ('IntersectionObserver' in window) {
  animEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .45s ease, transform .45s ease';
  });
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        cardObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  animEls.forEach(el => cardObserver.observe(el));
}
