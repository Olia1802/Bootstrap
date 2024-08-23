
let cart = [];

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'align-items-center');
        
     
        li.innerHTML = `
            <img src="${item.image}" class="img-thumbnail mr-3" style="width: 60px; height: 60px; object-fit: cover;">
            <span>${item.name} - ${item.price} грн</span>
            <button class="btn btn-danger btn-sm ml-auto" onclick="removeFromCart(${index})">Видалити</button>
        `;
        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
    totalPrice.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = event.target.getAttribute('data-product-id');
        const productName = event.target.getAttribute('data-product-name');
        const productPrice = parseFloat(event.target.getAttribute('data-product-price'));
        
        
        const productImage = event.target.closest('.col-md-3').querySelector('img').getAttribute('src');
        
       
        cart.push({ id: productId, name: productName, price: productPrice, image: productImage });
        updateCart();
    }
});

let loadCount = 8; 
const products = [
    { name: 'Bento Delight', price: 120, image: 'т9.jpg' },
    { name: 'Cherry Blossom Cake', price: 150, image: 'т10.jpg' },
    { name: 'Matcha Magic', price: 140, image: 'т11.jpg' },
    { name: 'Coconut Dream', price: 130, image: 'т12.jpg' },
    { name: 'Tropical Tango', price: 160, image: 'т1.jpg' },
    { name: 'Berry Bliss', price: 170, image: 'т3.jpg' },
    { name: 'Lemon Zest', price: 110, image: 'т7.jpg' },
    { name: 'Choco Fusion', price: 180, image: 'т8.jpg' },
    { name: 'Mango Paradise', price: 145, image: 'т9.jpg' },
    { name: 'Vanilla Sky', price: 125, image: 'т10.jpg' },
    { name: 'Caramel Fantasy', price: 190, image: 'т11.jpg' },
    { name: 'Nutty Delight', price: 135, image: 'т12.jpg' },
    { name: 'Peachy Perfection', price: 155, image: 'т1.jpg' },
    { name: 'Pineapple Pleasure', price: 165, image: 'т3.jpg' },
    { name: 'Raspberry Twist', price: 175, image: 'т7.jpg' },
    { name: 'Strawberry Kiss', price: 185, image: 'т8.jpg' }
];


function loadProducts(startIndex, count) {
    for (let i = startIndex; i < startIndex + count && i < products.length; i++) {
        let newCol = document.createElement('div');
        newCol.classList.add('col-md-3', 'mb-4');
        newCol.innerHTML = `
            <img src="images/${products[i].image}" class="img-fluid" alt="${products[i].name}">
            <h5 class="mt-2">${products[i].name}</h5>
            <p>${products[i].price} грн</p>
            <button class="btn btn-success btn-block add-to-cart" data-product-id="${i + 1}" data-product-price="${products[i].price}" data-product-name="${products[i].name}">Додати до кошика</button>
        `;
        document.getElementById('product-gallery').appendChild(newCol);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    loadProducts(0, 8);
});

document.getElementById('load-more').addEventListener('click', function () {
    loadProducts(loadCount, 4); 


    if (loadCount >= products.length) {
        this.style.display = 'none';
    }
});
