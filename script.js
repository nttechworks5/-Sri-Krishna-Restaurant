// Sri Krishna Hotel - Performance Optimized Version
// Fixes: Slow load, slow render, WhatsApp PDF send

const menuItems = [
    { id: 1,  name: "Chicken Rice",      price: 90,  category: "Rice",        image: "chickenrice.webp" },
    { id: 2,  name: "Egg Rice",          price: 80,  category: "Rice",        image: "eggrice.webp" },
    { id: 3,  name: "Veg Rice",          price: 70,  category: "Rice",        image: "vegrice.webp" },
    { id: 4,  name: "Idly",              price: 10,  category: "Tiffin",      image: "idly.webp" },
    { id: 5,  name: "Vada",             price: 10,  category: "Tiffin",      image: "vada.webp" },
    { id: 6,  name: "Dosa",             price: 20,  category: "Tiffin",      image: "dosa.webp" },
    { id: 7,  name: "Plain Dosa",       price: 50,  category: "Tiffin",      image: "plain dosa.webp" },
    { id: 8,  name: "Set Dosa",         price: 50,  category: "Tiffin",      image: "set dosa.webp" },
    { id: 9,  name: "Masala Dosa",      price: 70,  category: "Tiffin",      image: "masal dosa.webp" },
    { id: 10, name: "Poori",            price: 40,  category: "Tiffin",      image: "poori.jpg" },
    { id: 11, name: "Chicken Biryani",  price: 90,  category: "Biryani",     image: "chicken-biryani.webp" },
    { id: 12, name: "Egg Biryani",      price: 80,  category: "Biryani",     image: "eggbiryani.webp" },
    { id: 13, name: "Veg Biryani",      price: 70,  category: "Biryani",     image: "vegbiryani.webp" },
    { id: 14, name: "Veg Meals",        price: 80,  category: "Meals",       image: "veg meals.webp" },
    { id: 15, name: "Non Veg Meals",    price: 120, category: "Meals",       image: "non veg meals.webp" },
    { id: 16, name: "Fish Meals",       price: 140, category: "Meals",       image: "fish meals.webp" },
    { id: 17, name: "Bread",            price: 20,  category: "Bread Items", image: "bread.webp" },
    { id: 18, name: "Veg Sandwich",     price: 80,  category: "Bread Items", image: "Veg sandwich.webp" },
    { id: 19, name: "Chicken Sandwich", price: 120, category: "Bread Items", image: "chicken sandwich.webp" },
    { id: 20, name: "Omelette",         price: 20,  category: "Egg Items",   image: "Omelette.webp" },
    { id: 21, name: "Half Boil",        price: 20,  category: "Egg Items",   image: "half boil.webp" },
    { id: 22, name: "Boiled Egg",       price: 20,  category: "Egg Items",   image: "Boiled egg.webp" },
    { id: 23, name: "Chicken 100g",     price: 40,  category: "Chicken",     image: "chicken 100g.webp" },
    { id: 24, name: "Chicken 1kg",      price: 400, category: "Chicken",     image: "chicken 40g.webp" },
    { id: 25, name: "Chicken Noodles",  price: 90,  category: "Noodles",     image: "chickennoodles.webp" },
    { id: 26, name: "Veg Noodles",      price: 60,  category: "Noodles",     image: "veg noodles.webp" },
    { id: 27, name: "Egg Noodles",      price: 80,  category: "Noodles",     image: "eggnoodles.webp" }
];

const HOTEL_NAME      = "Sri Krishna Hotel";
const PHONE_NUMBER    = "98433 36980";
const WHATSAPP_NUMBER = "919843336980";
const UPI_ID          = "9843336980@ibl";
const FALLBACK_IMAGE  = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&fm=webp&q=80";

const UPI_APPS = [
    { id: 'gpay',      name: 'GPay',     icon: 'https://img.icons8.com/color/96/google-pay.png',  color: '#4285F4', pkg: 'com.google.android.apps.nbu.paisa.user' },
    { id: 'phonepe',   name: 'PhonePe',  icon: 'https://img.icons8.com/color/96/phone-pe.png',    color: '#5f259f', pkg: 'com.phonepe.app' },
    { id: 'paytm',     name: 'Paytm',    icon: 'https://img.icons8.com/color/96/paytm.png',       color: '#00b9f1', pkg: 'net.one97.paytm' },
    { id: 'bhim',      name: 'BHIM',     icon: 'https://img.icons8.com/color/96/bhim.png',        color: '#00a651', pkg: 'in.org.npci.upiapp' },
    { id: 'amazonpay', name: 'Amazon',   icon: 'https://img.icons8.com/color/96/amazon.png',      color: '#FF9900', pkg: 'in.amazon.mShop.android.shopping' },
    { id: 'other',     name: 'Other UPI',icon: null,                                               color: '#607d8b', pkg: null }
];

// ===== State =====
let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let paymentStatus = 'cash';
let currentSlide = 0;
let selectedUpiApp = null;
let lastGeneratedBill = null;
let heroSliderInterval = null;
let searchDebounceTimer = null;
let imgObserver = null;

// ===== DOM Cache (query once) =====
const els = {};
function cacheEls() {
    const ids = [
        'menu-container','cart-count','cart-total','cart-items','cart-drawer',
        'cart-overlay','empty-cart','cart-drawer-footer','cart-subtotal',
        'cart-grand-total','sticky-cart','cart-btn','toast','toast-message',
        'btn-submit-order','btn-download-bill','payment-status',
        'qr-payment-section','online-payment-section','cash-payment-section',
        'upi-app-grid','qr-display-amount','order-form'
    ];
    ids.forEach(id => { els[id.replace(/-([a-z])/g, (_,c)=>c.toUpperCase())] = document.getElementById(id); });
    // keep kebab keys too for backward compat
    ids.forEach(id => { els[id] = document.getElementById(id); });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', function() {
    cacheEls();
    loadCart();
    setupEventListeners();
    setupImgObserver();
    renderMenu();
    updateCartDisplay();
    renderUpiAppGrid();
    startHeroSlider();
});

// ===== Intersection Observer for lazy images =====
function setupImgObserver() {
    if (!('IntersectionObserver' in window)) return;
    imgObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) return;
            const img = entry.target;
            const src = img.dataset.src;
            if (src) {
                img.src = src;
                img.removeAttribute('data-src');
            }
            imgObserver.unobserve(img);
        });
    }, { rootMargin: '200px' });
}

// ===== Storage =====
function loadCart() {
    try {
        const saved = localStorage.getItem('sriKrishnaCart');
        cart = saved ? JSON.parse(saved) : [];
        if (!Array.isArray(cart)) cart = [];
    } catch { cart = []; }
}
function saveCart() {
    try { localStorage.setItem('sriKrishnaCart', JSON.stringify(cart)); } catch {}
}

// ===== Render Menu (optimised - single innerHTML set, DocumentFragment avoided for speed) =====
function renderMenu() {
    const menuContainer = document.getElementById('menu-container');
    let items = menuItems;
    const q = searchQuery.trim().toLowerCase();
    if (currentCategory !== 'all') items = items.filter(i => i.category === currentCategory);
    if (q) items = items.filter(i => i.name.toLowerCase().includes(q));

    if (!items.length) {
        menuContainer.innerHTML = `
            <div class="empty-cart" style="grid-column:1/-1;padding:60px;text-align:center">
                <i class="fas fa-search" style="font-size:3rem;color:#ccc"></i>
                <p style="margin-top:16px;font-weight:600">No items found</p>
                <span style="color:#888">Try a different search or category</span>
            </div>`;
        return;
    }

    const qtyMap = new Map(cart.map(c => [c.id, c.quantity]));
    const parts = [];

    items.forEach(function(item) {
        const qty   = qtyMap.get(item.id) || 0;
        const eager = items.indexOf(item) < 4;
        // Use data-src for lazy load; eager for first 4
        const imgAttr = eager
            ? `src="${item.image}"`
            : `src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="${item.image}"`;

        parts.push(`
        <div class="product-card" data-id="${item.id}">
            <div class="product-image">
                <img ${imgAttr} alt="${item.name}" loading="${eager ? 'eager' : 'lazy'}"
                    onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';this.classList.add('is-loaded')"
                    onload="this.classList.add('is-loaded')">
                <span class="product-badge">${item.category}</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${item.name}</h3>
                <p class="product-price">${item.price}</p>
                <div class="product-actions">
                    <div class="quantity-control">
                        <button class="qty-btn minus" data-id="${item.id}" ${qty <= 0 ? 'disabled' : ''}>-</button>
                        <span class="qty-value">${qty}</span>
                        <button class="qty-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="btn-add-cart ${qty > 0 ? 'added' : ''}" data-id="${item.id}">
                        <i class="fas ${qty > 0 ? 'fa-check' : 'fa-cart-plus'}"></i>
                        <span>${qty > 0 ? 'Added' : 'Add'}</span>
                    </button>
                </div>
            </div>
        </div>`);
    });

    menuContainer.innerHTML = parts.join('');

    // Attach observer to lazy images
    if (imgObserver) {
        menuContainer.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
    }
}

// ===== Cart =====
function getTotal() { return cart.reduce((s, i) => s + i.price * i.quantity, 0); }

function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;
    const existing = cart.find(c => c.id === id);
    if (existing) { existing.quantity++; }
    else { cart.push({ id: item.id, name: item.name, price: item.price, category: item.category, image: item.image, quantity: 1 }); }
    saveCart();
    updateCartDisplay();
    updateCardUI(id);
    showToast(item.name + ' added!');
}

function decreaseQuantity(id) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.quantity--;
    if (item.quantity <= 0) cart = cart.filter(c => c.id !== id);
    saveCart(); updateCartDisplay(); updateCardUI(id);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCart(); updateCartDisplay(); updateCardUI(id);
    showToast('Item removed');
}

function updateCartQuantity(id, change) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) cart = cart.filter(c => c.id !== id);
    saveCart(); updateCartDisplay(); updateCardUI(id);
}

function updateCartDisplay() {
    let totalItems = 0, totalAmount = 0;
    cart.forEach(i => { totalItems += i.quantity; totalAmount += i.price * i.quantity; });

    document.getElementById('cart-count').textContent = totalItems;
    document.getElementById('cart-total').textContent = 'Rs.' + totalAmount;
    document.getElementById('sticky-cart').style.display = totalItems > 0 ? 'block' : 'none';
    updateQrAmount();

    const emptyCart = document.getElementById('empty-cart');
    const cartItemsEl = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-drawer-footer');

    if (!cart.length) {
        emptyCart.style.display = 'flex';
        cartItemsEl.style.display = 'none';
        cartFooter.style.display = 'none';
        return;
    }

    emptyCart.style.display = 'none';
    cartItemsEl.style.display = 'block';
    cartFooter.style.display = 'block';

    const parts = [];
    cart.forEach(function(item) {
        parts.push(`
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" width="60" height="60"
                loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Rs.${item.price} each</div>
            </div>
            <div class="cart-item-qty">
                <button data-action="decrease" data-id="${item.id}"><i class="fas fa-minus"></i></button>
                <span>${item.quantity}</span>
                <button data-action="increase" data-id="${item.id}"><i class="fas fa-plus"></i></button>
            </div>
            <button class="cart-item-remove" data-action="remove" data-id="${item.id}">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>`);
    });

    cartItemsEl.innerHTML = parts.join('');
    document.getElementById('cart-subtotal').textContent = 'Rs.' + totalAmount;
    document.getElementById('cart-grand-total').textContent = 'Rs.' + totalAmount;
}

function updateCardUI(id) {
    const menuContainer = document.getElementById('menu-container');
    const card = menuContainer.querySelector(`.product-card[data-id="${id}"]`);
    if (!card) return;
    const qty    = cart.find(c => c.id === id)?.quantity || 0;
    const minus  = card.querySelector('.qty-btn.minus');
    const qtyVal = card.querySelector('.qty-value');
    const addBtn = card.querySelector('.btn-add-cart');
    if (minus)  minus.disabled = qty <= 0;
    if (qtyVal) qtyVal.textContent = qty;
    if (addBtn) {
        addBtn.className = 'btn-add-cart' + (qty > 0 ? ' added' : '');
        addBtn.innerHTML = `<i class="fas ${qty > 0 ? 'fa-check' : 'fa-cart-plus'}"></i><span>${qty > 0 ? 'Added' : 'Add'}</span>`;
    }
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
    document.querySelectorAll('.product-card').forEach(card => updateCardUI(parseInt(card.dataset.id)));
}

// ===== Toast =====
let toastTimer = null;
function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== Hero Slider =====
function startHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots   = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;

    function goto(idx) {
        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
        currentSlide = idx;
        slides[idx].classList.add('active');
        if (dots[idx]) dots[idx].classList.add('active');
    }

    if (heroSliderInterval) clearInterval(heroSliderInterval);
    heroSliderInterval = setInterval(() => goto((currentSlide + 1) % slides.length), 5000);
    dots.forEach((dot, idx) => dot.addEventListener('click', () => { if (idx !== currentSlide) goto(idx); }));
}

// ===== UPI =====
function renderUpiAppGrid() {
    const grid = document.getElementById('upi-app-grid');
    if (!grid) return;
    grid.innerHTML = UPI_APPS.map(app => `
        <button type="button" class="upi-app-btn" data-app="${app.id}">
            <div class="upi-app-icon">
                ${app.icon
                    ? `<img src="${app.icon}" alt="${app.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<span class=\\'fallback-icon\\' style=\\'background:${app.color}\\'>${app.name[0]}</span>'">`
                    : `<span class="fallback-icon" style="background:${app.color}">${app.name[0]}</span>`}
            </div>
            <span class="upi-app-name">${app.name}</span>
        </button>`).join('');
}

function handleUpiAppClick(appId) {
    const total = getTotal();
    if (total <= 0) { showToast('Please add items to cart first'); return; }

    const app = UPI_APPS.find(a => a.id === appId);
    if (!app) return;

    selectedUpiApp = appId;
    document.querySelectorAll('.upi-app-btn').forEach(btn => btn.classList.toggle('selected', btn.dataset.app === appId));

    const pa = encodeURIComponent(UPI_ID);
    const pn = encodeURIComponent(HOTEL_NAME);
    const am = encodeURIComponent(total.toFixed(2));
    const tn = encodeURIComponent('Food Order - Sri Krishna Hotel');

    let url;
    if (/Android/i.test(navigator.userAgent) && app.pkg) {
        const fallback = encodeURIComponent(`upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`);
        url = `intent://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}#Intent;scheme=upi;package=${app.pkg};S.browser_fallback_url=${fallback};end`;
    } else if (/iPhone|iPad/i.test(navigator.userAgent)) {
        const schemes = { gpay: 'tez', phonepe: 'phonepe', paytm: 'paytmmp' };
        const scheme = schemes[app.id] || 'upi';
        url = `${scheme}://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
    } else {
        url = `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
    }

    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
        window.location.href = url;
        showToast('Opening ' + app.name + '...');
    } else {
        showToast('Please open on mobile or scan QR');
    }

    document.getElementById('qr-payment-section').style.display = 'block';
    updatePaymentStatus('paid');
    paymentStatus = 'paid';
    document.getElementById('btn-submit-order').disabled = false;
}

function updatePaymentStatus(status) {
    const el = document.getElementById('payment-status');
    if (!el) return;
    const map = {
        paid:    '<span class="status-paid">Payment App Selected - Submit Order now</span>',
        pending: '<span class="status-pending">Select a UPI App to enable payment</span>',
        cash:    '<span class="status-cash">Cash on Delivery</span>'
    };
    el.innerHTML = map[status] || '';
}

function updateQrAmount() {
    const el = document.getElementById('qr-display-amount');
    if (el) el.textContent = getTotal();
}

function copyUpiId() {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(UPI_ID).then(() => showToast('UPI ID copied!'));
    } else {
        const ta = document.createElement('textarea');
        ta.value = UPI_ID; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy');
        document.body.removeChild(ta); showToast('UPI ID copied!');
    }
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Menu - single delegated listener
    document.getElementById('menu-container').addEventListener('click', function(e) {
        const plus  = e.target.closest('.qty-btn.plus');
        if (plus)  { addToCart(parseInt(plus.dataset.id)); return; }
        const minus = e.target.closest('.qty-btn.minus');
        if (minus) { decreaseQuantity(parseInt(minus.dataset.id)); return; }
        const add   = e.target.closest('.btn-add-cart');
        if (add)   { addToCart(parseInt(add.dataset.id)); }
    });

    // Cart items - single delegated listener
    document.getElementById('cart-items').addEventListener('click', function(e) {
        const btn = e.target.closest('button[data-action]');
        if (!btn) return;
        const id = parseInt(btn.dataset.id), action = btn.dataset.action;
        if (action === 'increase') updateCartQuantity(id, 1);
        else if (action === 'decrease') updateCartQuantity(id, -1);
        else if (action === 'remove') removeFromCart(id);
    });

    // Categories
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            renderMenu();
            document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Mobile categories
    document.querySelectorAll('.mobile-menu-item[data-category]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            currentCategory = this.dataset.category;
            document.querySelectorAll('.category-btn').forEach(b => {
                b.classList.remove('active');
                if (b.dataset.category === currentCategory) b.classList.add('active');
            });
            renderMenu(); closeMobileMenu();
            document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Search - debounced for performance
    document.getElementById('search-toggle').addEventListener('click', () => document.getElementById('search-bar').classList.toggle('active'));
    document.getElementById('search-close').addEventListener('click', function() {
        document.getElementById('search-bar').classList.remove('active');
        document.getElementById('search-input').value = '';
        searchQuery = ''; renderMenu();
    });
    document.getElementById('search-input').addEventListener('input', function() {
        const val = this.value;
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => { searchQuery = val; renderMenu(); }, 200);
    });

    // Mobile menu
    document.getElementById('menu-toggle').addEventListener('click', openMobileMenu);
    document.getElementById('mobile-menu-close').addEventListener('click', closeMobileMenu);
    document.getElementById('mobile-menu-overlay').addEventListener('click', closeMobileMenu);

    // Cart
    document.getElementById('cart-btn').addEventListener('click', openCart);
    document.getElementById('cart-close').addEventListener('click', closeCart);
    document.getElementById('cart-overlay').addEventListener('click', closeCart);
    document.getElementById('btn-continue').addEventListener('click', closeCart);
    document.getElementById('btn-place-order').addEventListener('click', function() {
        closeCart(); updateQrAmount(); openOrderModal();
    });

    // Order modal
    document.getElementById('order-modal-close').addEventListener('click', closeOrderModal);
    document.getElementById('order-modal-overlay').addEventListener('click', closeOrderModal);

    // Payment radio
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', function() {
            selectedUpiApp = null;
            document.querySelectorAll('.upi-app-btn').forEach(btn => btn.classList.remove('selected'));
            if (this.value === 'online') {
                document.getElementById('online-payment-section').style.display = 'block';
                document.getElementById('cash-payment-section').style.display = 'none';
                document.getElementById('qr-payment-section').style.display = 'none';
                updatePaymentStatus('pending');
                paymentStatus = 'pending';
                document.getElementById('btn-submit-order').disabled = true;
            } else {
                document.getElementById('online-payment-section').style.display = 'none';
                document.getElementById('cash-payment-section').style.display = 'block';
                document.getElementById('qr-payment-section').style.display = 'none';
                paymentStatus = 'cash';
                document.getElementById('btn-submit-order').disabled = false;
                updatePaymentStatus('cash');
            }
        });
    });

    // UPI app clicks
    document.getElementById('upi-app-grid').addEventListener('click', function(e) {
        const btn = e.target.closest('.upi-app-btn');
        if (btn) handleUpiAppClick(btn.dataset.app);
    });

    document.getElementById('btn-copy-upi').addEventListener('click', copyUpiId);

    // Submit order
    document.getElementById('order-form').addEventListener('submit', function(e) { e.preventDefault(); submitOrder(); });

    // New order
    document.getElementById('btn-new-order').addEventListener('click', function() {
        closeSuccessModal(); clearCart(); window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Download bill
    const dlBtn = document.getElementById('btn-download-bill');
    if (dlBtn) dlBtn.addEventListener('click', () => { if (lastGeneratedBill) generateBillPDF(lastGeneratedBill, 'download'); });

    // History
    document.getElementById('mobile-view-orders').addEventListener('click', function(e) { e.preventDefault(); closeMobileMenu(); openHistoryModal(); });
    document.getElementById('footer-history').addEventListener('click', function(e) { e.preventDefault(); openHistoryModal(); });
    document.getElementById('history-modal-close').addEventListener('click', closeHistoryModal);
    document.getElementById('history-modal-overlay').addEventListener('click', closeHistoryModal);

    // Contact
    document.getElementById('mobile-contact').addEventListener('click', function(e) { e.preventDefault(); closeMobileMenu(); openContactModal(); });
    document.getElementById('footer-contact').addEventListener('click', function(e) { e.preventDefault(); openContactModal(); });
    document.getElementById('contact-modal-close').addEventListener('click', closeContactModal);
    document.getElementById('contact-modal-overlay').addEventListener('click', closeContactModal);

    // Mobile number validation
    document.getElementById('customer-mobile').addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').slice(0, 10);
    });
}

// ===== Modals =====
function openCart()         { document.getElementById('cart-drawer').classList.add('open'); document.getElementById('cart-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeCart()        { document.getElementById('cart-drawer').classList.remove('open'); document.getElementById('cart-overlay').classList.remove('open'); document.body.style.overflow = ''; }
function openMobileMenu()   { document.getElementById('mobile-menu').classList.add('open'); document.getElementById('mobile-menu-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMobileMenu()  { document.getElementById('mobile-menu').classList.remove('open'); document.getElementById('mobile-menu-overlay').classList.remove('open'); document.body.style.overflow = ''; }
function closeOrderModal()  { document.getElementById('order-modal').classList.remove('open'); document.getElementById('order-modal-overlay').classList.remove('open'); document.body.style.overflow = ''; }
function openSuccessModal() { document.getElementById('success-modal').classList.add('open'); document.getElementById('success-modal-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeSuccessModal(){ document.getElementById('success-modal').classList.remove('open'); document.getElementById('success-modal-overlay').classList.remove('open'); document.body.style.overflow = ''; }
function openHistoryModal() { renderOrderHistory(); document.getElementById('history-modal').classList.add('open'); document.getElementById('history-modal-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeHistoryModal(){ document.getElementById('history-modal').classList.remove('open'); document.getElementById('history-modal-overlay').classList.remove('open'); document.body.style.overflow = ''; }
function openContactModal() { document.getElementById('contact-modal').classList.add('open'); document.getElementById('contact-modal-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeContactModal(){ document.getElementById('contact-modal').classList.remove('open'); document.getElementById('contact-modal-overlay').classList.remove('open'); document.body.style.overflow = ''; }

function openOrderModal() {
    document.getElementById('order-modal').classList.add('open');
    document.getElementById('order-modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('order-form').reset();
    document.querySelector('input[name="payment-method"][value="cash"]').checked = true;
    document.getElementById('online-payment-section').style.display = 'none';
    document.getElementById('cash-payment-section').style.display = 'block';
    document.getElementById('qr-payment-section').style.display = 'none';
    selectedUpiApp = null;
    document.querySelectorAll('.upi-app-btn').forEach(btn => btn.classList.remove('selected'));
    updatePaymentStatus('cash');
    paymentStatus = 'cash';
    document.getElementById('btn-submit-order').disabled = false;
    const dlBtn = document.getElementById('btn-download-bill');
    if (dlBtn) dlBtn.style.display = 'none';
    updateQrAmount();
}

// ===== Submit Order =====
function submitOrder() {
    const name   = document.getElementById('customer-name').value.trim();
    const mobile = document.getElementById('customer-mobile').value.trim();
    const table  = document.getElementById('table-number').value.trim();
    const notes  = document.getElementById('order-notes').value.trim();
    const method = document.querySelector('input[name="payment-method"]:checked')?.value || 'cash';

    if (!name || !mobile || !table) { showToast('Please fill all required fields'); return; }
    if (mobile.length !== 10) { showToast('Enter valid 10-digit mobile number'); return; }
    if (method === 'online' && paymentStatus !== 'paid') { showToast('Please select a UPI app first'); return; }

    const now = new Date();
    const order = {
        id:              'ORD' + Date.now(),
        customerName:    name,
        customerMobile:  mobile,
        tableNumber:     table,
        notes:           notes,
        paymentMethod:   method,
        paymentStatus:   method === 'cash' ? 'Cash' : 'Paid (Online)',
        items:           [...cart],
        totalAmount:     getTotal(),
        date:            now.toLocaleDateString('en-IN'),
        time:            now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        timestamp:       now.getTime()
    };

    saveOrderToHistory(order);
    lastGeneratedBill = order;

    // Generate PDF then send via WhatsApp
    generateBillPDF(order, 'whatsapp').catch(err => {
        console.error('PDF error:', err);
        // fallback: send text message
        sendWhatsAppText(order);
    });

    closeOrderModal();
    openSuccessModal();
}

// ===== Bill PDF - generates and either downloads OR shares via WhatsApp =====
function generateBillPDF(order, mode) {
    return new Promise(function(resolve, reject) {
        function proceed(jsPDFClass) {
            try {
                const pdfDataUri = createPDFDataUri(order, jsPDFClass);
                if (mode === 'whatsapp') {
                    sendWhatsAppWithPDF(order, pdfDataUri);
                } else {
                    // Direct download
                    const link = document.createElement('a');
                    link.href = pdfDataUri;
                    link.download = 'SriKrishna_Bill_' + order.id + '.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                resolve();
            } catch (e) { reject(e); }
        }

        if (typeof window.jspdf !== 'undefined' && window.jspdf.jsPDF) {
            proceed(window.jspdf.jsPDF);
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = function() {
            if (window.jspdf && window.jspdf.jsPDF) proceed(window.jspdf.jsPDF);
            else reject(new Error('jsPDF not found'));
        };
        script.onerror = () => reject(new Error('Failed to load jsPDF'));
        document.head.appendChild(script);
    });
}

// ===== Create PDF and return as Data URI (base64) =====
function createPDFDataUri(order, jsPDFClass) {
    const doc = new jsPDFClass({ unit: 'mm', format: 'a4' });
    const L = 18, R = 192;
    let y = 18;

    // Header
    doc.setFontSize(20); doc.setFont('helvetica', 'bold');
    doc.text(HOTEL_NAME.toUpperCase(), 105, y, { align: 'center' }); y += 9;

    doc.setFontSize(11); doc.setFont('helvetica', 'normal');
    doc.text('Authentic South Indian Cuisine', 105, y, { align: 'center' }); y += 6;
    doc.text('Phone: ' + PHONE_NUMBER, 105, y, { align: 'center' }); y += 6;
    doc.text('UPI: ' + UPI_ID, 105, y, { align: 'center' }); y += 8;

    doc.setLineWidth(0.5); doc.line(L, y, R, y); y += 8;

    // Order info
    doc.setFontSize(10);
    doc.text('Date: ' + order.date, L, y);
    doc.text('Time: ' + order.time, R, y, { align: 'right' }); y += 7;
    doc.text('Order ID: ' + order.id, L, y); y += 8;

    doc.line(L, y, R, y); y += 8;

    // Customer info
    doc.text('Customer : ' + order.customerName, L, y); y += 6;
    doc.text('Mobile   : ' + order.customerMobile, L, y); y += 6;
    doc.text('Table No : ' + order.tableNumber, L, y); y += 6;
    if (order.notes) { doc.text('Notes    : ' + order.notes, L, y); y += 6; }

    y += 2; doc.line(L, y, R, y); y += 8;

    // Items header
    doc.setFont('helvetica', 'bold');
    doc.text('Item', L, y);
    doc.text('Qty', 120, y, { align: 'center' });
    doc.text('Rate', 155, y, { align: 'right' });
    doc.text('Amount', R, y, { align: 'right' }); y += 6;
    doc.setLineWidth(0.3); doc.line(L, y, R, y); y += 8;

    // Items
    doc.setFont('helvetica', 'normal');
    order.items.forEach(function(item) {
        const n = item.name.length > 26 ? item.name.slice(0, 23) + '...' : item.name;
        doc.text(n, L, y);
        doc.text(String(item.quantity), 120, y, { align: 'center' });
        doc.text('Rs.' + item.price, 155, y, { align: 'right' });
        doc.text('Rs.' + (item.price * item.quantity), R, y, { align: 'right' });
        y += 7;
    });

    // Total
    y += 4; doc.setLineWidth(0.5); doc.line(L, y, R, y); y += 8;
    doc.setFont('helvetica', 'bold'); doc.setFontSize(12);
    doc.text('TOTAL AMOUNT', L, y);
    doc.text('Rs.' + order.totalAmount, R, y, { align: 'right' }); y += 10;

    doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
    doc.text('Payment Method : ' + order.paymentStatus, L, y); y += 10;

    doc.setLineWidth(0.5); doc.line(L, y, R, y); y += 10;
    doc.setFont('helvetica', 'bold');
    doc.text('Thank you for choosing Sri Krishna Hotel!', 105, y, { align: 'center' }); y += 7;
    doc.setFont('helvetica', 'normal');
    doc.text('Order prepared with care and served fresh.', 105, y, { align: 'center' });

    // Return base64 data URI
    return doc.output('datauristring');
}

// ===== WhatsApp with PDF =====
function sendWhatsAppWithPDF(order, pdfDataUri) {
    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

    if (isMobile && navigator.share) {
        // Convert data URI to Blob for native share
        const base64 = pdfDataUri.split(',')[1];
        const binary = atob(base64);
        const bytes  = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        const blob = new Blob([bytes], { type: 'application/pdf' });
        const file = new File([blob], 'SriKrishna_Bill_' + order.id + '.pdf', { type: 'application/pdf' });

        // Check if sharing files is supported
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            navigator.share({
                title: 'Sri Krishna Hotel - Bill ' + order.id,
                text: buildWhatsAppText(order),
                files: [file]
            }).then(function() {
                showToast('Bill shared!');
            }).catch(function() {
                // User cancelled or error - fallback to download + open WhatsApp
                downloadPDFAndOpenWhatsApp(order, pdfDataUri);
            });
        } else {
            downloadPDFAndOpenWhatsApp(order, pdfDataUri);
        }
    } else {
        // Desktop: download PDF + open WhatsApp Web
        downloadPDFAndOpenWhatsApp(order, pdfDataUri);
    }
}

function downloadPDFAndOpenWhatsApp(order, pdfDataUri) {
    // Auto-download the PDF
    const link = document.createElement('a');
    link.href = pdfDataUri;
    link.download = 'SriKrishna_Bill_' + order.id + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show download bill button in success modal
    const dlBtn = document.getElementById('btn-download-bill');
    if (dlBtn) dlBtn.style.display = 'flex';

    // Open WhatsApp with text message
    setTimeout(function() {
        const msg = buildWhatsAppMessageEncoded(order);
        window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + msg, '_blank');
        showToast('Bill downloaded! WhatsApp opened.');
    }, 600);
}

function buildWhatsAppText(order) {
    const items = order.items.map(i => i.name + ' x' + i.quantity + ' - Rs.' + (i.price * i.quantity)).join('\n');
    return `*${HOTEL_NAME.toUpperCase()}*\n\nOrder: ${order.id}\nDate: ${order.date} ${order.time}\n\nCustomer: ${order.customerName}\nTable: ${order.tableNumber}\n\nItems:\n${items}\n\nTotal: Rs.${order.totalAmount}\nPayment: ${order.paymentStatus}${order.notes ? '\nNotes: ' + order.notes : ''}\n\nThank you! Visit again.`;
}

function buildWhatsAppMessageEncoded(order) {
    return encodeURIComponent(buildWhatsAppText(order));
}

// ===== Order History =====
function saveOrderToHistory(order) {
    try {
        let h = JSON.parse(localStorage.getItem('sriKrishnaOrders')) || [];
        if (!Array.isArray(h)) h = [];
        h.unshift(order);
        if (h.length > 50) h = h.slice(0, 50);
        localStorage.setItem('sriKrishnaOrders', JSON.stringify(h));
    } catch {}
}

function renderOrderHistory() {
    const container = document.getElementById('order-history-list');
    try {
        const history = JSON.parse(localStorage.getItem('sriKrishnaOrders')) || [];
        if (!history.length) {
            container.innerHTML = '<div class="empty-history"><i class="fas fa-clipboard-list"></i><p>No orders yet</p></div>';
            return;
        }
        container.innerHTML = history.map(function(o) {
            return `
            <div class="history-item">
                <div class="history-item-header">
                    <h4>${o.customerName} - Table ${o.tableNumber}</h4>
                    <span class="history-item-date">${o.date} ${o.time}</span>
                </div>
                <div class="history-item-details">${o.items.map(i => i.name + ' x' + i.quantity).join(', ')}</div>
                <div class="history-item-total">Rs.${o.totalAmount} - ${o.paymentStatus}</div>
            </div>`;
        }).join('');
    } catch {
        container.innerHTML = '<div class="empty-history"><i class="fas fa-clipboard-list"></i><p>No orders yet</p></div>';
    }
}
