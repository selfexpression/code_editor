import { CodeEditor } from '../../widgets/codeEditor';
import { TaskDescription } from '../../widgets/taskDescription';
import { TWO_NUMBER } from '../../shared/constants/tasks/twoNumber';

import './layout.scss';

export const Layout = () => {
  const { title, description, examples, constraints } = TWO_NUMBER;

  return (
    <div className="layout">
      <TaskDescription
        title={title}
        description={description}
        examples={examples}
        constraints={constraints}
      />
      <CodeEditor />
    </div>
  );
};
