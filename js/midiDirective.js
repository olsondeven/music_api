angular.module('noServerProject').directive('midiDirective', ['$document', '$rootScope', function($document, $rootScope) {
    return {
        restrict: 'AE',
        templateUrl: './views/midiView.html',
        link: function(scope, element, attribute) {
          //------------------------------midi-toggleshow----------------------------------
          // $('midi-directive').hide();
          // $('#midibtn').on('click', function(){
          //   $('midi-directive').slideToggle(400);
          // });
            //------------------------------------------------------------play audio-----------------------------------------------------------------------------
            scope.playAudio = function(selected) {
                var audio = new Audio(selected);
                //chat room and currentTime
                audio.play();
            };
            //-----------------------------------------------------------End play audio-----------------------------------------------------------------------------
            // -------------------------------------------------------------------------drag-start-------------------------------------------------------------------
            var startX = 0,
                startY = 0,
                x = 0,
                y = 0;
            element.css({
                position: 'relative',
                cursor: 'pointer'
            });
            element.on('mousedown', function(event) {
                // Prevent default dragging of selected content
                event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event) {
                y = event.pageY - startY;
                x = event.pageX - startX;
                element.css({
                    top: y + 'px',
                    left: x + 'px'
                });
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }
            // ----------------------------------------------------------------------end-drag-----------------------------------------------------------------------------------
            //---------------------------------------------------------key-press------------------------------------------------------------------------------------------------
            // scope.fn = function(event) {
            //     scope.keyCode = event.keyCode;
            //     if (event.keyCode == 32) {
            //         console.log("spacebar pressed");
            //     };
            // };
            //---------------------------------------------------------end-key-press-------------------------------------------------------------------------------------------
    }
};
}]); //closing
