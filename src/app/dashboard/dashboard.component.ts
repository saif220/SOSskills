import { Component, OnInit } from '@angular/core';


const data = {
  chart: {
    caption: 'Distribution par technologie',
    showpercentvalues: '1',
    defaultcenterlabel: '2390 affectations',
    aligncaptionwithcanvas: '0',
    captionpadding: '0',
    decimals: '1',
    plottooltext:
      '<b>$percentValue</b> of our users are on <b>$label</b>',
    centerlabel: '# Users: $value',
    theme: 'fusion'
  },
  data: [
    {
      label: 'ASP/.NET',
      value: '18000'
    },
    {
      label: 'Angular',
      value: '10500'
    },
    {
      label: 'Python',
      value: '18900'
    },
    {
      label: 'BI BigData',
      value: '17904'
    }
  ]
};



const data2 = {
  chart: {
    caption: 'Statistique',
    yaxisname: 'Compétences',
    numdivlines: '3',
    showvalues: '0',
    legenditemfontsize: '15',
    legenditemfontbold: '1',
    plottooltext: '<b>$dataValue</b> $seriesName on $label',
    theme: 'fusion'
  },
  categories: [
    {
      category: [
        {
          label: 'Jan'
        },
        {
          label: 'Fév'
        },
        {
          label: 'Mar'
        },
        {
          label: 'Avr'
        },
        {
          label: 'Mai'
        },
        {
          label: 'Juin'
        },
        {
          label: 'July'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'Demandes',
      data: [
        {
          value: '55'
        },
        {
          value: '45'
        },
        {
          value: '52'
        },
        {
          value: '29'
        },
        {
          value: '48'
        },
        {
          value: '28'
        },
        {
          value: '32'
        }
      ]
    },
    {
      seriesname: 'Offres',
      data: [
        {
          value: '50'
        },
        {
          value: '30'
        },
        {
          value: '49'
        },
        {
          value: '22'
        },
        {
          value: '43'
        },
        {
          value: '14'
        },
        {
          value: '31'
        }
      ]
    }
  ]
};



const data3 = {
  chart: {
    caption: 'Chiffre global',
    numbersuffix: 'KE',
    theme: 'fusion'
  },
  data: [
    {
      label: 'Lun',
      value: '290'
    },
    {
      label: 'Mar',
      value: '260'
    },
    {
      label: 'Mer',
      value: '180'
    },
    {
      label: 'Jeu',
      value: '140'
    },
    {
      label: 'Ven',
      value: '115'
    },
    {
      label: 'Sam',
      value: '100'
    },
    {
      label: 'Dim',
      value: '30'
    }
  ]
};



const data4 = {
  chart: {
    caption: 'Affectation par profil',
    plottooltext:
      '$label <b>$dataValue</b> Affecté pour $seriesName',
    theme: 'fusion',
    drawcrossline: '1'
  },
  categories: [
    {
      category: [
        {
          label: 'Lun'
        },
        {
          label: 'Mardi'
        },
        {
          label: 'Mer'
        },
        {
          label: 'Jeu'
        },
        {
          label: 'Ven'
        },
        {
          label: 'Sam'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'ASP.NET',
      data: [
        {
          value: '400'
        },
        {
          value: '830'
        },
        {
          value: '500'
        },
        {
          value: '420'
        },
        {
          value: '790'
        },
        {
          value: '380'
        }
      ]
    },
    {
      seriesname: 'Admin',
      data: [
        {
          value: '350'
        },
        {
          value: '620'
        },
        {
          value: '410'
        },
        {
          value: '370'
        },
        {
          value: '720'
        },
        {
          value: '310'
        }
      ]
    },
    {
      seriesname: 'Architecte',
      data: [
        {
          value: '210'
        },
        {
          value: '400'
        },
        {
          value: '450'
        },
        {
          value: '180'
        },
        {
          value: '570'
        },
        {
          value: '270'
        }
      ]
    },
    {
      seriesname: 'MySQL',
      data: [
        {
          value: '180'
        },
        {
          value: '330'
        },
        {
          value: '230'
        },
        {
          value: '160'
        },
        {
          value: '440'
        },
        {
          value: '350'
        }
      ]
    }
  ]
};



const data5 = {
  chart: {
    caption: 'Skill Analysis of Harry',
    subcaption: 'Scale: 1 (low) to 5 (high)',
    theme: 'fusion',
    showlegend: '0',
    showdivlinevalues: '0',
    showlimits: '0',
    showvalues: '1',
    plotfillalpha: '40',
    plottooltext: 'Harry\'s <b>$label</b> skill is rated as <b>$value</b>'
  },
  categories: [
    {
      category: [
        {
          label: 'Communication'
        },
        {
          label: 'Punctuality'
        },
        {
          label: 'Problem Solving'
        },
        {
          label: 'Meeting Deadlines'
        },
        {
          label: 'Team Player'
        },
        {
          label: 'Technical Knowledge'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'User Ratings',
      data: [
        {
          value: '3'
        },
        {
          value: '3'
        },
        {
          value: '4'
        },
        {
          value: '3'
        },
        {
          value: '2'
        },
        {
          value: '4'
        }
      ]
    }
  ]
};


const data6 = {
  chart: {
    caption: 'Reach of Social Media Platforms amoung youth',
    yaxisname: '% of youth on this platform',
    subcaption: '2012-2016',
    showhovereffect: '1',
    numbersuffix: '%',
    drawcrossline: '1',
    plottooltext: '<b>$dataValue</b> of youth were on $seriesName',
    theme: 'fusion'
  },
  categories: [
    {
      category: [
        {
          label: '2012'
        },
        {
          label: '2013'
        },
        {
          label: '2014'
        },
        {
          label: '2015'
        },
        {
          label: '2016'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'Facebook',
      data: [
        {
          value: '62'
        },
        {
          value: '64'
        },
        {
          value: '64'
        },
        {
          value: '66'
        },
        {
          value: '78'
        }
      ]
    },
    {
      seriesname: 'Instagram',
      data: [
        {
          value: '16'
        },
        {
          value: '28'
        },
        {
          value: '34'
        },
        {
          value: '42'
        },
        {
          value: '54'
        }
      ]
    },
    {
      seriesname: 'LinkedIn',
      data: [
        {
          value: '20'
        },
        {
          value: '22'
        },
        {
          value: '27'
        },
        {
          value: '22'
        },
        {
          value: '29'
        }
      ]
    },
    {
      seriesname: 'Twitter',
      data: [
        {
          value: '18'
        },
        {
          value: '19'
        },
        {
          value: '21'
        },
        {
          value: '21'
        },
        {
          value: '24'
        }
      ]
    }
  ]
};


const data7 = {
  chart: {
    caption: 'Twitter Mentions',
    yaxisname: 'Number of mentions',
    numbersuffix: 'M',
    subcaption: '(iPhone Vs Samsung)',
    yaxismaxvalue: '2',
    plottooltext:
      '$seriesName was mentioned <b>$dataValue</b> times on Twitter in $label',
    theme: 'fusion'
  },
  categories: [
    {
      category: [
        {
          label: '2007'
        },
        {
          label: '2008'
        },
        {
          label: '2009'
        },
        {
          label: '2010'
        },
        {
          label: '2011'
        },
        {
          label: '2012'
        },
        {
          label: '2013'
        },
        {
          label: '2014'
        },
        {
          label: '2015'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'iPhone',
      data: [
        {
          value: '1.90'
        },
        {
          value: '1.94'
        },
        {
          value: '1.69'
        },
        {
          value: '1.66'
        },
        {
          value: '1.43'
        },
        {
          value: '1.97'
        },
        {
          value: '1.78'
        },
        {
          value: '1.58'
        },
        {
          value: '1.55'
        }
      ]
    },
    {
      seriesname: 'Samsung',
      data: [
        {
          value: '0.68'
        },
        {
          value: '0.74'
        },
        {
          value: '0.25'
        },
        {
          value: '0.64'
        },
        {
          value: '0.22'
        },
        {
          value: '0.74'
        },
        {
          value: '0.58'
        },
        {
          value: '0.15'
        },
        {
          value: '0.26'
        }
      ]
    }
  ]
};


const data8 = {
  chart: {
    caption: 'Recommended Portfolio Split',
    subcaption: 'For a net-worth of $1M',
    showvalues: '1',
    showpercentintooltip: '0',
    numberprefix: '$',
    enablemultislicing: '1',
    theme: 'fusion'
  },
  data: [
    {
      label: 'Equity',
      value: '300000'
    },
    {
      label: 'Debt',
      value: '230000'
    },
    {
      label: 'Bullion',
      value: '180000'
    },
    {
      label: 'Real-estate',
      value: '270000'
    },
    {
      label: 'Insurance',
      value: '20000'
    }
  ]
};



const data9 = {
  chart: {
    caption: 'Yearly Energy Production',
    numbersuffix: ' TWh',
    formatnumberscale: '0',
    showvalues: '0',
    drawcrossline: '1',
    showsum: '1',
    plottooltext: '$dataValue from $seriesName',
    theme: 'fusion'
  },
  categories: [
    {
      category: [
        {
          label: 'Canada'
        },
        {
          label: 'China'
        },
        {
          label: 'Russia'
        },
        {
          label: 'Australia'
        },
        {
          label: 'United States'
        },
        {
          label: 'France'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'Coal',
      data: [
        {
          value: '400'
        },
        {
          value: '830'
        },
        {
          value: '500'
        },
        {
          value: '420'
        },
        {
          value: '790'
        },
        {
          value: '380'
        }
      ]
    },
    {
      seriesname: 'Hydro',
      data: [
        {
          value: '350'
        },
        {
          value: '620'
        },
        {
          value: '410'
        },
        {
          value: '370'
        },
        {
          value: '720'
        },
        {
          value: '310'
        }
      ]
    },
    {
      seriesname: 'Nuclear',
      data: [
        {
          value: '210'
        },
        {
          value: '400'
        },
        {
          value: '450'
        },
        {
          value: '180'
        },
        {
          value: '570'
        },
        {
          value: '270'
        }
      ]
    },
    {
      seriesname: 'Gas',
      data: [
        {
          value: '180'
        },
        {
          value: '330'
        },
        {
          value: '230'
        },
        {
          value: '160'
        },
        {
          value: '440'
        },
        {
          value: '350'
        }
      ]
    },
    {
      seriesname: 'Oil',
      data: [
        {
          value: '60'
        },
        {
          value: '200'
        },
        {
          value: '200'
        },
        {
          value: '50'
        },
        {
          value: '230'
        },
        {
          value: '150'
        }
      ]
    }
  ]
};


const data10 = {
  chart: {
    caption: 'Expense Analysis',
    subcaption: 'ACME Inc.',
    xaxisname: 'Region',
    yaxisname: 'Amount (In USD)',
    numberprefix: '$',
    exportenabled: '1',
    theme: 'fusion'
  },
  categories: [
    {
      category: [
        {
          label: 'East'
        },
        {
          label: 'West'
        },
        {
          label: 'South'
        },
        {
          label: 'North'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'Actual Expenses',
      data: [
        {
          value: '1441290'
        },
        {
          value: '855912'
        },
        {
          value: '911404'
        },
        {
          value: '648136'
        }
      ]
    },
    {
      seriesname: 'Budgeted Expenses',
      renderas: 'line',
      data: [
        {
          value: '1297430'
        },
        {
          value: '776485'
        },
        {
          value: '685352'
        },
        {
          value: '726791'
        }
      ]
    },
    {
      seriesname: 'Unknown liabilities',
      renderas: 'area',
      showanchors: '0',
      data: [
        {
          value: '143860'
        },
        {
          value: '79427'
        },
        {
          value: '226052'
        },
        {
          value: '78655'
        }
      ]
    }
  ]
};


const data11 = {
  chart: {
    caption: 'Skill Analysis of Harry',
    subcaption: 'Scale: 1 (low) to 5 (high)',
    theme: 'fusion',
    showlegend: '0',
    showdivlinevalues: '0',
    showlimits: '0',
    showvalues: '1',
    plotfillalpha: '40',
    plottooltext: 'Harry\'s <b>$label</b> skill is rated as <b>$value</b>'
  },
  categories: [
    {
      category: [
        {
          label: 'Communication'
        },
        {
          label: 'Punctuality'
        },
        {
          label: 'Problem Solving'
        },
        {
          label: 'Meeting Deadlines'
        },
        {
          label: 'Team Player'
        },
        {
          label: 'Technical Knowledge'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'User Ratings',
      data: [
        {
          value: '3'
        },
        {
          value: '3'
        },
        {
          value: '4'
        },
        {
          value: '3'
        },
        {
          value: '2'
        },
        {
          value: '4'
        }
      ]
    }
  ]
};








@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  width1 = 600;
  height1 = 400;
  type1 = 'doughnut2d';
  dataFormat1 = 'json';
  dataSource1 = data;



  width2 = 600;
  height2 = 400;
  type2 = 'msspline';
  dataFormat2 = 'json';
  dataSource2 = data2;


  width3 = 600;
  height3 = 400;
  type3 = 'column2d';
  dataFormat3 = 'json';
  dataSource3 = data3;


  width4 = 600;
  height4 = 400;
  type4 = 'stackedcolumn2d';
  dataFormat4 = 'json';
  dataSource4 = data4;

  width5 = 600;
  height5 = 400;
  type5 = 'radar';
  dataFormat5 = 'json';
  dataSource5 = data5;

  width6 = 600;
  height6 = 400;
  type6 = 'msline';
  dataFormat6 = 'json';
  dataSource6 = data6;

  width7 = 600;
  height7 = 400;
  type7 = 'mssplinearea';
  dataFormat7 = 'json';
  dataSource7 = data7;

  width8 = 600;
  height8 = 400;
  type8 = 'pie3d';
  dataFormat8 = 'json';
  dataSource8 = data8;

  width9 = 600;
  height9 = 400;
  type9 = 'stackedarea2d';
  dataFormat9 = 'json';
  dataSource9 = data9;

  width10 = 600;
  height10 = 400;
  type10 = 'mscombi2d';
  dataFormat10 = 'json';
  dataSource10 = data10;


  width11 = 600;
  height11 = 400;
  type11 = 'radar';
  dataFormat11 = 'json';
  dataSource11 = data11;





  constructor() { }

  ngOnInit() {
  }



}
