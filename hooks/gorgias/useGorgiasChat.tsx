import { useEffect } from "react";
import { GORGIAS_APP_ID, GORGIAS_CHAT_BASE_URL } from "../../config";

const CONFIG_API_BASEURL = "config.gorgias.chat";
const CONFIG_APPLICATION_URL = `https://${CONFIG_API_BASEURL}/applications`;
const CONTAINER_NAME = "gorgias-chat-container";
const getMainScriptURL = (bundleVersion: string) =>
  `https://client-builds.production.gorgias.chat/${bundleVersion}/static/js/main.js`;

export const useGorgiasChat = (enabled: boolean) => {
  useEffect(() => {
    const controller = new AbortController();
    if (enabled) {
      window.GORGIAS_CHAT_APP_ID = GORGIAS_APP_ID;
      window.GORGIAS_CHAT_BASE_URL = GORGIAS_CHAT_BASE_URL;
      window.GORGIAS_API_BASE_URL = CONFIG_API_BASEURL;
      const applicationUrl = `${CONFIG_APPLICATION_URL}/${GORGIAS_APP_ID}`;
      const signal = controller.signal;
      fetch(applicationUrl, { signal })
        .then(async (response) => {
          if (!response.ok) {
            console.error(
              `Gorgias Chat - Failed request GET - ${applicationUrl}`
            );
            return;
          }

          const gorgiasResponse = await response.json();

          if (!gorgiasResponse.application || !gorgiasResponse.bundleVersion) {
            console.error(
              `Gorgias Chat - Missing fields in the response body - ${applicationUrl}`
            );
            return;
          }

          window.GORGIAS_CHAT_APP = true;
          window.GORGIAS_CHAT_BUNDLE_VERSION = gorgiasResponse.bundleVersion;

          if (gorgiasResponse.texts) {
            window.GORGIAS_CHAT_TEXTS = gorgiasResponse.texts;
          }

          if (gorgiasResponse.sspTexts) {
            window.GORGIAS_CHAT_SELF_SERVICE_PORTAL_TEXTS =
              gorgiasResponse.sspTexts;
          }

          if (!document.getElementById(CONTAINER_NAME)) {
            const container = document.createElement("div");
            container.id = CONTAINER_NAME;
            document.body.appendChild(container);

            const script = document.createElement("script");
            script.setAttribute("defer", "true");
            script.src = getMainScriptURL(gorgiasResponse.bundleVersion);
            document.body.appendChild(script);
          }
        })
        .catch((error) => {
          console.error("Gorgias Chat - Failed to make request", error);
        });
    }
    return () => {
      controller.abort();
    };
  }, [enabled]);
};
