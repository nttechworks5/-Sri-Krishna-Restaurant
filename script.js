// Sri Krishna Hotel - Complete Ordering System
// 100% Working - No Loading Screen - Instant Open

const menuItems = [
    { id: 1, name: "Chicken Rice", price: 90, category: "Rice", image: "chickenrice.jpg" },
    { id: 2, name: "Egg Rice", price: 80, category: "Rice", image: "eggrice.jpg" },
    { id: 3, name: "Veg Rice", price: 70, category: "Rice", image: "vegrice.jpg" },
    { id: 4, name: "Idly", price: 10, category: "Tiffin", image: "idly .jpeg" },
    { id: 5, name: "Vada", price: 10, category: "Tiffin", image: "vada.jpg" },
    { id: 6, name: "Dosa", price: 20, category: "Tiffin", image: "dosa.jpg" },
    { id: 7, name: "Plain Dosa", price: 50, category: "Tiffin", image: "plain dosa .jpeg" },
    { id: 8, name: "Set Dosa", price: 50, category: "Tiffin", image: "set dosa.jpg" },
    { id: 9, name: "Masala Dosa", price: 70, category: "Tiffin", image: "masal dosa.jpg" },
    { id: 10, name: "Poori", price: 40, category: "Tiffin", image: "poori.jpg" },
    { id: 11, name: "Chicken Biryani", price: 90, category: "Biryani", image: "chicken-biryani.jpg" },
    { id: 12, name: "Egg Biryani", price: 80, category: "Biryani", image: "eggbiryani.jpg" },
    { id: 13, name: "Veg Biryani", price: 70, category: "Biryani", image: "vegbiryani.jpg" },
    { id: 14, name: "Veg Meals", price: 80, category: "Meals", image: "veg meals.jpg" },
    { id: 15, name: "Non Veg Meals", price: 120, category: "Meals", image: "non veg meals.jpg" },
    { id: 16, name: "Fish Meals", price: 140, category: "Meals", image: "fish meals.jpg" },
    { id: 17, name: "Bread", price: 20, category: "Bread Items", image: "bread.jpeg" },
    { id: 18, name: "Veg Sandwich", price: 80, category: "Bread Items", image: "Veg sandwich .jpg" },
    { id: 19, name: "Chicken Sandwich", price: 120, category: "Bread Items", image: "chicken sandwich .jpg" },
    { id: 20, name: "Omelette", price: 20, category: "Egg Items", image: "Omelette .jpg" },
    { id: 21, name: "Half Boil", price: 20, category: "Egg Items", image: "half boil.jpeg" },
    { id: 22, name: "Boiled Egg", price: 20, category: "Egg Items", image: "Boiled egg.jpg" },
    { id: 23, name: "Chicken 100g", price: 40, category: "Chicken", image: "chicken 100g.jpg" },
    { id: 24, name: "Chicken 1kg", price: 400, category: "Chicken", image: "chicken 40g.jpg" },
    { id: 25, name: "Chicken Noodles", price: 90, category: "Noodles", image: "chickennoodles.jpg" },
    { id: 26, name: "Veg Noodles", price: 60, category: "Noodles", image: "veg noodles.jpg" },
    { id: 27, name: "Egg Noodles", price: 80, category: "Noodles", image: "eggnoodles.jpg" }
];

const HOTEL_NAME = "Sri Krishna Hotel";
const PHONE_NUMBER = "98433 36980";
const WHATSAPP_NUMBER = "919843336980";
const UPI_ID = "9843336980@ibl";
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&fm=webp&q=80";

const UPI_APPS = [
    { id: 'gpay', name: 'GPay', icon: 'https://img.icons8.com/color/96/google-pay.png', color: '#4285F4', pkg: 'com.google.android.apps.nbu.paisa.user' },
    { id: 'phonepe', name: 'PhonePe', icon: 'https://img.icons8.com/color/96/phone-pe.png', color: '#5f259f', pkg: 'com.phonepe.app' },
    { id: 'paytm', name: 'Paytm', icon: 'https://img.icons8.com/color/96/paytm.png', color: '#00b9f1', pkg: 'net.one97.paytm' },
    { id: 'bhim', name: 'BHIM', icon: 'https://img.icons8.com/color/96/bhim.png', color: '#00a651', pkg: 'in.org.npci.upiapp' },
    { id: 'amazonpay', name: 'Amazon', icon: 'https://img.icons8.com/color/96/amazon.png', color: '#FF9900', pkg: 'in.amazon.mShop.android.shopping' },
    { id: 'other', name: 'Other UPI', icon: null, color: '#607d8b', pkg: null }
];

let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let paymentStatus = 'cash';
let currentSlide = 0;
let selectedUpiApp = null;
let lastGeneratedBill = null;
let heroSliderInterval = null;

// ===== DOM Elements =====
const els = {
    menuContainer: document.getElementById('menu-container'),
    cartCount: document.getElementById('cart-count'),
    cartTotal: document.getElementById('cart-total'),
    cartItems: document.getElementById('cart-items'),
    cartDrawer: document.getElementById('cart-drawer'),
    cartOverlay: document.getElementById('cart-overlay'),
    emptyCart: document.getElementById('empty-cart'),
    cartDrawerFooter: document.getElementById('cart-drawer-footer'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartGrandTotal: document.getElementById('cart-grand-total'),
    stickyCart: document.getElementById('sticky-cart'),
    cartBtn: document.getElementById('cart-btn'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toast-message'),
    btnSubmitOrder: document.getElementById('btn-submit-order'),
    btnDownloadBill: document.getElementById('btn-download-bill'),
    paymentStatus: document.getElementById('payment-status'),
    qrPaymentSection: document.getElementById('qr-payment-section'),
    onlinePaymentSection: document.getElementById('online-payment-section'),
    cashPaymentSection: document.getElementById('cash-payment-section'),
    upiAppGrid: document.getElementById('upi-app-grid'),
    qrDisplayAmount: document.getElementById('qr-display-amount'),
    orderForm: document.getElementById('order-form')
};

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    setupEventListeners();
    renderMenu();
    updateCartDisplay();
    renderUpiAppGrid();
    startHeroSlider();
});

// ===== Storage =====
function loadCart() {
    try {
        const saved = localStorage.getItem('sriKrishnaCart');
        cart = saved ? JSON.parse(saved) : [];
        if (!Array.isArray(cart)) cart = [];
    } catch {
        cart = [];
    }
}

function saveCart() {
    try { localStorage.setItem('sriKrishnaCart', JSON.stringify(cart)); } catch {}
}

// ===== Render Menu =====
function renderMenu() {
    let items = menuItems;
    const q = searchQuery.trim().toLowerCase();

    if (currentCategory !== 'all') items = items.filter(i => i.category === currentCategory);
    if (q) items = items.filter(i => i.name.toLowerCase().includes(q));

    if (!items.length) {
        els.menuContainer.innerHTML = `
            <div class="empty-cart" style="grid-column:1/-1;padding:60px;text-align:center">
                <i class="fas fa-search" style="font-size:3rem;color:#ccc"></i>
                <p style="margin-top:16px;font-weight:600">No items found</p>
                <span style="color:#888">Try a different search or category</span>
            </div>`;
        return;
    }

    const qtyMap = new Map(cart.map(c => [c.id, c.quantity]));
    let html = '';

    items.forEach((item, idx) => {
        const qty = qtyMap.get(item.id) || 0;
        html += `
        <div class="product-card" data-id="${item.id}">
            <div class="product-image">
                <img src="${item.image}" alt="${item.name}" loading="${idx < 6 ? 'eager' : 'lazy'}" 
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
        </div>`;
    });

    els.menuContainer.innerHTML = html;
}

// ===== Cart Functions =====
function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ id: item.id, name: item.name, price: item.price, category: item.category, image: item.image, quantity: 1 });
    }

    saveCart();
    updateCartDisplay();
    updateCardUI(id);
    showToast(item.name + ' added to cart!');
}

function decreaseQuantity(id) {
    const item = cart.find(c => c.id === id);
    if (!item) return;

    item.quantity--;
    if (item.quantity <= 0) {
        cart = cart.filter(c => c.id !== id);
    }

    saveCart();
    updateCartDisplay();
    updateCardUI(id);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCart();
    updateCartDisplay();
    updateCardUI(id);
    showToast('Item removed');
}

function updateCartQuantity(id, change) {
    const item = cart.find(c => c.id === id);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(c => c.id !== id);
    }

    saveCart();
    updateCartDisplay();
    updateCardUI(id);
}

function updateCartDisplay() {
    let totalItems = 0, totalAmount = 0;
    cart.forEach(i => { totalItems += i.quantity; totalAmount += i.price * i.quantity; });

    els.cartCount.textContent = totalItems;
    els.cartTotal.textContent = 'Rs.' + totalAmount;
    els.stickyCart.style.display = totalItems > 0 ? 'block' : 'none';
    updateQrAmount();

    if (!cart.length) {
        els.emptyCart.style.display = 'flex';
        els.cartItems.style.display = 'none';
        els.cartDrawerFooter.style.display = 'none';
        return;
    }

    els.emptyCart.style.display = 'none';
    els.cartItems.style.display = 'block';
    els.cartDrawerFooter.style.display = 'block';

    let html = '';
    cart.forEach(item => {
        html += `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" width="60" height="60"
                onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'">
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
        </div>`;
    });

    els.cartItems.innerHTML = html;
    els.cartSubtotal.textContent = 'Rs.' + totalAmount;
    els.cartGrandTotal.textContent = 'Rs.' + totalAmount;
}

function updateCardUI(id) {
    const card = els.menuContainer.querySelector(`.product-card[data-id="${id}"]`);
    if (!card) return;

    const qty = cart.find(c => c.id === id)?.quantity || 0;
    const minus = card.querySelector('.qty-btn.minus');
    const qtyVal = card.querySelector('.qty-value');
    const addBtn = card.querySelector('.btn-add-cart');

    if (minus) minus.disabled = qty <= 0;
    if (qtyVal) qtyVal.textContent = qty;
    if (addBtn) {
        addBtn.classList.toggle('added', qty > 0);
        addBtn.innerHTML = `<i class="fas ${qty > 0 ? 'fa-check' : 'fa-cart-plus'}"></i><span>${qty > 0 ? 'Added' : 'Add'}</span>`;
    }
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
    document.querySelectorAll('.product-card').forEach(card => {
        const id = parseInt(card.dataset.id);
        updateCardUI(id);
    });
}

// ===== Toast =====
function showToast(msg) {
    if (!els.toast || !els.toastMessage) return;
    els.toastMessage.textContent = msg;
    els.toast.classList.add('show');
    setTimeout(() => els.toast.classList.remove('show'), 2500);
}

// ===== Hero Slider =====
function startHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
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

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => { if (idx !== currentSlide) goto(idx); });
    });
}

// ===== UPI Payment =====
function renderUpiAppGrid() {
    if (!els.upiAppGrid) return;

    let html = '';
    UPI_APPS.forEach(app => {
        html += `
        <button type="button" class="upi-app-btn" data-app="${app.id}">
            <div class="upi-app-icon">
                ${app.icon 
                    ? `<img src="${app.icon}" alt="${app.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<span class=\'fallback-icon\' style=\'background:${app.color}\'>${app.name[0]}</span>'">`
                    : `<span class="fallback-icon" style="background:${app.color}">${app.name[0]}</span>`
                }
            </div>
            <span class="upi-app-name">${app.name}</span>
        </button>`;
    });

    els.upiAppGrid.innerHTML = html;
}

function handleUpiAppClick(appId) {
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    if (total <= 0) { showToast('Please add items to cart first'); return; }

    const app = UPI_APPS.find(a => a.id === appId);
    if (!app) return;

    selectedUpiApp = appId;

    document.querySelectorAll('.upi-app-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.app === appId);
    });

    const pa = encodeURIComponent(UPI_ID);
    const pn = encodeURIComponent(HOTEL_NAME);
    const am = encodeURIComponent(total.toFixed(2));
    const tn = encodeURIComponent('Food Order - Sri Krishna Hotel');

    let url;
    if (/Android/i.test(navigator.userAgent) && app.pkg) {
        const fallback = encodeURIComponent(`upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`);
        url = `intent://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}#Intent;scheme=upi;package=${app.pkg};S.browser_fallback_url=${fallback};end`;
    } else if (/iPhone|iPad/i.test(navigator.userAgent)) {
        if (app.id === 'gpay') url = `tez://upi/pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
        else if (app.id === 'phonepe') url = `phonepe://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
        else if (app.id === 'paytm') url = `paytmmp://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
        else url = `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
    } else {
        url = `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
    }

    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
        window.location.href = url;
        showToast('Opening ' + app.name + '... Complete payment to enable submit');
    } else {
        showToast('Please open on mobile or scan QR code');
    }

    els.qrPaymentSection.style.display = 'block';
    updatePaymentStatus('paid');
    paymentStatus = 'paid';
    els.btnSubmitOrder.disabled = false;
}

function updatePaymentStatus(status) {
    if (!els.paymentStatus) return;

    if (status === 'paid') {
        els.paymentStatus.innerHTML = '<span class="status-paid">Payment App Selected - You can now Submit Order</span>';
    } else if (status === 'pending') {
        els.paymentStatus.innerHTML = '<span class="status-pending">Select a UPI App to enable payment</span>';
    } else if (status === 'cash') {
        els.paymentStatus.innerHTML = '<span class="status-cash">Cash on Delivery</span>';
    }
}

function updateQrAmount() {
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    if (els.qrDisplayAmount) els.qrDisplayAmount.textContent = total;
}

function copyUpiId() {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(UPI_ID).then(() => showToast('UPI ID copied!'));
    } else {
        const ta = document.createElement('textarea');
        ta.value = UPI_ID;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast('UPI ID copied!');
    }
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Menu clicks
    els.menuContainer.addEventListener('click', function(e) {
        const plus = e.target.closest('.qty-btn.plus');
        if (plus) { addToCart(parseInt(plus.dataset.id)); return; }

        const minus = e.target.closest('.qty-btn.minus');
        if (minus) { decreaseQuantity(parseInt(minus.dataset.id)); return; }

        const add = e.target.closest('.btn-add-cart');
        if (add) { addToCart(parseInt(add.dataset.id)); }
    });

    // Cart clicks
    els.cartItems.addEventListener('click', function(e) {
        const btn = e.target.closest('button[data-action]');
        if (!btn) return;

        const id = parseInt(btn.dataset.id);
        const action = btn.dataset.action;

        if (action === 'increase') updateCartQuantity(id, 1);
        else if (action === 'decrease') updateCartQuantity(id, -1);
        else if (action === 'remove') removeFromCart(id);
    });

    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            renderMenu();
            document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Mobile menu categories
    document.querySelectorAll('.mobile-menu-item[data-category]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            currentCategory = this.dataset.category;
            document.querySelectorAll('.category-btn').forEach(b => {
                b.classList.remove('active');
                if (b.dataset.category === currentCategory) b.classList.add('active');
            });
            renderMenu();
            closeMobileMenu();
            document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Search
    document.getElementById('search-toggle').addEventListener('click', function() {
        document.getElementById('search-bar').classList.toggle('active');
    });

    document.getElementById('search-close').addEventListener('click', function() {
        document.getElementById('search-bar').classList.remove('active');
        document.getElementById('search-input').value = '';
        searchQuery = '';
        renderMenu();
    });

    document.getElementById('search-input').addEventListener('input', function() {
        searchQuery = this.value;
        renderMenu();
    });

    // Mobile menu
    document.getElementById('menu-toggle').addEventListener('click', openMobileMenu);
    document.getElementById('mobile-menu-close').addEventListener('click', closeMobileMenu);
    document.getElementById('mobile-menu-overlay').addEventListener('click', closeMobileMenu);

    // Cart
    els.cartBtn.addEventListener('click', openCart);
    document.getElementById('cart-close').addEventListener('click', closeCart);
    els.cartOverlay.addEventListener('click', closeCart);
    document.getElementById('btn-continue').addEventListener('click', closeCart);
    document.getElementById('btn-place-order').addEventListener('click', function() {
        closeCart();
        updateQrAmount();
        openOrderModal();
    });

    // Order modal
    document.getElementById('order-modal-close').addEventListener('click', closeOrderModal);
    document.getElementById('order-modal-overlay').addEventListener('click', closeOrderModal);

    // Payment method
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', function() {
            selectedUpiApp = null;
            document.querySelectorAll('.upi-app-btn').forEach(btn => btn.classList.remove('selected'));

            if (this.value === 'online') {
                els.onlinePaymentSection.style.display = 'block';
                els.cashPaymentSection.style.display = 'none';
                els.qrPaymentSection.style.display = 'none';
                updatePaymentStatus('pending');
                paymentStatus = 'pending';
                els.btnSubmitOrder.disabled = true;
            } else {
                els.onlinePaymentSection.style.display = 'none';
                els.cashPaymentSection.style.display = 'block';
                els.qrPaymentSection.style.display = 'none';
                paymentStatus = 'cash';
                els.btnSubmitOrder.disabled = false;
            }
        });
    });

    // UPI app clicks
    els.upiAppGrid.addEventListener('click', function(e) {
        const btn = e.target.closest('.upi-app-btn');
        if (btn) handleUpiAppClick(btn.dataset.app);
    });

    // Copy UPI
    document.getElementById('btn-copy-upi').addEventListener('click', copyUpiId);

    // Submit order
    els.orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitOrder();
    });

    // New order
    document.getElementById('btn-new-order').addEventListener('click', function() {
        closeSuccessModal();
        clearCart();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Download bill
    if (els.btnDownloadBill) {
        els.btnDownloadBill.addEventListener('click', function() {
            if (lastGeneratedBill) generateBillPDF(lastGeneratedBill);
        });
    }

    // History
    document.getElementById('mobile-view-orders').addEventListener('click', function(e) {
        e.preventDefault(); closeMobileMenu(); openHistoryModal();
    });
    document.getElementById('footer-history').addEventListener('click', function(e) {
        e.preventDefault(); openHistoryModal();
    });
    document.getElementById('history-modal-close').addEventListener('click', closeHistoryModal);
    document.getElementById('history-modal-overlay').addEventListener('click', closeHistoryModal);

    // Contact
    document.getElementById('mobile-contact').addEventListener('click', function(e) {
        e.preventDefault(); closeMobileMenu(); openContactModal();
    });
    document.getElementById('footer-contact').addEventListener('click', function(e) {
        e.preventDefault(); openContactModal();
    });
    document.getElementById('contact-modal-close').addEventListener('click', closeContactModal);
    document.getElementById('contact-modal-overlay').addEventListener('click', closeContactModal);

    // Mobile input validation
    document.getElementById('customer-mobile').addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').slice(0, 10);
    });
}

// ===== Modal Functions =====
function openCart() { els.cartDrawer.classList.add('open'); els.cartOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeCart() { els.cartDrawer.classList.remove('open'); els.cartOverlay.classList.remove('open'); document.body.style.overflow = ''; }
function openMobileMenu() { document.getElementById('mobile-menu').classList.add('open'); document.getElementById('mobile-menu-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMobileMenu() { document.getElementById('mobile-menu').classList.remove('open'); document.getElementById('mobile-menu-overlay').classList.remove('open'); document.body.style.overflow = ''; }

function openOrderModal() {
    document.getElementById('order-modal').classList.add('open');
    document.getElementById('order-modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    els.orderForm.reset();
    document.querySelector('input[name="payment-method"][value="cash"]').checked = true;
    els.onlinePaymentSection.style.display = 'none';
    els.cashPaymentSection.style.display = 'block';
    els.qrPaymentSection.style.display = 'none';
    selectedUpiApp = null;
    document.querySelectorAll('.upi-app-btn').forEach(btn => btn.classList.remove('selected'));
    updatePaymentStatus('cash');
    paymentStatus = 'cash';
    els.btnSubmitOrder.disabled = false;
    if (els.btnDownloadBill) els.btnDownloadBill.style.display = 'none';
    updateQrAmount();
}

function closeOrderModal() { document.getElementById('order-modal').classList.remove('open'); document.getElementById('order-modal-overlay').classList.remove('open'); document.body.style.overflow = ''; }
function openSuccessModal() { document.getElementById('success-modal').classList.add('open'); document.getElementById('success-modal-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeSuccessModal() { document.getElementById('success-modal').classList.remove('open'); document.getElementById('success-modal-overlay').classList.remove('open'); document.body.style.overflow = ''; }
function openHistoryModal() { renderOrderHistory(); document.getElementById('history-modal').classList.add('open'); document.getElementById('history-modal-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeHistoryModal() { document.getElementById('history-modal').classList.remove('open'); document.getElementById('history-modal-overlay').classList.remove('open'); document.body.style.overflow = ''; }
function openContactModal() { document.getElementById('contact-modal').classList.add('open'); document.getElementById('contact-modal-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeContactModal() { document.getElementById('contact-modal').classList.remove('open'); document.getElementById('contact-modal-overlay').classList.remove('open'); document.body.style.overflow = ''; }

// ===== Submit Order =====
function submitOrder() {
    const name = document.getElementById('customer-name').value.trim();
    const mobile = document.getElementById('customer-mobile').value.trim();
    const table = document.getElementById('table-number').value.trim();
    const notes = document.getElementById('order-notes').value.trim();
    const method = document.querySelector('input[name="payment-method"]:checked')?.value || 'cash';

    if (!name || !mobile || !table) { showToast('Please fill all required fields'); return; }
    if (mobile.length !== 10) { showToast('Enter valid 10-digit mobile number'); return; }
    if (method === 'online' && paymentStatus !== 'paid') {
        showToast('Please select a UPI app first');
        return;
    }

    const totalAmount = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const now = new Date();
    const order = {
        id: 'ORD' + Date.now(),
        customerName: name,
        customerMobile: mobile,
        tableNumber: table,
        notes: notes,
        paymentMethod: method,
        paymentStatus: method === 'cash' ? 'Cash' : 'Paid (Online)',
        items: [...cart],
        totalAmount: totalAmount,
        date: now.toLocaleDateString('en-IN'),
        time: now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        timestamp: now.getTime()
    };

    saveOrderToHistory(order);
    lastGeneratedBill = order;

    generateBillPDF(order).catch(function(e) { console.error(e); });

    // WhatsApp
    const msg = buildWhatsAppMessage(order);
    setTimeout(function() { window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + msg, '_blank'); }, 400);

    closeOrderModal();
    openSuccessModal();
}

function buildWhatsAppMessage(order) {
    let items = order.items.map(i => encodeURIComponent(i.name + ' x' + i.quantity + ' - Rs.' + (i.price * i.quantity))).join('%0A');
    return encodeURIComponent('*' + HOTEL_NAME.toUpperCase() + '*') +
        '%0A%0A*Order:* ' + order.id +
        '%0A*Date:* ' + order.date + ' ' + order.time +
        '%0A%0A*Customer:* ' + encodeURIComponent(order.customerName) +
        '%0A*Table:* ' + encodeURIComponent(order.tableNumber) +
        '%0A%0A*Items:*%0A' + items +
        '%0A%0A*Total: Rs.' + order.totalAmount + '*' +
        '%0A*Payment:* ' + encodeURIComponent(order.paymentStatus) +
        (order.notes ? '%0A%0A*Notes:* ' + encodeURIComponent(order.notes) : '') +
        '%0A%0AThank you! Visit again.';
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
    try {
        const history = JSON.parse(localStorage.getItem('sriKrishnaOrders')) || [];
        const container = document.getElementById('order-history-list');

        if (!history.length) {
            container.innerHTML = '<div class="empty-history"><i class="fas fa-clipboard-list"></i><p>No orders yet</p></div>';
            return;
        }

        let html = '';
        history.forEach(function(o) {
            html += `
            <div class="history-item">
                <div class="history-item-header">
                    <h4>${o.customerName} - Table ${o.tableNumber}</h4>
                    <span class="history-item-date">${o.date} ${o.time}</span>
                </div>
                <div class="history-item-details">${o.items.map(i => i.name + ' x' + i.quantity).join(', ')}</div>
                <div class="history-item-total">Rs.${o.totalAmount} - ${o.paymentStatus}</div>
            </div>`;
        });

        container.innerHTML = html;
    } catch {
        document.getElementById('order-history-list').innerHTML = '<div class="empty-history"><i class="fas fa-clipboard-list"></i><p>No orders yet</p></div>';
    }
}

// ===== Bill PDF =====
function generateBillPDF(order) {
    return new Promise(function(resolve, reject) {
        if (typeof window.jspdf !== 'undefined' && window.jspdf.jsPDF) {
            createPDF(order, window.jspdf.jsPDF);
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = function() {
            if (window.jspdf && window.jspdf.jsPDF) {
                createPDF(order, window.jspdf.jsPDF);
                resolve();
            } else {
                reject(new Error('jsPDF not found'));
            }
        };
        script.onerror = function() { reject(new Error('Failed to load jsPDF')); };
        document.head.appendChild(script);
    });
}

function createPDF(order, jsPDFClass) {
    const doc = new jsPDFClass({ unit: 'mm', format: 'a4' });
    const L = 18, R = 192;
    let y = 18;

    doc.setFontSize(18); doc.setFont('helvetica', 'bold');
    doc.text(HOTEL_NAME.toUpperCase(), 105, y, { align: 'center' }); y += 8;

    doc.setFontSize(11); doc.setFont('helvetica', 'normal');
    doc.text('Authentic South Indian Cuisine', 105, y, { align: 'center' }); y += 6;
    doc.text('Phone: ' + PHONE_NUMBER, 105, y, { align: 'center' }); y += 8;

    doc.setLineWidth(0.5); doc.line(L, y, R, y); y += 8;

    doc.setFontSize(10);
    doc.text('Date: ' + order.date, L, y); doc.text('Time: ' + order.time, R, y, { align: 'right' }); y += 7;
    doc.text('Order ID: ' + order.id, L, y); y += 8;

    doc.line(L, y, R, y); y += 8;
    doc.text('Customer: ' + order.customerName, L, y); y += 6;
    doc.text('Mobile: ' + order.customerMobile, L, y); y += 6;
    doc.text('Table No: ' + order.tableNumber, L, y); y += 6;
    if (order.notes) { doc.text('Notes: ' + order.notes, L, y); y += 6; }

    y += 2; doc.line(L, y, R, y); y += 8;

    doc.setFont('helvetica', 'bold');
    doc.text('Item', L, y); doc.text('Qty', 120, y, { align: 'center' }); doc.text('Amount', R, y, { align: 'right' }); y += 6;
    doc.setLineWidth(0.3); doc.line(L, y, R, y); y += 8;

    doc.setFont('helvetica', 'normal');
    order.items.forEach(function(item) {
        const n = item.name.length > 28 ? item.name.slice(0, 25) + '...' : item.name;
        doc.text(n, L, y); doc.text(String(item.quantity), 120, y, { align: 'center' });
        doc.text('Rs.' + (item.price * item.quantity), R, y, { align: 'right' }); y += 7;
    });

    y += 4; doc.line(L, y, R, y); y += 8;
    doc.setFont('helvetica', 'bold');
    doc.text('Total Amount', L, y); doc.text('Rs.' + order.totalAmount, R, y, { align: 'right' }); y += 10;

    doc.setFont('helvetica', 'normal');
    doc.text('Payment: ' + order.paymentStatus, L, y); y += 10;
    doc.setLineWidth(0.5); doc.line(L, y, R, y); y += 10;
    doc.text('Thank you for choosing Sri Krishna Hotel!', 105, y, { align: 'center' }); y += 7;
    doc.text('Order prepared with care and served fresh.', 105, y, { align: 'center' });

    doc.save('SriKrishna_Bill_' + order.id + '.pdf');
}
