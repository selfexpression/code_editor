import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { editor as MonacoEditor } from 'monaco-editor';

import './index.scss';

export const CodeEditor = () => {
  const [value, setValue] = useState<string>('');

  const onChange = (value: string | undefined) => {
    if (value) {
      setValue(value);
    }
  };

  const onMount = (editor: MonacoEditor.IStandaloneCodeEditor) => {
    editor.focus();
  };

  return (
    <div className='editor-wrapper'>
      <Editor
        height='75vh'
        theme='vs-dark'
        defaultLanguage='javascript'
        value={value}
        onChange={onChange}
        onMount={onMount}
      />
    </div>
  );
};
