import type { Request } from "express";
import type { NextApiResponse } from "next";

/**
 * For challenge purposes only, in real world scenarios we should check
 * in a database to validate if the merchant has this feature enabled
 */
let isChatEnabled = true;

export default function handler(req: Request, res: NextApiResponse) {
  /*
   * We aren't doing anything with this merchantId, this is meant
   * to mimic what we could do with a normal API
   */
  const { merchantId } = req.query;
  if (req.method === "GET") {
    res.status(200).json({ merchantId, isChatEnabled });
  }
  if (req.method === "POST") {
    /**
     * In normal scenarios we should check a token to validate if
     * the user has authorization to do this change
     */
    try {
      const body = JSON.parse(req.body);
      if (typeof body.enableChat === "boolean") {
        console.info(`Changed status of the chat to: ${body.enableChat}`);
        isChatEnabled = body.enableChat;
      }
      res.status(200).send("ok");
    } catch (error) {
      res.status(400).send(`Expecting a request body, received: ${req.body}`);
    }
  }
}
