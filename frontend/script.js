window.onload = function () {
  const dataDiv = document.getElementById("data");
  dataDiv.innerHTML = ""; // clear "Loading products..."

  sampleProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product";

    productCard.innerHTML = `
      <h3>${product.name}</h3>
      <p><strong>Price:</strong> $${product.price}</p>
      <p>${product.description}</p>
    `;

    dataDiv.appendChild(productCard);
  });
};
