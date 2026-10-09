/* no inicio devemos importar os outros arquivos/môdulos necessários para bom funvionamento do formulário */
import {salvarDados, recuperarDados} from "../javascript/storege.js";

import {aplicarMascaras} from "../javascript/mascaras.js";

/* responsável por envio, validação e preenchimento de dados do formulário*/
/*configura o formulário*/
export function configurarFormulario() {
    /*localiza o formulário na página*/
    const formulario = document.querySelector("form");

    /*verificar existencia do formulário*/
    if (!formulario) {
        return;
    }

    /*recuperar dados salvos anteriormente */
    preencherFormulario(formulario);

    /*aplicar as máscaras nos campos do formulário*/
    
    aplicarMascaras();


    /*preencher formulário como os dados salvos no localStorage*/
function preencherFormulario(formulario) {
    const dadosFormulario = recuperarDados();

    /*não faz nada caso não existam dados salvos*/
    if (!dadosFormulario) {
        return;
    }
    
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
}

/*evento responsavel por envio do formulário*/
export function configurarEnvioFormulario() {
        
        
    document.addEventListener("submit", function (envio) {
        /*Impede o comportamento padrão do formulário,evitando o recarregamento da página.*/
        envio.preventDefault();

        /*identifica o formulário que disparou o evento.*/
        const formulario = envio.target;

        /* Verifica se todos os campos obrigatórios estão preenchidos corretamente.*/
        if (!formulario.checkValidity()) {

            formulario.reportValidity();

            return;
        }

        /* Cria um objeto contendo os dados preenchidos pelo usuário no formulário.*/
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
        
        /*envia os dados do formulário para o localStorage, chamando a função salvarDados*/
        salvarDados(dadosFormulario);

        /* Procura o elemento que possui a classe "toast".*/
        const toast = formulario.querySelector(".toast");

        /* Se o elemento existir, torna a mensagem de sucesso visível.*/
        if (toast) {

            toast.style.display = "block";
        }

        console.log("Formulário válido e dados armazenados.");
        
        });
    }

