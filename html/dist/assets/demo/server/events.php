<?php

 $events = [
    [
      id => 1,
      title => 'All Day Event',
      start => date('Y-m-d', mktime(0,0,0, date('m'), 2, date('Y'))),
      allDay => true,
      className => 'bg-red'
    ], [
      id => 2,
      title => 'Long Event',
      start => date('Y-m-d', mktime(0,0,0, date('m'), 7, date('Y'))),
      end => date('Y-m-d', mktime(0,0,0, date('m'), 10, date('Y'))),
    ],[
      id => 3,
      title => 'Conference',
      start => date('Y-m-d', mktime(0,0,0, date('m'), 11, date('Y'))),
      end => date('Y-m-d', mktime(0,0,0, date('m'), 13, date('Y'))),
      className => 'bg-green'
    ],[
      id => 4,
      title => 'Meeting',
      start => date('Y-m-d h:i:s', mktime(10,30,00, date('m'), 18, date('Y'))),
      end => date('Y-m-d h:i:s', mktime(12,30,00, date('m'), 18, date('Y'))),
    ],[
      id => 5,
      title => 'Lunch',
      start => date('Y-m-d h:i:s', mktime(12,00,00, date('m'), 12, date('Y'))),
    ],[
      id => 6,
      title => 'Meeting',
      start => date('Y-m-d h:i:s', mktime(14,30,00, date('m'), 12, date('Y'))),
    ],[
      id => 7,
      title => 'Dinner',
      start => date('Y-m-d h:i:s', mktime(20,00,00, date('m'), 12, date('Y'))),
    ],[
      id => 8,
      title => 'Birthday Party',
      start => date('Y-m-d h:i:s', mktime(17,00,00, date('m'), 14, date('Y'))),
      className => 'bg-orange'
    ]
];

print( json_encode($events) );

?>