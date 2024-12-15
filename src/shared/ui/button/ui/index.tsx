import { FC } from 'react';
import clsx from 'clsx';

import './index.scss';

interface ButtonProps {
  onClick: () => void;
  className?: string;
  text?: string;
}

export const Button: FC<ButtonProps> = ({ className, text, onClick }) => {
  return (
    <button
      type='button'
      className={clsx('button', className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
