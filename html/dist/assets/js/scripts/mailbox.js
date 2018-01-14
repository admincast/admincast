$(function() {
    var actions = $('#inbox-actions .btn'),
        rows = $('#table-inbox tr');

    $("input[data-select='all']").change(function(){
        $(this).prop('checked') 
            ? rows.find('.mail-check').prop('checked',true)
            : rows.find('.mail-check').prop('checked',false)        
    });
});
