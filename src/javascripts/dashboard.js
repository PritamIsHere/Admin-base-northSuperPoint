$(document).ready(function () {
    $('#toggleBtn').click(function () {
        $('#toggleItems').toggle(500);
    });

    $('#tip_modal_open').click(function () {
        $('#tip_modal').show(200);
    });
    $('#tip_modal_close').click(function () {
        $('#tip_modal').hide(200);
    });
});