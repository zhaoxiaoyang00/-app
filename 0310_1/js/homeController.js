app.controller('homeCtrl',function($scope,$location){  //页面的控制函数；
  $scope.goToUrl=function(path) {    //此方法可以改变location地址；
    $location.path(path);
  }
});
