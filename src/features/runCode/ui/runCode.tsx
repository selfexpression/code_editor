import { useState, type FC } from 'react';
import { Button } from '../../../shared/ui/button';
import PlayIcon from '../../../shared/assets/icons/play.svg';
import { runCode } from '../../../shared/api/runCode';
import type { IOutputResult } from '../../../shared/types/output';

import './runCode.scss';

interface IRunCode {
  language: string;
  code: string;
  onResult: (result: IOutputResult) => void;
}

export const RunCode: FC<IRunCode> = ({ language, code, onResult }) => {
  const [isPending, setIsPending] = useState(false);

  const handleRunCode = async (): Promise<void> => {
    setIsPending(true);
    const result: IOutputResult = await runCode(language, code);
    setIsPending(false);
    onResult(result);
  };

  return (
    <div className="run-code">
      <Button
        icon={!isPending ? <img src={PlayIcon} alt="play" /> : undefined}
        onClick={handleRunCode}
        text={!isPending ? 'Run' : '... Pending'}
        className="run-code__button"
      />
    </div>
  );
};
