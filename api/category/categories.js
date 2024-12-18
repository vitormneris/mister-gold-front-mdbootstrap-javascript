document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 0; 
    const pageSize = 8; 

    fetchData();

    document.querySelector(".pagination").addEventListener("click", handlePaginationClick);

    function fetchData() {
        fetch(`http://18.227.48.211:8081/categorias?page=${currentPage}&pageSize=${pageSize}&isActive=true`, {
            method: "GET"
        })
        .then(response => {
            if (response.status === 200) return response.json();
        })
        .then(data => {
            if (data && data.content) {
                showData(data);
                updatePagination(data.totalPages || 1); 
            } else {
                console.log("Nenhum dado encontrado.");
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    function updatePagination(totalPages) {
        const pagination = document.querySelector(".pagination");
        pagination.innerHTML = `
            <li class="page-item ${currentPage === 0 ? 'disabled' : ''}">
                <a class="page-link" href="#" aria-label="Previous" data-page="prev">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>`;
        
        for (let i = 0; i < totalPages; i++) {
            pagination.innerHTML += `
                <li class="page-item ${currentPage === i ? 'active' : ''}">
                    <a class="page-link" href="#" data-page="${i}">${i + 1}</a>
                </li>`;
        }

        pagination.innerHTML += `
            <li class="page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" aria-label="Next" data-page="next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>`;
    }

    function showData(data) {
        const divContainer = document.getElementById("containerCategories");
        divContainer.innerHTML = "";

        const h1 = document.getElementById("status1")

        if (data.content.length == 0) {
            h1.style.color = "red"
            h1.innerText =  "Não há categorias cadastradas!"
        } else {
            document.getElementById("divStatus1").style.display = "none"
        }

        data.content.forEach(contents => {
            const cardCategories = `
                <div class="category" onclick="redirectToCategoryPage('${contents.id}')">
                    <img src="${contents.imageUrl}" class="category-img-top" alt="${contents.name}" />
                    <div class="category-body">
                        <p class="category-text">${contents.name}</p>
                        <div class="category_line" align="center"></div>
                    </div>
                </div>`;
            divContainer.innerHTML += cardCategories;
        });
    }

    function handlePaginationClick(event) {
        event.preventDefault();
        const page = event.target.getAttribute("data-page");
        
        if (page === "prev" && currentPage > 0) {
            currentPage--;
        } else if (page === "next" && currentPage < document.querySelectorAll(".pagination .page-item").length - 3) {
            currentPage++;
        } else if (!isNaN(page)) {
            currentPage = parseInt(page);
        }

        fetchData();
    }
});
