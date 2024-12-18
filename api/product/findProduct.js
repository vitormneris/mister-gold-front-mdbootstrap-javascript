const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch('http://18.227.48.211:8081/produtos/' + productId + '/id', {
    headers: {
        "Content-Type": "application/json"
    },
    method: 'GET'
})
.then(response => {
    if (response.ok) {
        return response.json()
    }
})
.then(data => {
    showData(data)
})
.catch(error => {
    console.log(error)
});


function showData(data) {
    
    const tdName = document.getElementById("name")
    tdName.value = data.name
    tdName.focus()

    const tdImageUrl = document.getElementById("selectedImage")
    tdImageUrl.src = data.imageUrl

    const tdPrice = document.getElementById("price")
    tdPrice.value = data.price.toFixed(2)
    tdPrice.focus()

    const tdDetails = document.getElementById("description")
    tdDetails.value = data.description
    tdDetails.focus()

    const tdQuantity = document.getElementById("quantity")
    tdQuantity.value = data.quantity
    tdQuantity.focus()
}
