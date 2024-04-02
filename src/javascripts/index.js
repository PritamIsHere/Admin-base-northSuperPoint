$(document).ready(function () {
    // menu toggle
    $('#toggleBtn').click(function () {
        $('#toggleItems').toggle(500);
    });


    // modal start
    $('#tip_modal_open').click(function () {
        $('#tip_modal').show(200);
    });
    $('#tip_modal_close').click(function () {
        $('#tip_modal').hide(200);
    });
    // modal end
});