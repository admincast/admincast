$(function(){

    var lineData = {
        labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
        datasets: [
            {
                label: "Data 1",
                borderColor: 'rgba(24,197,169,0.7)',
                pointBackgroundColor: 'rgba(24,197,169,1)',
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90],
                borderWidth: 4,
                pointBorderWidth: 2,
                fill: false,
            },{
                label: "Data 2",
                borderColor: 'rgba(213,217,219, 1)',
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40],
                borderWidth: 4,
                pointBorderWidth: 2,
                fill: false,
            }
        ]
    };
    var lineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    };

    var ctx2 = document.getElementById("line_chart").getContext("2d");
    new Chart(ctx2, {type: 'line', data: lineData, options:lineOptions}); 
});