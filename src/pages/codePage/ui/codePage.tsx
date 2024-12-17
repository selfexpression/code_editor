import { CodeEditor } from '../../../widgets/codeEditor';
import { TaskDescription } from '../../../widgets/taskDescription';
import { Output } from '../../../widgets/output';
import { TWO_NUMBER } from '../../../shared/constants/tasks/twoNumber';

import './codePage.scss';

export const CodePage = () => {
  const { title, description, examples, constraints } = TWO_NUMBER;

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
        <CodeEditor className="code-page__code-editor" />
        <Output className="code-page__output" />
      </div>
    </div>
  );
};
