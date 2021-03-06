/**
 * Created by Alex on 08/08/2014.
 */

var app = angular.module("dungeon-world-game-master",
    ['ui.bootstrap',
        'ngNewRouter',
        'monospaced.mousewheel',
        'multi-select',
        'ui.grid',
        'angularFileUpload'
    ]);

app.config(['$componentLoaderProvider', function ($componentLoaderProvider) {
    $componentLoaderProvider.setCtrlNameMapping(function (name) {
        return name[0] + name.substr(1) + 'Ctrl';
    });
}]);

app.run(['$router', function ($router) {
    $router
     .config([{
            path: '/maps',
            component:'maps'
        },{
            path: '/characters',
            component:'characters'
        },{
            path: '/moves',
            component:'moves'
        },{
            path: '/plots',
            component:'plots'
        },{
            path: '/encounters',
            component:'encounters'
        }]);
}]);
app.controller('mainCtrl', function ($scope) {

});