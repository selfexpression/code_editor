import { useState } from 'react';
import { useResize } from '../../../shared/lib/hooks/useResize';
import { CodeEditor } from '../../../widgets/codeEditor';
import { TaskDescription } from '../../../widgets/taskDescription';
import { Output } from '../../../widgets/output';
import { Resize } from '../../../shared/ui/resize';
import { TWO_NUMBER } from '../../../shared/constants/tasks/twoNumber';
import type { IOutputResult } from '../../../shared/types/output';

import './codePage.scss';

export const CodePage = () => {
  const { sizes, handleMouseDown } = useResize();
  const [resultOutput, setResultOutput] = useState<IOutputResult | null>(null);
  const { title, description, examples, constraints } = TWO_NUMBER;

  const handleResultOutput = (result: IOutputResult) => {
    setResultOutput(result);
  };

  return (
    <div className="code-page">
      <div
        className="code-page__task-description"
        style={{ width: sizes.width }}
      >
        <TaskDescription
          title={title}
          description={description}
          examples={examples}
          constraints={constraints}
        />
      </div>
      <Resize variant="horizontal" onMouseDown={handleMouseDown} />
      <div
        className="code-page__tabset"
        style={{ width: `calc(100% - ${sizes.width}px)` }}
      >
        <div
          className="code-page__code-editor"
          style={{ height: sizes.height }}
        >
          <CodeEditor onResult={handleResultOutput} height={sizes.height} />
        </div>
        <Resize variant="vertical" onMouseDown={handleMouseDown} />
        <div
          className="code-page__output"
          style={{ height: `calc(100% - ${sizes.height}px)` }}
        >
          <Output result={resultOutput} />
        </div>
      </div>
    </div>
  );
};
