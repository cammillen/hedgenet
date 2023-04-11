import React from 'react';
import { globalColors } from '../../styles/Colors';
import SquareModal from "./SquareModalOneButton.js";

const AddFundsModal = ( {visible, onClose} ) => {

  return (<SquareModal visible={visible} mainIconSource={require("../../assets/squaremodals/GreenWarningIcon.png")} titleColor={globalColors.primary._500.color}
                title={"Add Funds"} text={"You can't add funds. Everyone starts with £50,000 to trade with."} button1Color={globalColors.primary._500.color} onButton1Press={onClose} button1Text={"Close"} />);
};

export default AddFundsModal;