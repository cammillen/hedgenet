import * as React from "react";
import { View, Image, Dimensions} from 'react-native';
import Svg, { G, Path, Defs, Rect } from "react-native-svg";
import { BlurView } from 'expo-blur';
import MaskedView from '@react-native-community/masked-view';
import BlurredRect from './BlurredRect.js'

/* SVGR has dropped some elements not supported by react-native-svg: filter */

const { width } = Dimensions.get('window');

const BottomMenuBar = (props) => (
  <MaskedView
    maskElement={
      <Svg
        width={width}
        height={113}
        fill="red"
        xmlns="http://www.w3.org/2000/svg"
        backgroundColor={'transparent'}
        {...props}
      >
        <G filter="url(#a)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M124.11 31.993c11.176.002 20.643-7.73 28.216-15.945C161.379 6.228 174.893-.002 189.993 0c15.107.002 28.633 6.243 37.696 16.072 7.573 8.214 17.039 15.94 28.209 15.941l98.111.015c14.356.002 25.998 11.64 26.005 25.995l.016 28.972c.008 14.363-11.632 26.007-25.995 26.005l-327.994-.05C11.685 112.948.043 101.311.036 86.955L.02 57.983C.012 43.62 11.652 31.976 26.015 31.978l98.095.015Z"
          />
        </G>
        <Defs></Defs>
      </Svg>
    }>
    <BlurredRect/>
  </MaskedView>
);

export default BottomMenuBar;
