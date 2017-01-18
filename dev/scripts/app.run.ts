///<reference path="./definitions/references.d.ts"/>

namespace App {

	//@ngInject
	export function appRun($templateCache:ng.ITemplateCacheService) {
		$templateCache.put("test", "value");
	}
    
}