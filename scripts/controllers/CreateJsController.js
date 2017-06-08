define(['angular'], function (angular) {


    angular
        .module('MainApp')
        .controller('CreateJsController', CreateJsController);

    CreateJsController.$inject = ['$scope'];
    function CreateJsController($scope) {

        $scope.controllerName = "CreateJsController";

        var vm = this;

        vm.loadCreateJs = function () {
            require(['jquery', 'createjs', 'tweenjs', 'preloadjs', 'soundjs'], function ($, createjs) {

                var demoCanvas = document.getElementById('demoCanvas');
                demoCanvas.style.display = '';
                var stage = new createjs.Stage(demoCanvas);
                var shape = new createjs.Shape();

                createjs.Ticker.setFPS(60);
                createjs.Ticker.addEventListener("tick", stage);

                setTimeout(function () {
                    shape.graphics
                        .setStrokeStyle(1)
                        .setStrokeDash([10, 10], 20)
                        .beginStroke('yellow')
                        .moveTo(0, 0)
                        .lineTo(100, 100)
                        .drawPolyStar(100, 100, 10, 5, 0.6, -90);
                    stage.addChild(shape);
                    // stage.update();
                }, 100);

                setTimeout(function () {
                    shape.graphics
                        .drawEllipse(100, 50, 200, 100);
                    stage.addChild(shape);
                    // stage.update();
                }, 200);

                setTimeout(function () {
                    shape.graphics
                        .moveTo(100, 200)
                        .beginFill('yellow')
                        .drawCircle(100, 200, 3)
                        .endFill()
                        .moveTo(100, 200)
                        .quadraticCurveTo(250, 100, 400, 200)
                        .beginFill('yellow')
                        .drawCircle(400, 200, 3)
                        .lineTo(100, 200);
                    stage.addChild(shape);
                    // stage.update();
                }, 300);

                //Tween
                /*setTimeout(function () {

                 createjs.Tween.get(shape, { loop: true })
                 .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
                 .to({ alpha: 0.2, y: 50 }, 500, createjs.Ease.getPowInOut(2))
                 .to({ alpha: 0.5, y: 70 }, 100)
                 .to({ alpha: 1, y: 90 }, 500, createjs.Ease.getPowInOut(2))
                 .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));
                 },400);*/

                //preload
                /*setTimeout(function () {
                 var preload = new createjs.LoadQueue();
                 preload.addEventListener("fileload", handleFileComplete);
                 preload.loadFile("images/1.jpg");

                 function handleFileComplete(event) {
                 console.clear();
                 console.log(event);
                 document.getElementById('preloadContainer').appendChild(event.result);

                 }
                 }, 500);*/

                //Sound
                /*setTimeout(function () {
                 var soundID = "Thunder";
                 createjs.Sound.on('fileload',loadHandler);
                 createjs.Sound.registerSound("assets/111.m4a", soundID);


                 function loadHandler(event) {
                 console.clear();
                 console.log(event);
                 // This is fired for each sound that is registered.
                 var instance = createjs.Sound.play(soundID);  // play using id.  Could also use full sourcepath or event.src.
                 instance.on("complete", function (event) {

                 console.log(event);
                 });
                 instance.volume = 0.5;
                 }
                 },600);*/

            });
        };

        vm.loadUtility = function () {

            require(['Utility'], function (Utility) {

                //JavaScript原始值类型 Undefined Null Boolean String Number
                console.log(new Date().valueOf());

                console.log(new Date(new Date().valueOf()));
            });
        };

        vm.loadMediator = function () {
            require(['Mediator'], function (Mediator) {
                Mediator.subscribe('nameChange', function (args) {
                    console.log(args, 'CreateJsController subscribe');
                });
            });


            require(['Mediator'], function (Mediator) {
                Mediator.publish('nameChange', {name: 'tom', time: +new Date()})
            });
        };





    }
})