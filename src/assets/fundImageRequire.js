//I hate this stupid fucking solution. But React Native does NOT allow dynamic requires

export default function fundImageSelect (name) {

    switch (name) {
        case 'Fintech Algo':
          return require('../assets/funds/FintechAlgo.png');
        case 'UCL Agtech':
            return require('../assets/funds/UCLAgtech.png');
        case 'CS DeFi Trades':
          return require('../assets/funds/CSDeFiTrades.png');
        case 'UCL Big Pharma':
          return require('../assets/funds/UCLBigPharma.png');
        case 'Bio Shorters':
          return require('../assets/funds/BioShorters.png');
        case 'UCL Healthcare':
          return require('../assets/funds/UCLHealthcare.png');
        case 'UCL FoodTech':
          return require('../assets/funds/UCLFoodTech.png');
        case 'UCL Infra Traders':
          return require('../assets/funds/UCLInfraTraders.png');     
        case 'Cambr Invest':
          return require('../assets/funds/CambrInvest.png');
        case 'Oxford Traders':
          return require('../assets/funds/OxfordTraders.png');
        case 'UCL Fintech':
          return require('../assets/funds/UCLFintech.png');
        case 'StAnd Algo':
            return require('../assets/funds/StAndAlgo.png');  
        // add more cases for additional logos
        default:
          console.error(`Invalid module name:`);
    }
}