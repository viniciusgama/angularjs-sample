function AddressesController($scope){
	$scope.addresses = [];

	$scope.addNewAddress = function(){
		$scope.addresses.push({address:'', city:'', zipcode:'', country:'', country:'', state:''});
	};
}