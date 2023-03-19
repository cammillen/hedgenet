//I hate this stupid fucking solution. But React Native does NOT allow dynamic requires

export default function PictureSelect (name) {

    switch (name) {
        case 'j3natools':
          return require('../assets/dummyprofilepictures/j3natools.png');
        case 't0rr3s':
            return require('../assets/dummyprofilepictures/t0rr3s.png');
        case 'arranjames':
          return require('../assets/dummyprofilepictures/arranjames.png');
        case 'coqboi':
          return require('../assets/dummyprofilepictures/coqboi.png');
        case 'doughgirl':
          return require('../assets/dummyprofilepictures/doughgirl.png');
        case 'duttidatti':
          return require('../assets/dummyprofilepictures/duttidatti.png');
        case 'willsqeen':
          return require('../assets/dummyprofilepictures/willsqeen.png');
        case 'marisss':
          return require('../assets/dummyprofilepictures/marisss.png');
                  
        // add more cases for additional logos
        default:
          console.error(`Invalid module name:`);
    }
}