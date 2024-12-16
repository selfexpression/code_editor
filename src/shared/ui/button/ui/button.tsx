import { FC } from 'react';
import clsx from 'clsx';
import ChevronDownIcon from '../../../../shared/assets/icons/chevron-down.svg';

import './button.scss';

interface IButton {
  onClick: () => void;
  isClicked?: boolean;
  className?: string;
  text?: string;
  withChevron?: boolean;
}

export const Button: FC<IButton> = ({
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
        <img src={ChevronDownIcon} alt="chevron" className="chevron-icon" />
      )}
    </button>
  );
};
