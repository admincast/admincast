$(document).ready(function(){

    // Select 2
    $(".select2_demo_1").select2();
    $(".select2_demo_2").select2({
        placeholder: "Select a state",
        allowClear: true
    });

    // Bootstrap datepicker
    $('#date_1 .input-group.date').datepicker({
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true
    });
    $('#date_2 .input-group.date').datepicker({
        startView: 1,
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true,
        format: "dd/mm/yyyy"
    });
    $('#date_3 .input-group.date').datepicker({
        startView: 2,
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true
    });
    $('#date_4 .input-group.date').datepicker({
        minViewMode: 1,
        keyboardNavigation: false,
        forceParse: false,
        forceParse: false,
        autoclose: true,
        todayHighlight: true
    });
    $('#date_5 .input-daterange').datepicker({
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true
    });
    $('#date_6').datepicker({});

    // Timepicker
    $('.timepicker').timepicker();

    // Jquery minicolors
    $('.minicolors').each(function(){
        $(this).minicolors({
            theme:"bootstrap",
            control:$(this).attr("data-control")||"hue",
            format: $(this).attr('data-format') || 'hex',
            opacity:$(this).attr("data-opacity"),
            swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
            position: $(this).attr('data-position') || 'bottom left',
        });
    });
    
    // jQuery Knob
    $(".dial").knob();

});
