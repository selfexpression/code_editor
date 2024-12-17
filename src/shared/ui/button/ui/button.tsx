import type { FC, JSX } from 'react';
import clsx from 'clsx';

import './button.scss';

interface IButton {
  onClick: () => void;
  isClicked?: boolean;
  className?: string;
  text?: string;
  icon?: JSX.Element;
}

export const Button: FC<IButton> = ({
  className,
  text,
  onClick,
  isClicked,
  icon,
}) => {
  return (
    <button
      type="button"
      className={clsx('button', className, { button__clicked: isClicked })}
      onClick={onClick}
    >
      <span>{text}</span>
      {icon && icon}
    </button>
  );
};
