const products = {
    "BIO BOWL": [
      {
        "imgSrc": "img/ect_products/bio_bowl/",
        "name": "Bowl",
        "imageCount": 5 // Number of images for BIO BOWL
      }
    ],
    "BIO CUPS": [
      {
        "imgSrc": "img/ect_products/bio_cups/",
        "name": "Cups",
        "imageCount": 20 // Number of images for BIO CUPS
      }
    ],
    "BIO PAPER PLATE": [
        {
          "imgSrc": "img/ect_products/bio_paper_plate/",
          "name": "Bowl",
          "imageCount": 6 // Number of images for BIO BOWL
        }
      ],
      "BIO BURGER BOX": [
        {
          "imgSrc": "img/ect_products/burger_box/",
          "name": "Cups",
          "imageCount": 13 // Number of images for BIO CUPS
        }
      ],
      "FRIES & NACHOS PLATE": [
        {
          "imgSrc": "img/ect_products/fries_plate/",
          "name": "Bowl",
          "imageCount": 8 // Number of images for BIO BOWL
        }
      ],
      "BIO PAPER BAGS": [
        {
          "imgSrc": "img/ect_products/paper_bags/",
          "name": "Cups",
          "imageCount": 26 // Number of images for BIO CUPS
        }
      ],
      "RANGE OF PRODUCTS": [
        {
          "imgSrc": "img/ect_products/product_range/",
          "name": "Cups",
          "imageCount": 8 // Number of images for BIO CUPS
        }
      ],
      "BIO SANDWICH BOX": [
        {
          "imgSrc": "img/ect_products/sandwich_box/",
          "name": "Cups",
          "imageCount": 5 // Number of images for BIO CUPS
        }
      ]
};

// Function to generate store items
function generateStoreItems() {
    const storeItemsContainer = document.getElementById("store-items");
    storeItemsContainer.innerHTML = ""; // Clear previous content

    for (const category in products) {
        if (Object.hasOwnProperty.call(products, category)) {
            const categoryTitle = document.createElement("h1");
            categoryTitle.classList.add("fs-4", "fst-italic", "text-primary", "text-center", "mt-5");
            categoryTitle.textContent = category;
            storeItemsContainer.appendChild(categoryTitle);

            products[category].forEach(product => {
                for (let i = 1; i <= product.imageCount; i++) {
                    const imgSrc = `${product.imgSrc}${i}.jpg`;
                    const itemHtml = `
                        <div class="col-md-2 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="store-item position-relative text-center">
                                <img class="img-fluid" src="${imgSrc}" alt="${product.name} ${i}">
                            </div>
                        </div>`;
                    storeItemsContainer.innerHTML += itemHtml;
                }
            });
        }
    }
}

// Call the function to generate store items
generateStoreItems();
