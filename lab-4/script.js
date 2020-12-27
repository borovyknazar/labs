const model = {
    toBuy: [
        { name: "Огірків", amount: 10, id: 1 },
        { name: "Помідорів", amount: 15, id: 2 },
        { name: "Пакетів борошна", amount: 5, id: 3 },
        { name: "Пляшок води", amount: 7, id: 4 }
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