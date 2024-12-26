import { useRef, useState, type FC } from 'react';
import Editor from '@monaco-editor/react';
import { editor as MonacoEditor } from 'monaco-editor';
import { LanguagesSelector } from '../../../features/languagesSelector';
import { Dashboard } from '../../../shared/ui/dashboard';
import { RunCode } from '../../../features/runCode';
import CodeIcon from '../../../shared/assets/icons/code.svg';
import { CODE_SNIPPETS } from '../../../shared/constants/codeSnippets';
import { DEFAULT_LANGUAGE } from '../../../shared/constants/languages';
import type { TLanguages } from '../../../shared/types/languages';
import type { IOutputResult } from '../../../shared/types/output';

import './codeEditor.scss';

interface ICodeEditor {
  onResult: (result: IOutputResult) => void;
  className?: string;
  height?: number;
}

export const CodeEditor: FC<ICodeEditor> = ({
  className,
  onResult,
  height,
}) => {
  const editorRef = useRef<MonacoEditor.IStandaloneCodeEditor>(null);
  const [value, setValue] = useState<string>(CODE_SNIPPETS[DEFAULT_LANGUAGE]);
  const [language, setLanguage] = useState<TLanguages>(DEFAULT_LANGUAGE);

  const handleSelectLanguage = (language: TLanguages) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
    editorRef.current?.focus();
  };

  const onChange = (value: string | undefined) => {
    if (value) {
      setValue(value);
    }
  };

  const onMount = (editor: MonacoEditor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const dashboardHeaderHeight = '39.5px';
  const dashboardHeaderPanelHeight = '46px';
  const borderWidth = '1px';
  const editorHeight = height ? `${height}px` : '50vh';

  return (
    <Dashboard
      icon={<img src={CodeIcon} alt="code" />}
      title="Code"
      className={className}
    >
      <div className="dashboard__header-panel">
        <LanguagesSelector
          language={language}
          onSelect={handleSelectLanguage}
        />
        <RunCode language={language} code={value} onResult={onResult} />
      </div>
      {/* От высоты редактора ыычитаются размеры блоков dashboard__header и dashboard__header-panel + border */}
      <Editor
        height={`calc(${editorHeight} - (${dashboardHeaderHeight} + ${dashboardHeaderPanelHeight} + ${borderWidth}))`}
        theme="vs-dark"
        language={language}
        defaultValue={CODE_SNIPPETS[language]}
        value={value}
        onChange={onChange}
        onMount={onMount}
      />
    </Dashboard>
  );
};
