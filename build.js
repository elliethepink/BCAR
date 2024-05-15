const esbuild = require("esbuild");
const fs = require("fs");

const BANNER = `// ==UserScript==
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

`;

esbuild.build({
  entryPoints: ['script/bcarBeta.js'],
  bundle: true,
  sourcemap: true,
  minify: true,
  banner: {
    js: BANNER,
  },
  outfile: 'out/bcar.user.js',
})

fs.copyFileSync("script/bcarBetaLoader.user.js", "out/bcarLoader.user.js");
