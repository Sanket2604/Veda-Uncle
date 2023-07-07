export const resultsOverTimeData = {

  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    icon: 'rect',
    data: ['Email', 'Union Ads']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['10 May', '11 May', '12 May', '13 May', '14 May', '15 May', '16 May']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    }]
};

export const shareOfSentimentData = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
    bottom: '0',
    data: ['Positive', 'Neutral', 'Negetive']
  },
  grid: {
    left: '3%',
    right: '4%',
    top: '2%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Unread', 'Unchecked']
  },
  series: [
    {
      name: 'Positive',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [15.9, 15.9]
    },
    {
      name: 'Neutral',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [64.4, 64.4]
    },
    {
      name: 'Negetive',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [19.6, 19.6]
    }
  ]
};

export const shareOfCountriesData = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
    bottom: '0',
    data: ['Delhi', 'Karnataka', 'Maharashtra', 'Andhra Pradesh', 'Haryana', 'Uttar Pradesh', 'Madhya Pradesh', 'Chandigarh', 'Kerala', 'Other']
  },
  grid: {
    left: '3%',
    right: '4%',
    top: '2%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Unread', 'Unchecked']
  },
  series: [
    {
      name: 'Delhi',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Karnataka',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Maharashtra',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Andhra Pradesh',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Haryana',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Uttar Pradesh',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Madhya Pradesh',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Chandigarh',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Kerala',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Other',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    }
  ]
};

export const shareOfLangaugesData = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    bottom: '0',
    data: ['English', 'Hindi', 'Tamil', 'Gujrati', 'Telugu', 'Marathi', 'Bengali', 'Malayalam', 'Punjabi', 'Other']
  },
  grid: {
    left: '3%',
    right: '4%',
    top: '2%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Unread', 'Unchecked']
  },
  series: [
    {
      name: 'English',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Hindi',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Tamil',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Gujrati',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Telugu',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Marathi',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Bengali',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Malayalam',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Punjabi',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'Other',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    }
  ]
};

export const shareOfMediaData = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    bottom: '0',
    data: ['Online News', 'Blogs', 'Newspaper', 'TV/Radio', 'Magazine', 'External']
  },
  grid: {
    left: '3%',
    right: '4%',
    top: '2%',
    // containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Unread', 'Unchecked']
  },
  series: [
    {
      name: 'Online News',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [20, 20]
    },
    {
      name: 'Blogs',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [20, 20]
    },
    {
      name: 'Newspaper',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [20, 20]
    },
    {
      name: 'TV',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [20, 20]
    },
    {
      name: 'Magazine',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    },
    {
      name: 'External',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 10]
    }
  ]
};

export const shareOfSentimentPieData = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    // bottom: '0',
    left: 'center'
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 2300, name: 'Positive' },
        { value: 9200, name: 'Neutral' },
        { value: 2800, name: 'Negetive' },
      ]
    }
  ]
};

export const shareOfCountriesPieData = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    // bottom: '0',
    left: 'center'
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 2300, name: 'Delhi' },
        { value: 9200, name: 'Karnataka' },
        { value: 2800, name: 'Maharashtra' },
        { value: 2800, name: 'Andhra Pradesh' },
        { value: 2800, name: 'Haryana' },
        { value: 2800, name: 'Uttar Pradesh' },
        { value: 2800, name: 'Madhya Pradesh' },
        { value: 2800, name: 'Chandigar' },
        { value: 2800, name: 'Kerela' },
        { value: 2800, name: 'Others' },
      ]
    }
  ]
};

export const shareOfLangaugePieData = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    // bottom: '0',
    left: 'center'
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 2300, name: 'English' },
        { value: 9200, name: 'Hindi' },
        { value: 2800, name: 'Tamil' },
        { value: 2800, name: 'Gujrati' },
        { value: 2800, name: 'Telugu' },
        { value: 2800, name: 'Marathi' },
        { value: 2800, name: 'Bengali' },
        { value: 2800, name: 'Malayalam' },
        { value: 2800, name: 'Punjabi' },
        { value: 2800, name: 'Others' },
      ]
    }
  ]
};