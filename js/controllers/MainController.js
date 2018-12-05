// We created a new controller named "MainController". A controller 
// manages the app's data. 
app.controller('MainController', ['$scope', function($scope) { 
    $scope.catalogs = [ 
        {
            "url": "img/Wind.jpg",
            "name": "Wind"
        },
        {
            "url": "img/ColdWave.jpg",
            "name": "Cold Wave"
        },
        {
            "url": "img/HeatWave.jpg",
            "name": "Heat Wave"
        },
        {
            "url": "img/ElNino_and_ElNina.jpg",
            "name": "El Niño and El Niña"
        },
        {
            "url": "img/Hurricane.jpg",
            "name": "Hurricane"
        },
        {
            "url": "img/Blizzard.jpg",
            "name": "Blizzard"
        },
        {
            "url": "img/Drought.jpg",
            "name": "Drought"
        },
        {
            "url": "img/Flood.jpg",
            "name": "Flood"
        }
    ];
}]);

app.directive('backgroundImageDirective', function () {
    return function (scope, element, attrs) {
        element.css({
            'background-image': 'url(' + attrs.backgroundImageDirective + ')',            
        });
    };
});