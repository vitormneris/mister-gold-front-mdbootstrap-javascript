import { validationAdm } from "../validationAdm.js"

const token = localStorage.getItem("token")

validationAdm(token).then(id => {

    document.getElementById("button").addEventListener("click", function(event) {
        event.preventDefault()

        const name = document.getElementById("name").value;
        const imageUrl = "imagem.url" // document.getElementById("imageUrl").value;
        const description = "desc"// document.getElementById("description").value;

        let category = {
            "name": name,
            "imageUrl": imageUrl,
            "description": description
        }

        fetch('http://localhost:8084/categorias/salvar', {
            headers: { 
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            method: "POST",
            body: JSON.stringify(category)
        })
        .then(response => {
            if (response.status === 201) {
                return response.json()
            }
            return null
        })
        .then(data => {
            if (data) {
                showData("Cadastrado com sucesso!", "green")
            } else {
                showData("Problema ao cadastrar!", "red")
            }
        })
        .catch(error => {
            console.log(error)
        })

        function showData(text, cl) {
            const divStatus = document.getElementById("status")

            if (divStatus.querySelector("p")) divStatus.querySelector("p").remove()

            const parag = document.createElement("p")
            parag.textContent = text
            parag.style.color = cl
            parag.style.textAlign = "center"

            divStatus.appendChild(parag)
        }
    })
})