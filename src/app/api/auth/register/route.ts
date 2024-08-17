import type { NextApiRequest, NextApiResponse } from "next";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      res.status(200).json({ user });
    } catch (error) {
      const errorCode = (error as any).code;
      const errorMessage = (error as any).message;

      res.status(400).json({ errorCode, errorMessage });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}