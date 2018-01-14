$(function(){

    var mapData = {
        "US": 298,
        "SA": 200,
        "DE": 220,
        "FR": 540,
        "CN": 120,
        "AU": 760,
        "BR": 550,
        "IN": 200,
        "GB": 120,
    };
    
    /*$('#world_map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#DADDE0',
            }
        },

        series: {
            regions: [{
                values: mapData,
                scale: ["#18C5A9"],
                normalizeFunction: 'polynomial'
            }]
        },
        onRegionTipShow: function(e, el, code){
            el.html(el.html()+' (Visits - '+mapData[code]+')');
        }
    });*/
            $('#world_map').vectorMap({
              map: 'world_mill_en',
              backgroundColor: 'transparent',
              regionStyle      : {
                  initial: {
                    fill            : '#e4e4e4',
                    'fill-opacity'  : 1,
                    stroke          : 'none',
                    'stroke-width'  : 0,
                    'stroke-opacity': 1
                  }
              },
              series: {
                regions: [{
                  values: mapData,
                  scale: ['#C8EEFF', '#0071A4'],
                  normalizeFunction: 'polynomial'
                }]
              },
              hoverOpacity: 0.7,
              hoverColor: false
            });

    var mapUsaData = {
        'US-VA': 120,
        'US-MT': 210,
        'US-TX': 251,
        'US-NY': 455,
        'US-FL': 308,
        'US-CA': 704,
        'US-NE': 408,
    }

    $('#usa_map').vectorMap({
        map: 'us_aea_en',
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#DADDE0',
            }
        },

        series: {
            regions: [{
                values: mapUsaData,
                scale: ["#18C5A9"],
                normalizeFunction: 'polynomial'
            }]
        },
        onRegionTipShow: function(e, el, code){
            el.html(el.html()+' (Visits - '+mapUsaData[code]+')');
        }
    });

});