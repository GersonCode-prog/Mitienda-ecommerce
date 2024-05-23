const products = {
    zapatos: [
        { id: 1, name: 'Zapato 1', price: 10.00, image: 'https://paylessgu.vtexassets.com/arquivos/ids/372322/195826_1.jpg?v=638094819114070000/150' },
        { id: 2, name: 'Zapato 2', price: 20.00, image: 'https://vasari.vteximg.com.br/arquivos/ids/215410-500-500/MZD175905-FC-30.jpg?v=638163189281130000/150' },
        { id: 3, name: 'Zapato 3', price: 10.00, image: 'https://cdnx.jumpseller.com/voce-sport/image/29185793/resize/610/610?1674565890/150' },
        { id: 4, name: 'Zapato 4', price: 20.00, image: 'https://hushpuppies.gt/cdn/shop/products/300592491.jpg?v=1645720855/150' },
        { id: 5, name: 'Zapato 5', price: 10.00, image: 'https://http2.mlstatic.com/D_Q_NP_634306-MCO71703511647_092023-O.webp/150' },
        { id: 6, name: 'Zapato 6', price: 20.00, image: 'https://caterpillargt.com/cdn/shop/files/300704981_af88b74d-1d70-4697-896c-6296c06a4c71.jpg?v=1692634473/150' },
        { id: 7, name: 'Zapato 7', price: 10.00, image: 'https://www.run24.mx/cdn/shop/products/1012B318.002-3_800x.jpg?v=1678232482/150' },
        { id: 7, name: 'Zapato 7', price: 10.00, image: 'https://caterpillarcr.com/cdn/shop/products/30061800-min_39c45c01-bfd0-4b0e-a9e3-08e9abfbd7b7.jpg?v=1695343215/150' },
    ],
    camisas: [
        { id: 1, name: 'Camisa 1', price: 10.00, image: 'https://caterpillargt.com/cdn/shop/products/2610628_12815_Standard-Stone_1200x.jpg?v=1658848948/150' },
        { id: 2, name: 'Camisa 2', price: 20.00, image: 'https://yazbek.com.mx/cdn/shop/products/C0606-camisa-gabardina-mc-caballero-50algodon-50poliester-azul-francia_1.jpg?v=1693280980/150' },
        { id: 1, name: 'Camisa 3', price: 10.00, image: 'https://www.progresivajeans.com/cdn/shop/collections/11.2.4_CAM120_PALO_ROSA_CLARO_CAMISA_CUELLO_MAO_MANGA_CORTA_E.jpg?v=1633710497&width=2400.com/150' },
        { id: 2, name: 'Camisa 4', price: 20.00, image: 'https://yazbek.com.mx/cdn/shop/products/C0606-camisa-gabardina-mc-caballero-50algodon-50poliester-rojo_1.jpg?v=1693280997/150' },
        { id: 1, name: 'Camisa 5', price: 10.00, image: 'https://yazbek.com.mx/cdn/shop/products/C0606-camisa-gabardina-mc-caballero-50algodon-50poliester-beige_1.jpg?v=1693280983/150' },
        { id: 2, name: 'Camisa 6', price: 20.00, image: 'https://yazbek.com.mx/cdn/shop/products/C0606-camisa-gabardina-mc-caballero-50algodon-50poliester-beige_1.jpg?v=1693280983/150' },
        { id: 1, name: 'Camisa 7', price: 10.00, image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/99b0da4a-3fbb-490a-b3fe-3d410e9b3a4f.f11132236c008a211232f24a235c606a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF/150' },
        { id: 2, name: 'Camisa 8', price: 20.00, image: 'https://caterpillargt.com/cdn/shop/files/30076339_180x@2x.jpg?v=1709928257.com/150' },
    
 
    ],
    pantalones: [
        { id: 5, name: 'Pantalón 1', price: 30.00, image: 'https://caterpillargt.com/cdn/shop/files/30075917_e65840a7-bec1-4124-bd57-355e07170201_1024x1024.jpg?v=1707249435/150' },
        { id: 6, name: 'Pantalón 2', price: 40.00, image: 'https://rusty.com.ar/cdn/shop/files/IMG_9892.jpg?v=1709660128/150' },
         { id: 5, name: 'Pantalón 3', price: 30.00, image: 'https://rusty.com.ar/cdn/shop/files/IMG_0159.jpg?v=1709650481/150' },
        { id: 6, name: 'Pantalón 4', price: 40.00, image: 'https://coliseum.vteximg.com.br/arquivos/ids/591371-1000-1000/PANTALONES-HOMBRE-CONVERSE-CARGO-KNIT-BOTTOM-CNVSP23MJOG1-244_1.jpg?v=638306520766430000/150' },
        { id: 5, name: 'Pantalón 5', price: 30.00, image: 'https://girbaud.vteximg.com.br/arquivos/ids/195655-1600-1600/Pantalon-Chino-Para-Hombre-Girbaud545.jpg?v=637838420753870000/150' },
        { id: 6, name: 'Pantalón 6', price: 40.00, image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/54aa14a2-3883-4617-922a-144c41d3736b.9c11904eaa59277bf151372ffea2eaa1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF/150' },
        { id: 5, name: 'Pantalón 7', price: 30.00, image: 'https://contents.mediadecathlon.com/p2198680/k$18523f8c5c29aa9939be3b85490c7d05/sq/pantalon-desmontable-de-montana-y-trekking-hombre-quechua-mh150.jpg?format=auto&f=800x0/150' },
        { id: 6, name: 'Pantalón 8', price: 40.00, image: 'https://contents.mediadecathlon.com/p1786942/k$ca18e8832c7fb8b5da98e4a1c36617ae/sq/8562227.jpg?format=auto&f=800x0/150' },

    ]
};

const cart = [];

function renderProducts() {
    for (let section in products) {
        const productsContainer = document.getElementById(section);
        productsContainer.innerHTML = '';
        products[section].forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" onclick="expandImage(this)">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
            `;
            productsContainer.appendChild(productElement);
        });
    }
}

function addToCart(productId) {
    let product;
    for (let section in products) {
        product = products[section].find(p => p.id === productId);
        if (product) break;
    }
    if (product) {
        cart.push(product);
        updateCartCount();
        renderCart();
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

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
