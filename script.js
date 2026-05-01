// ===== Sri Krishna Hotel Ordering System =====
// Fixed: Payment flow, UPI icons, hero slider positioning, performance

// ===== Menu Data =====
const menuItems = [
    { id: 1,  name: "Chicken Rice",       price: 90,  category: "Rice",        image: "chickenrice.jpg" },
    { id: 2,  name: "Egg Rice",           price: 80,  category: "Rice",        image: "eggrice.jpg" },
    { id: 3,  name: "Veg Rice",           price: 70,  category: "Rice",        image: "vegrice.jpg" },
    { id: 4,  name: "Idly",              price: 10,  category: "Tiffin",      image: "idly.jpeg" },
    { id: 5,  name: "Vada",              price: 10,  category: "Tiffin",      image: "vada.jpg" },
    { id: 6,  name: "Dosa",              price: 20,  category: "Tiffin",      image: "dosa.jpg" },
    { id: 7,  name: "Plain Dosa",        price: 50,  category: "Tiffin",      image: "plain dosa.jpeg" },
    { id: 8,  name: "Set Dosa",          price: 50,  category: "Tiffin",      image: "set dosa.jpg" },
    { id: 9,  name: "Masala Dosa",       price: 70,  category: "Tiffin",      image: "masal dosa.jpg" },
    { id: 10, name: "Poori",             price: 40,  category: "Tiffin",      image: "poori.jpg" },
    { id: 11, name: "Chicken Biryani",   price: 90,  category: "Biryani",     image: "chicken-biryani.jpg" },
    { id: 12, name: "Egg Biryani",       price: 80,  category: "Biryani",     image: "eggbiryani.jpg" },
    { id: 13, name: "Veg Biryani",       price: 70,  category: "Biryani",     image: "vegbiryani.jpg" },
    { id: 14, name: "Veg Meals",         price: 80,  category: "Meals",       image: "veg meals.jpg" },
    { id: 15, name: "Non Veg Meals",     price: 120, category: "Meals",       image: "non veg meals.jpg" },
    { id: 16, name: "Fish Meals",        price: 140, category: "Meals",       image: "fish meals.jpg" },
    { id: 17, name: "Bread",             price: 20,  category: "Bread Items", image: "bread.jpeg" },
    { id: 18, name: "Veg Sandwich",      price: 80,  category: "Bread Items", image: "Veg sandwich.jpg" },
    { id: 19, name: "Chicken Sandwich",  price: 120, category: "Bread Items", image: "chicken sandwich.jpg" },
    { id: 20, name: "Omelette",          price: 20,  category: "Egg Items",   image: "Omelette.jpg" },
    { id: 21, name: "Half Boil",         price: 20,  category: "Egg Items",   image: "half boil.jpeg" },
    { id: 22, name: "Boiled Egg",        price: 20,  category: "Egg Items",   image: "Boiled egg.jpg" },
    { id: 23, name: "Chicken 100g",      price: 40,  category: "Chicken",     image: "chicken 100g.jpg" },
    { id: 24, name: "Chicken 1kg",       price: 400, category: "Chicken",     image: "chicken 40g.jpg" },
    { id: 25, name: "Chicken Noodles",   price: 90,  category: "Noodles",     image: "chickennoodles.jpg" },
    { id: 26, name: "Veg Noodles",       price: 60,  category: "Noodles",     image: "veg noodles.jpg" },
    { id: 27, name: "Egg Noodles",       price: 80,  category: "Noodles",     image: "eggnoodles.jpg" }
];
const menuItemsById = new Map(menuItems.map(item => [item.id, item]));

// ===== State =====
let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let paymentStatus = 'pending';
let currentSlide = 0;
let selectedUpiApp = null;

// ===== Hotel Details =====
const HOTEL_NAME       = "Sri Krishna Hotel";
const PHONE_NUMBER     = "98433 36980";
const WHATSAPP_NUMBER  = "919843336980";
const UPI_ID           = "9843336980@ibl";
const EMAIL            = "kumaranglids@gmail.com";
const PDF_SCRIPT_URL   = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";

const MENU_IMAGE_FALLBACK = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&fm=webp&q=80";

// ===== UPI Apps — with icons =====
const UPI_APPS = [
    {
        id: 'gpay',
        name: 'GPay',
        icon: 'https://img.icons8.com/color/96/google-pay.png',
        color: '#4285F4',
        pkg: 'com.google.android.apps.nbu.paisa.user',
        iosScheme: 'tez'
    },
    {
        id: 'phonepe',
        name: 'PhonePe',
        icon: 'https://img.icons8.com/color/96/phone-pe.png',
        color: '#5f259f',
        pkg: 'com.phonepe.app',
        iosScheme: 'phonepe'
    },
    {
        id: 'paytm',
        name: 'Paytm',
        icon: 'https://img.icons8.com/color/96/paytm.png',
        color: '#00b9f1',
        pkg: 'net.one97.paytm',
        iosScheme: 'paytmmp'
    },
    {
        id: 'bhim',
        name: 'BHIM',
        icon: 'https://img.icons8.com/color/96/bhim.png',
        color: '#00a651',
        pkg: 'in.org.npci.upiapp',
        iosScheme: 'upi'
    },
    {
        id: 'amazonpay',
        name: 'Amazon',
        icon: 'https://img.icons8.com/color/96/amazon.png',
        color: '#FF9900',
        pkg: 'in.amazon.mShop.android.shopping',
        iosScheme: 'amznmobile'
    },
    {
        id: 'other',
        name: 'Other UPI',
        icon: null,
        color: '#607d8b',
        pkg: null,
        iosScheme: 'upi'
    }
];

// ===== DOM Elements =====
const menuContainer      = document.getElementById('menu-container');
const cartCount          = document.getElementById('cart-count');
const cartTotal          = document.getElementById('cart-total');
const cartItems          = document.getElementById('cart-items');
const cartDrawer         = document.getElementById('cart-drawer');
const cartOverlay        = document.getElementById('cart-overlay');
const cartDrawerBody     = document.getElementById('cart-drawer-body');
const cartDrawerFooter   = document.getElementById('cart-drawer-footer');
const emptyCart          = document.getElementById('empty-cart');
const cartSubtotal       = document.getElementById('cart-subtotal');
const cartGrandTotal     = document.getElementById('cart-grand-total');
const stickyCart         = document.getElementById('sticky-cart');
const cartBtn            = document.getElementById('cart-btn');
const toast              = document.getElementById('toast');
const toastMessage       = document.getElementById('toast-message');
const btnSubmitOrder     = document.getElementById('btn-submit-order');
const btnDownloadBill    = document.getElementById('btn-download-bill');
const adminNotificationPanel = document.getElementById('admin-notification-panel');

let lastGeneratedBill = null;
let heroSliderInterval = null;
let searchInputTimer   = null;
let jspdfLoader        = null;

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    [
        ['load cart',           loadCart],
        ['setup events',        setupEventListeners],
        ['render menu',         renderMenu],
        ['update cart',         updateCartDisplay],
        ['update qr amount',    updateQrAmount],
        ['render upi apps',     renderUpiAppGrid],
        ['hero slider',         startHeroSlider],
        ['welcome voice',       scheduleWelcomeVoice]
    ].forEach(([label, fn]) => {
        try { fn(); } catch (e) { console.error('Init failed:', label, e); }
    });
    hideLoadingOverlay();
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    if (!overlay) return;
    requestAnimationFrame(() => overlay.classList.add('hidden'));
    setTimeout(() => overlay.remove(), 600);
}

function scheduleWelcomeVoice() {
    setTimeout(() => speakText('Welcome to Sri Krishna Hotel. Please place your order.'), 900);
}

// ===== Storage =====
function readJsonStorage(key, fallback) {
    try {
        const v = localStorage.getItem(key);
        return v ? (JSON.parse(v) ?? fallback) : fallback;
    } catch { return fallback; }
}
function writeJsonStorage(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; }
}

// ===== Helpers =====
function safeOpen(url) {
    try { window.open(url, '_blank', 'noopener,noreferrer'); } catch (e) { console.warn(e); }
}
function safeScrollIntoView(el) {
    if (!el) return;
    try { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch { el.scrollIntoView(); }
}
function safeScrollToTop() {
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch { window.scrollTo(0, 0); }
}
function bindEvent(id, event, handler) {
    const el = typeof id === 'string' ? document.getElementById(id) : id;
    if (!el) return null;
    el.addEventListener(event, handler);
    return el;
}

// ===== TTS =====
function speakText(text) {
    if (!('speechSynthesis' in window)) return;
    try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-IN'; u.rate = 0.9; u.pitch = 1; u.volume = 1;
        const voices = window.speechSynthesis.getVoices();
        const v = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('en-GB'));
        if (v) u.voice = v;
        window.speechSynthesis.speak(u);
    } catch (e) { console.warn('TTS failed', e); }
}

// ===== Render Menu — Optimized =====
function renderMenu() {
    let items = menuItems;
    const q = searchQuery.trim().toLowerCase();
    const qtyMap = new Map(cart.map(c => [c.id, c.quantity]));

    if (currentCategory !== 'all') items = items.filter(i => i.category === currentCategory);
    if (q) items = items.filter(i => i.name.toLowerCase().includes(q));

    if (!items.length) {
        menuContainer.innerHTML = `
            <div class="empty-cart" style="grid-column:1/-1;padding:60px">
                <i class="fas fa-search" style="font-size:3rem"></i>
                <p>No items found</p>
                <span>Try a different search or category</span>
            </div>`;
        return;
    }

    const fragment = document.createDocumentFragment();

    items.forEach((item, idx) => {
        const qty = qtyMap.get(item.id) || 0;
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.id = item.id;

        const loading = idx < 6 ? 'eager' : 'lazy';

        card.innerHTML = `
            <div class="product-image">
                <img
                    src="${item.image}"
                    alt="${item.name}"
                    width="400" height="260"
                    loading="${loading}"
                    decoding="async"
                    onerror="this.onerror=null;this.src='${MENU_IMAGE_FALLBACK}';this.classList.add('is-loaded')"
                    onload="this.classList.add('is-loaded')"
                >
                <span class="product-badge">${item.category}</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${item.name}</h3>
                <p class="product-price">${item.price}</p>
                <div class="product-actions">
                    <div class="quantity-control">
                        <button class="qty-btn minus" data-id="${item.id}" ${qty <= 0 ? 'disabled' : ''}>-</button>
                        <span class="qty-value" data-id="${item.id}">${qty}</span>
                        <button class="qty-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="btn-add-cart ${qty > 0 ? 'added' : ''}" data-id="${item.id}">
                        <i class="fas ${qty > 0 ? 'fa-check' : 'fa-cart-plus'}"></i>
                        <span class="btn-add-label">${qty > 0 ? 'Added' : 'Add'}</span>
                    </button>
                </div>
            </div>`;

        fragment.appendChild(card);
    });

    menuContainer.innerHTML = '';
    menuContainer.appendChild(fragment);
}

function getCartQty(id) {
    const c = cart.find(c => c.id === id);
    return c ? c.quantity : 0;
}

function updateProductCardState(id) {
    const card = menuContainer.querySelector(`.product-card[data-id="${id}"]`);
    if (!card) return;
    const qty = getCartQty(id);
    const minus = card.querySelector('.qty-btn.minus');
    const qtyVal = card.querySelector('.qty-value');
    const addBtn = card.querySelector('.btn-add-cart');
    if (minus)  minus.disabled = qty <= 0;
    if (qtyVal) qtyVal.textContent = qty;
    if (addBtn) {
        addBtn.classList.toggle('added', qty > 0);
        addBtn.querySelector('i').className = `fas ${qty > 0 ? 'fa-check' : 'fa-cart-plus'}`;
        addBtn.querySelector('.btn-add-label').textContent = qty > 0 ? 'Added' : 'Add';
    }
}

function refreshAllCards() {
    menuContainer.querySelectorAll('.product-card[data-id]').forEach(c => updateProductCardState(+c.dataset.id));
}

// ===== Cart =====
function addToCart(id) {
    const item = menuItemsById.get(id);
    if (!item) return;
    const existing = cart.find(c => c.id === id);
    if (existing) existing.quantity++;
    else cart.push({ id: item.id, name: item.name, price: item.price, category: item.category, image: item.image, quantity: 1 });
    saveCart(); updateCartDisplay(); updateProductCardState(id);
    showToast(`${item.name} added to cart!`);
    cartBtn.style.animation = 'none';
    cartBtn.offsetHeight;
    cartBtn.style.animation = 'cartBounce 0.5s ease';
}

function decreaseQuantity(id) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.quantity--;
    if (item.quantity <= 0) cart = cart.filter(c => c.id !== id);
    saveCart(); updateCartDisplay(); updateProductCardState(id);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCart(); updateCartDisplay(); updateProductCardState(id);
    showToast('Item removed');
}

function updateCartQuantity(id, change) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) cart = cart.filter(c => c.id !== id);
    saveCart(); updateCartDisplay(); updateProductCardState(id);
}

function updateCartDisplay() {
    let totalItems = 0, totalAmount = 0;
    cart.forEach(i => { totalItems += i.quantity; totalAmount += i.price * i.quantity; });
    cartCount.textContent = totalItems;
    cartTotal.textContent = '₹' + totalAmount;
    stickyCart.style.display = totalItems > 0 ? 'block' : 'none';
    updateQrAmount();

    if (!cart.length) {
        emptyCart.style.display = 'flex';
        cartItems.style.display = 'none';
        cartDrawerFooter.style.display = 'none';
        return;
    }
    emptyCart.style.display = 'none';
    cartItems.style.display = 'block';
    cartDrawerFooter.style.display = 'block';

    const fragment = document.createDocumentFragment();
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image"
                 width="60" height="60" loading="lazy"
                 onerror="this.onerror=null;this.src='${MENU_IMAGE_FALLBACK}'"
                 onload="this.classList.add('loaded')">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price} each</div>
            </div>
            <div class="cart-item-qty">
                <button type="button" data-action="decrease" data-id="${item.id}"><i class="fas fa-minus"></i></button>
                <span>${item.quantity}</span>
                <button type="button" data-action="increase" data-id="${item.id}"><i class="fas fa-plus"></i></button>
            </div>
            <button type="button" class="cart-item-remove" data-action="remove" data-id="${item.id}">
                <i class="fas fa-trash-alt"></i>
            </button>`;
        fragment.appendChild(div);
    });

    cartItems.innerHTML = '';
    cartItems.appendChild(fragment);

    cartSubtotal.textContent = '₹' + totalAmount;
    cartGrandTotal.textContent = '₹' + totalAmount;
}

function saveCart()  { writeJsonStorage('sriKrishnaCart', cart); }
function loadCart()  { const s = readJsonStorage('sriKrishnaCart', []); cart = Array.isArray(s) ? s : []; }
function clearCart() { cart = []; saveCart(); updateCartDisplay(); refreshAllCards(); }

// ===== Toast =====
function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== FIXED Hero Slider — No z-index manipulation =====
function startHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots   = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;

    const goto = (idx) => {
        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
        currentSlide = idx;
        const slide = slides[idx];

        // Load background image if not already loaded
        if (slide.dataset.bg && !slide.dataset.loaded) {
            const img = new Image();
            img.onload = () => { 
                slide.style.backgroundImage = `url('${slide.dataset.bg}')`; 
                slide.dataset.loaded = 'true'; 
            };
            img.src = slide.dataset.bg;
        }

        slide.classList.add('active');
        if (dots[idx]) dots[idx].classList.add('active');
    };

    // Load first slide immediately
    if (slides[0].dataset.bg && !slides[0].dataset.loaded) {
        slides[0].style.backgroundImage = `url('${slides[0].dataset.bg}')`;
        slides[0].dataset.loaded = 'true';
    }

    if (heroSliderInterval) clearInterval(heroSliderInterval);
    heroSliderInterval = setInterval(() => goto((currentSlide + 1) % slides.length), 5000);

    dots.forEach((dot, idx) => dot.addEventListener('click', () => { 
        if (idx !== currentSlide) goto(idx); 
    }));
}

// ===== UPI Deeplink Functions =====
function buildUpiDeeplink(app, total) {
    const pa = encodeURIComponent(UPI_ID);
    const pn = encodeURIComponent(HOTEL_NAME);
    const tn = encodeURIComponent('Food Order - Sri Krishna Hotel');
    const am = encodeURIComponent(total.toFixed(2));
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS     = /iPhone|iPad/i.test(navigator.userAgent);

    if (app.id === 'other') {
        return `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
    }

    if (isAndroid && app.pkg) {
        const fallback = encodeURIComponent(`upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`);
        return `intent://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}#Intent;scheme=upi;package=${app.pkg};S.browser_fallback_url=${fallback};end`;
    }

    if (isIOS) {
        if (app.id === 'gpay')    return `tez://upi/pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
        if (app.id === 'phonepe') return `phonepe://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
        if (app.id === 'paytm')   return `paytmmp://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
        return `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
    }

    return `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
}

// ===== Render UPI App Grid =====
function renderUpiAppGrid() {
    const grid = document.getElementById('upi-app-grid');
    if (!grid) return;

    grid.innerHTML = UPI_APPS.map(app => `
        <button type="button" class="upi-app-btn" data-app="${app.id}" onclick="handleUpiAppClick('${app.id}')">
            <div class="upi-app-icon">
                ${app.icon 
                    ? `<img src="${app.icon}" alt="${app.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<span class=\'fallback-icon\' style=\'background:${app.color}\'>${app.name[0]}</span>'">`
                    : `<span class="fallback-icon" style="background:${app.color}">${app.name[0]}</span>`
                }
            </div>
            <span class="upi-app-name">${app.name}</span>
        </button>
    `).join('');
}

function handleUpiAppClick(appId) {
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    if (total <= 0) { showToast('Please add items to cart first'); return; }

    const app = UPI_APPS.find(a => a.id === appId);
    if (!app) return;

    selectedUpiApp = appId;

    // Update visual selection
    document.querySelectorAll('.upi-app-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.app === appId);
    });

    const url = buildUpiDeeplink(app, total);

    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
        window.location.href = url;
        showToast(`${app.name} திறக்கிறது... Pay செய்த பிறகு Confirm செய்யுங்கள்`);
    } else {
        showToast('Mobile-ல open செய்யுங்கள் அல்லது QR scan செய்யுங்கள்');
    }

    // Show QR section and payment done button
    document.getElementById('qr-payment-section').style.display = 'block';
    updatePaymentStatus('pending');
    btnSubmitOrder.disabled = true;
}

// ===== Event Listeners =====
function setupEventListeners() {
    menuContainer.addEventListener('click', handleMenuClick);
    cartItems.addEventListener('click', handleCartClick);

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderMenu();
            safeScrollIntoView(document.getElementById('menu-section'));
        });
    });

    document.querySelectorAll('.mobile-menu-item[data-category]').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            currentCategory = item.dataset.category;
            document.querySelectorAll('.category-btn').forEach(b => {
                b.classList.remove('active');
                if (b.dataset.category === currentCategory) b.classList.add('active');
            });
            renderMenu();
            closeMobileMenu();
            safeScrollIntoView(document.getElementById('menu-section'));
        });
    });

    bindEvent('search-toggle', 'click', () => {
        const bar = document.getElementById('search-bar');
        bar.classList.toggle('active');
        if (bar.classList.contains('active')) setTimeout(() => document.getElementById('search-input').focus(), 100);
    });

    bindEvent('search-close', 'click', () => {
        document.getElementById('search-bar').classList.remove('active');
        document.getElementById('search-input').value = '';
        searchQuery = ''; renderMenu();
    });

    bindEvent('search-input', 'input', e => {
        clearTimeout(searchInputTimer);
        const v = e.target.value;
        searchInputTimer = setTimeout(() => { searchQuery = v; renderMenu(); }, 120);
    });

    bindEvent('menu-toggle',         'click', openMobileMenu);
    bindEvent('mobile-menu-close',   'click', closeMobileMenu);
    bindEvent('mobile-menu-overlay', 'click', closeMobileMenu);

    bindEvent('cart-btn',     'click', openCart);
    bindEvent('cart-close',   'click', closeCart);
    bindEvent('cart-overlay', 'click', closeCart);
    bindEvent('btn-continue', 'click', closeCart);

    bindEvent('btn-place-order', 'click', () => { closeCart(); updateQrAmount(); openOrderModal(); });

    bindEvent('order-modal-close',   'click', closeOrderModal);
    bindEvent('order-modal-overlay', 'click', closeOrderModal);

    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', e => {
            selectedUpiApp = null;
            document.querySelectorAll('.upi-app-btn').forEach(btn => btn.classList.remove('selected'));

            if (e.target.value === 'online') {
                document.getElementById('online-payment-section').style.display = 'block';
                document.getElementById('cash-payment-section').style.display = 'none';
                document.getElementById('qr-payment-section').style.display = 'none';
                updatePaymentStatus('pending');
                paymentStatus = 'pending';
                btnSubmitOrder.disabled = true;
            } else {
                document.getElementById('online-payment-section').style.display = 'none';
                document.getElementById('cash-payment-section').style.display = 'block';
                document.getElementById('qr-payment-section').style.display = 'none';
                paymentStatus = 'cash';
                btnSubmitOrder.disabled = false;
            }
        });
    });

    const copyUpiBtn = document.getElementById('btn-copy-upi');
    if (copyUpiBtn) copyUpiBtn.addEventListener('click', copyUpiId);

    if (btnDownloadBill) {
        btnDownloadBill.addEventListener('click', async () => {
            if (!lastGeneratedBill) return;
            try { await generateBillPDF(lastGeneratedBill); showToast('Bill download started'); }
            catch (e) { console.error(e); showToast('Download failed. Try again.'); }
        });
    }

    bindEvent('order-form', 'submit', e => { e.preventDefault(); submitOrder(); });
    bindEvent('btn-new-order', 'click', () => { closeSuccessModal(); clearCart(); safeScrollToTop(); });

    bindEvent('mobile-view-orders', 'click', e => { e.preventDefault(); closeMobileMenu(); openHistoryModal(); });
    bindEvent('footer-history',     'click', e => { e.preventDefault(); openHistoryModal(); });
    bindEvent('history-modal-close',   'click', closeHistoryModal);
    bindEvent('history-modal-overlay', 'click', closeHistoryModal);

    bindEvent('mobile-contact', 'click', e => { e.preventDefault(); closeMobileMenu(); openContactModal(); });
    bindEvent('footer-contact', 'click', e => { e.preventDefault(); openContactModal(); });
    bindEvent('contact-modal-close',   'click', closeContactModal);
    bindEvent('contact-modal-overlay', 'click', closeContactModal);

    bindEvent('customer-mobile', 'input', e => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
    });

    // Add payment done button dynamically
    const paymentStatusEl = document.getElementById('payment-status');
    if (paymentStatusEl) {
        const doneBtn = document.createElement('button');
        doneBtn.type = 'button';
        doneBtn.id = 'btn-payment-done';
        doneBtn.className = 'btn-payment-done';
        doneBtn.innerHTML = '<i class="fas fa-check-circle"></i> Payment செய்துவிட்டேன் — Confirm';
        doneBtn.style.cssText = 'width:100%;padding:14px;border-radius:50px;background:linear-gradient(135deg,#2e7d32,#1b5e20);color:white;font-weight:700;font-size:1rem;display:none;align-items:center;justify-content:center;gap:8px;margin-top:12px;box-shadow:0 4px 15px rgba(46,125,50,0.3);cursor:pointer;transition:all 0.3s;';
        doneBtn.addEventListener('click', () => {
            paymentStatus = 'paid';
            updatePaymentStatus('paid');
            btnSubmitOrder.disabled = false;
            showToast('✅ Payment confirmed!');
            notifyBillCounterFromForm();
            doneBtn.style.display = 'none';
        });
        paymentStatusEl.parentNode.insertBefore(doneBtn, paymentStatusEl.nextSibling);
    }
}

function handleMenuClick(event) {
    const plus  = event.target.closest('.qty-btn.plus');
    if (plus)  { addToCart(+plus.dataset.id); return; }
    const minus = event.target.closest('.qty-btn.minus');
    if (minus) { decreaseQuantity(+minus.dataset.id); return; }
    const add   = event.target.closest('.btn-add-cart');
    if (add)   addToCart(+add.dataset.id);
}

function handleCartClick(event) {
    const btn = event.target.closest('button[data-action][data-id]');
    if (!btn) return;
    const id     = +btn.dataset.id;
    const action = btn.dataset.action;
    if (action === 'increase') { updateCartQuantity(id, 1); return; }
    if (action === 'decrease') { updateCartQuantity(id, -1); return; }
    if (action === 'remove')   removeFromCart(id);
}

// ===== Modals =====
function openCart()         { cartDrawer.classList.add('open'); cartOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeCart()        { cartDrawer.classList.remove('open'); cartOverlay.classList.remove('open'); document.body.style.overflow = ''; }
function openMobileMenu()   { document.getElementById('mobile-menu').classList.add('open'); document.getElementById('mobile-menu-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMobileMenu()  { document.getElementById('mobile-menu').classList.remove('open'); document.getElementById('mobile-menu-overlay').classList.remove('open'); document.body.style.overflow = ''; }

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
    btnSubmitOrder.disabled = false;
    if (btnDownloadBill) btnDownloadBill.style.display = 'none';
    updateQrAmount();

    const doneBtn = document.getElementById('btn-payment-done');
    if (doneBtn) doneBtn.style.display = 'none';
}

function closeOrderModal()   { document.getElementById('order-modal').classList.remove('open'); document.getElementById('order-modal-overlay').classList.remove('open'); document.body.style.overflow = ''; }
function openSuccessModal()  { document.getElementById('success-modal').classList.add('open'); document.getElementById('success-modal-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeSuccessModal() { document.getElementById('success-modal').classList.remove('open'); document.getElementById('success-modal-overlay').classList.remove('open'); document.body.style.overflow = ''; }
function openHistoryModal()  { renderOrderHistory(); document.getElementById('history-modal').classList.add('open'); document.getElementById('history-modal-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeHistoryModal() { document.getElementById('history-modal').classList.remove('open'); document.getElementById('history-modal-overlay').classList.remove('open'); document.body.style.overflow = ''; }
function openContactModal()  { document.getElementById('contact-modal').classList.add('open'); document.getElementById('contact-modal-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeContactModal() { document.getElementById('contact-modal').classList.remove('open'); document.getElementById('contact-modal-overlay').classList.remove('open'); document.body.style.overflow = ''; }

function updatePaymentStatus(status) {
    const el = document.getElementById('payment-status');
    const doneBtn = document.getElementById('btn-payment-done');

    if (status === 'paid') {
        el.innerHTML = '<span class="status-paid">✅ Payment Completed — Submit Order செய்யலாம்</span>';
        if (doneBtn) doneBtn.style.display = 'none';
    } else if (status === 'pending') {
        el.innerHTML = '<span class="status-pending">⏳ UPI App-ஐ தேர்வு செய்து Pay செய்த பிறகு "Payment Done" click செய்யுங்கள்</span>';
        if (doneBtn) doneBtn.style.display = 'flex';
    } else if (status === 'cash') {
        el.innerHTML = '<span class="status-cash">💵 Cash on Delivery</span>';
        if (doneBtn) doneBtn.style.display = 'none';
    }
}

function notifyBillCounterFromForm() {
    const name   = document.getElementById('customer-name').value.trim() || 'Guest';
    const table  = document.getElementById('table-number').value.trim() || 'N/A';
    const total  = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const items  = cart.map(i => `${i.name} x${i.quantity}`);
    showAdminNotification(name, table, items, total);
    if ('Notification' in window && Notification.permission === 'granted') {
        try { new Notification('NEW ORDER', { body: `Customer: ${name}\nTable: ${table}\nTotal: ₹${total}` }); }
        catch (e) { console.warn(e); }
    }
}

function showAdminNotification(name, table, items, total) {
    if (!adminNotificationPanel) return;
    adminNotificationPanel.innerHTML = `
        <h4>🔔 NEW ORDER RECEIVED</h4>
        <p><strong>Customer:</strong> ${name}</p>
        <p><strong>Table:</strong> ${table}</p>
        <p><strong>Total:</strong> ₹${total}</p>
        <p><strong>Items:</strong> ${items.join(', ')}</p>
        <small>Payment completed.</small>`;
    adminNotificationPanel.classList.add('open');
    speakText('New order received. Check bill counter.');
    setTimeout(() => adminNotificationPanel.classList.remove('open'), 8000);
}

// ===== WhatsApp Bill =====
function buildWhatsAppBill(order) {
    const d = '%0A━━━━━━━━━━━━━━━━━━━━';
    const t = '%0A─────────────────────';
    const rows = order.items.map(item => {
        const n = item.name.length > 16 ? item.name.substring(0, 14) + '..' : item.name;
        return `${encodeURIComponent(n + ' x' + item.quantity)}%20%20%E2%82%B9${item.price * item.quantity}`;
    }).join('%0A');
    return `%F0%9F%A7%BE%20*${encodeURIComponent(HOTEL_NAME.toUpperCase())}*` +
        `%0A%F0%9F%93%9E%20${encodeURIComponent(PHONE_NUMBER)}${d}` +
        `%0A%F0%9F%94%96%20*Order:*%20${encodeURIComponent(order.id)}` +
        `%0A%F0%9F%93%85%20${encodeURIComponent(order.date)}%20${encodeURIComponent(order.time)}${d}` +
        `%0A%F0%9F%91%A4%20${encodeURIComponent(order.customerName)}%20%7C%20%F0%9F%AA%91%20Table%20${encodeURIComponent(order.tableNumber)}${d}` +
        `%0A${rows}${t}` +
        `%0A*%F0%9F%92%B0%20TOTAL%3A%20%E2%82%B9${order.totalAmount}*${d}` +
        `%0A%F0%9F%92%B3%20${encodeURIComponent(order.paymentStatus)}` +
        (order.notes ? `%0A%F0%9F%93%9D%20${encodeURIComponent(order.notes)}` : '') +
        `${d}%0A%F0%9F%99%8F%20*Thank you! Visit again.*`;
}

// ===== Submit Order =====
function submitOrder() {
    const name   = document.getElementById('customer-name').value.trim();
    const mobile = document.getElementById('customer-mobile').value.trim();
    const table  = document.getElementById('table-number').value.trim();
    const notes  = document.getElementById('order-notes').value.trim();
    const method = document.querySelector('input[name="payment-method"]:checked')?.value || 'cash';

    if (!name || !mobile || !table)  { showToast('Please fill all required fields'); return; }
    if (mobile.length !== 10)        { showToast('Enter valid 10-digit mobile number'); return; }
    if (method === 'online' && paymentStatus !== 'paid') {
        showToast('Please complete payment first. UPI App-ல pay செய்து "Payment Done" click செய்யுங்கள்.');
        return;
    }

    const totalAmount = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const now = new Date();
    const order = {
        id:              'ORD' + Date.now(),
        customerName:    name,
        customerMobile:  mobile,
        tableNumber:     table,
        notes,
        paymentMethod:   method,
        paymentStatus:   method === 'cash' ? '💵 Cash' : '✅ Paid (Online)',
        items:           [...cart],
        totalAmount,
        date:            now.toLocaleDateString('en-IN'),
        time:            now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        timestamp:       now.getTime()
    };

    saveOrderToHistory(order);
    lastGeneratedBill = order;
    if (btnDownloadBill) btnDownloadBill.style.display = 'none';

    generateBillPDF(order)
        .then(() => { if (btnDownloadBill) btnDownloadBill.style.display = 'flex'; })
        .catch(e => { console.error(e); showToast('Order saved. Bill download can be retried.'); });

    setTimeout(() => safeOpen(`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppBill(order)}`), 400);
    setTimeout(() => speakText('Thank you for your order. Visit again.'), 500);

    closeOrderModal();
    openSuccessModal();
}

// ===== Order History =====
function saveOrderToHistory(order) {
    let h = readJsonStorage('sriKrishnaOrders', []);
    if (!Array.isArray(h)) h = [];
    h.unshift(order);
    if (h.length > 50) h = h.slice(0, 50);
    writeJsonStorage('sriKrishnaOrders', h);
}

function renderOrderHistory() {
    const history   = readJsonStorage('sriKrishnaOrders', []);
    const container = document.getElementById('order-history-list');
    if (!history.length) {
        container.innerHTML = `<div class="empty-history"><i class="fas fa-clipboard-list"></i><p>No orders yet</p></div>`;
        return;
    }
    container.innerHTML = history.map(o => `
        <div class="history-item">
            <div class="history-item-header">
                <h4>${o.customerName} - Table ${o.tableNumber}</h4>
                <span class="history-item-date">${o.date} ${o.time}</span>
            </div>
            <div class="history-item-details">${o.items.map(i => `${i.name} x${i.quantity}`).join(', ')}</div>
           div class="history-item-total">₹${o.totalAmount} - ${o.paymentStatus}</div>
        </div>`).join('');
}

// ===== Bill PDF =====
async function generateBillPDF(order) {
    const jsPDF = await ensureJsPdfLoaded();
    const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    const L = 18, R = 192;
    let y = 18;
    doc.setFontSize(18); doc.setFont('helvetica', 'bold');
    doc.text(HOTEL_NAME.toUpperCase(), 105, y, { align: 'center' }); y += 8;
    doc.setFontSize(11); doc.setFont('helvetica', 'normal');
    doc.text('Authentic South Indian Cuisine', 105, y, { align: 'center' }); y += 6;
    doc.text(`Phone: ${PHONE_NUMBER}`, 105, y, { align: 'center' }); y += 8;
    doc.setLineWidth(0.5); doc.line(L, y, R, y); y += 8;
    doc.setFontSize(10);
    doc.text(`Date: ${order.date}`, L, y); doc.text(`Time: ${order.time}`, R, y, { align: 'right' }); y += 7;
    doc.text(`Order ID: ${order.id}`, L, y); y += 8;
    doc.line(L, y, R, y); y += 8;
    doc.text(`Customer: ${order.customerName}`, L, y); y += 6;
    doc.text(`Mobile: ${order.customerMobile}`, L, y); y += 6;
    doc.text(`Table No: ${order.tableNumber}`, L, y); y += 6;
    if (order.notes) { doc.text(`Notes: ${order.notes}`, L, y); y += 6; }
    y += 2; doc.line(L, y, R, y); y += 8;
    doc.setFont('helvetica', 'bold');
    doc.text('Item', L, y); doc.text('Qty', 120, y, { align: 'center' }); doc.text('Amount', R, y, { align: 'right' }); y += 6;
    doc.setLineWidth(0.3); doc.line(L, y, R, y); y += 8;
    doc.setFont('helvetica', 'normal');
    order.items.forEach(item => {
        const n = item.name.length > 28 ? item.name.slice(0, 25) + '...' : item.name;
        doc.text(n, L, y); doc.text(String(item.quantity), 120, y, { align: 'center' });
        doc.text(`Rs.${item.price * item.quantity}`, R, y, { align: 'right' }); y += 7;
    });
    y += 4; doc.line(L, y, R, y); y += 8;
    doc.setFont('helvetica', 'bold');
    doc.text('Total Amount', L, y); doc.text(`Rs.${order.totalAmount}`, R, y, { align: 'right' }); y += 10;
    doc.setFont('helvetica', 'normal');
    doc.text(`Payment: ${order.paymentStatus}`, L, y); y += 10;
    doc.setLineWidth(0.5); doc.line(L, y, R, y); y += 10;
    doc.text('Thank you for choosing Sri Krishna Hotel!', 105, y, { align: 'center' }); y += 7;
    doc.text('Order prepared with care and served fresh.', 105, y, { align: 'center' });
    doc.save(`SriKrishna_Bill_${order.id}.pdf`);
}

function ensureJsPdfLoaded() {
    if (window.jspdf && window.jspdf.jsPDF) return Promise.resolve(window.jspdf.jsPDF);
    if (jspdfLoader) return jspdfLoader;
    jspdfLoader = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = PDF_SCRIPT_URL; s.async = true;
        s.onload  = () => window.jspdf && window.jspdf.jsPDF ? resolve(window.jspdf.jsPDF) : reject(new Error('jsPDF not found'));
        s.onerror = () => reject(new Error('jsPDF load failed'));
        document.head.appendChild(s);
    }).catch(e => { jspdfLoader = null; throw e; });
    return jspdfLoader;
}

// ===== QR / UPI Helpers =====
function updateQrAmount() {
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const el = document.getElementById('qr-display-amount');
    if (el) el.textContent = total;
}

function copyUpiId() {
    const upi = UPI_ID;
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(upi).then(() => showToast('UPI ID copied! ✅')).catch(() => fallbackCopy(upi));
    } else fallbackCopy(upi);
}

function fallbackCopy(text) {
    try {
        const ta = document.createElement('textarea');
        ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
        showToast('UPI ID copied! ✅');
    } catch { showToast('Copy failed. Please copy manually.'); }
}

// ===== Voice =====
if ('speechSynthesis' in window) { window.speechSynthesis.onvoiceschanged = function(){}; }
