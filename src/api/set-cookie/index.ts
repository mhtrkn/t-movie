import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req?.method === 'POST') {
    const { token } = req?.body;

    if (!token) {
      res?.status(400).json({ error: 'Token eksik' });
      return;
    }

    res.setHeader('Set-Cookie', cookie?.serialize('token', token, {
      httpOnly: true,
      secure: process?.env?.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 1,
      path: '/',
    }));

    res.status(200).json({ success: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
