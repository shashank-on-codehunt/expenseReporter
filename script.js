// on window load
window.onload = function () {
  function getIncomeValues() {
    // get input value for janIncome
    var janIncome = document.getElementById("janIncome").value;
    // get input value for febIncome
    var febIncome = document.getElementById("febIncome").value;
    // get input value for marIncome
    var marIncome = document.getElementById("marIncome").value;
    // get input value for aprIncome
    var aprIncome = document.getElementById("aprIncome").value;
    return [janIncome, febIncome, marIncome, aprIncome];
  }

  function getExpenseValues() {
    // get input value for janExpense
    var janExpense = document.getElementById("janExpense").value;
    // get input value for febExpense
    var febExpense = document.getElementById("febExpense").value;
    // get input value for marExpense
    var marExpense = document.getElementById("marExpense").value;
    // get input value for aprExpense
    var aprExpense = document.getElementById("aprExpense").value;
    return [janExpense, febExpense, marExpense, aprExpense];
  }

  // create chart js bar chart for id mychart
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["January", "Feburary", "March", "April"],
      datasets: [
        {
          label: "Expense",
          data: getExpenseValues(),
          backgroundColor: [
            "rgba(255, 0, 0, 0.2)", // red
            "rgba(255, 0, 0, 0.2)", // red
            "rgba(255, 0, 0, 0.2)", // red
            "rgba(255, 0, 0, 0.2)", // red
          ],
          borderColor: [
            "rgba(255, 0, 0, 1)", // red
            "rgba(255, 0, 0, 1)", // red
            "rgba(255, 0, 0, 1)", // red
            "rgba(255, 0, 0, 1)", // red
          ],
          borderWidth: 1,
        },
        {
          label: "Income",
          data: getIncomeValues(),
          backgroundColor: [
            "rgba(0, 255, 0, 0.2)", // green
            "rgba(0, 255, 0, 0.2)", // green
            "rgba(0, 255, 0, 0.2)", // green
            "rgba(0, 255, 0, 0.2)", // green
          ],
          borderColor: [
            "rgba(0, 255, 0, 1)", // green
            "rgba(0, 255, 0, 1)", // green
            "rgba(0, 255, 0, 1)", // green
            "rgba(0, 255, 0, 1)", // green
          ],

          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              // begin at zero
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  // click handler for chart
  document.getElementById("chart-tab").onclick = function () {
    //update mychart
    myChart.data.datasets[0].data = getExpenseValues();
    myChart.data.datasets[1].data = getIncomeValues();
    myChart.update();
  };

  //On click of Download button need to download the chart as image
    document.getElementById("download").onclick = function () {
    // get the canvas as image and download it 
    var link = document.createElement('a');
    var image = document.getElementById("myChart").toDataURL("image/png");
    link.download = "mychart.png";
    link.href = image;
    link.click();

    };

};
