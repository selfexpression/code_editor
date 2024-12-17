export const runCode = async (language: string, code: string) => {
  try {
    const response = await fetch('/api/execute/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ language, code }),
    });

    const result = await response.json();

    if (result.status === 'error') {
      return `Error: ${result.error}`;
    }

    return `Success: ${result.output}`;
  } catch (error) {
    console.error('Request failed:', error);
    return 'Error: Unable to connect to the server.';
  }
};
