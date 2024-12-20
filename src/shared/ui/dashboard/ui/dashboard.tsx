import { type JSX, type FC } from 'react';
import { clsx } from 'clsx';

import './dashboard.scss';

interface IDashboard {
  icon: JSX.Element;
  title: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const Dashboard: FC<IDashboard> = ({
  icon,
  title,
  children,
  className,
}) => {
  return (
    <div className={clsx('dashboard', className)}>
      <div className="dashboard__header">
        {icon}
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
};
