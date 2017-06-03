/**
 * Created by devya on 6/2/2017.
 */
$(document).ready(function () {
    $('#new-item').click(function() {
        console.log($('#text-to-add').val());
        $('select').append( '<option>' + $('#text-to-add').val() + '</option>' );
    });
});