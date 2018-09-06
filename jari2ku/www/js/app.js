// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('jarijariku', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.factory('Categories', function() {
  return {
    all: function() {
      var categoryString = window.localStorage['categories'];
      if(categoryString) {
        return angular.fromJson(categoryString);
      }
      return [];
    },
    save: function(categories) {
      window.localStorage['categories'] = angular.toJson(categories);
    },
    newProject: function(categoryTitle) {
      // Add a new project
      return {
        title: categoryTitle,
        sign: [],
        imgSrc: []
      };
    },
    getLastActiveIndex: function() {
      return parseInt(window.localStorage['lastActiveCategory']) || 0;
    },
    setLastActiveIndex: function(index) {
      window.localStorage['lastActiveCategory'] = index;
    }
  }
})


.controller('JariCtrl', function($scope, $ionicModal, Categories, $ionicSideMenuDelegate) {

  $scope.signs = [
    {title: ["Huruf A", "Huruf B", "Huruf C"]},
    {title: [1,2,3,4,5,6,7,8,9,10]},
    {title: "Huruf C"}
  ];

});
