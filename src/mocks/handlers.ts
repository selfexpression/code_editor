import { HttpResponse, http, delay } from 'msw';
import { CODE_SNIPPETS } from '../shared/constants/codeSnippets';
import { TLanguages } from '../shared/types/languages';

interface IRequestBody {
  language: TLanguages;
  code: string;
}

const executeResolver = async (req: any) => {
  try {
    if (navigator.onLine === false) {
      return HttpResponse.error();
    }

    const body = await req.request.json();
    const { language, code }: IRequestBody = body;

    const correctCode = CODE_SNIPPETS[language];
    const isValid = code === correctCode;

    if (!isValid) {
      return HttpResponse.json(
        {
          status: 'error',
          error: 'SyntaxError: Unexpected token',
        },
        { status: 400 }
      );
    }

    return HttpResponse.json(
      {
        status: 'success',
        output: '[0,1]',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Request failed:', error);
    return HttpResponse.error();
  }
};

const executeHandler = http.post('/api/execute', async (req) => {
  await delay(1000);
  return executeResolver(req);
});

export const handlers = [executeHandler];
