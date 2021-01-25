const model = {
    toBuy: [
        { name: "Toyota", amount: "Наявно 5 марки:", id: 1 },
        { name: "Honda", amount: "Наявно 7 марки:", id: 2 },
        { name: "VAZ", amount: "Наявно 0 марки:", id: 3 },
        { name: "Запорожець", amount: "Наявно 2 марки:", id: 4 }

    ],
    bougth: []
};
const buyApp = angular.module("buyApp", []);
buyApp.controller("toBuy", function ($scope) {
    $scope.data = model;
    $scope.buy = function (id) {
        $scope.data.bougth.push($scope.data.toBuy.find(item => item.id == id))  
        $scope.data.toBuy.splice($scope.data.toBuy.indexOf($scope.data.toBuy.find(item => item.id == id)), 1)
    }
});
buyApp.controller("bought", function ($scope) {
    $scope.data = model;
});