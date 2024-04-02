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

    // page switch
    $("#dashboard-triger").click(function (e) {
        $("#dashboard-triger").addClass('active');
        $("#register-triger").removeClass('active');


        $("#register").hide(200);
        $("#dashboard").show(200);
    });
    $("#register-triger").click(function (e) {
        $("#dashboard-triger").removeClass('active');
        $("#register-triger").addClass('active');


        $("#dashboard").hide(200);
        $("#register").show(200);
    });

});