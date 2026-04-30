// ===== Sri Krishna Hotel Ordering System =====
// Complete JavaScript Logic

// ===== Menu Data =====
const menuItems = [
    // Rice
    { id: 1, name: "Chicken Rice", price: 90, category: "Rice", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&fm=webp&q=80" },
    { id: 2, name: "Egg Rice", price: 80, category: "Rice", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&fm=webp&q=80" },
    { id: 3, name: "Veg Rice", price: 70, category: "Rice", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&fm=webp&q=80" },

    // Tiffin (Idly & Dosa)
    { id: 4, name: "Idly", price: 10, category: "Tiffin", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&fm=webp&q=80" },
    { id: 5, name: "Vada", price: 10, category: "Tiffin", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&fm=webp&q=80" },
    { id: 6, name: "Dosa", price: 20, category: "Tiffin", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&fm=webp&q=80" },
    { id: 7, name: "Plain Dosa", price: 50, category: "Tiffin", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&fm=webp&q=80" },
    { id: 8, name: "Set Dosa", price: 50, category: "Tiffin", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&fm=webp&q=80" },
    { id: 9, name: "Masala Dosa", price: 70, category: "Tiffin", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&fm=webp&q=80" },
    { id: 10, name: "Poori", price: 40, category: "Tiffin", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&fm=webp&q=80" },

    // Biryani
    { id: 11, name: "Chicken Biryani", price: 90, category: "Biryani", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&fm=webp&q=80" },
    { id: 12, name: "Egg Biryani", price: 80, category: "Biryani", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&fm=webp&q=80" },
    { id: 13, name: "Veg Biryani", price: 70, category: "Biryani", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&fm=webp&q=80" },

    // Meals
    { id: 14, name: "Veg Meals", price: 80, category: "Meals", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&fm=webp&q=80" },
    { id: 15, name: "Non Veg Meals", price: 120, category: "Meals", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&fm=webp&q=80" },
    { id: 16, name: "Fish Meals", price: 140, category: "Meals", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&fm=webp&q=80" },

    // Bread Items
    { id: 17, name: "Bread", price: 20, category: "Bread Items", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&fm=webp&q=80" },
    { id: 18, name: "Veg Sandwich", price: 80, category: "Bread Items", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&fm=webp&q=80" },
    { id: 19, name: "Chicken Sandwich", price: 120, category: "Bread Items", image: "https://images.unsplash.com/photo-1606757389647-67b360512219?w=400&fm=webp&q=80" },

    // Egg Items
    { id: 20, name: "Omelette", price: 20, category: "Egg Items", image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&fm=webp&q=80" },
    { id: 21, name: "Half Boil", price: 20, category: "Egg Items", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&fm=webp&q=80" },
    { id: 22, name: "Boiled Egg", price: 20, category: "Egg Items", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&fm=webp&q=80" },

    // Chicken
    { id: 23, name: "Chicken 100g", price: 40, category: "Chicken", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&fm=webp&q=80" },
    { id: 24, name: "Chicken 1kg", price: 400, category: "Chicken", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&fm=webp&q=80" },

    // Noodles
    { id: 25, name: "Chicken Noodles", price: 90, category: "Noodles", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=400&fm=webp&q=80" },
    { id: 26, name: "Veg Noodles", price: 60, category: "Noodles", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&fm=webp&q=80" },
    { id: 27, name: "Egg Noodles", price: 80, category: "Noodles", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&fm=webp&q=80" }
];
const menuItemsById = new Map(menuItems.map(item => [item.id, item]));

// ===== State =====
let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let paymentStatus = 'pending';
let currentSlide = 0;

// ===== Hotel Details =====
const HOTEL_NAME = "Sri Krishna Hotel";
const PHONE_NUMBER = "98433 36980";
const WHATSAPP_NUMBER = "919843336980";
const UPI_ID = "9843336980@ibl";   // ✅ Updated to PhonePe UPI ID
const EMAIL = "kumaranglids@gmail.com";
const PDF_SCRIPT_URL = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
const MENU_IMAGE_FALLBACK = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&fm=webp&q=80";
const IMAGE_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 26'%3E%3Crect width='40' height='26' fill='%23f3f4f6'/%3E%3C/svg%3E";
const QR_IMAGE = "qr.jpeg";        // ✅ PhonePe QR image file

// ===== DOM Elements =====
const menuContainer = document.getElementById('menu-container');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const cartItems = document.getElementById('cart-items');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartDrawerBody = document.getElementById('cart-drawer-body');
const cartDrawerFooter = document.getElementById('cart-drawer-footer');
const emptyCart = document.getElementById('empty-cart');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartGrandTotal = document.getElementById('cart-grand-total');
const stickyCart = document.getElementById('sticky-cart');
const cartBtn = document.getElementById('cart-btn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const btnSubmitOrder = document.getElementById('btn-submit-order');
const btnDownloadBill = document.getElementById('btn-download-bill');
const adminNotificationPanel = document.getElementById('admin-notification-panel');
let lastGeneratedBill = null;
let lazyImageObserver = null;
let heroSliderInterval = null;
let searchInputTimer = null;
let jspdfLoader = null;

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    const startupTasks = [
        ['load cart', loadCart],
        ['setup event listeners', setupEventListeners],
        ['render menu', renderMenu],
        ['update cart display', updateCartDisplay],
        ['update QR amount', updateQrAmount],
        ['start hero slider', startHeroSlider],
        ['schedule non critical work', scheduleNonCriticalWork],
        ['schedule welcome voice', scheduleWelcomeVoice]
    ];

    startupTasks.forEach(([label, task]) => {
        try {
            task();
        } catch (error) {
            console.error(`Startup task failed: ${label}`, error);
        }
    });

    hideLoadingOverlay();
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    if (!overlay) return;

    const showPage = () => {
        overlay.classList.add('hidden');
    };

    if (typeof window.requestAnimationFrame === 'function') {
        window.requestAnimationFrame(showPage);
    } else {
        showPage();
    }

    setTimeout(() => {
        overlay.remove();
    }, 600);
}

function runWhenIdle(task, timeout = 1500) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(task, { timeout });
        return;
    }

    setTimeout(task, Math.min(timeout, 800));
}

function scheduleNonCriticalWork() {
    runWhenIdle(() => {
        document.querySelectorAll('.hero-slide[data-bg]').forEach(preloadHeroBackground);
    }, 1800);
}

function scheduleWelcomeVoice() {
    setTimeout(() => {
        speakText('Welcome to Sri Krishna Hotel. Please place your order.');
    }, 900);
}

function readJsonStorage(key, fallbackValue) {
    try {
        const savedValue = localStorage.getItem(key);
        if (!savedValue) return fallbackValue;

        const parsedValue = JSON.parse(savedValue);
        return parsedValue ?? fallbackValue;
    } catch (error) {
        console.warn(`Storage read failed for ${key}`, error);
        return fallbackValue;
    }
}

function writeJsonStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.warn(`Storage write failed for ${key}`, error);
        return false;
    }
}

function safeOpenExternal(url) {
    try {
        window.open(url, '_blank', 'noopener,noreferrer');
        return true;
    } catch (error) {
        console.warn('Unable to open external URL', error);
        return false;
    }
}

function safeScrollIntoView(element) {
    if (!element) return;

    try {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
        element.scrollIntoView();
    }
}

function safeScrollToTop() {
    try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        window.scrollTo(0, 0);
    }
}

function bindEvent(target, eventName, handler) {
    const element = typeof target === 'string' ? document.getElementById(target) : target;
    if (!element) {
        console.warn(`Event binding skipped: ${target}`);
        return null;
    }

    element.addEventListener(eventName, handler);
    return element;
}

// ===== Text to Speech =====
function speakText(text) {
    if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') return;

    try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-IN';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        const voices = window.speechSynthesis.getVoices();
        const indianVoice = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('en-GB'));
        if (indianVoice) utterance.voice = indianVoice;
        window.speechSynthesis.speak(utterance);
    } catch (error) {
        console.warn('Speech synthesis unavailable', error);
    }
}

// ===== Render Menu =====
function renderMenu() {
    let filteredItems = menuItems;
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const cartQuantityMap = new Map(cart.map(item => [item.id, item.quantity]));

    if (currentCategory !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === currentCategory);
    }

    if (normalizedQuery) {
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(normalizedQuery)
        );
    }

    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="empty-cart" style="grid-column: 1 / -1; padding: 60px;">
                <i class="fas fa-search" style="font-size: 3rem;"></i>
                <p>No items found</p>
                <span>Try a different search or category</span>
            </div>
        `;
        return;
    }

    menuContainer.innerHTML = filteredItems.map(item => {
        const qty = cartQuantityMap.get(item.id) || 0;

        return `
            <div class="product-card" data-id="${item.id}">
                <div class="product-image">
                    <img src="${IMAGE_PLACEHOLDER}" data-src="${item.image}" data-fallback="${MENU_IMAGE_FALLBACK}" alt="${item.name}" width="400" height="260" loading="lazy" decoding="async">
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
                </div>
            </div>
        `;
    }).join('');

    hydrateLazyImages();
}

function hydrateLazyImages() {
    const lazyImages = menuContainer.querySelectorAll('img[data-src]');
    if (!lazyImages.length) return;

    if (!('IntersectionObserver' in window)) {
        lazyImages.forEach(loadLazyImage);
        return;
    }

    if (!lazyImageObserver) {
        lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                loadLazyImage(entry.target);
                observer.unobserve(entry.target);
            });
        }, {
            rootMargin: '200px 0px'
        });
    }

    lazyImages.forEach(img => lazyImageObserver.observe(img));
}

function loadLazyImage(img) {
    const imageSrc = img.dataset.src;
    if (!imageSrc) return;

    const fallbackSrc = img.dataset.fallback;
    img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true });
    img.addEventListener('error', () => {
        if (fallbackSrc && img.src !== fallbackSrc) {
            img.src = fallbackSrc;
            return;
        }

        img.classList.add('is-loaded');
    }, { once: true });

    img.src = imageSrc;
    img.removeAttribute('data-src');
}

function getCartItemQuantity(id) {
    const cartItem = cart.find(item => item.id === id);
    return cartItem ? cartItem.quantity : 0;
}

function updateProductCardState(id) {
    const itemId = Number(id);
    const card = menuContainer.querySelector(`.product-card[data-id="${itemId}"]`);
    if (!card) return;

    const qty = getCartItemQuantity(itemId);
    const minusButton = card.querySelector('.qty-btn.minus');
    const qtyValue = card.querySelector('.qty-value');
    const addButton = card.querySelector('.btn-add-cart');
    const addButtonIcon = addButton ? addButton.querySelector('i') : null;
    const addButtonLabel = addButton ? addButton.querySelector('.btn-add-label') : null;

    if (minusButton) {
        minusButton.disabled = qty <= 0;
    }

    if (qtyValue) {
        qtyValue.textContent = qty;
    }

    if (addButton) {
        addButton.classList.toggle('added', qty > 0);
    }

    if (addButtonIcon) {
        addButtonIcon.className = `fas ${qty > 0 ? 'fa-check' : 'fa-cart-plus'}`;
    }

    if (addButtonLabel) {
        addButtonLabel.textContent = qty > 0 ? 'Added' : 'Add';
    }
}

function refreshVisibleProductCards() {
    menuContainer.querySelectorAll('.product-card[data-id]').forEach(card => {
        updateProductCardState(card.dataset.id);
    });
}

// ===== Cart Functions =====
function addToCart(id) {
    const item = menuItemsById.get(id);
    if (!item) return;

    const existingItem = cart.find(c => c.id === id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            category: item.category,
            image: item.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartDisplay();
    updateProductCardState(id);
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
    saveCart();
    updateCartDisplay();
    updateProductCardState(id);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCart();
    updateCartDisplay();
    updateProductCardState(id);
    showToast('Item removed from cart');
}

function updateCartQuantity(id, change) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) cart = cart.filter(c => c.id !== id);
    saveCart();
    updateCartDisplay();
    updateProductCardState(id);
}

function updateCartDisplay() {
    let totalItems = 0;
    let totalAmount = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalAmount += item.price * item.quantity;
    });

    cartCount.textContent = totalItems;
    cartTotal.textContent = '₹' + totalAmount;

    stickyCart.style.display = totalItems > 0 ? 'block' : 'none';
    updateQrAmount();

    if (cart.length === 0) {
        emptyCart.style.display = 'flex';
        cartItems.style.display = 'none';
        cartDrawerFooter.style.display = 'none';
    } else {
        emptyCart.style.display = 'none';
        cartItems.style.display = 'block';
        cartDrawerFooter.style.display = 'block';

        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" width="80" height="80" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&fm=webp&q=80'">
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
                </button>
            </div>
        `).join('');

        cartSubtotal.textContent = '₹' + totalAmount;
        cartGrandTotal.textContent = '₹' + totalAmount;
    }
}

function saveCart() {
    writeJsonStorage('sriKrishnaCart', cart);
}

function loadCart() {
    const savedCart = readJsonStorage('sriKrishnaCart', []);
    cart = Array.isArray(savedCart) ? savedCart : [];
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
    refreshVisibleProductCards();
}

// ===== Toast =====
function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== Hero Slider =====
function startHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (!slides.length || !dots.length) return;

    const setActiveSlide = (index) => {
        preloadHeroBackground(slides[index]);
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    };

    preloadHeroBackground(slides[currentSlide]);

    if (heroSliderInterval) {
        clearInterval(heroSliderInterval);
    }

    heroSliderInterval = setInterval(() => {
        const nextSlide = (currentSlide + 1) % slides.length;
        preloadHeroBackground(slides[nextSlide]);
        setActiveSlide(nextSlide);
    }, 5000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index === currentSlide) return;
            setActiveSlide(index);
        });
    });
}

function preloadHeroBackground(slide) {
    if (!slide) return;

    const backgroundUrl = slide.dataset.bg;
    if (!backgroundUrl || slide.dataset.loaded === 'true') return;

    const image = new Image();
    image.decoding = 'async';
    image.onload = () => {
        slide.style.backgroundImage = `url('${backgroundUrl}')`;
        slide.dataset.loaded = 'true';
    };
    image.src = backgroundUrl;
}

// ===== ✅ UPDATED: GPay / PhonePe / UPI Pay Now =====
function payNow() {
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const statusEl = document.getElementById('payment-status');
    const qrSection = document.getElementById('qr-payment-section');
    const paymentDoneBtn = document.getElementById('btn-payment-done');

    if (total <= 0) {
        showToast('Please add items to cart before making payment');
        return;
    }

    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad/i.test(navigator.userAgent);
    const isMobile = isAndroid || isIOS;

    if (qrSection) {
        qrSection.style.display = 'block';
        updateQrAmount();
    }
    if (paymentDoneBtn) paymentDoneBtn.style.display = 'none';

    const pa = encodeURIComponent(UPI_ID);
    const pn = encodeURIComponent(HOTEL_NAME);
    const tn = encodeURIComponent('Food Order - Sri Krishna Hotel');
    const am = encodeURIComponent(total.toFixed(2));
    const baseUpiUrl = `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
    const gpayIntentUrl = `intent://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;S.browser_fallback_url=${encodeURIComponent(baseUpiUrl)};end`;

    if (!isMobile) {
        statusEl.innerHTML =
            '<span class="status-pending">📱 Scan the QR or use UPI app to pay. Then click "I Have Paid".</span>';
        setTimeout(() => {
            document.getElementById('btn-payment-done').style.display = 'flex';
        }, 500);
        return;
    }

    statusEl.innerHTML = '<span class="status-pending">🔗 Opening UPI app with amount and UPI details...</span>';

    if (isAndroid) {
        window.location.href = gpayIntentUrl;
    } else if (isIOS) {
        window.location.href = baseUpiUrl;
    }

    setTimeout(() => {
        document.getElementById('btn-payment-done').style.display = 'flex';
        statusEl.innerHTML =
            '<span class="status-pending">⏳ Payment completed? Then click "I Have Paid".</span>';
        showToast('UPI App திறக்கிறது... payment பண்ணி திரும்பவும்');
    }, 1800);
}

// ===== Event Listeners =====
function setupEventListeners() {
    menuContainer.addEventListener('click', handleMenuContainerClick);
    cartItems.addEventListener('click', handleCartItemsClick);

    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderMenu();
            safeScrollIntoView(document.getElementById('menu-section'));
        });
    });

    // Mobile menu category items
    document.querySelectorAll('.mobile-menu-item[data-category]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const category = item.dataset.category;
            currentCategory = category;
            document.querySelectorAll('.category-btn').forEach(b => {
                b.classList.remove('active');
                if (b.dataset.category === category) b.classList.add('active');
            });
            renderMenu();
            closeMobileMenu();
            safeScrollIntoView(document.getElementById('menu-section'));
        });
    });

    // Search
    bindEvent('search-toggle', 'click', () => {
        document.getElementById('search-bar').classList.toggle('active');
        if (document.getElementById('search-bar').classList.contains('active')) {
            setTimeout(() => document.getElementById('search-input').focus(), 100);
        }
    });

    bindEvent('search-close', 'click', () => {
        document.getElementById('search-bar').classList.remove('active');
        document.getElementById('search-input').value = '';
        searchQuery = '';
        renderMenu();
    });

    bindEvent('search-input', 'input', (e) => {
        const nextValue = e.target.value;
        clearTimeout(searchInputTimer);
        searchInputTimer = setTimeout(() => {
            searchQuery = nextValue;
            renderMenu();
        }, 120);
    });

    // Mobile menu
    bindEvent('menu-toggle', 'click', openMobileMenu);
    bindEvent('mobile-menu-close', 'click', closeMobileMenu);
    bindEvent('mobile-menu-overlay', 'click', closeMobileMenu);

    // Cart
    bindEvent('cart-btn', 'click', openCart);
    bindEvent('cart-close', 'click', closeCart);
    bindEvent('cart-overlay', 'click', closeCart);
    bindEvent('btn-continue', 'click', closeCart);

    // Place Order
    bindEvent('btn-place-order', 'click', () => {
        closeCart();
        updateQrAmount();
        openOrderModal();
    });

    // Order Modal close
    bindEvent('order-modal-close', 'click', closeOrderModal);
    bindEvent('order-modal-overlay', 'click', closeOrderModal);

    // Payment method radio
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'online') {
                document.getElementById('online-payment-section').style.display = 'block';
                document.getElementById('cash-payment-section').style.display = 'none';
                document.getElementById('btn-payment-done').style.display = 'none';
                document.getElementById('qr-payment-section').style.display = 'none';
                document.getElementById('payment-status').innerHTML =
                    '<span class="status-pending">⏳ "Pay Now" click செய்து UPI App திறக்கவும்</span>';
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

    // ✅ Pay Now button — now calls updated payNow()
    bindEvent('btn-pay-now', 'click', payNow);

    // "I Have Paid" button
    const paymentDoneBtn = document.getElementById('btn-payment-done');
    if (paymentDoneBtn) {
        paymentDoneBtn.addEventListener('click', () => {
            paymentStatus = 'paid';
            updatePaymentStatus();
            btnSubmitOrder.disabled = false;
            showToast('✅ Payment confirmed!');
            notifyBillCounterFromForm();
        });
    }

    // Copy UPI ID button
    const copyUpiBtn = document.getElementById('btn-copy-upi');
    if (copyUpiBtn) {
        copyUpiBtn.addEventListener('click', copyUpiId);
    }

    // Download bill button
    if (btnDownloadBill) {
        btnDownloadBill.addEventListener('click', async () => {
            if (lastGeneratedBill) {
                try {
                    await generateBillPDF(lastGeneratedBill);
                    showToast('Bill download started');
                } catch (error) {
                    console.error(error);
                    showToast('Bill download failed. Please try again.');
                }
            }
        });
    }

    // Order form submit
    bindEvent('order-form', 'submit', (e) => {
        e.preventDefault();
        submitOrder();
    });

    // Success modal
    bindEvent('btn-new-order', 'click', () => {
        closeSuccessModal();
        clearCart();
        safeScrollToTop();
    });

    // History modal
    bindEvent('mobile-view-orders', 'click', (e) => {
        e.preventDefault();
        closeMobileMenu();
        openHistoryModal();
    });

    bindEvent('footer-history', 'click', (e) => {
        e.preventDefault();
        openHistoryModal();
    });

    bindEvent('history-modal-close', 'click', closeHistoryModal);
    bindEvent('history-modal-overlay', 'click', closeHistoryModal);

    // Contact modal
    bindEvent('mobile-contact', 'click', (e) => {
        e.preventDefault();
        closeMobileMenu();
        openContactModal();
    });

    bindEvent('footer-contact', 'click', (e) => {
        e.preventDefault();
        openContactModal();
    });

    bindEvent('contact-modal-close', 'click', closeContactModal);
    bindEvent('contact-modal-overlay', 'click', closeContactModal);

    // Mobile number only digits
    bindEvent('customer-mobile', 'input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
    });
}

function handleMenuContainerClick(event) {
    const plusButton = event.target.closest('.qty-btn.plus');
    if (plusButton) {
        addToCart(parseInt(plusButton.dataset.id, 10));
        return;
    }

    const minusButton = event.target.closest('.qty-btn.minus');
    if (minusButton) {
        decreaseQuantity(parseInt(minusButton.dataset.id, 10));
        return;
    }

    const addButton = event.target.closest('.btn-add-cart');
    if (addButton) {
        addToCart(parseInt(addButton.dataset.id, 10));
    }
}

function handleCartItemsClick(event) {
    const controlButton = event.target.closest('button[data-action][data-id]');
    if (!controlButton) return;

    const id = parseInt(controlButton.dataset.id, 10);
    const { action } = controlButton.dataset;

    if (action === 'increase') {
        updateCartQuantity(id, 1);
        return;
    }

    if (action === 'decrease') {
        updateCartQuantity(id, -1);
        return;
    }

    if (action === 'remove') {
        removeFromCart(id);
    }
}

// ===== Modal Functions =====
function openCart() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

function openMobileMenu() {
    document.getElementById('mobile-menu').classList.add('open');
    document.getElementById('mobile-menu-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    document.getElementById('mobile-menu').classList.remove('open');
    document.getElementById('mobile-menu-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

function openOrderModal() {
    document.getElementById('order-modal').classList.add('open');
    document.getElementById('order-modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';

    document.getElementById('order-form').reset();
    document.querySelector('input[name="payment-method"][value="cash"]').checked = true;
    document.getElementById('online-payment-section').style.display = 'none';
    document.getElementById('cash-payment-section').style.display = 'block';
    document.getElementById('btn-payment-done').style.display = 'none';
    document.getElementById('qr-payment-section').style.display = 'none';
    document.getElementById('payment-status').innerHTML =
        '<span class="status-pending">⏳ "Pay Now" click செய்து UPI App திறக்கவும்</span>';
    paymentStatus = 'cash';
    btnSubmitOrder.disabled = false;
    if (btnDownloadBill) btnDownloadBill.style.display = 'none';
    updateQrAmount();
}

function closeOrderModal() {
    document.getElementById('order-modal').classList.remove('open');
    document.getElementById('order-modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

function openSuccessModal() {
    document.getElementById('success-modal').classList.add('open');
    document.getElementById('success-modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
    document.getElementById('success-modal').classList.remove('open');
    document.getElementById('success-modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

function openHistoryModal() {
    renderOrderHistory();
    document.getElementById('history-modal').classList.add('open');
    document.getElementById('history-modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeHistoryModal() {
    document.getElementById('history-modal').classList.remove('open');
    document.getElementById('history-modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

function openContactModal() {
    document.getElementById('contact-modal').classList.add('open');
    document.getElementById('contact-modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    document.getElementById('contact-modal').classList.remove('open');
    document.getElementById('contact-modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

function updatePaymentStatus() {
    const statusEl = document.getElementById('payment-status');
    if (paymentStatus === 'paid') {
        statusEl.innerHTML = '<span class="status-paid">✅ Payment Completed — Submit Order பண்ணலாம்</span>';
    } else if (paymentStatus === 'pending') {
        statusEl.innerHTML = '<span class="status-pending">⏳ Payment Pending</span>';
    }
}

function notifyBillCounterFromForm() {
    const customerName = document.getElementById('customer-name').value.trim() || 'Guest';
    const tableNumber = document.getElementById('table-number').value.trim() || 'N/A';
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemsList = cart.map(item => `${item.name} x${item.quantity}`);
    const message = `NEW ORDER RECEIVED\nCustomer Name: ${customerName}\nTable Number: ${tableNumber}\nTotal Amount: ₹${totalAmount}\nItems: ${itemsList.join(', ')}\nPayment completed successfully.`;
    showAdminNotification(customerName, tableNumber, itemsList, totalAmount, message);
    if ('Notification' in window && Notification.permission === 'granted') {
        try {
        new Notification('NEW ORDER RECEIVED', {
            body: `Customer: ${customerName}\nTable: ${tableNumber}\nTotal: ₹${totalAmount}`,
            icon: '',
        });
        } catch (error) {
            console.warn('Notification display failed', error);
        }
    }
}

function showAdminNotification(customerName, tableNumber, itemsList, totalAmount, message) {
    if (!adminNotificationPanel) return;
    adminNotificationPanel.innerHTML = `
        <h4>NEW ORDER RECEIVED</h4>
        <p><strong>Customer:</strong> ${customerName}</p>
        <p><strong>Table:</strong> ${tableNumber}</p>
        <p><strong>Total:</strong> ₹${totalAmount}</p>
        <p><strong>Items:</strong> ${itemsList.join(', ')}</p>
        <small>Payment completed successfully.</small>
    `;
    adminNotificationPanel.classList.add('open');
    speakText('New order received. Check bill counter.');
    setTimeout(() => adminNotificationPanel.classList.remove('open'), 8000);
}

function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        try {
            Notification.requestPermission().catch(() => {});
        } catch (error) {
            console.warn('Notification permission request failed', error);
        }
    }
}

function sendWhatsAppConfirmation(order) {
    const message =
        `Thank you for your order!\nYour payment has been successfully received.\nYour order is being prepared.\nHotel: ${HOTEL_NAME}\nTotal Paid: ₹${order.totalAmount}`;
    safeOpenExternal(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`);
}

// ===== Submit Order =====
function submitOrder() {
    const customerName   = document.getElementById('customer-name').value.trim();
    const customerMobile = document.getElementById('customer-mobile').value.trim();
    const tableNumber    = document.getElementById('table-number').value.trim();
    const orderNotes     = document.getElementById('order-notes').value.trim();
    const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked');
    const paymentMethod = selectedPaymentMethod ? selectedPaymentMethod.value : 'cash';

    if (!customerName || !customerMobile || !tableNumber) {
        showToast('Please fill all required fields');
        return;
    }

    if (customerMobile.length !== 10) {
        showToast('Please enter valid 10-digit mobile number');
        return;
    }

    if (paymentMethod === 'online' && paymentStatus !== 'paid') {
        alert('Please complete payment before submitting your order.');
        showToast('Please complete payment first and click "I Have Paid"');
        return;
    }

    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-IN');
    const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

    const order = {
        id: 'ORD' + Date.now(),
        customerName,
        customerMobile,
        tableNumber,
        notes: orderNotes,
        paymentMethod,
        paymentStatus: paymentMethod === 'cash' ? '💵 Cash' : '✅ Paid (Online)',
        items: [...cart],
        totalAmount,
        date: dateStr,
        time: timeStr,
        timestamp: now.getTime()
    };

    saveOrderToHistory(order);
    lastGeneratedBill = order;
    if (btnDownloadBill) btnDownloadBill.style.display = 'none';
    generateBillPDF(order).then(() => {
        if (btnDownloadBill) btnDownloadBill.style.display = 'flex';
    }).catch((error) => {
        console.error(error);
        showToast('Order saved. Bill download can be retried.');
    });
    sendWhatsAppKitchen(order);
    sendWhatsAppCounter(order);
    sendWhatsAppConfirmation(order);

    setTimeout(() => speakText("Thank you for your order. Visit again."), 500);

    closeOrderModal();
    openSuccessModal();
}

// ===== Order History =====
function saveOrderToHistory(order) {
    let history = readJsonStorage('sriKrishnaOrders', []);
    if (!Array.isArray(history)) history = [];
    history.unshift(order);
    if (history.length > 50) history = history.slice(0, 50);
    writeJsonStorage('sriKrishnaOrders', history);
}

function renderOrderHistory() {
    const history = readJsonStorage('sriKrishnaOrders', []);
    const container = document.getElementById('order-history-list');
    const normalizedHistory = Array.isArray(history) ? history : [];

    if (normalizedHistory.length === 0) {
        container.innerHTML = `
            <div class="empty-history">
                <i class="fas fa-clipboard-list"></i>
                <p>No orders yet</p>
            </div>
        `;
        return;
    }

    container.innerHTML = normalizedHistory.map(order => {
        const itemsList = order.items.map(i => `${i.name} x${i.quantity}`).join(', ');
        return `
            <div class="history-item">
                <div class="history-item-header">
                    <h4>${order.customerName} - Table ${order.tableNumber}</h4>
                    <span class="history-item-date">${order.date} ${order.time}</span>
                </div>
                <div class="history-item-details">${itemsList}</div>
                <div class="history-item-total">₹${order.totalAmount} - ${order.paymentStatus}</div>
            </div>
        `;
    }).join('');
}

// ===== Generate Bill PDF =====
async function generateBillPDF(order) {
    const jsPDF = await ensureJsPdfLoaded();
    const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    const leftMargin = 18;
    const rightLimit = 192;
    let y = 18;

    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(HOTEL_NAME.toUpperCase(), 105, y, { align: 'center' });
    y += 8;

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text('Authentic South Indian Cuisine', 105, y, { align: 'center' });
    y += 6;
    doc.text(`Phone: ${PHONE_NUMBER}`, 105, y, { align: 'center' });
    y += 8;
    doc.setLineWidth(0.5);
    doc.line(leftMargin, y, rightLimit, y);
    y += 8;

    doc.setFontSize(10);
    doc.text(`Date: ${order.date}`, leftMargin, y);
    doc.text(`Time: ${order.time}`, rightLimit, y, { align: 'right' });
    y += 7;
    doc.text(`Order ID: ${order.id}`, leftMargin, y);
    y += 8;
    doc.line(leftMargin, y, rightLimit, y);
    y += 8;

    doc.text(`Customer: ${order.customerName}`, leftMargin, y);
    y += 6;
    doc.text(`Mobile: ${order.customerMobile}`, leftMargin, y);
    y += 6;
    doc.text(`Table No: ${order.tableNumber}`, leftMargin, y);
    y += 6;
    if (order.notes) {
        doc.text(`Notes: ${order.notes}`, leftMargin, y);
        y += 6;
    }
    y += 2;
    doc.line(leftMargin, y, rightLimit, y);
    y += 8;

    doc.setFont('helvetica', 'bold');
    doc.text('Item', leftMargin, y);
    doc.text('Qty', 120, y, { align: 'center' });
    doc.text('Amount', rightLimit, y, { align: 'right' });
    y += 6;
    doc.setLineWidth(0.3);
    doc.line(leftMargin, y, rightLimit, y);
    y += 8;
    doc.setFont('helvetica', 'normal');

    order.items.forEach(item => {
        const itemName = item.name.length > 28 ? item.name.substring(0, 25) + '...' : item.name;
        doc.text(itemName, leftMargin, y);
        doc.text(String(item.quantity), 120, y, { align: 'center' });
        doc.text(`₹${item.price * item.quantity}`, rightLimit, y, { align: 'right' });
        y += 7;
    });

    y += 4;
    doc.line(leftMargin, y, rightLimit, y);
    y += 8;

    doc.setFont('helvetica', 'bold');
    doc.text('Total Amount', leftMargin, y);
    doc.text(`₹${order.totalAmount}`, rightLimit, y, { align: 'right' });
    y += 10;
    doc.setFont('helvetica', 'normal');
    doc.text(`Payment: ${order.paymentStatus}`, leftMargin, y);
    y += 10;

    doc.setLineWidth(0.5);
    doc.line(leftMargin, y, rightLimit, y);
    y += 10;
    doc.text('Thank you for choosing Sri Krishna Hotel!', 105, y, { align: 'center' });
    y += 7;
    doc.text('Order prepared with care and served fresh.', 105, y, { align: 'center' });

    doc.save(`SriKrishna_Bill_${order.id}.pdf`);
}

function ensureJsPdfLoaded() {
    if (window.jspdf && window.jspdf.jsPDF) {
        return Promise.resolve(window.jspdf.jsPDF);
    }

    if (jspdfLoader) {
        return jspdfLoader;
    }

    jspdfLoader = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = PDF_SCRIPT_URL;
        script.async = true;
        script.onload = () => {
            if (window.jspdf && window.jspdf.jsPDF) {
                resolve(window.jspdf.jsPDF);
                return;
            }

            reject(new Error('Bill library loaded without jsPDF.'));
        };
        script.onerror = () => reject(new Error('Unable to load bill library.'));
        document.head.appendChild(script);
    }).catch((error) => {
        jspdfLoader = null;
        throw error;
    });

    return jspdfLoader;
}

// ===== WhatsApp =====
function sendWhatsAppKitchen(order) {
    const itemsText = order.items.map(i => `${i.name} x${i.quantity}`).join('%0A');
    const message =
        `🔔 *New Order* %0A%0A` +
        `👤 *Customer:* ${order.customerName}%0A` +
        `📱 *Mobile:* ${order.customerMobile}%0A` +
        `🪑 *Table No:* ${order.tableNumber}%0A%0A` +
        `📋 *Items:*%0A${itemsText}%0A%0A` +
        `💰 *Total:* ₹${order.totalAmount}%0A` +
        `💳 *Payment:* ${order.paymentStatus}%0A` +
        `📝 *Notes:* ${order.notes || 'None'}%0A%0A` +
        `⏰ ${order.date} ${order.time}`;
    safeOpenExternal(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`);
}

function sendWhatsAppCounter(order) {
    const message =
        `🧾 *Bill Ready*%0A%0A` +
        `🪑 *Table:* ${order.tableNumber}%0A` +
        `👤 *Customer:* ${order.customerName}%0A` +
        `💰 *Total:* ₹${order.totalAmount}%0A` +
        `💳 *Payment Status:* ${order.paymentStatus}%0A%0A` +
        `⏰ ${order.date} ${order.time}`;
    setTimeout(() => safeOpenExternal(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`), 1000);
}

// ===== Voice =====
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function() {};
}

// ===== QR / UPI Helpers =====
function updateQrAmount() {
    const total = (typeof cart !== 'undefined')
        ? cart.reduce((s, i) => s + i.price * i.quantity, 0)
        : 0;
    const el = document.getElementById('qr-display-amount');
    if (el) el.textContent = total;
}

function copyUpiId() {
    const upi = UPI_ID;
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(upi).then(() => {
            showToast('UPI ID copied! ✅');
        }).catch(() => fallbackCopy(upi));
    } else {
        fallbackCopy(upi);
    }
}

function fallbackCopy(text) {
    try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    } catch (error) {
        console.warn('Clipboard copy failed', error);
        showToast('Copy failed. Please copy UPI ID manually.');
        return;
    }
    showToast('UPI ID copied! ✅');
}
