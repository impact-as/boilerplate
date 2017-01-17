var Templates;
(function (Templates) {
    Templates.example = '<div>    markup!</div>';
})(Templates || (Templates = {}));
///<reference path="./definitions/references.d.ts"/>
var App;
(function (App) {
    function appConfig() {
    }
    App.appConfig = appConfig;
})(App || (App = {}));
///<reference path="./definitions/references.d.ts"/>
var App;
(function (App) {
    function appRun($templateCache) {
    }
    App.appRun = appRun;
})(App || (App = {}));
///<reference path="./definitions/references.d.ts"/>
var App;
(function (App) {
    var moduleId = 'app';
    var settings = {};
    var appModule = angular.module(moduleId, []);
    appModule.run(App.appRun);
    appModule.config(App.appConfig);
    //Add imported modules
    var modules = [
        moduleId,
    ];
    //Manual bootstrap on document level with imported modules and settings.
    angular.bootstrap(document, modules, settings);
})(App || (App = {}));
console.log("test");
//# sourceMappingURL=main.js.map