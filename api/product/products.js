
document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:8084/produtos?page=0&pageSize=10&isActive=true', {
        method: "GET"
    }).then(
        response => {
            if (response.status === 200) {
                return response.json()
            }
        }).then(data => {
            showData(data)
        }).catch(error => {
            console.log(error)
        })

    function showData(data) {
        const divConteiner = document.getElementById("containerProducts")

        data.content.forEach(contents => {

            const cardProducts = `
                    <div onclick="redirectToProductPage('${contents.id}')" class="col-lg-4 col-md-12 mb-6 mb-lg-3">
                        <div class="card">

                            <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                <img src="${contents.imageUrl}" class="img-fluid"> 
                            </div>

                            <div class="card-body">

                                <h5 class="card-title">${contents.name}</h5>

                                <div class="category_line_alt"></div>

                                <p class="card-text product-price-cash"> R$ ${contents.price} à vista </p>

                                <p class="card-text product-price-card"> 10 x R$ ${contents.price / 10} no cartão </p>

                                <a href="#!" class="btn btn-primary" onclick="addToCart('${contents.id}', '${contents.name}', '${contents.price}', '${contents.imageUrl}')"><i class="fa-solid fa-cart-shopping"></i>+</a>

                            </div>
                        </div>
                    </div>`

            divConteiner.innerHTML += cardProducts
        })
    }
})
function addToCart(id, name, price, imageUrl) {
    const product = {
        id: id,
        name: name,
        price: parseFloat(price),
        imageUrl: imageUrl,
        quantity: 1 // sempre será 1 inicialmente
    };

    // Verifica se já existe algum produto no carrinho
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Adiciona o produto ao carrinho
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produto adicionado ao carrinho!");
}