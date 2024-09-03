import { useEffect } from "react";

export default function WhatsAppChatWidget() {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?46997";

    // Define the options object
    const options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: "#00e785",
        ctaText: "Chat with us",
        borderRadius: "25",
        marginLeft: "0",
        marginRight: "20",
        marginBottom: "20",
        ctaIconWATI: true,
        position: "right",
      },
      brandSetting: {
        brandName: "PAWITRA",
        brandSubTitle: "undefined",
        brandImg: "https://cdn.jsdelivr.net/gh/itzbandhan/projectvids/logo.png",
        welcomeText: "Hi there!\nHow can I help you?",
        messageText: "Hello, %0A I have a question about your product",
        backgroundColor: "#00e785",
        ctaText: "Chat with us",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "9779707441333",
      },
    };

    // Set the onload function to initialize the widget
    script.onload = function () {
      if (typeof CreateWhatsappChatWidget !== "undefined") {
        CreateWhatsappChatWidget(options);
      }
    };

    // Insert the script into the document head or body
    document.body.appendChild(script);

    // Clean up the effect by removing the script if the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
