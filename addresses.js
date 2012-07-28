function AddressesController($scope){
	$scope.addresses = [{address:'Rua Vicente da Fontoura', city:'Porto Alegre', zipcode:'31110130', country:'Brazil', state:'RS'}];

	$scope.addNewAddress = function(){
		$scope.addresses.push({address:'', city:'', zipcode:'', country:'', state:''});
	};
}