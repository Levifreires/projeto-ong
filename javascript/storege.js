/* WEB STORAGE (ARQUIVO) 
salva e recupera dados do formulário usado no localStorage do navegador. */

/* salva os dados do formulário no localStorage */
export function salvarDados(dadosFormulario) {
    /*converte o objeto JavaScript em uma string JSON*/
    const dadosString = JSON.stringify(dadosFormulario);

    /*armazena os dados no localStorage*/
    localStorage.setItem ("dadosFormulario", dadosString);
}

/*Recupera dados armazenados no localStorage */
export function recuperarDados() {
    /*recupera a string JSON dos dados armazenados*/
    const dadosString = localStorage.getItem("dadosFormulario");

   /*se não existirem dados armazenados, retorna null*/
   if (!dadosString) {
        return null;

   }

   /*converte a string JSON novamente para um objeto JavaScript*/
   return JSON.parse(dadosString);
}

