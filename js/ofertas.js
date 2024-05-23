const offers = [
    { id: 1, name: 'Zapato 1', price: 10.00, image: 'https://paylessgu.vtexassets.com/arquivos/ids/372322/195826_1.jpg?v=638094819114070000/150' },
    { id: 2, name: 'Zapato 2', price: 20.00, image: 'https://vasari.vteximg.com.br/arquivos/ids/215410-500-500/MZD175905-FC-30.jpg?v=638163189281130000/150' },
    { id: 3, name: 'Zapato 3', price: 10.00, image: 'https://cdnx.jumpseller.com/voce-sport/image/29185793/resize/610/610?1674565890/150' },
    { id: 1, name: 'Camisa 1', price: 10.00, image: 'https://caterpillargt.com/cdn/shop/products/2610628_12815_Standard-Stone_1200x.jpg?v=1658848948/150' },
    { id: 2, name: 'Camisa 2', price: 20.00, image: 'https://yazbek.com.mx/cdn/shop/products/C0606-camisa-gabardina-mc-caballero-50algodon-50poliester-azul-francia_1.jpg?v=1693280980/150' },
    { id: 1, name: 'Camisa 3', price: 10.00, image: 'https://www.progresivajeans.com/cdn/shop/collections/11.2.4_CAM120_PALO_ROSA_CLARO_CAMISA_CUELLO_MAO_MANGA_CORTA_E.jpg?v=1633710497&width=2400.com/150' },
    { id: 5, name: 'Pantalón 1', price: 30.00, image: 'https://caterpillargt.com/cdn/shop/files/30075917_e65840a7-bec1-4124-bd57-355e07170201_1024x1024.jpg?v=1707249435/150' },
    { id: 6, name: 'Pantalón 2', price: 40.00, image: 'https://rusty.com.ar/cdn/shop/files/IMG_9892.jpg?v=1709660128/150' },
    
];

function renderOffers() {
    const offersContainer = document.getElementById('ofertas');
    offersContainer.innerHTML = '';
    offers.forEach(offer => {
        const offerElement = document.createElement('div');
        offerElement.classList.add('product');
        offerElement.innerHTML = `
            <img src="${offer.image}" alt="${offer.name}" onclick="expandImage(this)">
            <h3>${offer.name}</h3>
            <p>$${offer.price.toFixed(2)}</p>
            <button onclick="addToCart(${offer.id}, '${offer.type}')">Agregar al Carrito</button>
        `;
        offersContainer.appendChild(offerElement);
    });
}

function addToCart(productId, productType) {
    let product;
    if (productType === 'offers') {
        product = offers.find(p => p.id === productId);
    } else {
        for (let section in products) {
            product = products[section].find(p => p.id === productId);
            if (product) break;
        }
    }
    if (product) {
        cart.push(product);
        updateCartCount();
        renderCart();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('zapatos') || document.getElementById('camisas') || document.getElementById('pantalones')) {
        renderProducts();
    }
    if (document.getElementById('ofertas')) {
        renderOffers();
    }

    document.getElementById('cart-button').addEventListener('click', () => {
        const cartModal = document.getElementById('cart-modal');
        cartModal.style.display = 'block';
    });

    document.getElementById('close-cart').addEventListener('click', () => {
        const cartModal = document.getElementById('cart-modal');
        cartModal.style.display = 'none';
    });
});

function expandImage(image) {
    image.classList.toggle('expanded');
    if (image.classList.contains('expanded')) {
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'X';
        closeButton.classList.add('close-button');
        closeButton.onclick = function() {
            image.classList.remove('expanded');
            closeButton.remove();
        };
        image.appendChild(closeButton);
    } else {
        const closeButton = image.querySelector('.close-button');
        if (closeButton) {
            closeButton.remove();
        }
    }
}
