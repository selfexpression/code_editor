import { type FC } from 'react';
import { Dashboard } from '../../../shared/ui/dashboard';
import TerminalIcon from '../../../shared/assets/icons/terminal.svg';

import './output.scss';

interface IOutput {
  className?: string;
}

export const Output: FC<IOutput> = ({ className }) => {
  const terminalIcon = <img src={TerminalIcon} alt="terminal" />;

  return (
    <Dashboard icon={terminalIcon} title="Output" className={className}>
      <div></div>
    </Dashboard>
  );
};
