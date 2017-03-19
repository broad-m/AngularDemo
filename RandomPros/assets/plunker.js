angular.module('plunker', [])


  .controller('PlunkerCtrl', function ($scope) {

      $scope.controllerName='PlunkerCtrl';
    $scope.content = {};
      $scope.active=false;



      $scope.tab={
          index:true
      }
      $scope.tabset={
          active:true
      }

    $scope.select= function (e) {
        e.preventDefault();
        console.clear();
        var el=$(e.target);
        var parentLi=el.parent();
        if(parentLi.hasClass('active')){
            return false;
        }

        var sibLi=parentLi.siblings('li');
        parentLi.addClass('active');
        sibLi.removeClass('active');

        var panels=parentLi.parent().siblings('.tab-content').children('.tab-pane');
        panels.each(function (index,el) {
           if($(this).hasClass('active')){
               $(this).removeClass('active');
           }else{
               $(this).addClass('active');
           }
        });
        
        //console.log(panels);
        return false;
    }


  });