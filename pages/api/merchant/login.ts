import type { Request } from "express";
import type { NextApiResponse } from "next";

/**
 * For challenge purposes only, in real world scenarios we should check
 * in a database to validate merchant credentials
 */
const merchantUsername = "admin";
const merchantPassword = "12345";

export default function handler(req: Request, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { username, password } = JSON.parse(req.body);
      if (username === merchantUsername && password === merchantPassword) {
        res.status(200).json({ accessToken: "a valid token" });
        return;
      }

      res.status(401).send("User and password is invalid");
    } catch (error) {
      res.status(400).send("Unable to parse body of the request.");
    }
  }
}
