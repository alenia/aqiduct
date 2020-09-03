//  https://en.wikipedia.org/wiki/Air_quality_index#Computing_the_AQI

export interface breakpoint {
  name: string;
  pm2_5: [number, number];
  AQI: [number, number];
}

export const aqiBreakpoints:  Array<breakpoint> = [
  {
    name: "Good",
    AQI: [0,50],
    pm2_5: [0,12.0]
  },
  {
    name: "Moderate",
    AQI: [51,100],
    pm2_5: [12.1,35.4]
  },
  {
    name: "Unhealthy for Sensitive Groups",
    AQI: [101,150],
    pm2_5: [35.5,55.4]
  },
  {
    name: "Unhealthy",
    AQI: [151,200],
    pm2_5: [55.5,150.4]
  },
  {
    name: "Very Unhealthy",
    AQI: [201, 300],
    pm2_5: [150.5,250.4]
  },
  {
    name: "Hazardous",
    AQI: [301,400],
    pm2_5: [250.5, 350.4]
  },
  {
    name: "Hazardous",
    AQI: [401,500],
    pm2_5: [350.5,500.4]
  }
]