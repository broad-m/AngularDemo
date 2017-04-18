define(['angular', 'require'], function (angular, require) {

	angular
		.module('MainApp')
		.service('GenerateOutlineCatalogTree', GenerateOutlineCatalogTree);

	//GenerateOutlineCatalogTree.$inject = ['$rootScope'];
	function GenerateOutlineCatalogTree() {

		return {
			ToJsonTree: ToJsonTree
		};

		function ToJsonTree(originArray, id, parentId) {
			if (!angular.isArray(originArray)) {
				return [];
			}
			id = id || 'Id';
			parentId = parentId || 'ParentId';

			//生成一级节点
			var result = [];
			angular.forEach(originArray, function (item) {
				if (item[parentId] === null) {
					result.push(item);
				}
			});

			var DoRecursive = function (originArray, fatherArray) {
				angular.forEach(originArray, function (item) {
					if (item[parentId] !== null) {
						angular.forEach(fatherArray, function (fatherItem) {
							if (fatherItem[id] === item[parentId]) {
								if(!fatherItem['Children']){
									fatherItem['Children']=[];
								}
								fatherItem['Children'].push(item);
								DoRecursive(originArray,fatherItem['Children']);
							}
						});
					}
				});
			};

			DoRecursive(originArray, result);

			return result;
		}
	}
});