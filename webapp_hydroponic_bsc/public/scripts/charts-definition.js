// Create the charts when the web page loads
window.addEventListener("load", onload);

function onload(event) {
  chartT = createTemperatureChart();
  chartH = createHumidityChart();
  chartWT = createWaterTemperatureChart();
  chartPH = createPHChart();
}

// Create Temperature Chart
function createTemperatureChart() {
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: "chart-temperature",
      type: "spline",
    },
    series: [
      {
        name: "DHT11",
      },
    ],
    title: {
      text: undefined,
    },
    plotOptions: {
      line: {
        animation: false,
        dataLabels: {
          enabled: true,
        },
      },
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: { second: "%H:%M:%S" },
    },
    yAxis: {
      title: {
        text: "Temperature Celsius Degrees",
      },
    },
    credits: {
      enabled: false,
    },
  });
  return chart;
}

// Create Humidity Chart
function createHumidityChart() {
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: "chart-humidity",
      type: "spline",
    },
    series: [
      {
        name: "DHT11",
      },
    ],
    title: {
      text: undefined,
    },
    plotOptions: {
      line: {
        animation: false,
        dataLabels: {
          enabled: true,
        },
      },
      series: {
        color: "#FFE900",
      },
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: { second: "%H:%M:%S" },
    },
    yAxis: {
      title: {
        text: "Humidity (%)",
      },
    },
    credits: {
      enabled: false,
    },
  });
  return chart;
}

// Create Water Temperature Chart
function createWaterTemperatureChart() {
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: "chart-water-temperature",
      type: "spline",
    },
    series: [
      {
        name: "DB18b20",
      },
    ],
    title: {
      text: undefined,
    },
    plotOptions: {
      line: {
        animation: false,
        dataLabels: {
          enabled: true,
        },
      },
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: { second: "%H:%M:%S" },
    },
    yAxis: {
      title: {
        text: "Water Temperature Celsius Degrees",
      },
    },
    credits: {
      enabled: false,
    },
  });
  return chart;
}

// Create PH Chart
function createPHChart() {
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: "chart-ph",
      type: "spline",
    },
    series: [
      {
        name: "SEN0161",
      },
    ],
    title: {
      text: undefined,
    },
    plotOptions: {
      line: {
        animation: false,
        dataLabels: {
          enabled: true,
        },
      },
      series: {
        color: "#E53D00",
      },
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: { second: "%H:%M:%S" },
    },
    yAxis: {
      title: {
        text: "Water pH",
      },
    },
    credits: {
      enabled: false,
    },
  });
  return chart;
}
