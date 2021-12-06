export const deviceSize = {
  xs: 425,
  sm: 768,
  md: 1024,
  lg: 1440,
};

export const layoutConstant = {
  containerWidth: "1120px"
};


export const lotteryStatusObj = [
  {text:"New!", color:"linear-gradient(0deg, #FA6268, #ED378E)"}, 
  {text:"販売中", color:"linear-gradient(0deg, #F4C521, #E95106)"},
  {text:"終了間際", color:"linear-gradient(0deg, #6CD625, #06DC74)"},
  {text:"販売予定", color:"linear-gradient(0deg, #84B5D3, #725DDF)"},
];



export function yearListArr(yearNum: number) {
  var max = new Date().getFullYear()
  var min = max - yearNum
  var years = []

  for (var i = max; i >= min; i--) {
    let obj = { label: i.toString(), value: i }
    years.push(obj)
  }
  return years
}

export function monthListArr() {
  var max = 12
  var min = 1
  var month = []

  for (var i = max; i >= min; i--) {
    let obj = { label: i.toString(), value: i }
    month.push(obj)
  }
  return month
}

export function dayListArr() {
  var max = 31
  var min = 1
  var day = []

  for (var i = max; i >= min; i--) {
    let obj = { label: i.toString(), value: i }
    day.push(obj)
  }
  return day
}

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/