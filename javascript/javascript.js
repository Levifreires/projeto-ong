

/* criar uma single page dinamica que implementa navegação fluida
rotina de validação de formulários com feedback adequado e 
armazenar dados atraves de localStorage elém de modular e formular por 
áreas de funcionalidade*/

/*primeiro vamos encontrar o elemento com id conteudo que no caso está no main do index.html
e guardar uam referência dele em uma constante */
const conteudo = document.getElementById("conteudo");

/* guarda uma cópia do conteúdo inicial que está dentro do elemento
   com id="conteudo", para poder restaurá-lo posteriormente. */
const paginaInicial = conteudo.innerHTML;

/* busca o template de formulário de cadastro e guarda sua referência em uma váriavel*/
const templateCadastro = document.getElementById("template-cadastro");

const templateProjetos = document.getElementById("template-projetos");

/*função que possibilita carregar o cadastro, seleciona o tamplate cria uma cópia, após limpa o conteúdo atual e coloca a cópia
dentro do <main>*/
function carregarCadastro() {

    /* A constante clone recebe uma cópia do conteúdo do template.
       O método cloneNode(true) realiza uma cópia profunda,
       incluindo todos os elementos que estão dentro do template. */
    const clone = templateCadastro.content.cloneNode(true);

    /* Apaga o conteúdo principal. */
    conteudo.innerHTML = "";

    /* Adiciona o conteúdo do clone dentro do <main>. */
    conteudo.appendChild(clone);

    /* Recupera os dados salvos anteriormente,
       depois que o formulário já está disponível. */
    recuperarDados();

    /* Aplica as máscaras depois que o formulário
       já foi inserido no DOM. */
    aplicarMascaras();
}

function carregarProjetos() {

    const clone = templateProjetos.content.cloneNode(true);

    conteudo.innerHTML = "";

    conteudo.appendChild(clone);
}

/*após criei uma função que irá verificar a página que o usuário escolheu, 
verifica o conteúdo que deve aparecer (selecionado pelo usuário) e 
coloca esse conteúdo dentro do main*/

function navegar() {

    /* window representa a janela do navegador o location é o endereço atual o hash pega o endereço depois do # 
    assim guardando a informação na variavel rota */

    const rota = window.location.hash;

    /*isso demonstra que caso a opção projetos seja acionada pelo usuário o main e substituido pelo conteúdo do if 
    nesse caso da rota é a parte de projetos */
    if (rota === "#projeto") {

        carregarProjetos();
    }

    /*determina caso a opção escolida pelo usuário seja cadastro substitui pelo conteúdo do else if cadastro*/
    else if (rota === "#cadastro") {

        carregarCadastro();
    }

    /*esse útima rota determina que caso o usúario na selecione nada o conteúdo da página principal index.html
    se mantenha sendo a rota alternativa primaria*/
    else {

        conteudo.innerHTML = paginaInicial;
    }
}

/* adicionamos o evento que, casso a parte # endereço mudar executa a função navegar*/
window.addEventListener("hashchange", navegar);

navegar();


/*
 * EVENTO SUBMIT
 * Observa o envio do formulário e realiza a validação
 * antes de armazenar os dados no localStorage.
 */

     /* Verifica se o destino começa com "#".
     * Links iniciados com "#" normalmente apontam
     * para uma seção ou elemento dentro da própria página.
     */
    if (destino.startsWith("#")) {
document.addEventListener("submit", function (envio) {

    /*
     * Impede o comportamento padrão do formulário,
     * evitando o recarregamento da página.
     */
    envio.preventDefault();

    /*
     * Armazena o formulário que disparou o evento.
     */
    const formulario = envio.target;

    /*
     * Verifica se todos os campos obrigatórios
     * estão preenchidos corretamente.
     */
    if (!formulario.checkValidity()) {

        formulario.reportValidity();

        return;
    }

    /*
     * Cria um objeto contendo os dados preenchidos
     * pelo usuário no formulário.
     */
    const dadosFormulario = {

        nome: formulario.nome.value,

        email: formulario.email.value,

        idade: formulario.idade.value,

        cpf: formulario.cpf.value,

        celular: formulario.celular.value,

        CEP: formulario.CEP.value,

        endereco: formulario["endereço"].value,

        numero: formulario.numero.value,

        cidade: formulario.cidade.value,

        estado: formulario.sigla.value
    };

    /*
     * Converte o objeto JavaScript em uma string JSON.
     * O localStorage armazena os dados como texto.
     */
    const dadosString = JSON.stringify(dadosFormulario);

    /*
     * Armazena os dados no localStorage.
     * "dadosFormulario" é a chave utilizada para
     * identificar os dados armazenados.
     */
    localStorage.setItem("dadosFormulario", dadosString);

    /*
     * Procura o elemento que possui a classe "toast".
     */
    const toast = formulario.querySelector(".toast");

    /*
     * Se o elemento existir, torna a mensagem de
     * sucesso visível.
     */
    if (toast) {

        toast.style.display = "block";
    }

    console.log("Formulário válido e dados armazenados.");
});


/*
 * FUNÇÃO RECUPERAR DADOS
 * Busca os dados armazenados no localStorage
 * e preenche novamente o formulário.
 */
function recuperarDados() {

    /*
     * Recupera os dados armazenados no localStorage.
     */
    const dadosString = localStorage.getItem("dadosFormulario");

    /*
     * Se não existirem dados armazenados,
     * encerra a função.
     */
    if (!dadosString) {

        return;
    }

    /*
     * Converte a string JSON novamente
     * para um objeto JavaScript.
     */
    const dadosFormulario = JSON.parse(dadosString);

    /*
     * Localiza o formulário que acabou de ser
     * inserido na página.
     */
    const formulario = document.querySelector("form");

    /*
     * Verifica se o formulário foi encontrado.
     */
    if (!formulario) {

        return;
    }

    /*
     * Preenche novamente os campos com os
     * dados recuperados do localStorage.
     */
    formulario.nome.value = dadosFormulario.nome || "";

    formulario.email.value = dadosFormulario.email || "";

    formulario.idade.value = dadosFormulario.idade || "";

    formulario.cpf.value = dadosFormulario.cpf || "";

    formulario.celular.value = dadosFormulario.celular || "";

    formulario.CEP.value = dadosFormulario.CEP || "";

    formulario["endereço"].value = dadosFormulario.endereco || "";

    formulario.numero.value = dadosFormulario.numero || "";

    formulario.cidade.value = dadosFormulario.cidade || "";

    formulario.sigla.value = dadosFormulario.estado || "";

    console.log("Dados recuperados do localStorage.");
}


/* EVENTO CLICK */

/*
 * Observa os cliques realizados na página.
 * Nesse caso, será utilizado para identificar
 * quando o usuário clicar em um link.
 */
document.addEventListener("click", function (evento) {

    /*
     * Procura o link <a> mais próximo do elemento
     * que recebeu o clique e que possua o atributo href.
     */
    const link = evento.target.closest("a[href]");

    /*
     * Caso nenhum link seja encontrado,
     * encerra a execução da função.
     */
    if (!link) {

        return;
    }

    /*
     * Obtém o valor do atributo href do link clicado.
     */
    const destino = link.getAttribute("href");

    /*
     * Verifica se o destino começa com "#".
     * Links iniciados com "#" apontam para uma rota
     * dentro da própria página.
     */
    if (destino.startsWith("#")) {

        /*
         * Exibe no console o destino da navegação.
         */
        console.log("Navegação solicitada:", destino);
    }
});

/* EVENTO INPUT */

/*
 * Observa alterações realizadas pelo usuário
 * nos campos do formulário.
 */
document.addEventListener("input", function (evento) {

    /*
     * Armazena o elemento que recebeu a alteração.
     */
    const campo = evento.target;

    /*
     * Verifica se o elemento alterado é um
     * input, textarea ou select.
     */
    if (campo.matches("input, textarea, select")) {

        /*
         * Exibe no console o nome do campo
         * e o novo valor informado pelo usuário.
         */
        console.log(
            "Campo alterado:",
            campo.name,
            "Novo valor:",
            campo.value
        );
    }
});


/*
 * INTEGRAÇÃO COM A BIBLIOTECA IMASK
 * A biblioteca será utilizada para formatar
 * automaticamente os campos do formulário.
 */
function aplicarMascaras() {

    /*
     * Localiza o campo de CPF.
     */
    const campoCpf = document.getElementById("cpf");

    /*
     * Verifica se o campo existe antes de utilizar
     * a biblioteca.
     */
    if (campoCpf) {

        IMask(campoCpf, {
            mask: "000.000.000-00"
        });
    }

    /*
     * Localiza o campo de celular.
     */
    const campoCelular = document.getElementById("celular");

    /*
     * Verifica se o campo existe antes de utilizar
     * a biblioteca.
     */
    if (campoCelular) {

        IMask(campoCelular, {
            mask: "(00) 00000-0000"
        });
    }

    /*
     * Localiza o campo de CEP.
     */
    const campoCep = document.getElementById("cep");

    /*
     * Verifica se o campo existe antes de utilizar
     * a biblioteca.
     */
    if (campoCep) {

        IMask(campoCep, {
            mask: "00000-000"
        });
    
    }
}
}