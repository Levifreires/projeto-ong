/* responsável por eventos gerais da aplicação*/

export function configurarEventos() {

    /*evento de cliques*/
    document.addEventListener("click", function (evento) {
        /* Verifica se o destino do clique é um link (tag <a>). O método closest() percorre a árvore do DOM a partir do elemento que recebeu o clique,
        procurando o link mais próximo que possua o atributo href.*/
        const link = evento.target.closest("a[href]");

        /* Caso nenhum link seja encontrado, encerra a execução da função.*/
        if (!link) {
            return;
        }

        /* Obtém o valor do atributo href do link clicado.*/
        const destino = link.getAttribute("href");

        /* Verifica se o destino começa com "#". Links iniciados com "#" normalmente apontam para uma seção ou elemento dentro da própria página. */
        if (destino.startsWith("#")) { console.log("Navegação solicitada:", destino); 

        }
    });

    /*evento de input*/
    document.addEventListener("input", function (evento) {
        /* Armazena o elemento que recebeu a alteração.*/
        const campo = evento.target;

        if (campo.matches("input, textarea, select")) {
            console.log("Campo alterado:", campo.name, "Novo valor:", campo.value);
        }
    });
}

export function configurarModoEscuro() {
    const botaoTema = document.getElementById("botao-tema");

    if (!botaoTema) {
        return;
    }

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("modo-escuro");
        botaoTema.textContent = "modo claro";
    }

    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("modo-escuro");

        if (document.body.classList.contains("modo-escuro")) {
            localStorage.setItem("tema", "escuro");
            botaoTema.textContent = "modo claro";
        } else {
            localStorage.setItem("tema", "claro");
            botaoTema.textContent = "modo escuro";
        }
    });
}