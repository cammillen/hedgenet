import React from 'react';
import { globalColors } from '../../styles/Colors';
import SquareModal from "./SquareModalOneButton.js";

const TradePlacedModal = ( {visible, onClose, trade, value} ) => {

  return (<SquareModal visible={visible} mainIconSource={require("../../assets/squaremodals/TradePlaced.png")} titleColor={globalColors.primary._500.color}
                title={"Trade Placed!"} text={"Congratulations, we have placed your trade of "+trade+" for "+value+" shares."} button1Color={globalColors.primary._500.color} onButton1Press={onClose} button1Text={"Close"} />);
};

export default TradePlacedModal;