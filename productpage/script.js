

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
        btn2.className = "btn";
        btn2.textContent = "Add to Wishlist";
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
                    `;
                })
                .catch(err => {
                    document.getElementById('product-details').textContent = "Product not found.";
                });
        } else {
            document.getElementById('product-details').textContent = "No product selected.";
        }