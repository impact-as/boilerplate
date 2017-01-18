///<reference path="./definitions/references.d.ts"/>

namespace App {

	const moduleId = 'app';

	const settings: ng.IAngularBootstrapConfig = {
		
	};
	
	let appModule = angular.module(moduleId, []);
	appModule.run(App.appRun);
	appModule.config(App.appConfig);

	//Add imported modules
	const modules: string[] = [
		moduleId,
		// insert modules
	];

	//Manual bootstrap on document level with imported modules and settings.
	angular.bootstrap(document, modules, settings);

}