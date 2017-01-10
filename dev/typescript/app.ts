///<reference path="./definitions/references.d.ts"/>

namespace App {

		const settings: ng.IAngularBootstrapConfig = {
			
		};

		//Add imported modules
		const modules: string[] = [
			
		];
		
		// .run(App.appRun)
		// .config(App.appConfig);

		//Manual bootstrap on document level with imported modules and settings.
		angular.bootstrap(document, modules, settings);

}