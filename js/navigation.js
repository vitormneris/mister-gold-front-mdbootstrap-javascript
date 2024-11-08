document.addEventListener('DOMContentLoaded', function() {
    try {
        const containerSidebar = document.getElementById('sidebar');
        const sidebarContent = ` 
        <div class="sidebar-container">
        <h2>Joias</h2>
        <hr class="hr" />
        <ul>
            <li><a href="/html/categories.html">Todas as categorias</a></li>
            <li><a href="/html/products.html">Todos os produtos</a></li>
            <li><a href="#">Anéis</a></li>
            <li><a href="#">Brincos</a></li>
            <li><a href="#">Pulseiras</a></li>
            <li><a href="#">Colares</a></li>
            <li><a href="#">Conjuntos</a></li>
        </ul>
        <h2 class="adm-pages">Administração</h2>
        <hr class="hr" />
        <ul>
            <li><a href="/html/adm/">Lista de produtos</a></li>
            <li><a href="/html/adm/list_category.html">Lista de categorias</a></li>
            <li><a href="/html/adm/adm_UserTable.html">Lista de usuarios</a></li>
            <li><a href="#">Lista de administradores</a></li>
        </ul>
        <h2 class="adm-pages">Todas as paginas</h2>
        <hr class="hr" />
        <ul>
            <li><a href="/html/index.html">index</a></li>
            <li><a href="/html/register.html">register</a></li>
            <li><a href="/html/login.html">login</a></li>
            <li><a href="/html/product.html">product</a></li>
            <li><a href="/html/products.html">products</a></li>
            <li><a href="/html/categories.html">categories</a></li>
            <li><a href="/html/account.html">account</a></li>
            <li><a href="/html/cart.html">cart</a></li>
            <li><a href="/html/order.html">order</a></li>
            <li><a href="/html/contact.html">contact</a></li>
        </ul>
        <hr class="hr" />
        <ul>
            <li><a href="/html/adm/new_category.html">new_category</a></li>
            <li><a href="/html/adm/list_category.html">list_category</a></li>
            <li><a href="/html/adm/edt_category.html">edt_category</a></li>
            <li><a href="/html/adm/cadastro_adm.html">cadastro_adm</a></li>
            <li><a href="/html/adm/adm_UserTable.html">adm_UserTable</a></li>
            <li><a href="/html/adm/insert_product.html">insert_product</a></li>
        </ul>
    </div>
                  `;
                  containerSidebar.insertAdjacentHTML('beforeend', sidebarContent);
    } catch (error) {
        console.log("Não foi possivel carregar a sidebar!")
    }

    
    try {
        const containerNavbar = document.getElementById('navbar');
        const navbarContent = ` 
         <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                <div class="container-fluid justify-content-between">
                    <div class="d-flex">
                        <button class="btn-sidebar" id="btn-toggle-sidebar">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div class="logo">
                            <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="/html/index.html"><img src="/images/logo.png"
                                    loading="lazy" alt="Logo" /></a>
                            <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="/html/index.html">Mistergold</a>
                        </div>
                    </div>
                    <div class="d-flex search-bar-container align-items-center">
                        <form class="input-group w-auto my-auto d-none d-sm-flex">
                            <input type="search" class="form-control rounded" placeholder="Buscar produtos.." />
                            <span class="input-group-text border-0 d-none d-lg-flex">
                                <i class="fas fa-search"></i>
                            </span>
                        </form>
                    </div>
                    <div class="icons d-flex align-items-center">
                        <button aria-label="Carrinho" id="btn-cart-page">
                            <i class="fa-solid fa-cart-shopping"></i><span>Carrinho</span>
                        </button>
                        <button aria-label="Conta" id="btn-account-page">
                            <i class="fa-solid fa-user"></i><span>Conta</span>
                        </button>
                    </div>
                </div>
            </nav>
                  `;
                  containerNavbar.insertAdjacentHTML('beforeend', navbarContent);
    } catch (error) {
        console.log("Não foi possivel carregar a navbar!")
    }

    document.getElementById('btn-toggle-sidebar').addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    });
   
});