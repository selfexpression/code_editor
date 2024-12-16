import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { editor as MonacoEditor } from 'monaco-editor';
import { LanguagesSelector } from '../../../features/languagesSelector';
import { Dashboard } from '../../../shared/ui/dashboard';
import CodeIcon from '../../../shared/assets/icons/code.svg';

import './codeEditor.scss';

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

  const codeIcon = <img src={CodeIcon} alt="code" />;

  return (
    <Dashboard icon={codeIcon} title="Code">
      <div className="dashboard__header-panel">
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
    </Dashboard>
  );
};
