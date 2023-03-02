//I hate this stupid fucking solution. But React Native does NOT allow dynamic requires

export default function LogoSelect (name) {

    switch (name) {
        case 'Google':
          return require('../assets/stocks/Google.png');
        case 'Netflix':
            return require('../assets/stocks/Netflix.png');
        // add more cases for additional logos
        default:
          console.error(`Invalid module name:`);
    }
}