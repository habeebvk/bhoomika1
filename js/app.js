/**
 * Bhoomika Landsale — Interactive Portfolio, Unit Switcher, Calculator & Inquiry Logic
 */

(function () {
  const data = window.BHOOMIKA_DATA;
  if (!data) return;

  const state = {
    category: 'all',
    mode: 'all',
    district: 'all',
    budget: 'all',
    query: '',
    assuredOnly: false,
    unit: 'cents', // 'cents' | 'acres' | 'sqft'
    shortlist: new Set(JSON.parse(localStorage.getItem('bhoomika_shortlist') || '[]')),
    formTab: 'buy'
  };

  /* -------------------- SVG Icon Library -------------------- */
  const ICONS = {
    layers: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    'map-pin': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    building: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>',
    home: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    grid: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    sun: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    leaf: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
    search: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    shield: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
    compass: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    briefcase: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    trending: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    globe: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    heart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    pinSmall: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  };

  /* -------------------- Formatting Helpers -------------------- */
  function formatPrice(lakhs) {
    if (lakhs >= 100) {
      return `₹${(lakhs / 100).toFixed(2)} Cr`;
    }
    return `₹${lakhs.toFixed(2).replace(/\.00$/, '')} Lakhs`;
  }

  function formatArea(cents, unit) {
    if (unit === 'acres') {
      return `${(cents / 100).toFixed(2)} Acres`;
    }
    if (unit === 'sqft') {
      const sqft = Math.round(cents * 435.6);
      return `${sqft.toLocaleString('en-IN')} Sq. Ft.`;
    }
    return `${cents % 1 === 0 ? cents : cents.toFixed(1)} Cents`;
  }

  function formatPerUnit(priceLakhs, cents, unit) {
    if (unit === 'acres') {
      const perAcre = priceLakhs / (cents / 100);
      return `${formatPrice(perAcre)} / acre`;
    }
    if (unit === 'sqft') {
      const rupees = (priceLakhs * 100000) / (cents * 435.6);
      return `₹${Math.round(rupees).toLocaleString('en-IN')} / sq.ft.`;
    }
    const perCent = priceLakhs / cents;
    return `${formatPrice(perCent)} / cent`;
  }

  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 3200);
  }

  function saveShortlist() {
    localStorage.setItem('bhoomika_shortlist', JSON.stringify([...state.shortlist]));
    const countEl = document.getElementById('shortlist-count');
    if (countEl) countEl.textContent = state.shortlist.size;
  }

  /* -------------------- Filtering -------------------- */
  function matchesBudget(priceLakhs, budget) {
    if (budget === 'all') return true;
    if (budget === 'under50') return priceLakhs < 50;
    if (budget === '50to150') return priceLakhs >= 50 && priceLakhs <= 150;
    if (budget === '150to300') return priceLakhs > 150 && priceLakhs <= 300;
    if (budget === 'above300') return priceLakhs > 300;
    return true;
  }

  function getFilteredListings() {
    const q = state.query.trim().toLowerCase();
    return data.listings.filter((item) => {
      if (state.category !== 'all' && item.category !== state.category) return false;
      if (state.mode !== 'all' && item.mode !== state.mode) return false;
      if (state.district !== 'all' && item.district !== state.district) return false;
      if (!matchesBudget(item.priceLakhs, state.budget)) return false;
      if (state.assuredOnly && !item.assured) return false;
      if (q) {
        const hay = `${item.id} ${item.title} ${item.district} ${item.locality} ${item.category} ${item.summary}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  /* -------------------- Render Categories -------------------- */
  function renderCategories() {
    const container = document.getElementById('category-grid');
    if (!container) return;

    const cats = data.categories.filter((c) => c.id !== 'all');
    container.innerHTML = cats.map((cat) => {
      const count = data.listings.filter((l) => l.category === cat.id).length;
      const active = state.category === cat.id ? 'is-active' : '';
      return `
        <button type="button" class="cat-card ${active}" data-cat="${cat.id}">
          <div class="cat-card__icon">${ICONS[cat.icon] || ICONS.layers}</div>
          <div>
            <div class="cat-card__title">${cat.label}</div>
            <div class="cat-card__count">${count} Curated ${count === 1 ? 'Listing' : 'Listings'}</div>
          </div>
        </button>
      `;
    }).join('');

    container.querySelectorAll('.cat-card').forEach((btn) => {
      btn.addEventListener('click', () => {
        const chosen = btn.dataset.cat;
        state.category = state.category === chosen ? 'all' : chosen;
        syncCategoryUI();
        renderListings();
        document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function renderFilterChips() {
    const chipsWrap = document.getElementById('filter-chips');
    if (!chipsWrap) return;

    chipsWrap.innerHTML = data.categories.map((cat) => {
      const active = state.category === cat.id ? 'is-active' : '';
      return `<button type="button" class="filter-chip ${active}" data-cat="${cat.id}">${cat.short}</button>`;
    }).join('');

    chipsWrap.querySelectorAll('.filter-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        state.category = chip.dataset.cat;
        syncCategoryUI();
        renderListings();
      });
    });
  }

  function syncCategoryUI() {
    document.querySelectorAll('.cat-card').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.cat === state.category);
    });
    document.querySelectorAll('.filter-chip').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.cat === state.category);
    });
    const selCat = document.getElementById('search-category');
    if (selCat) selCat.value = state.category;
  }

  /* -------------------- Render Listings -------------------- */
  function renderListings() {
    const grid = document.getElementById('listings-grid');
    const meta = document.getElementById('results-meta');
    if (!grid) return;

    const list = getFilteredListings();
    if (meta) {
      meta.textContent = `Showing ${list.length} of ${data.listings.length} properties · Units in ${state.unit.toUpperCase()}`;
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <h3 style="font-family: var(--font-display); font-size: 1.7rem; color: var(--forest-900); margin-bottom: 0.45rem;">No matching plots or estates found</h3>
          <p style="color: var(--ink-500); margin-bottom: 1.25rem;">Try widening your budget range, clearing the search code, or switching districts.</p>
          <button type="button" class="btn btn--primary" id="reset-filters-btn">Reset All Filters</button>
        </div>
      `;
      document.getElementById('reset-filters-btn')?.addEventListener('click', resetFilters);
      return;
    }

    grid.innerHTML = list.map((item) => {
      const isSaved = state.shortlist.has(item.id);
      const areaText = formatArea(item.cents, state.unit);
      const perUnitText = formatPerUnit(item.priceLakhs, item.cents, state.unit);
      const secondarySpec = item.builtSqft
        ? `${item.builtSqft.toLocaleString('en-IN')} sq.ft.`
        : item.roadWidth;
      const secondaryLabel = item.builtSqft ? 'Built Area' : 'Road Access';

      return `
        <article class="prop-card">
          <div class="prop-card__media">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="prop-card__badges">
              <div class="badge-group">
                ${item.assured ? `<span class="badge badge--assured">${ICONS.check} Bhoomika Assured</span>` : ''}
                <span class="badge badge--type">${item.mode} · ${item.category}</span>
              </div>
              <button type="button" class="card-heart ${isSaved ? 'is-saved' : ''}" data-heart="${item.id}" aria-label="Shortlist ${item.title}">
                ${ICONS.heart}
              </button>
            </div>
            <span class="badge--id">${item.id}</span>
          </div>

          <div class="prop-card__body">
            <div class="prop-card__loc">${ICONS.pinSmall} ${item.district} · ${item.locality}</div>
            <h3 class="prop-card__title">${item.title}</h3>
            <p class="prop-card__desc">${item.summary}</p>

            <div class="prop-card__specs">
              <div>
                <div class="spec-cell__val">${areaText}</div>
                <div class="spec-cell__lbl">Land Extent</div>
              </div>
              <div>
                <div class="spec-cell__val">${secondarySpec}</div>
                <div class="spec-cell__lbl">${secondaryLabel}</div>
              </div>
              <div>
                <div class="spec-cell__val">${item.frontage.split(' ')[0]} ${item.frontage.split(' ')[1] || ''}</div>
                <div class="spec-cell__lbl">Frontage</div>
              </div>
            </div>

            <div class="prop-card__footer">
              <div class="prop-card__price">
                <span class="price-main">${formatPrice(item.priceLakhs)}</span>
                <span class="price-sub">${perUnitText}</span>
              </div>
              <button type="button" class="btn btn--outline btn--sm" data-open-prop="${item.id}">Inspect Dossier</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    grid.querySelectorAll('[data-open-prop]').forEach((btn) => {
      btn.addEventListener('click', () => openPropertyModal(btn.dataset.openProp));
    });

    grid.querySelectorAll('[data-heart]').forEach((btn) => {
      btn.addEventListener('click', () => toggleShortlist(btn.dataset.heart));
    });
  }

  function resetFilters() {
    state.category = 'all';
    state.mode = 'all';
    state.district = 'all';
    state.budget = 'all';
    state.query = '';
    state.assuredOnly = false;

    const sQuery = document.getElementById('search-query');
    const sDist = document.getElementById('search-district');
    const sBud = document.getElementById('search-budget');
    if (sQuery) sQuery.value = '';
    if (sDist) sDist.value = 'all';
    if (sBud) sBud.value = 'all';

    document.querySelectorAll('.mode-pill').forEach((p) => {
      p.classList.toggle('is-active', p.dataset.mode === 'all');
    });
    document.getElementById('assured-filter-btn')?.classList.remove('is-active');
    syncCategoryUI();
    renderListings();
    showToast('All listing filters cleared.');
  }

  function toggleShortlist(id) {
    if (state.shortlist.has(id)) {
      state.shortlist.delete(id);
      showToast(`Removed ${id} from your shortlist.`);
    } else {
      state.shortlist.add(id);
      showToast(`Saved ${id} to your shortlist.`);
    }
    saveShortlist();
    renderListings();
    renderShortlistDrawer();
  }

  /* -------------------- Property Detail Modal -------------------- */
  function openPropertyModal(id) {
    const item = data.listings.find((l) => l.id === id);
    const modal = document.getElementById('property-modal');
    const content = document.getElementById('property-modal-content');
    if (!item || !modal || !content) return;

    const areaText = formatArea(item.cents, state.unit);
    const allUnits = `${item.cents} Cents · ${(item.cents / 100).toFixed(2)} Acres · ${Math.round(item.cents * 435.6).toLocaleString('en-IN')} Sq. Ft.`;
    const estRegFee = formatPrice(item.priceLakhs * 0.10);

    content.innerHTML = `
      <div class="modal-hero">
        <img src="${item.image}" alt="${item.title}">
        <span class="badge--id" style="bottom: 1rem; left: 1.5rem;">${item.id} · ${item.zoning}</span>
      </div>
      <div class="modal-body">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap; margin-bottom:1rem;">
          <div>
            <div class="prop-card__loc">${ICONS.pinSmall} ${item.district} — ${item.locality}</div>
            <h2 style="font-family:var(--font-display); font-size:2.1rem; line-height:1.1; color:var(--forest-900);">${item.title}</h2>
          </div>
          <div style="text-align:right;">
            <div style="font-family:var(--font-display); font-size:2rem; font-weight:700; color:var(--forest-900); line-height:1;">${formatPrice(item.priceLakhs)}</div>
            <div style="font-size:0.8rem; color:var(--ink-500); margin-top:0.25rem;">${formatPerUnit(item.priceLakhs, item.cents, state.unit)}</div>
          </div>
        </div>

        <p style="color:var(--ink-700); margin-bottom:1.25rem;">${item.summary}</p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(170px, 1fr)); gap:0.85rem; padding:1rem; background:var(--bg-ivory); border-radius:var(--radius-md); border:1px solid var(--border-subtle); margin-bottom:1.35rem;">
          <div><div class="spec-cell__lbl">Selected Area</div><div class="spec-cell__val">${areaText}</div></div>
          <div><div class="spec-cell__lbl">Full Conversion</div><div class="spec-cell__val" style="font-size:0.8rem;">${allUnits}</div></div>
          <div><div class="spec-cell__lbl">Frontage & Road</div><div class="spec-cell__val">${item.frontage} · ${item.roadWidth}</div></div>
          <div><div class="spec-cell__lbl">Est. Stamp & Reg. (~10%)</div><div class="spec-cell__val">${estRegFee}</div></div>
        </div>

        <h4 style="font-size:0.82rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--brass-600); margin-bottom:0.5rem;">Key Highlights</h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.35rem;">
          ${item.highlights.map((h) => `<span class="filter-chip" style="cursor:default;">${h}</span>`).join('')}
        </div>

        <h4 style="font-size:0.82rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--forest-900); margin-bottom:0.35rem;">Bhoomika Assured Legal Verification Dossier</h4>
        <div class="assured-checklist">
          ${item.assuredChecks.map((c) => `<div class="check-pill">${ICONS.check} <span>${c}</span></div>`).join('')}
        </div>

        <div style="display:flex; flex-wrap:wrap; gap:0.85rem; margin-top:1.5rem; padding-top:1.25rem; border-top:1px solid var(--border-subtle);">
          <button type="button" class="btn btn--primary" id="modal-book-visit">Schedule Site Visit / Drone Tour</button>
          <button type="button" class="btn btn--outline" id="modal-toggle-save">${state.shortlist.has(item.id) ? 'Remove from Shortlist' : 'Add to Shortlist'}</button>
        </div>
      </div>
    `;

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    document.getElementById('modal-book-visit')?.addEventListener('click', () => {
      closePropertyModal();
      prefillAdvisoryForm(`Requesting legal dossier and site visit / live drone walkthrough for ${item.id} (${item.title}, ${item.district}).`);
    });

    document.getElementById('modal-toggle-save')?.addEventListener('click', () => {
      toggleShortlist(item.id);
      const btn = document.getElementById('modal-toggle-save');
      if (btn) btn.textContent = state.shortlist.has(item.id) ? 'Remove from Shortlist' : 'Add to Shortlist';
    });
  }

  function closePropertyModal() {
    document.getElementById('property-modal')?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function prefillAdvisoryForm(note) {
    const tabBuy = document.querySelector('.form-tab[data-form="buy"]');
    tabBuy?.click();
    const notesEl = document.getElementById('lead-notes');
    if (notesEl) notesEl.value = note;
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Pre-filled inquiry form with property details.');
  }

  /* -------------------- Shortlist Drawer -------------------- */
  function renderShortlistDrawer() {
    const body = document.getElementById('drawer-items');
    if (!body) return;

    const saved = data.listings.filter((l) => state.shortlist.has(l.id));
    if (saved.length === 0) {
      body.innerHTML = `
        <div style="text-align:center; padding:2.5rem 1rem; color:var(--ink-500);">
          <p style="margin-bottom:1rem;">Your plot shortlist is empty. Tap the heart icon on any listing to compare land parcels side-by-side.</p>
          <button type="button" class="btn btn--outline btn--sm" id="drawer-browse-btn">Browse Verified Plots</button>
        </div>
      `;
      document.getElementById('drawer-browse-btn')?.addEventListener('click', () => {
        closeDrawer();
        document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }

    body.innerHTML = saved.map((item) => `
      <div class="drawer-item">
        <img src="${item.image}" alt="${item.title}">
        <div style="flex:1; min-width:0;">
          <div style="font-family:var(--font-mono); font-size:0.7rem; color:var(--brass-600); font-weight:700;">${item.id} · ${item.district}</div>
          <div style="font-weight:700; font-size:0.9rem; color:var(--forest-900); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.title}</div>
          <div style="font-size:0.8rem; color:var(--ink-500);">${formatArea(item.cents, state.unit)} · <strong>${formatPrice(item.priceLakhs)}</strong></div>
        </div>
        <button type="button" class="btn btn--outline btn--sm" data-drawer-open="${item.id}" style="padding:0.35rem 0.65rem;">View</button>
        <button type="button" aria-label="Remove ${item.id}" data-drawer-remove="${item.id}" style="color:var(--ink-500); font-size:1.1rem; padding:0.25rem;">&times;</button>
      </div>
    `).join('');

    body.querySelectorAll('[data-drawer-open]').forEach((b) => {
      b.addEventListener('click', () => {
        closeDrawer();
        openPropertyModal(b.dataset.drawerOpen);
      });
    });

    body.querySelectorAll('[data-drawer-remove]').forEach((b) => {
      b.addEventListener('click', () => toggleShortlist(b.dataset.drawerRemove));
    });
  }

  function openDrawer() {
    renderShortlistDrawer();
    document.getElementById('shortlist-drawer')?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    document.getElementById('shortlist-drawer')?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  /* -------------------- Render Assured, Districts, Services, Testimonials, FAQ -------------------- */
  function renderStaticSections() {
    const pillarsEl = document.getElementById('assured-pillars');
    if (pillarsEl) {
      pillarsEl.innerHTML = data.assuredPillars.map((p) => `
        <div class="pillar-card">
          <span class="pillar-card__num">STEP ${p.num}</span>
          <h3 class="pillar-card__title">${p.title}</h3>
          <p class="pillar-card__desc">${p.desc}</p>
        </div>
      `).join('');
    }

    const regionsEl = document.getElementById('regions-list');
    if (regionsEl) {
      regionsEl.innerHTML = data.districts.map((d) => {
        const count = data.listings.filter((l) => l.district === d.name).length;
        return `
          <button type="button" class="region-item" data-district="${d.name}">
            <div>
              <div class="region-item__name">${d.name}</div>
              <div class="region-item__sub">${d.corridor}</div>
            </div>
            <span class="region-item__count">${count} ${count === 1 ? 'Plot' : 'Plots'}</span>
          </button>
        `;
      }).join('');

      regionsEl.querySelectorAll('.region-item').forEach((btn) => {
        btn.addEventListener('click', () => {
          state.district = btn.dataset.district;
          const distSel = document.getElementById('search-district');
          if (distSel) distSel.value = state.district;
          renderListings();
          document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' });
          showToast(`Filtered listings to ${state.district}.`);
        });
      });
    }

    const servicesEl = document.getElementById('services-grid');
    if (servicesEl) {
      servicesEl.innerHTML = data.services.map((s) => `
        <article class="service-card reveal">
          <div class="service-card__icon">${ICONS[s.icon] || ICONS.shield}</div>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </article>
      `).join('');
    }

    const quotesEl = document.getElementById('testimonials-grid');
    if (quotesEl) {
      quotesEl.innerHTML = data.testimonials.map((t) => `
        <article class="quote-card reveal">
          <div>
            <div class="quote-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="quote-card__text" style="margin-top:0.85rem;">"${t.quote}"</p>
          </div>
          <div class="quote-card__author">
            <div class="quote-card__name">${t.author}</div>
            <div class="quote-card__meta">${t.meta}</div>
          </div>
        </article>
      `).join('');
    }

    const faqEl = document.getElementById('faq-list');
    if (faqEl) {
      faqEl.innerHTML = data.faqs.map((f, idx) => `
        <div class="faq-item ${idx === 0 ? 'is-open' : ''}">
          <button type="button" class="faq-trigger" aria-expanded="${idx === 0 ? 'true' : 'false'}">
            <span>${f.q}</span>
            <span class="faq-icon" style="font-size:1.35rem; line-height:1;">+</span>
          </button>
          <div class="faq-panel" style="${idx === 0 ? 'max-height:260px;' : ''}">
            <div class="faq-panel__inner">${f.a}</div>
          </div>
        </div>
      `).join('');

      faqEl.querySelectorAll('.faq-trigger').forEach((trigger) => {
        trigger.addEventListener('click', () => {
          const item = trigger.closest('.faq-item');
          const panel = item.querySelector('.faq-panel');
          const isOpen = item.classList.contains('is-open');

          faqEl.querySelectorAll('.faq-item').forEach((other) => {
            other.classList.remove('is-open');
            other.querySelector('.faq-panel').style.maxHeight = null;
            other.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
          });

          if (!isOpen) {
            item.classList.add('is-open');
            panel.style.maxHeight = `${panel.scrollHeight + 12}px`;
            trigger.setAttribute('aria-expanded', 'true');
          }
        });
      });
    }
  }

  /* -------------------- Interactive Land Area Converter -------------------- */
  function initConverter() {
    const inCents = document.getElementById('conv-cents');
    const inAcres = document.getElementById('conv-acres');
    const inSqft = document.getElementById('conv-sqft');
    const inRate = document.getElementById('conv-rate');
    const outValuation = document.getElementById('conv-valuation');
    const outReg = document.getElementById('conv-reg');

    if (!inCents || !inAcres || !inSqft || !inRate) return;

    function updateFromCents(centsVal) {
      const c = Math.max(0, Number(centsVal) || 0);
      inAcres.value = (c / 100).toFixed(3).replace(/\.?0+$/, '') || '0';
      inSqft.value = Math.round(c * 435.6);
      updateValuation(c);
    }

    function updateValuation(centsVal) {
      const rateLakhs = Math.max(0, Number(inRate.value) || 0);
      const totalLakhs = centsVal * rateLakhs;
      if (outValuation) outValuation.textContent = formatPrice(totalLakhs);
      if (outReg) outReg.textContent = `Est. Stamp & Reg: ${formatPrice(totalLakhs * 0.10)}`;
    }

    inCents.addEventListener('input', () => updateFromCents(inCents.value));

    inAcres.addEventListener('input', () => {
      const acres = Math.max(0, Number(inAcres.value) || 0);
      const cents = acres * 100;
      inCents.value = cents.toFixed(2).replace(/\.00$/, '');
      inSqft.value = Math.round(cents * 435.6);
      updateValuation(cents);
    });

    inSqft.addEventListener('input', () => {
      const sqft = Math.max(0, Number(inSqft.value) || 0);
      const cents = sqft / 435.6;
      inCents.value = cents.toFixed(2).replace(/\.00$/, '');
      inAcres.value = (cents / 100).toFixed(3).replace(/\.?0+$/, '') || '0';
      updateValuation(cents);
    });

    inRate.addEventListener('input', () => updateValuation(Number(inCents.value) || 0));

    updateFromCents(inCents.value);
  }

  /* -------------------- Forms & Search Controls -------------------- */
  function initControls() {
    // Sticky header state
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
      header?.classList.toggle('is-scrolled', window.scrollY > 24);
    });

    // Mobile drawer nav
    const mobileBtn = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    mobileBtn?.addEventListener('click', () => {
      navLinks?.classList.toggle('is-mobile-open');
    });
    navLinks?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => navLinks.classList.remove('is-mobile-open'));
    });

    // Populate district dropdown in search dock
    const distSelect = document.getElementById('search-district');
    if (distSelect) {
      data.districts.forEach((d) => {
        const opt = document.createElement('option');
        opt.value = d.name;
        opt.textContent = d.name;
        distSelect.appendChild(opt);
      });
    }

    // Mode pills (Buy / Invest / Lease)
    document.querySelectorAll('.mode-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        state.mode = pill.dataset.mode;
        document.querySelectorAll('.mode-pill').forEach((p) => p.classList.remove('is-active'));
        pill.classList.add('is-active');
        renderListings();
      });
    });

    // Global Area Unit Switcher
    document.querySelectorAll('.unit-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.unit = btn.dataset.unit;
        document.querySelectorAll('.unit-btn').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        renderListings();
        showToast(`Switched area measurements to ${state.unit.toUpperCase()}.`);
      });
    });

    // Search dock inputs
    document.getElementById('search-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      state.query = document.getElementById('search-query')?.value || '';
      state.district = document.getElementById('search-district')?.value || 'all';
      state.category = document.getElementById('search-category')?.value || 'all';
      state.budget = document.getElementById('search-budget')?.value || 'all';
      syncCategoryUI();
      renderListings();
      document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('search-query')?.addEventListener('input', (e) => {
      state.query = e.target.value;
      renderListings();
    });

    document.getElementById('search-district')?.addEventListener('change', (e) => {
      state.district = e.target.value;
      renderListings();
    });

    document.getElementById('search-category')?.addEventListener('change', (e) => {
      state.category = e.target.value;
      syncCategoryUI();
      renderListings();
    });

    document.getElementById('search-budget')?.addEventListener('change', (e) => {
      state.budget = e.target.value;
      renderListings();
    });

    // Assured toggle
    const assuredBtn = document.getElementById('assured-filter-btn');
    assuredBtn?.addEventListener('click', () => {
      state.assuredOnly = !state.assuredOnly;
      assuredBtn.classList.toggle('is-active', state.assuredOnly);
      renderListings();
    });

    // Modal & Drawer close triggers
    document.getElementById('modal-close')?.addEventListener('click', closePropertyModal);
    document.getElementById('property-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'property-modal') closePropertyModal();
    });

    document.getElementById('open-shortlist-btn')?.addEventListener('click', openDrawer);
    document.getElementById('drawer-close')?.addEventListener('click', closeDrawer);
    document.getElementById('shortlist-drawer')?.addEventListener('click', (e) => {
      if (e.target.id === 'shortlist-drawer') closeDrawer();
    });
    document.getElementById('drawer-request-visit')?.addEventListener('click', () => {
      const ids = [...state.shortlist].join(', ');
      closeDrawer();
      prefillAdvisoryForm(ids
        ? `Requesting site inspection & legal packs for shortlisted listings: ${ids}.`
        : 'Requesting curated land advisory shortlist.');
    });

    // Escape key closes modal/drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePropertyModal();
        closeDrawer();
      }
    });

    // Advisory Form Tabs (Buy / Sell Land / Advertise)
    const sellFields = document.querySelectorAll('.sell-only');
    const adFields = document.querySelectorAll('.ad-only');
    document.querySelectorAll('.form-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        state.formTab = tab.dataset.form;
        document.querySelectorAll('.form-tab').forEach((t) => t.classList.remove('is-active'));
        tab.classList.add('is-active');

        const isSell = state.formTab === 'sell';
        const isAd = state.formTab === 'advertise';
        sellFields.forEach((f) => {
          f.style.display = isSell ? 'flex' : 'none';
        });
        adFields.forEach((f) => {
          f.style.display = isAd ? 'flex' : 'none';
        });

        const submitBtn = document.getElementById('lead-submit-btn');
        if (submitBtn) {
          if (isSell) submitBtn.textContent = 'Submit Land for Bhoomika Valuation';
          else if (isAd) submitBtn.textContent = 'Request Ad Space Media Kit';
          else submitBtn.textContent = 'Schedule Private Consultation';
        }
      });
    });

    // Book Ad Space triggers
    document.querySelectorAll('[data-book-ad]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const slot = btn.dataset.bookAd;
        document.querySelector('.form-tab[data-form="advertise"]')?.click();
        const slotSelect = document.getElementById('ad-slot-select');
        if (slotSelect) slotSelect.value = slot;
        const notesEl = document.getElementById('lead-notes');
        if (notesEl) {
          notesEl.value = `Interested in booking sponsored advertisement placement (${slot}) on Bhoomika Land Bank.`;
        }
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        showToast(`Selected ad slot ${slot}. Complete the form below to reserve.`);
      });
    });

    // Form submit
    document.getElementById('advisory-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('lead-name')?.value.trim() || 'Client';
      let actionMsg = `Thank you, ${name}. Our regional land advisor will connect with you shortly.`;
      if (state.formTab === 'sell') {
        actionMsg = `Thank you, ${name}. Your property listing request has been logged for surveyor verification.`;
      } else if (state.formTab === 'advertise') {
        const slot = document.getElementById('ad-slot-select')?.value || 'AD-01';
        actionMsg = `Thank you, ${name}. Our partnerships desk received your inquiry for ad slot ${slot}.`;
      }
      showToast(actionMsg);
      e.target.reset();
    });
  }

  /* -------------------- YouTube Drone Tours & Video Player -------------------- */
  function extractYouTubeId(input) {
    if (!input) return null;
    const trimmed = input.trim();
    if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed;
    const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/))([A-Za-z0-9_-]{11})/);
    return match ? match[1] : null;
  }

  function initVideoTours() {
    const stageEl = document.getElementById('video-stage');
    const playlistEl = document.getElementById('video-playlist');
    const embedForm = document.getElementById('yt-embed-form');
    const urlInput = document.getElementById('yt-url-input');
    const tours = data.videoTours || [];
    if (!stageEl || !playlistEl || tours.length === 0) return;

    let activeTour = tours[0];

    function mountYouTubeIframe(ytId, title) {
      stageEl.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0"
          title="${title || 'Bhoomika YouTube Walkthrough'}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      `;
    }

    function renderStage(tour, autoPlayIfReady) {
      const ytId = extractYouTubeId(tour.youtubeUrl);
      if (autoPlayIfReady && ytId) {
        mountYouTubeIframe(ytId, tour.title);
        return;
      }

      stageEl.innerHTML = `
        <div class="video-poster">
          <img src="${tour.poster}" alt="${tour.title}">
          <div class="video-poster__scrim">
            <div class="video-poster__top">
              <span class="badge badge--assured">${tour.code} · ${tour.category}</span>
              <span class="badge badge--type">${tour.duration} · HD / 4K</span>
            </div>

            <button type="button" class="video-play-btn" id="stage-play-btn" aria-label="Play ${tour.title}">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
            </button>

            <div class="video-stage__caption">
              <h3>${tour.title}</h3>
              <p>${tour.desc}</p>
            </div>
          </div>
        </div>
      `;

      document.getElementById('stage-play-btn')?.addEventListener('click', () => {
        const idNow = extractYouTubeId(tour.youtubeUrl);
        if (idNow) {
          mountYouTubeIframe(idNow, tour.title);
        } else {
          urlInput?.focus();
          showToast('Paste a YouTube video link below (or set youtubeUrl in js/data.js) to play.');
        }
      });
    }

    function renderPlaylist() {
      playlistEl.innerHTML = tours.map((t) => `
        <button type="button" class="video-card ${t.id === activeTour.id ? 'is-active' : ''}" data-tour-id="${t.id}">
          <div class="video-card__thumb">
            <img src="${t.poster}" alt="${t.title}" loading="lazy">
            <span class="video-card__dur">${t.duration}</span>
          </div>
          <div>
            <div class="video-card__meta">${t.code} · ${t.category}</div>
            <div class="video-card__title">${t.title}</div>
          </div>
        </button>
      `).join('');

      playlistEl.querySelectorAll('.video-card').forEach((card) => {
        card.addEventListener('click', () => {
          const picked = tours.find((t) => t.id === card.dataset.tourId);
          if (!picked) return;
          activeTour = picked;
          renderPlaylist();
          renderStage(activeTour, true);
        });
      });
    }

    embedForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const ytId = extractYouTubeId(urlInput?.value || '');
      if (!ytId) {
        showToast('Enter a valid YouTube URL (youtu.be/..., youtube.com/watch?v=...) or 11-char video ID.');
        return;
      }
      activeTour.youtubeUrl = ytId;
      mountYouTubeIframe(ytId, activeTour.title);
      showToast(`Loaded YouTube video (${ytId}) into theater player.`);
    });

    renderPlaylist();
    renderStage(activeTour, false);
  }

  /* -------------------- Certified Land Advisor Registration -------------------- */
  function initAdvisorRegistration() {
    const form = document.getElementById('advisor-reg-form');
    const successCard = document.getElementById('advisor-success-card');
    const refBadge = document.getElementById('adv-ref-id');
    const summaryEl = document.getElementById('adv-success-summary');
    const resetBtn = document.getElementById('adv-reset-btn');
    if (!form || !successCard) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('adv-name')?.value.trim();
      const phone = document.getElementById('adv-phone')?.value.trim();
      const email = document.getElementById('adv-email')?.value.trim();
      const district = document.getElementById('adv-district')?.value || '';
      const specialty = document.getElementById('adv-specialty')?.value || '';
      const experience = document.getElementById('adv-experience')?.value || '';
      const rera = document.getElementById('adv-rera')?.value.trim() || 'Not Provided';
      const agency = document.getElementById('adv-agency')?.value.trim() || 'Independent Advisor';
      const bio = document.getElementById('adv-bio')?.value.trim() || '';

      if (!name || !phone || !email) {
        showToast('Please complete your Name, Mobile, and Email to register.');
        return;
      }

      const refId = `BLA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const existing = JSON.parse(localStorage.getItem('bhoomika_advisor_applications') || '[]');
      existing.push({
        refId,
        name,
        phone,
        email,
        district,
        specialty,
        experience,
        rera,
        agency,
        bio,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('bhoomika_advisor_applications', JSON.stringify(existing));

      if (refBadge) refBadge.textContent = `REF: ${refId}`;
      if (summaryEl) {
        summaryEl.textContent = `Thank you, ${name} (${agency}). Your application for ${district} · ${specialty} (${experience}) has been queued for onboarding verification.`;
      }

      form.style.display = 'none';
      successCard.style.display = 'block';
      showToast(`Advisor registration submitted (${refId}).`);
    });

    resetBtn?.addEventListener('click', () => {
      form.reset();
      successCard.style.display = 'none';
      form.style.display = 'grid';
    });
  }

  /* -------------------- Scroll Reveal Observer -------------------- */
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    items.forEach((el) => observer.observe(el));
  }

  /* -------------------- Boot -------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    saveShortlist();
    renderCategories();
    renderFilterChips();
    renderStaticSections();
    renderListings();
    initConverter();
    initVideoTours();
    initAdvisorRegistration();
    initControls();
    initReveal();
  });
})();

