"use client"
import React from "react";
// @ts-ignore
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import Logo from '../public/logo-transparent.png'
const WhatsappWeb = () => {
    return (
        <WhatsAppWidget
            phoneNo="03371241063"
            position="right"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            autoOpen={true}
            autoOpenTimer={5000}
            messageBox={true}
            messageBoxTxt="Hi Team, is there any related service available ?"
            iconSize="40"
            iconColor="white"
            iconBgColor="green"
            headerIcon='https://i.ibb.co/q33HrJWY/logo-transparent.png'
            headerIconColor="pink"
            headerTxtColor="white"
            headerBgColor="#161412"
            headerTitle="Cyfertech solution"
            headerCaption="Online"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
            footerBgColor="#999"
            placeholder="Type a message.."
            btnBgColor="white"
            btnTxt="Start Chat"
            btnTxtColor="black"
        />
    );
};

export default WhatsappWeb;