export const runCode = async (language: string, code: string) => {
  const response = await fetch('/api/execute/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ language, code }),
  });

  if (!response.ok) {
    console.error('Failed to execute code. Please try again.');
  }

  const result = await response.json();
  return result;
};
