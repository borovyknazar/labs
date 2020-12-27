var myApp = angular.module("myApp", []);
myApp.controller("myController", function($scope) {
        $scope.split = function(text) {
            let msg;
            if (!text) {
                msg = "Будь ласка, уведіть дані!"
            } else {
                const breakfast = text.split(",").filter(element => element.trim() != "").map(element => element.trim());
                if (breakfast.length > 3) {
                    msg = "Це забагато!"
                } else {
                    msg = "На здоров’я!"
                }

                $scope.arr = "Ваш сніданок: " + breakfast.join(','); 
            }

            $scope.text = ""
            $scope.msg = msg;
        }
    }

);