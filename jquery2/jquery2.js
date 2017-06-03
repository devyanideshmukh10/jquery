/**
 * Created by devya on 6/2/2017.
 */

$(document).ready(function(){
    $("p").dblclick(function(){
        alert("The paragraph was double-clicked.");
    });
});

$(document).ready(function(){
    $("p").click(function(){
        alert("The paragraph was clicked.");
    });
});