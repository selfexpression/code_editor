import { FC, JSX } from 'react';
import clsx from 'clsx';

import './dropDownList.scss';

interface DropDownListProps {
  content?: JSX.Element | JSX.Element[];
  className?: string;
  isOpen?: boolean;
}

export const DropDownList: FC<DropDownListProps> = ({
  content,
  className,
  isOpen,
}) => {
  return (
    <div
      className={clsx('dropdown', className, {
        dropdown__opened: isOpen,
        dropdown__closed: !isOpen,
      })}
    >
      <div className="dropdown__content">{content}</div>
    </div>
  );
};
