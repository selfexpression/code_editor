import { CODE_SNIPPETS } from '../../constants/codeSnippets';
import { apiEndPoints } from '../endPoints';
import { TWO_NUMBER_OUTPUT } from '../../constants/tasks/twoNumber';
import type { TLanguages } from '../../types/languages';

interface IRequestBody {
  language: TLanguages;
  code: string;
}

export const mockFetch = (
  url: string,
  options?: RequestInit
): Promise<Response> => {
  const { success, error } = TWO_NUMBER_OUTPUT;

  return new Promise((resolve) => {
    setTimeout(() => {
      if (url.endsWith(apiEndPoints.execute) && options?.method === 'POST') {
        if (navigator.onLine === false) {
          console.error('Request failed: No internet connection.');
          return resolve(Response.error());
        }

        const body = JSON.parse(options.body as string);
        const { language, code }: IRequestBody = body;
        const correctCode = CODE_SNIPPETS[language];
        const isValid = code === correctCode;

        const mockResponse = {
          status: code === CODE_SNIPPETS[language] ? 'success' : 'error',
          ...(code === CODE_SNIPPETS[language]
            ? { output: success }
            : { error }),
        };

        if (!isValid) {
          resolve(
            new Response(JSON.stringify(mockResponse), {
              status: 400,
              headers: { 'Content-Type': 'application/json' },
            })
          );
        }

        resolve(
          new Response(JSON.stringify(mockResponse), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          })
        );
      } else {
        console.error('Request failed: Invalid endpoint or method.');
        return resolve(Response.error());
      }
    }, 1000);
  });
};
