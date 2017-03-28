// MAIN CONTROLLER
function mainController($scope) {

    $scope.users = [];
    $scope.foo = function () {
        var user = {};
        user['nom'] = $scope.nom.trim();
        user['prenom'] = $scope.prenom.trim();
        user['mail'] = $scope.mail.trim();
        $scope.nom = '';
        $scope.prenom = '';
        $scope.mail = '';
        $scope.users.push(user);

        alert(users);

    };
}


