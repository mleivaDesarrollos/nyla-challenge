import { MERCHANT_ID } from "../../config";

export const useGetMerchantSettings = () => {
  fetch(`/api/merchant/settings/${MERCHANT_ID}`).then(async (response) => {
    if (!response.ok) {
      console.error(
        `Merchant settings - Error getting settings from the merchant id: ${MERCHANT_ID}`
      );
    }

    const settings = await response.json();

    console.log("settings: ", settings);
  });
};
