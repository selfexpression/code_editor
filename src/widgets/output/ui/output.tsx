import { type FC } from 'react';
import { Dashboard } from '../../../shared/ui/dashboard';
import TerminalIcon from '../../../shared/assets/icons/terminal.svg';
import clsx from 'clsx';
import type { IOutputResult } from '../../../shared/types/output';

import './output.scss';

interface IOutput {
  result: IOutputResult | null;
  className?: string;
}

export const Output: FC<IOutput> = ({ className, result }) => {
  const isSuccessCode = result?.status === 'success';

  return (
    <Dashboard
      icon={<img src={TerminalIcon} alt="terminal" />}
      title="Output"
      className={className}
    >
      <div className="output dashboard__content">
        {result ? (
          <>
            {isSuccessCode ? (
              <>
                <h2 className="output__title-success">Accepted</h2>
                <div className="output__highlight">
                  <div
                    className={clsx('check-mark', {
                      'check-mark__success': isSuccessCode,
                    })}
                  />
                  <span>Case</span>
                </div>
                <h5>Result:</h5>
                <div className="output__highlight">{result.output}</div>
              </>
            ) : (
              <div className="output__result-error">
                <h2>Error</h2>
                <p>{result?.error}</p>
              </div>
            )}
          </>
        ) : (
          <p className="output__empty">Click "Run" to see the output here</p>
        )}
      </div>
    </Dashboard>
  );
};
