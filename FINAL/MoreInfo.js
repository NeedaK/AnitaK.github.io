// JavaScript library
const gardeningStats = {
    2010: 5000,
    2011: 6000,
    2012: 8000,
    2013: 10000,
    2014: 12000,
    2015: 15000,
    2016: 18000,
    2017: 20000,
    2018: 25000,
    2019: 30000,
    2020: 40000,
  };
  
  // JavaScript input
  const currentYear = 2023;
  
  // JavaScript variable in code
  let growthRate = 0;
  
  // JavaScript array in code
  const growthRates = [0.1, 0.2, 0.3, 0.4, 0.5];
  
  // 1st JavaScript functions
  // JavaScript function to calculate growth rate
  function calculateGrowthRate() {
    const randomIndex = Math.floor(Math.random() * growthRates.length);
    growthRate = growthRates[randomIndex];
  }
  
  // 2nd JavaScript functions
  // JavaScript function to predict gardening popularity for next 3 years
  function predictPopularity() {
    let predictedPopularity = gardeningStats[currentYear];
  
    for (let i = 1; i <= 3; i++) {
      predictedPopularity += predictedPopularity * growthRate;
    }
  
    return predictedPopularity;
  }
  
  // 3rd  JavaScript functions
  // JavaScript function to check if gardening is popular
  function isPopular(popularity) {
    if (popularity > 20000) {
      return true;
    } else {
      return false;
    }
  }
  
  // JavaScript while loop to calculate average growth rate
  let i = 0;
  let totalGrowthRate = 0;
  
  while (i < growthRates.length) {
    totalGrowthRate += growthRates[i];
    i++;
  }
  
  const avgGrowthRate = totalGrowthRate / growthRates.length;
  
  // JavaScript switch statement to print gardening popularity status
  calculateGrowthRate();
  const predictedPopularity = predictPopularity();
  
  switch (true) {
    case isPopular(predictedPopularity):
      console.log(`Gardening is very popular with a predicted popularity of ${predictedPopularity} in 2026.`);
      break;
    case predictedPopularity < 5000:
      console.log(`Gardening is not very popular with a predicted popularity of ${predictedPopularity} in 2026.`);
      break;
    default:
      console.log(`Gardening is moderately popular with a predicted popularity of ${predictedPopularity} in 2026.`);
      break;
  }
  