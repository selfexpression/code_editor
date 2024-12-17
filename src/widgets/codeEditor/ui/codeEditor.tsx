import { useState, type FC } from 'react';
import Editor from '@monaco-editor/react';
import { editor as MonacoEditor } from 'monaco-editor';
import { LanguagesSelector } from '../../../features/languagesSelector';
import { Dashboard } from '../../../shared/ui/dashboard';
import CodeIcon from '../../../shared/assets/icons/code.svg';

import './codeEditor.scss';

interface ICodeEditor {
  className?: string;
}

export const CodeEditor: FC<ICodeEditor> = ({ className }) => {
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
    <Dashboard icon={codeIcon} title="Code" className={className}>
      <div className="dashboard__header-panel">
        <LanguagesSelector
          currentLanguage={currentLanguage}
          onSelect={handleSelectLanguage}
        />
      </div>
      {/* Вычитаются размеры блоков dashboard__header и dashboard__header-panel + border */}
      <Editor
        height="calc(50vh - (39.5px + 46px + 1px))"
        theme="vs-dark"
        language={currentLanguage}
        value={value}
        onChange={onChange}
        onMount={onMount}
      />
    </Dashboard>
  );
};
