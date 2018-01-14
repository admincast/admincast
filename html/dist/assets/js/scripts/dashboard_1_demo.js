$(function() {
    var a = {
            labels: ["Sunday", "Munday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{
                label: "Data 1",
                borderColor: 'rgba(52,152,219,1)',
                backgroundColor: 'rgba(52,152,219,1)',
                pointBackgroundColor: 'rgba(52,152,219,1)',
                data: [29, 48, 40, 19, 78, 31, 85]
            },{
                label: "Data 2",
                backgroundColor: "#DADDE0",
                borderColor: "#DADDE0",
                data: [45, 80, 58, 74, 54, 59, 40]
            }]
        },
        t = {
            responsive: !0,
            maintainAspectRatio: !1
        },
        e = document.getElementById("bar_chart").getContext("2d");
    new Chart(e, {
        type: "line",
        data: a,
        options: t
    });

    // World Map
  var mapData = {
    "US": 7402,
    'RU': 5105,
    "AU": 4700,
    "CN": 4650,
    "FR": 3800,
    "DE": 3780,
    "GB": 2400,
    "SA": 2350,
    "BR": 2270,
    "IN": 1870,
  }
  $('#world-map').vectorMap({
    map: 'world_mill_en',
    backgroundColor: 'transparent',
    regionStyle: {
        initial: {
            fill: '#DADDE0',
        }
    },
    showTooltip: true,
    onRegionTipShowx: function(e, el, code){
        el.html(el.html()+' (Visits - '+mapData[code]+')');
    },
    markerStyle: {
      initial: {
        fill  : '#3498db',
        stroke: '#333'
      }
    },
    markers: [
      {
        latLng: [1.3, 103.8],
        name: 'Singapore : 203'
      },
      {
        latLng: [38, -105],
        name: 'USA : 755',
      },
      {
        latLng: [58, -115],
        name: 'Canada : 700',
      },
      {
        latLng: [-25, 140],
        name: 'Australia : 304',
      },
      {
        latLng: [55.00, -3.50],
        name: 'UK : 202',
      },
      {
        latLng: [21, 78],
        name: 'India : 410',
      },
      {
        latLng: [25.00, 54.00],
        name: 'UAE : 180',
      }
    ]
  });

  
  var doughnutData = {
      labels: ["Desktop","Tablet","Mobile" ],
      datasets: [{
          data: [47,30,23],
          backgroundColor: ["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]
      }]
  } ;


  var doughnutOptions = {
      responsive: true,
      legend: {
        display: false
      },
  };


  var ctx4 = document.getElementById("doughnut_chart").getContext("2d");
  new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});


});