//Add these to Your chart component Ts file
//Chartproperties

ChartData: ChartDataSets[] = [
    { data: [30, 28, 14], label: 'UME' },
  ];

  ChartLabels: Label[] = ['CMPL', 'DISC', 'ERR'];

  ChartOptions = {
    responsive: true,
  };

  ChartColors: Color[] = [
    {
      backgroundColor: ['rgb(0, 179, 55)','rgb(242, 159, 5)','rgb(232, 38, 0)']
    },
  ];

  ChartLegend = true;
  ChartPlugins = [];
  ChartType = 'pie';

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }
