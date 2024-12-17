import { type FC } from 'react';
import { Dashboard } from '../../../shared/ui/dashboard';
import { highlightText } from '../lib/highlightText';
import { hasNumber } from '../lib/hasNumber';
import TextIcon from '../../../shared/assets/icons/text.svg';
import { TWO_NUMBER_HIGHLIGHT_WORDS } from '../../../shared/constants/tasks/twoNumber';
import clsx from 'clsx';

import './taskDescription.scss';

interface ITaskExample {
  input: string;
  output: string;
  explanation?: string;
}

interface ITaskDescription {
  title: string;
  description: string[];
  examples: ITaskExample[];
  constraints: string[];
  className?: string;
}

export const TaskDescription: FC<ITaskDescription> = ({
  title,
  description,
  examples,
  constraints,
  className,
}) => {
  const textIcon = <img src={TextIcon} alt="text" />;

  return (
    <Dashboard icon={textIcon} title="Description" className={className}>
      <div className="task dashboard__content">
        <h2>{title}</h2>

        <div className="task__description">
          {description.map((text) => (
            <p key={text} className="task__paragraph">
              {/* Добавляется класс 'task__highlight' ключевым словам */}
              {highlightText(text, TWO_NUMBER_HIGHLIGHT_WORDS)}
            </p>
          ))}
        </div>

        {examples.map(({ input, output, explanation }, index) => (
          <div key={input} className="task__example">
            <h4>Example {index + 1}:</h4>
            <div className="task__example-details">
              <p className="task__example-row">
                <span>Input:</span>{' '}
                <span className="task__example-content">{input}</span>
              </p>
              <p className="task__example-row">
                <span>Output:</span>{' '}
                <span className="task__example-content">{output}</span>
              </p>
              {explanation && (
                <p className="task__example-row">
                  <span>Explanation:</span>{' '}
                  <span className="task__example-content">{explanation}</span>
                </p>
              )}
            </div>
          </div>
        ))}

        <div className="task__constraints">
          <h4>Constraints:</h4>
          <ul className="task__constraints-list">
            {constraints.map((text) => (
              <li
                key={text}
                className={clsx({ task__highlight: hasNumber(text) })}
              >
                {/* Добавляется класс 'task__highlight' элементам содержащим числа */}
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Dashboard>
  );
};
