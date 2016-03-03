angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('menu.inicio', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu.roadmap', {
    url: '/roadmap',
    views: {
      'side-menu21': {
        templateUrl: 'templates/roadmap.html',
        controller: 'roadmapCtrl'
      }
    }
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('registrateEnRoadplanner', {
    url: '/signup',
    templateUrl: 'templates/registrateEnRoadplanner.html',
    controller: 'registrateEnRoadplannerCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});