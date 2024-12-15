import { FC } from 'react';
import clsx from 'clsx';

import './index.scss';

interface ButtonProps {
  onClick: () => void;
  isClicked?: boolean;
  className?: string;
  text?: string;
  withChevron?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  text,
  onClick,
  isClicked,
  withChevron,
}) => {
  return (
    <button
      type="button"
      className={clsx('button', className, { button__clicked: isClicked })}
      onClick={onClick}
    >
      <span>{text}</span>
      {withChevron && (
        <img
          src="/icons/chevron-down.svg"
          alt="chevron"
          className="chevron-icon"
        />
      )}
    </button>
  );
};
