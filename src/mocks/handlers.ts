import { HttpResponse, http } from 'msw';

const executeResolver = () => {
  return HttpResponse.json([
    {
      status: 'success',
      output: 'Hello, world!\n',
    },
    {
      status: 'error',
      error: 'SyntaxError: Unexpected token',
    },
  ]);
};

const executeHandler = http.post('/api/execute', executeResolver);

export const handlers = [executeHandler];
