angular.module('noServerProject').directive('midiDirective', ['$document', '$rootScope', function($document, $rootScope) {
    return {
        restrict: 'AE',
        templateUrl: './views/midiView.html',
        link: function(scope, element, attribute) {
            //------------------------------midi-toggleshow----------------------------------
            // $('midi-directive').hide();
            // $('#midibtn').on('click', function(){
            //   $('midi-directive').slideToggle();
            // });
            //------------------------------------------------------------play audio-----------------------------------------------------------------------------
            scope.playAudio = function(selected) {
                var audio = new Audio(selected);
                //chat room and currentTime
                audio.play();
            };
            var dubStep = new Audio('./audio/funk_dubstep_loop.wav');
            var wob = new Audio('./audio/wob_loop.wav');
            var catDrum = new Audio('./audio/catDrum_loop.wav');
            scope.loopOne = function(){
              dubStep.play();
            };
            scope.loopTwo = function(){
              wob.play();
            };
            scope.loopThree = function(){
              dubStep.play();
            };
            document.addEventListener('keydown' || 'keyup', function() {
                if (event.keyCode === 110) { //.
                    audio = new Audio('./audio/nice_pluck.wav');
                    // setInterval(function() {
                    //     $scope.cur = audio.currentTime;
                    //     $scope.dur = audio.duration;
                    //     // $scope.$digest();
                    // }, 10);
                    audio.play();
                }
                if (event.keyCode === 96) { //0
                    audio = new Audio('./audio/nice_kick.wav');
                    audio.play();
                }
                if (event.keyCode === 97) { //1
                    var audio = new Audio('./audio/caw.wav');
                    audio.play();
                }
                if (event.keyCode === 98) { //2
                    var audio = new Audio('./audio/rap_clap.wav');
                    audio.play();
                }
                if (event.keyCode === 99) { //3
                    var audio = new Audio('./audio/nice_clap.wav');
                    audio.play();
                }
                if (event.keyCode === 100) { //4
                    var audio = new Audio('./audio/wob.wav');
                    audio.play();
                }
                if (event.keyCode === 101) { //5
                    var audio = new Audio('./audio/nice_robot.wav');
                    audio.play();
                }
                if (event.keyCode === 102) { //6
                    var audio = new Audio('./audio/nice_ijah.wav');
                    audio.play();
                }
                if (event.keyCode === 103) { //7
                    dubStep.play();
                }
                if (event.keyCode === 104) { //8
                    wob.play();
                }
                if (event.keyCode === 105) { //9
                    catDrum.play();
                }
            });
            //-----------------------------------------------------------End play audio-----------------------------------------------------------------------------
            // -------------------------------------------------------------------------drag-start-------------------------------------------------------------------
            // var startX = 0,
            //     startY = 0,
            //     x = 0,
            //     y = 0;
            // element.css({
            //     position: 'relative',
            //     cursor: 'pointer'
            // });
            // element.on('mousedown', function(event) {
            //     // Prevent default dragging of selected content
            //     event.preventDefault();
            //     startX = event.pageX - x;
            //     startY = event.pageY - y;
            //     $document.on('mousemove', mousemove);
            //     $document.on('mouseup', mouseup);
            // });
            //
            // function mousemove(event) {
            //     y = event.pageY - startY;
            //     x = event.pageX - startX;
            //     element.css({
            //         top: y + 'px',
            //         left: x + 'px'
            //     });
            // }
            //
            // function mouseup() {
            //     $document.off('mousemove', mousemove);
            //     $document.off('mouseup', mouseup);
            // }
            // ----------------------------------------------------------------------end-drag-----------------------------------------------------------------------------------
        }
    }
}]); //closing
