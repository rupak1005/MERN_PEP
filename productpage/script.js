fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => {
    var productContainer = document.querySelector("#products");
    data.products.forEach(element => {
        // Create card container
        var card = document.createElement("a");
        card.className = "product-card";
        card.href = `product.html?id=${element.id}`;
        
        // Product image
        var img = document.createElement("img");
        img.src = element.thumbnail;
        img.alt = element.title;

        // Product title
        var title = document.createElement("div");
        title.className = "product-title";
        title.textContent = element.title;

        var dets=document.createElement("div");
        dets.id="dets";
        
        // Product price
        var price = document.createElement("div");
        price.className = "product-price";
        price.textContent = "$" + element.price;

        //product rating
        var rating=document.createElement("div");
        rating.className="product-rating";
        rating.textContent="⭐"+element.rating;

        dets.appendChild(price)
        dets.appendChild(rating)
        // Product description
        var desc = document.createElement("div");
        desc.className = "product-desc";
        desc.textContent = element.description;

        //buttons
        var btns = document.createElement("div");
        btns.id = "buttons";
        
        var btn1 = document.createElement("button");
        btn1.className = "btn";
        btn1.textContent = "Buy Now";
        
        var btn2 = document.createElement("button");
        btn2.className = "btn add-to-cart-btn";
        btn2.textContent = "Add to Cart";
        btn2.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent navigating away
            // Add to cart logic
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            // Check if already in cart
            let found = cart.find(item => item.id === element.id);
            if (found) {
                found.quantity += 1;
            } else {
                cart.push({
                    id: element.id,
                    title: element.title,
                    price: element.price,
                    thumbnail: element.thumbnail,
                    quantity: 1
                });
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            btn2.textContent = "Added!";
            setTimeout(() => btn2.textContent = "Add to Cart", 1000);
        });

        btns.appendChild(btn1);
        btns.appendChild(btn2);

        // Assemble card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(dets);
        card.appendChild(desc);
        card.appendChild(btns);

        // Add card to container
        productContainer.appendChild(card);
    });
  })
  .catch(error => {
    document.querySelector("#products").textContent = "Failed to load products.";
    console.error("Error fetching products:", error);
  });

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

if (productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(product => {
            document.getElementById('product-details').innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <div class="title">${product.title}</div>
                <div class="brand">Brand: ${product.brand}</div>
                <div id= "dets">
                <div class="price">$${product.price}</div>
                <div class="rating">⭐ ${product.rating}</div></div>
                <div class="desc">${product.description}</div>
                <button class="back-btn" onclick="window.history.back()">← Back to Gallery</button>
                <button class="btn add-to-cart-btn" id="detail-add-cart">Add to Cart</button>
            `;
            // Add to cart for detail page
            document.getElementById('detail-add-cart').addEventListener('click', function() {
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                let found = cart.find(item => item.id === product.id);
                if (found) {
                    found.quantity += 1;
                } else {
                    cart.push({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        thumbnail: product.thumbnail,
                        quantity: 1
                    });
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                this.textContent = "Added!";
                setTimeout(() => this.textContent = "Add to Cart", 1000);
            });
        })
        .catch(err => {
            document.getElementById('product-details').textContent = "Product not found.";
        });
} else if (document.getElementById('product-details')) {
    document.getElementById('product-details').textContent = "No product selected.";
}
