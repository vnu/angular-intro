(function(){
	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'I am Dodecahedron',
		canPurchase: true,
		soldOut: true
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'Iam Pentagonal',
		canPurchase: false,
	}];

	var app = angular.module('store', []);
	app.controller('StoreController', function(){
		this.products = gems;
	});

	

})();
