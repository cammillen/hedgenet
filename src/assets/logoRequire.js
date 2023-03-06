//I hate this stupid fucking solution. But React Native does NOT allow dynamic requires

export default function LogoSelect (name) {

    switch (name) {
        case 'Google':
          return require('../assets/stocks/Google.png');
        case 'Netflix':
            return require('../assets/stocks/Netflix.png');
        case 'Coca-Cola':
          return require('../assets/stocks/CocaCola.png');
        case 'Blackberry':
          return require('../assets/stocks/Blackberry.png');
        case 'Apple':
          return require('../assets/stocks/Apple.png');
        case 'Alibaba':
          return require('../assets/stocks/Alibaba.png');
        case 'Amazon':
          return require('../assets/stocks/Amazon.png');
        case 'Dell':
          return require('../assets/stocks/Dell.png');
        case 'LG':
          return require('../assets/stocks/LG.png');
        case 'Meta':
          return require('../assets/stocks/Meta.png');
        case 'Advanced Micro Devices':
          return require('../assets/stocks/AdvancedMicroDevices.png');
        case 'Microsoft':
          return require('../assets/stocks/Microsoft.png');
        case 'Sony':
          return require('../assets/stocks/Sony.png');
        case 'Spotify':
          return require('../assets/stocks/Spotify.png');
        case 'Tesla':
          return require('../assets/stocks/Tesla.png');
        case 'Twitter':
          return require('../assets/stocks/Twitter.png');
        case 'Virgin':
          return require('../assets/stocks/Virgin.png');
                  
        // add more cases for additional logos
        default:
          console.error(`Invalid module name:`);
    }
}