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
            messageBoxTxt="Hi Team, is there any related service available?"
            iconSize="40"
            iconColor="white"
            iconBgColor="green"
            headerIcon='https://i.ibb.co/ycMC6bXW/logo-2.png'
            headerIconColor="pink"
            headerTxtColor="white"
            headerBgColor="#161412"
            headerTitle="Cyfertech solution"
            headerCaption="Online"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={<>
                Hi there 👋 <br /><br />
                Welcome to [Your Company Name]! 🚀<br /><br />
                We offer professional digital solutions including:<br />
                • WordPress Development 🖥️<br />
                • Graphic Design 🎨<br />
                • SEO & Google Ranking 📈<br />
                • Social Media Marketing 📱<br />
                • Digital Marketing 🔧<br /><br />
                Let us know how we can help grow your business today!
            </>}
            footerBgColor="#999"
            placeholder="Type a message.."
            btnBgColor="white"
            btnTxt="Start Chat"
            btnTxtColor="black"
        />
    );
};

export default WhatsappWeb;