import type { FC } from 'react';
import { Button } from '../../../shared/ui/button';
import PlayIcon from '../../../shared/assets/icons/play.svg';
import { runCode } from '../../../shared/api/runCode';

interface IRunCode {
  language: string;
  code: string;
}

export const RunCode: FC<IRunCode> = ({ language, code }) => {
  const handleRunCode = async (): Promise<string> =>
    await runCode(language, code);

  const playIcon = <img src={PlayIcon} alt="play" />;

  return (
    <div className="run-code">
      <Button icon={playIcon} onClick={handleRunCode} text="Run" />
    </div>
  );
};
