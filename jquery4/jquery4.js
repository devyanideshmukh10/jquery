/**
 * Created by devya on 6/2/2017.
 */
$(document).ready(function(){
    $("p").toggle(
        function(){$("p").css({"color": "red"});},
        function(){$("p").css({"color": "blue"});},
        function(){$("p").css({"color": "green"});
        });
});