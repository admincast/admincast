//Flot Bar Chart
$(function() {
    var barOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 0.6,
                align   : 'center',
                fillColor: {
                    colors: [{
                        opacity: 0.6
                    }, {
                        opacity: 0.6
                    }]
                }
            }
        },
        xaxis: {
            tickDecimals: 0,
            mode: 'categories',
        },
        colors: ["#3498db"],
        grid: {
            color: "#999999",
            hoverable: true,
            clickable: true,
            tickColor: '#DADDE0',
            borderWidth:0
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };
    var barData = {
        label: "bar",
        data: [
            [1, 22],
            [2, 35],
            [3, 19],
            [4, 30],
            [5, 32],
            [6, 44]
        ]
    };
    $.plot($("#flot_bar_chart"), [barData], barOptions);
});

// Flot Interactivity chart
$(function() {

    var sin = [],
        cos = [];

    for (var i = 0; i < 14; i += 0.5) {
        sin.push([i, Math.sin(i)]);
        cos.push([i, Math.cos(i)]);
    }

    var plot = $.plot("#flot_interactivity", [
            { data: sin, label: "sin(x)"},
            { data: cos, label: "cos(x)"}
        ], {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            grid: {
                color: "#999999",
                hoverable: true,
                clickable: true,
                tickColor: "#DADDE0",
                borderWidth:0
            },
            yaxis: {
                min: -1.2,
                max: 1.2
            },
            tooltip: true,
            tooltipOpts: {
                content: "x: %x, y: %y"
            }
   });

});

// Flot Pie Chart
$(function() {
    var data = [{
        label: "Sales 1",
        data: 33,
        color: "#3498db",
    }, {
        label: "Sales 2",
        data: 15,
        color: "#52a7e0",
    }, {
        label: "Sales 3",
        data: 52,
        color: "#23B7E5",
    }];

    var plotObj = $.plot($("#flot_pie_chart"), data, {
      series: {
        pie: {
          show       : true,
          radius     : 1,
          innerRadius: 0.5,
          label      : {
            show     : true,
            radius   : 2 / 3,
            formatter: labelFormatter,
            threshold: 0.1
          }

        }
      },
      legend: {
        show: false
      }
    });

    function labelFormatter(label, series) {
        return "<div style='font-size:13px; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
    }    
});

// Flot area chart
$(function() {
    var Options = {
        series: {
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.8
                    }, {
                        opacity: 0.8
                    }]
                }
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#2ecc71"],
        grid: {
            color: "#999999",
            hoverable: true,
            clickable: true,
            tickColor: "#DADDE0",
            borderWidth:0
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };
    var Data = {
        label: "bar",
        data: [
            [1, 22],
            [2, 25],
            [3, 17],
            [4, 33],
            [5, 32],
            [6, 42]
        ]
    };
    $.plot($("#flot_area_chart"), [Data], Options);
});


// Vistors example
$(function() {

	var d = [[1196463600000, 0], [1196550000000, 0], [1196636400000, 0], [1196722800000, 77], [1196809200000, 3636], [1196895600000, 3575], [1196982000000, 2736], [1197068400000, 1086], [1197154800000, 676], [1197241200000, 1205], [1197327600000, 906], [1197414000000, 710], [1197500400000, 639], [1197586800000, 540], [1197673200000, 435], [1197759600000, 301], [1197846000000, 575], [1197932400000, 481], [1198018800000, 591], [1198105200000, 608], [1198191600000, 459], [1198278000000, 234], [1198364400000, 1352], [1198450800000, 686], [1198537200000, 279], [1198623600000, 449], [1198710000000, 468], [1198796400000, 392], [1198882800000, 282], [1198969200000, 208], [1199055600000, 229], [1199142000000, 177], [1199228400000, 374], [1199314800000, 436], [1199401200000, 404], [1199487600000, 253], [1199574000000, 218], [1199660400000, 476], [1199746800000, 462], [1199833200000, 448], [1199919600000, 442], [1200006000000, 403], [1200092400000, 204], [1200178800000, 194], [1200265200000, 327], [1200351600000, 374], [1200438000000, 507], [1200524400000, 546], [1200610800000, 482], [1200697200000, 283], [1200783600000, 221], [1200870000000, 483], [1200956400000, 523], [1201042800000, 528], [1201129200000, 483], [1201215600000, 452], [1201302000000, 270], [1201388400000, 222], [1201474800000, 439], [1201561200000, 559], [1201647600000, 521], [1201734000000, 477], [1201820400000, 442], [1201906800000, 252], [1201993200000, 236], [1202079600000, 525], [1202166000000, 477], [1202252400000, 386], [1202338800000, 409], [1202425200000, 408], [1202511600000, 237], [1202598000000, 193], [1202684400000, 357], [1202770800000, 414], [1202857200000, 393], [1202943600000, 353], [1203030000000, 364], [1203116400000, 215], [1203202800000, 214], [1203289200000, 356], [1203375600000, 399], [1203462000000, 334], [1203548400000, 348], [1203634800000, 243], [1203721200000, 126], [1203807600000, 157], [1203894000000, 288]];

	// first correct the timestamps - they are recorded as the daily
	// midnights in UTC+0100, but Flot always displays dates in UTC
	// so we have to add one hour to hit the midnights in the plot

	for (var i = 0; i < d.length; ++i) {
		d[i][0] += 60 * 60 * 1000;
	}

	// helper for returning the weekends in a period

	function weekendAreas(axes) {

		var markings = [],
			d = new Date(axes.xaxis.min);

		// go to the first Saturday

		d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 1) % 7))
		d.setUTCSeconds(0);
		d.setUTCMinutes(0);
		d.setUTCHours(0);

		var i = d.getTime();

		// when we don't set yaxis, the rectangle automatically
		// extends to infinity upwards and downwards

		do {
			markings.push({ xaxis: { from: i, to: i + 2 * 24 * 60 * 60 * 1000 } });
			i += 7 * 24 * 60 * 60 * 1000;
		} while (i < axes.xaxis.max);

		return markings;
	}

	var options = {
		xaxis: {
			mode: "time",
			tickLength: 5
		},
		selection: {
			mode: "x"
		},
        colors: ["#3498db"],
        grid: {
			markings: weekendAreas,
            color: "#999999",
            hoverable: true,
            clickable: true,
            tickColor: "#DADDE0",
            borderWidth:0,
            hoverable: true,
        },
        tooltip: true,
        tooltipOpts: {
            content: "%x - %y visits"
        }
	};

	var plot = $.plot("#flot_visitors", [d], options);

	var overview = $.plot("#flot_visitors_overview", [d], {
        colors: ["#3498db"],
        grid: {
            color: "#999999",
            hoverable: true,
            clickable: true,
            tickColor: "#DADDE0",
            borderWidth:0,
            hoverable: true //IMPORTANT! this is needed for tooltip to work,

        },
		series: {
			lines: {
				show: true,
				lineWidth: 1
			},
			shadowSize: 0
		},
		xaxis: {
			ticks: [],
			mode: "time"
		},
		yaxis: {
			ticks: [],
			min: 0,
			autoscaleMargin: 0.1
		},
		selection: {
			mode: "x"
		},
        tooltip: true,
        tooltipOpts: {
            content: "%x - %y visits"
        }

	});

	// now connect the two

	$("#flot_visitors").bind("plotselected", function (event, ranges) {

		// do the zooming
		$.each(plot.getXAxes(), function(_, axis) {
			var opts = axis.options;
			opts.min = ranges.xaxis.from;
			opts.max = ranges.xaxis.to;
		});
		plot.setupGrid();
		plot.draw();
		plot.clearSelection();

		// don't fire event on the overview to prevent eternal loop

		overview.setSelection(ranges, true);
	});

	$("#flot_visitors_overview").bind("plotselected", function (event, ranges) {
		plot.setSelection(ranges);
	});
});
