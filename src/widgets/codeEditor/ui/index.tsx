import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { editor as MonacoEditor } from 'monaco-editor';
import { LanguagesSelector } from '../../../features/languagesSelector';

import './index.scss';

export const CodeEditor = () => {
  const [value, setValue] = useState<string>('');
  const [currentLanguage, setCurrentLanguage] = useState('javascript');

  const handleSelectLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  const onChange = (value: string | undefined) => {
    if (value) {
      setValue(value);
    }
  };

  const onMount = (editor: MonacoEditor.IStandaloneCodeEditor) => {
    editor.focus();
  };

  return (
    <div className="editor">
      <div className="editor__header">
        <img src="/icons/code.svg" alt="code" />
        <span>Code</span>
      </div>
      <div className="editor__header-panel">
        <LanguagesSelector
          currentLanguage={currentLanguage}
          onSelect={handleSelectLanguage}
        />
      </div>
      <Editor
        height="75vh"
        theme="vs-dark"
        language={currentLanguage}
        value={value}
        onChange={onChange}
        onMount={onMount}
      />
    </div>
  );
};
