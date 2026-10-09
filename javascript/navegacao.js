/*MÔDULO/ARQUIVO RESPONSÁVEL PELA NAVEGAÇÃO ENTRE AS PÁGINAS DO SITE*/

/*primeiro devemos importar as funções necessárias em seus respectivos arquivos/módulos*/
import {configurarFormulario} from "./formulario.js";

/*guarda o conteúdo principal da página*/
const conteudo = document.getElementById("conteudo");

/*guarda cópia do conteúdo da página inicial */
const paginaInicial = conteudo.innerHTML;

/*busca template de cadastro*/
const templateCadastro = document.getElementById("template-cadastro");

/*busca template de projetos*/
const templateProjetos = document.getElementById("template-projetos");

/* configura o menu dropdown de projetos */
function configurarDropdown() {

    const botaoProjetos = document.querySelector(".dropdown-button");
    const submenuProjetos = document.getElementById("submenu-projetos");

    if (!botaoProjetos || !submenuProjetos) {
        return;
    }

    botaoProjetos.addEventListener("click", function () {

        const aberto = botaoProjetos.getAttribute("aria-expanded") === "true";

        botaoProjetos.setAttribute("aria-expanded", String(!aberto));

        submenuProjetos.classList.toggle("ativo", !aberto);
    });
}

/*carrega formulário de cadastro*/
function carregarCadastro() {
    const clone = templateCadastro.content.cloneNode(true);

    conteudo.innerHTML = "";

    conteudo.appendChild(clone);

    /*configura o formulário de cadastro*/
    configurarFormulario();
}

/*carrega projetos*/
function carregarProjetos() {
    const clone = templateProjetos.content.cloneNode(true);

    conteudo.innerHTML = "";

    conteudo.appendChild(clone);
}

/* controla a navegação atraves do hash da URL */

export function navegar() {

    /*pega o hash da URL e guarda na variavel rota*/
    const rota = window.location.hash;

    /*verifica se a rota é projetos*/
    if (rota === "#projeto") {

        carregarProjetos();
    }

    /*rota é cadastro*/
    else if (rota === "#cadastro") {
        carregarCadastro();
    }

    /*rota inicial*/
    else {
        conteudo.innerHTML = paginaInicial;
        configurarDropdown();
    }
}

/*observa mudanças no hash da URL e chama a função navegar()*/
export function iniciarNavegacao() {
    window.addEventListener("hashchange", navegar);

    navegar();
}



