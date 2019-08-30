function Consultar() {

    var _TIPOELECCION = $("#TIPOELECCION").val();
    var _DEP = $("#DEP").val();
    var _MUN = $("#MUN").val();

    console.log(_DEP);
  
    $.post("https://ws2v.tse.org.gt/api/tse/resultados", {
      PROCESO: "201902",
      TIPOELECCION: _TIPOELECCION,
      DEP: _DEP,
      MUN: '0'
    },
      function (data, status) {
console.log(data.data["0"].V1);

        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['UNE', 'VAMOS'],
                datasets: [{
                    label: 'Resultados de Votacion',
                    data: [data.data["0"].V2,data.data["0"].V1],
                    backgroundColor: [
                        'green',
                        'blue'                      
                    ],
                    borderColor: [
                        'green',
                        'blue'                       
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
      }
  
    );
  }
  $(document).ready(function(){
    Consultar();
  }) 
