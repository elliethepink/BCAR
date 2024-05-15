// ==UserScript==
// @name BCAR Beta Loader (Ellie's Version)
// @namespace https://www.bondageprojects.com/
// @version 0.6.3
// @description BCAR Bondacge Club Auto React
// @author DrBranestawm
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @run-at document-end
// @grant none
// ==/UserScript==

(function() {
    'use strict';
    var script = document.createElement("script");
    script.setAttribute("crossorigin", "anonymous");
    script.src = "https://elliethepink.github.io/BCAR/bcar.js";
    document.head.appendChild(script);
})();
