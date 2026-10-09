/*ARQUIVO RESPOSÁVEL PELA INTEGRAÇÃO ENTRE OS MÓDULOS E FUNÇÕES DO PROJETO*/
import {iniciarNavegacao} from "./navegacao.js";

import {configurarEnvioFormulario} from "./formulario.js";

import {configurarEventos, configurarModoEscuro} from "./eventos.js";

/*iniciar navegação single page application (SPA)*/
iniciarNavegacao();

/*eventos de envio do formulário*/
configurarEnvioFormulario();

/*evento de navegação entre páginas*/
configurarEventos();

configurarModoEscuro();
