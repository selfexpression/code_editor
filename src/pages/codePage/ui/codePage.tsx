import { useState } from 'react';
import { CodeEditor } from '../../../widgets/codeEditor';
import { TaskDescription } from '../../../widgets/taskDescription';
import { Output } from '../../../widgets/output';
import { TWO_NUMBER } from '../../../shared/constants/tasks/twoNumber';
import type { IOutputResult } from '../../../shared/types/output';

import './codePage.scss';

export const CodePage = () => {
  const [resultOutput, setResultOutput] = useState<IOutputResult | null>(null);
  const { title, description, examples, constraints } = TWO_NUMBER;

  const handleResultOutput = (result: IOutputResult) => {
    setResultOutput(result);
  };

  return (
    <div className="code-page">
      <TaskDescription
        title={title}
        description={description}
        examples={examples}
        constraints={constraints}
        className="code-page__task-description"
      />
      <div className="code-page__tabset">
        <CodeEditor
          className="code-page__code-editor"
          onResult={handleResultOutput}
        />
        <Output className="code-page__output" result={resultOutput} />
      </div>
    </div>
  );
};
