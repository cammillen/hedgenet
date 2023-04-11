import React from 'react';
import { globalColors } from '../../styles/Colors';
import SquareModal from "./SquareModal.js";

const LeaveFundModal = ( {visible, onClose} ) => {

    const func = () => {
        onClose();
        //whatever leave fund code we use
    };

  return (<SquareModal visible={visible} mainIconSource={require("../../assets/squaremodals/BinIcon.png")} titleColor={globalColors.status.error.color}
                title={"Leave Fund"} text={"Are you sure you want to leave the fund? All data will be lost."} button1Color={globalColors.dark._3.color} onButton1Press={onClose} button1Text={"Close"}
                button2Color={globalColors.status.error.color} onButton2Press={func} button2Text={"Leave Fund"} />);
};

export default LeaveFundModal;