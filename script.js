// ===== Sri Krishna Hotel Ordering System =====
// Complete JavaScript Logic

// ===== Menu Data =====
const menuItems = [
    // Rice
    { id: 1, name: "Chicken Rice", price: 90, category: "Rice", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400" },
    { id: 2, name: "Egg Rice", price: 80, category: "Rice", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400" },
    { id: 3, name: "Veg Rice", price: 70, category: "Rice", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },

    // Tiffin (Idly & Dosa)
    { id: 4, name: "Idly", price: 10, category: "Tiffin", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400" },
    { id: 5, name: "Vada", price: 10, category: "Tiffin", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400" },
    { id: 6, name: "Dosa", price: 20, category: "Tiffin", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400" },
    { id: 7, name: "Plain Dosa", price: 50, category: "Tiffin", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },
    { id: 8, name: "Set Dosa", price: 50, category: "Tiffin", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400" },
    { id: 9, name: "Masala Dosa", price: 70, category: "Tiffin", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400" },
    { id: 10, name: "Poori", price: 40, category: "Tiffin", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400" },

    // Biryani
    { id: 11, name: "Chicken Biryani", price: 90, category: "Biryani", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400" },
    { id: 12, name: "Egg Biryani", price: 80, category: "Biryani", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400" },
    { id: 13, name: "Veg Biryani", price: 70, category: "Biryani", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400" },

    // Meals
    { id: 14, name: "Veg Meals", price: 80, category: "Meals", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { id: 15, name: "Non Veg Meals", price: 120, category: "Meals", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400" },
    { id: 16, name: "Fish Meals", price: 140, category: "Meals", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400" },

    // Bread Items
    { id: 17, name: "Bread", price: 20, category: "Bread Items", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 18, name: "Veg Sandwich", price: 80, category: "Bread Items", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400" },
    { id: 19, name: "Chicken Sandwich", price: 120, category: "Bread Items", image: "https://images.unsplash.com/photo-1606757389647-67b360512219?w=400" },

    // Egg Items
    { id: 20, name: "Omelette", price: 20, category: "Egg Items", image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400" },
    { id: 21, name: "Half Boil", price: 20, category: "Egg Items", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400" },
    { id: 22, name: "Boiled Egg", price: 20, category: "Egg Items", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400" },

    // Chicken
    { id: 23, name: "Chicken 100g", price: 40, category: "Chicken", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
    { id: 24, name: "Chicken 1kg", price: 400, category: "Chicken", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400" },

    // Noodles
    { id: 25, name: "Chicken Noodles", price: 90, category: "Noodles", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=400" },
    { id: 26, name: "Veg Noodles", price: 60, category: "Noodles", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400" },
    { id: 27, name: "Egg Noodles", price: 80, category: "Noodles", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" }
];

// ===== State =====
let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let paymentStatus = 'pending'; // pending, paid, cash
let currentSlide = 0;

// ===== Hotel Details =====
const HOTEL_NAME = "Sri Krishna Hotel";
const PHONE_NUMBER = "98433 36980";
const WHATSAPP_NUMBER = "919843336980";
const UPI_ID = "9843336980@upi";
const EMAIL = "kumaranglids@gmail.com";

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
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.getElementById('loading-overlay').classList.add('hidden');
    }, 1500);

    setTimeout(() => {
        speakText("Welcome to Sri Krishna Hotel. Please place your order.");
    }, 2000);

    loadCart();
    renderMenu();
    setupEventListeners();
    startHeroSlider();
    updateCartDisplay();
});

// ===== Text to Speech =====
function speakText(text) {
    if ('speechSynthesis' in window) {
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
    }
}

// ===== Render Menu =====
function renderMenu() {
    let filteredItems = menuItems;

    if (currentCategory !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === currentCategory);
    }

    if (searchQuery) {
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
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
        const cartItem = cart.find(c => c.id === item.id);
        const qty = cartItem ? cartItem.quantity : 0;

        return `
            <div class="product-card" data-id="${item.id}">
                <div class="product-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'">
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
                            ${qty > 0 ? 'Added' : 'Add'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    attachProductEvents();
}

function attachProductEvents() {
    document.querySelectorAll('.qty-btn.plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(parseInt(btn.dataset.id));
        });
    });

    document.querySelectorAll('.qty-btn.minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            decreaseQuantity(parseInt(btn.dataset.id));
        });
    });

    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(parseInt(btn.dataset.id));
        });
    });
}

// ===== Cart Functions =====
function addToCart(id) {
    const item = menuItems.find(m => m.id === id);
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
    renderMenu();
    showToast(`${item.name} added to cart!`);

    const cartBtn = document.getElementById('cart-btn');
    cartBtn.style.animation = 'none';
    cartBtn.offsetHeight;
    cartBtn.style.animation = 'cartBounce 0.5s ease';
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
    renderMenu();
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCart();
    updateCartDisplay();
    renderMenu();
    showToast('Item removed from cart');
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
    renderMenu();
}

function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = '₹' + totalAmount;

    const stickyCart = document.getElementById('sticky-cart');
    stickyCart.style.display = totalItems > 0 ? 'block' : 'none';

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
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100'">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price} each</div>
                </div>
                <div class="cart-item-qty">
                    <button onclick="updateCartQuantity(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `).join('');

        cartSubtotal.textContent = '₹' + totalAmount;
        cartGrandTotal.textContent = '₹' + totalAmount;
    }
}

function saveCart() {
    localStorage.setItem('sriKrishnaCart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('sriKrishnaCart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            cart = [];
        }
    }
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
    renderMenu();
}

// ===== Toast =====
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== Hero Slider =====
function startHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }, 4000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        });
    });
}

// ===== GPay / UPI Pay Now =====
function payNow() {
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

    // Desktop fallback — UPI deep-links only work on Android mobile
    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
    if (!isMobile) {
        document.getElementById('payment-status').innerHTML =
            '<span class="status-pending">⚠️ Please open this page on your mobile to pay via GPay</span>';
        return;
    }

    // Build UPI deep-link with dynamic cart total
    const upiLink =
        `upi://pay?pa=${encodeURIComponent(UPI_ID)}` +
        `&pn=${encodeURIComponent(HOTEL_NAME)}` +
        `&am=${total}` +
        `&cu=INR` +
        `&tn=${encodeURIComponent('Food Order - Sri Krishna Hotel')}`;

    // Direct navigation — most reliable method on Android Chrome / Samsung Browser
    window.location.href = upiLink;

    // After 2s user returns from GPay app — show "I Have Paid" button
    setTimeout(() => {
        document.getElementById('btn-payment-done').style.display = 'flex';
        document.getElementById('payment-status').innerHTML =
            '<span class="status-pending">⏳ GPay-ல் payment முடித்த பிறகு "I Have Paid" click செய்யுங்கள்</span>';
        showToast('GPay app திறக்கிறது... payment முடித்து திரும்பவும்');
    }, 2000);
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderMenu();
            document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Search toggle
    document.getElementById('search-toggle').addEventListener('click', () => {
        document.getElementById('search-bar').classList.toggle('active');
        if (document.getElementById('search-bar').classList.contains('active')) {
            setTimeout(() => document.getElementById('search-input').focus(), 100);
        }
    });

    document.getElementById('search-close').addEventListener('click', () => {
        document.getElementById('search-bar').classList.remove('active');
        document.getElementById('search-input').value = '';
        searchQuery = '';
        renderMenu();
    });

    document.getElementById('search-input').addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderMenu();
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

    // Place Order
    document.getElementById('btn-place-order').addEventListener('click', () => {
        closeCart();
        openOrderModal();
    });

    // Order Modal
    document.getElementById('order-modal-close').addEventListener('click', closeOrderModal);
    document.getElementById('order-modal-overlay').addEventListener('click', closeOrderModal);

    // Payment method radio
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'online') {
                document.getElementById('online-payment-section').style.display = 'block';
                document.getElementById('cash-payment-section').style.display = 'none';
                document.getElementById('btn-payment-done').style.display = 'none';
                document.getElementById('payment-status').innerHTML =
                    '<span class="status-pending">⏳ Click "Pay Now" to open your UPI app</span>';
                paymentStatus = 'pending';
                // Hide Submit Order until payment confirmed
                document.getElementById('btn-submit-order').style.display = 'none';
            } else {
                document.getElementById('online-payment-section').style.display = 'none';
                document.getElementById('cash-payment-section').style.display = 'block';
                paymentStatus = 'cash';
                // Cash: show Submit Order immediately
                document.getElementById('btn-submit-order').style.display = 'flex';
            }
        });
    });

    // "I Have Paid" button — confirms payment and reveals Submit Order
    document.getElementById('btn-payment-done').addEventListener('click', () => {
        paymentStatus = 'paid';
        updatePaymentStatus();
        showToast('✅ Payment confirmed!');
        document.getElementById('btn-submit-order').style.display = 'flex';
    });

    // Order form submit
    document.getElementById('order-form').addEventListener('submit', (e) => {
        e.preventDefault();
        submitOrder();
    });

    // Success modal
    document.getElementById('btn-new-order').addEventListener('click', () => {
        closeSuccessModal();
        clearCart();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // History modal
    document.getElementById('mobile-view-orders').addEventListener('click', (e) => {
        e.preventDefault();
        closeMobileMenu();
        openHistoryModal();
    });

    document.getElementById('footer-history').addEventListener('click', (e) => {
        e.preventDefault();
        openHistoryModal();
    });

    document.getElementById('history-modal-close').addEventListener('click', closeHistoryModal);
    document.getElementById('history-modal-overlay').addEventListener('click', closeHistoryModal);

    // Contact modal
    document.getElementById('mobile-contact').addEventListener('click', (e) => {
        e.preventDefault();
        closeMobileMenu();
        openContactModal();
    });

    document.getElementById('footer-contact').addEventListener('click', (e) => {
        e.preventDefault();
        openContactModal();
    });

    document.getElementById('contact-modal-close').addEventListener('click', closeContactModal);
    document.getElementById('contact-modal-overlay').addEventListener('click', closeContactModal);

    // Mobile number validation
    document.getElementById('customer-mobile').addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
    });
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
    document.getElementById('payment-status').innerHTML =
        '<span class="status-pending">⏳ Click "Pay Now" to open your UPI app</span>';
    paymentStatus = 'cash';
    document.getElementById('btn-submit-order').style.display = 'flex';
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
        statusEl.innerHTML = '<span class="status-paid">✅ Payment Completed — You may now Submit Order</span>';
    } else if (paymentStatus === 'pending') {
        statusEl.innerHTML = '<span class="status-pending">⏳ Payment Pending</span>';
    }
}

// ===== Submit Order =====
function submitOrder() {
    const customerName = document.getElementById('customer-name').value.trim();
    const customerMobile = document.getElementById('customer-mobile').value.trim();
    const tableNumber = document.getElementById('table-number').value.trim();
    const orderNotes = document.getElementById('order-notes').value.trim();
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

    if (!customerName || !customerMobile || !tableNumber) {
        showToast('Please fill all required fields');
        return;
    }

    if (customerMobile.length !== 10) {
        showToast('Please enter valid 10-digit mobile number');
        return;
    }

    if (paymentMethod === 'online' && paymentStatus !== 'paid') {
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
    generateBillPDF(order);
    sendWhatsAppKitchen(order);
    sendWhatsAppCounter(order);

    setTimeout(() => {
        speakText("Thank you for your order. Visit again.");
    }, 500);

    closeOrderModal();
    openSuccessModal();
}

// ===== Save Order History =====
function saveOrderToHistory(order) {
    let history = JSON.parse(localStorage.getItem('sriKrishnaOrders') || '[]');
    history.unshift(order);
    if (history.length > 50) history = history.slice(0, 50);
    localStorage.setItem('sriKrishnaOrders', JSON.stringify(history));
}

function renderOrderHistory() {
    const history = JSON.parse(localStorage.getItem('sriKrishnaOrders') || '[]');
    const container = document.getElementById('order-history-list');

    if (history.length === 0) {
        container.innerHTML = `
            <div class="empty-history">
                <i class="fas fa-clipboard-list"></i>
                <p>No orders yet</p>
            </div>
        `;
        return;
    }

    container.innerHTML = history.map(order => {
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
function generateBillPDF(order) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        unit: 'mm',
        format: [80, 200],
        orientation: 'portrait'
    });

    let y = 10;
    const centerX = 40;

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('SRI KRISHNA HOTEL', centerX, y, { align: 'center' });
    y += 6;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Authentic South Indian Cuisine', centerX, y, { align: 'center' });
    y += 5;
    doc.text(`Ph: ${PHONE_NUMBER}`, centerX, y, { align: 'center' });
    y += 5;
    doc.text('--------------------------------', centerX, y, { align: 'center' });
    y += 6;

    doc.setFontSize(9);
    doc.text(`Date: ${order.date}`, 5, y);
    doc.text(`Time: ${order.time}`, 55, y);
    y += 6;
    doc.text(`Order ID: ${order.id}`, 5, y);
    y += 5;
    doc.text('--------------------------------', centerX, y, { align: 'center' });
    y += 6;

    doc.setFontSize(9);
    doc.text(`Customer: ${order.customerName}`, 5, y);
    y += 5;
    doc.text(`Mobile: ${order.customerMobile}`, 5, y);
    y += 5;
    doc.text(`Table: ${order.tableNumber}`, 5, y);
    y += 5;
    if (order.notes) {
        doc.text(`Notes: ${order.notes}`, 5, y);
        y += 5;
    }
    doc.text('--------------------------------', centerX, y, { align: 'center' });
    y += 6;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('Item', 5, y);
    doc.text('Qty', 45, y);
    doc.text('Price', 65, y);
    y += 5;
    doc.setFont('helvetica', 'normal');
    doc.text('--------------------------------', centerX, y, { align: 'center' });
    y += 6;

    doc.setFontSize(9);
    order.items.forEach(item => {
        const itemTotal = item.price * item.quantity;
        doc.text(item.name.substring(0, 20), 5, y);
        doc.text(String(item.quantity), 48, y);
        doc.text(`Rs.${itemTotal}`, 62, y);
        y += 5;
    });

    y += 2;
    doc.text('--------------------------------', centerX, y, { align: 'center' });
    y += 6;

    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL AMOUNT', 5, y);
    doc.text(`Rs.${order.totalAmount}`, 55, y);
    y += 6;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('--------------------------------', centerX, y, { align: 'center' });
    y += 6;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`Payment: ${order.paymentStatus}`, centerX, y, { align: 'center' });
    y += 6;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('--------------------------------', centerX, y, { align: 'center' });
    y += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('THANK YOU', centerX, y, { align: 'center' });
    y += 5;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Visit Again!', centerX, y, { align: 'center' });

    doc.save(`SriKrishna_Bill_${order.id}.pdf`);
}

// ===== WhatsApp Functions =====
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

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
}

function sendWhatsAppCounter(order) {
    const message =
        `🧾 *Bill Ready*%0A%0A` +
        `🪑 *Table:* ${order.tableNumber}%0A` +
        `👤 *Customer:* ${order.customerName}%0A` +
        `💰 *Total:* ₹${order.totalAmount}%0A` +
        `💳 *Payment Status:* ${order.paymentStatus}%0A%0A` +
        `⏰ ${order.date} ${order.time}`;

    setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    }, 1000);
}

// ===== Voice on load =====
window.speechSynthesis.onvoiceschanged = function() {
    // Voices loaded
};
