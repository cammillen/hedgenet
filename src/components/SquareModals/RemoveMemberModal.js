import React from 'react';
import { globalColors } from '../../styles/Colors';
import SquareModal from "./SquareModal.js";

const RemoveMemberModal = ( {visible, onClose} ) => {

    const func = () => {
        onClose();
        //whatever remove member code we use
    };

  return (<SquareModal visible={visible} mainIconSource={require("../../assets/squaremodals/BinIcon.png")} titleColor={globalColors.status.error.color}
                title={"Remove Group Member"} text={"Removing a member from the fund will prevent them from trading."} button1Color={globalColors.dark._3.color} onButton1Press={onClose} button1Text={"Close"}
                button2Color={globalColors.status.error.color} onButton2Press={func} button2Text={"Remove Member"} />);
};

export default RemoveMemberModal;