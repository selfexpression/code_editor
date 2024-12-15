import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { editor as MonacoEditor } from 'monaco-editor';
import { LanguagesSelector } from '../../../features/languagesSelector';
import { LANGUAGES } from '../../../shared/constants/languages';

import './index.scss';

export const CodeEditor = () => {
  const [value, setValue] = useState<string>('');
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES[0]);

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
    <div className="editor-wrapper">
      <LanguagesSelector
        currentLanguage={currentLanguage}
        onSelect={handleSelectLanguage}
      />
      <Editor
        height="75vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={value}
        onChange={onChange}
        onMount={onMount}
      />
    </div>
  );
};
