//grunt-start
/// <reference path="../modules/example/templates/example.html.ts" />
/// <reference path="../app.config.ts" />
/// <reference path="../app.run.ts" />
/// <reference path="node_modules/@types/angular/index.d.ts" />
/// <reference path="node_modules/@types/jquery/index.d.ts" />
/// <reference path="../modules/example/example.module.ts" />
//grunt-end

// Main app file should be at the bottom of the load order.
// Ensures that bootstrap only happens after all other js has been parsed.
/// <reference path="../app.ts" />