/* Bad */
function p()
{
    function init (){

    }
}

/* Good */
$(function(window, document, undefined) {
  "use strict";

    /* Individual popup element */
    function Popup(config) {
        var settings = $.extend({
            class: ""
        }, config);

        function init() {

        }

        init();

        return {

        };
    }

})(this, this.document);
