var Templates;
(function (Templates) {
    Templates.example = '<div>    markup!</div>';
})(Templates || (Templates = {}));
///<reference path="./definitions/references.d.ts"/>
var App;
///<reference path="./definitions/references.d.ts"/>
(function (App) {
    function appConfig() {
    }
    App.appConfig = appConfig;
})(App || (App = {}));
///<reference path="./definitions/references.d.ts"/>
var App;
///<reference path="./definitions/references.d.ts"/>
(function (App) {
    function appRun($templateCache) {
    }
    App.appRun = appRun;
})(App || (App = {}));
console.log("test");
///<reference path="./definitions/references.d.ts"/>
var App;
///<reference path="./definitions/references.d.ts"/>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2Rldi9zY3JpcHRzL21vZHVsZXMvZXhhbXBsZS90ZW1wbGF0ZXMvZXhhbXBsZS5odG1sLnRzIiwiLi4vLi4vZGV2L3NjcmlwdHMvYXBwLmNvbmZpZy50cyIsIi4uLy4uL2Rldi9zY3JpcHRzL2FwcC5ydW4udHMiLCIuLi8uLi9kZXYvc2NyaXB0cy9tb2R1bGVzL2V4YW1wbGUvZXhhbXBsZS5tb2R1bGUudHMiLCIuLi8uLi9kZXYvc2NyaXB0cy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxTQUFTLENBQXFEO0FBQXhFLFdBQVUsU0FBUztJQUFnQixpQkFBTyxHQUFHLHdCQUF3QixDQUFDO0FBQUMsQ0FBQyxFQUE5RCxTQUFTLEtBQVQsU0FBUyxRQUFxRDtBQ0F4RSxvREFBb0Q7QUFFcEQsSUFBVSxHQUFHLENBVVo7QUFaRCxvREFBb0Q7QUFFcEQsV0FBVSxHQUFHO0lBRVQ7SUFNSCxDQUFDO0lBTmtCLGFBQVMsWUFNM0IsQ0FBQTtBQUVGLENBQUMsRUFWUyxHQUFHLEtBQUgsR0FBRyxRQVVaO0FDWkQsb0RBQW9EO0FBRXBELElBQVUsR0FBRyxDQU1aO0FBUkQsb0RBQW9EO0FBRXBELFdBQVUsR0FBRztJQUVaLGdCQUF1QixjQUF1QztJQUU5RCxDQUFDO0lBRmUsVUFBTSxTQUVyQixDQUFBO0FBRUYsQ0FBQyxFQU5TLEdBQUcsS0FBSCxHQUFHLFFBTVo7QUNSRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FDQXBCLG9EQUFvRDtBQUVwRCxJQUFVLEdBQUcsQ0FxQlo7QUF2QkQsb0RBQW9EO0FBRXBELFdBQVUsR0FBRztJQUVaLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQztJQUV2QixJQUFNLFFBQVEsR0FBK0IsRUFFNUMsQ0FBQztJQUVGLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRWhDLHNCQUFzQjtJQUN0QixJQUFNLE9BQU8sR0FBYTtRQUN6QixRQUFRO0tBRVIsQ0FBQztJQUVGLHdFQUF3RTtJQUN4RSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFaEQsQ0FBQyxFQXJCUyxHQUFHLEtBQUgsR0FBRyxRQXFCWiJ9