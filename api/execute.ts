/* 
  Конфигурация Vercel API Routes для серверных запросов
 */
import { VercelRequest, VercelResponse } from '@vercel/node';
import { CODE_SNIPPETS } from '../src/shared/constants/codeSnippets';
import type { TLanguages } from '../src/shared/types/languages';

interface IRequestBody {
  language: TLanguages;
  code: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('Received request:', req.method, req.body);
  if (req.method === 'GET') {
    return res.status(200).json({ message: 'API is working!' });
  }

  if (req.method === 'POST') {
    try {
      const { language, code }: IRequestBody = req.body;
      const correctCode = CODE_SNIPPETS[language];
      const isValid = code === correctCode;

      if (!isValid) {
        return res
          .status(400)
          .json({ status: 'error', error: 'SyntaxError: Unexpected token' });
      }

      return res.status(200).json({ status: 'success', output: '[0,1]' });
    } catch (error) {
      return res
        .status(500)
        .json({ status: 'error', error: 'Internal server error' });
    }
  } else {
    return res
      .status(405)
      .json({ status: 'error', error: 'Method Not Allowed' });
  }
}
