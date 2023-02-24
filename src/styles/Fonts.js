// // Lays out the different font styles in the app - the most common ones. 

import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'UrbanistBlack': require('../assets/fonts/Urbanist-Black.ttf'),
    'UrbanistBlackItalic': require('../assets/fonts/Urbanist-BlackItalic.ttf'), 
  });
}

// import UrbanistBlack from '../assets/fonts/Urbanist-Black.ttf';
// import UrbanistBlackItalic from '../assets/fonts/Urbanist-BlackItalic.ttf';
// import UrbanistBold from '../assets/fonts/Urbanist-Bold.ttf';
// import UrbanistBoldItalic from '../assets/fonts/Urbanist-BoldItalic.ttf';
// import UrbanistExtraBold from '../assets/fonts/Urbanist-ExtraBold.ttf';
// import UrbanistExtraBoldItalic from '../assets/fonts/Urbanist-ExtraBoldItalic.ttf';
// import UrbanistExtraLight from '../assets/fonts/Urbanist-ExtraLight.ttf';
// import UrbanistExtraLightItalic from '../assets/fonts/Urbanist-ExtraLightItalic.ttf';
// import UrbanistItalic from '../assets/fonts/Urbanist-Italic.ttf';
// import UrbanistLight from '../assets/fonts/Urbanist-Light.ttf';
// import UrbanistLightItalic from '../assets/fonts/Urbanist-LightItalic.ttf';
// import UrbanistMedium from '../assets/fonts/Urbanist-Medium.ttf';
// import UrbanistMediumItalic from '../assets/fonts/Urbanist-MediumItalic.ttf';
// import UrbanistRegular from '../assets/fonts/Urbanist-Regular.ttf';
// import UrbanistSemiBold from '../assets/fonts/Urbanist-SemiBold.ttf';
// import UrbanistSemiBoldItalic from '../assets/fonts/Urbanist-SemiBoldItalic.ttf';
// import UrbanistThin from '../assets/fonts/Urbanist-Thin.ttf';
// import UrbanistThinItalic from '../assets/fonts/Urbanist-ThinItalic.ttf';
