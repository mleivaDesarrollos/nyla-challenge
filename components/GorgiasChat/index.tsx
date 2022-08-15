import { useEffect, useState } from "react";
import { useGorgiasChat } from "./useGorgiasChat";

export const GorgiasChat = () => {
  const [visitorWantsToChat, setVisitorWantsToChat] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null;

    if (visitorWantsToChat) {
      interval = setInterval(() => {
        const gorgiasIframeButton = document.querySelector(
          "#chat-button"
        ) as HTMLIFrameElement;
        const gorgiasIframeChatWindow = document.querySelector("#chat-window");

        if (gorgiasIframeButton && gorgiasIframeChatWindow) {
          const gorgiasChatButton =
            gorgiasIframeButton.contentWindow.document.body.querySelector(
              "#gorgias-chat-messenger-button"
            ) as HTMLButtonElement;

          /* To avoid issue we should validate if the button was properly rendered before clicking it */
          if (gorgiasChatButton) {
            clearInterval(interval);
            const chatWindowStyles = window.getComputedStyle(
              gorgiasIframeChatWindow
            );

            /* We only would click on chat button when chat window is hidden */
            if (chatWindowStyles.display === "none") {
              gorgiasChatButton.click();
            }
          }
        }
      }, 100);
    }
    return () => {
      clearInterval(interval);
    };
  }, [visitorWantsToChat]);

  useGorgiasChat(visitorWantsToChat);

  if (visitorWantsToChat) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 right-0 bg-lime-400 text-white mr-6 mb-8 p-3 rounded-md hover:bg-lime-700 transition-colors"
      onClick={() => setVisitorWantsToChat(true)}
    >
      <span>Do you need Help?</span>
    </div>
  );
};
