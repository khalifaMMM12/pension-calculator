const RS_Btn = document.getElementById('RS_calculateBtn');
const currentPV = document.getElementById('PV');
const retirementSum = document.getElementById('retirementSum');
const chartCanvas = document.getElementById('myChart');

RS_Btn.addEventListener('click', function(e) {
  e.preventDefault();
    
  const PVValue = Number(currentPV.value);
  const retirementSumValue = Number(retirementSum.textContent.replace(/[^0-9.-]+/g,""));
  
  const data = {
    labels: ['Current RSA balance', 'Retirement Sum'],
    datasets: [{
      label: 'Amount in Naira',
      data: [PVValue, retirementSumValue],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
  };
        
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

});
