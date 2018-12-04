// We created a new controller named "MainController". A controller 
// manages the app's data. 
app.controller('MainController', ['$scope', function($scope) { 
    $scope.images = [ 
        {
            name: 'img/Wind.jpg'
        },
        {
            name: 'img/ColdWave.jpg'
        },
        {
            name: 'img/HeatWave.jpg'
        },
        {
            name: 'img/ElNino_and_ElNina.jpg'
        },
        {
            name: 'img/Hurricane.jpg'
        },
        {
            name: 'img/Blizzard.jpg'
        },
        {
            name: 'img/Drought.jpg'
        },
        {
            name: 'img/Flood.jpg'
        }
    ];
}]);