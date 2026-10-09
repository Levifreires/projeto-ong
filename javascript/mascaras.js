/*modulo responsável pela integração com a biblioteca IMask.js*/
import IMask from "imask";

export function aplicarMascaras() {
    /*localiza campo cpf*/
    const campoCpf = document.getElementById("cpf");

    /*caso campo exista, aplica a máscara de CPF*/
    if (campoCpf) {
        IMask(campoCpf,{
            mask: "000.000.000-00"
        });

    }

    /*localiza campo celular*/
    const campoCelular = document.getElementById("celular");

    /*caso campo exista, aplica a máscara de celular*/
    if (campoCelular) {
        IMask(campoCelular, {
            mask: "(00) 00000-0000"
        });

    /*localiza campo cep*/
    const campoCep = document.getElementById("cep");

    /*caso campo exista, aplica a máscara de cep*/
    if (campoCep) {
        IMask(campoCep, {
            mask: "00000-000"
        });
    }
    }
}