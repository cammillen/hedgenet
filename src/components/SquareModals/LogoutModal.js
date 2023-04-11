import React from 'react';
import { globalColors } from '../../styles/Colors';
import SquareModal from "./SquareModal.js";

const LogoutModal = ( {visible, onClose} ) => {

    const func = () => {
        onClose();
        //whatever logout code we use
    };

  return (<SquareModal visible={visible} mainIconSource={require("../../assets/squaremodals/LogoutIcon.png")} titleColor={globalColors.status.error.color}
                title={"Logout"} text={"Are you sure you want to logout? Your current data will be saved."} button1Color={globalColors.dark._3.color} onButton1Press={onClose} button1Text={"Close"}
                button2Color={globalColors.status.error.color} onButton2Press={func} button2Text={"Logout"} />);
};

export default LogoutModal;