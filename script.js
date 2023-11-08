// ==UserScript==
// @name         Hello World Alert Every 3 Seconds
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Mostra um alerta de 'Hello World' a cada 3 segundos em qualquer página.
// @author       Você
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define um intervalo para mostrar o alerta a cada 3 segundos (3000 milissegundos)
    setInterval(function() {
        alert('Hello World!');
    }, 3000);
})();