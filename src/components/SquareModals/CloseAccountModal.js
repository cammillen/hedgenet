import React from 'react';
import { globalColors } from '../../styles/Colors';
import SquareModal from "./SquareModal.js";

const CloseAccountModal = ( {visible, onClose} ) => {

    const func = () => {
        onClose();
        //whatever close account code we use
    };

  return (<SquareModal visible={visible} mainIconSource={require("../../assets/squaremodals/BinIcon.png")} titleColor={globalColors.status.error.color}
                title={"Close Account"} text={"Are you sure you want to close your account? All data will be lost."} button1Color={globalColors.dark._3.color} onButton1Press={onClose} button1Text={"Close"}
                button2Color={globalColors.status.error.color} onButton2Press={func} button2Text={"Close Account"} />);
};

export default CloseAccountModal;