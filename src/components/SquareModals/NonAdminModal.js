import React from 'react';
import { globalColors } from '../../styles/Colors';
import SquareModal from "./SquareModalOneButton.js";

const NonAdminModal = ( {visible, onClose} ) => {

  return (<SquareModal visible={visible} mainIconSource={require("../../assets/squaremodals/WarningIcon.png")} titleColor={globalColors.status.error.color}
                title={"You’re not an admin!"} text={"Sorry, but you don’t have access to the Fund Admin Panel."} button1Color={globalColors.status.error.color} onButton1Press={onClose} button1Text={"Close"} />);
};

export default NonAdminModal;