

$(document).ready(function() {


    /* initialize the external events
    -----------------------------------------------------------------*/

    $('#external-events .ex-event').each(function() {

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true, // maintain when user navigates (see docs on the renderEvent method)
            className: $(this).attr('data-class')
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });

    
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2017-10-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2017-10-01',
                backgroundColor: '#e74c3c'
            },
            {
                title: 'Long Event',
                start: '2017-10-07',
                end: '2017-10-10',
                backgroundColor: '#2ecc71'
            },
            {
                title: 'Conference',
                start: '2017-10-11',
                end: '2017-10-13',
                backgroundColor: '#23B7E5'
            },
            {
                title: 'Meeting',
                start: '2017-10-12T10:30:00',
                end: '2017-10-12T12:30:00'
            },
            {
                title: 'Dinner',
                start: '2017-10-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2017-10-13T07:00:00',
                backgroundColor: '#F39C12'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2017-10-28'
            }
        ],
        drop: function() {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        }
    });
    
});
