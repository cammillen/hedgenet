import React from 'react';
import { globalColors } from '../../styles/Colors';
import SquareModal from "./SquareModal.js";

const CallPollModal = ( {visible, onClose} ) => {

    const func = () => {
        onClose();
        //whatever call poll code we use
    };

  return (<SquareModal visible={visible} mainIconSource={require("../../assets/squaremodals/PollIcon.png")} titleColor={globalColors.primary._500.color}
                title={"Call A Poll?"} text={"This will post a poll in the chatroom and a new investment strategy will be published."} button1Color={globalColors.dark._3.color} onButton1Press={onClose} button1Text={"Close"}
                button2Color={globalColors.primary._500.color} onButton2Press={func} button2Text={"Call Poll"} />);
};

export default CallPollModal;