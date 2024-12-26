import { type JSX, type FC } from 'react';
import { clsx } from 'clsx';

import './dashboard.scss';

interface IDashboard {
  icon: JSX.Element;
  title: string;
  children: JSX.Element | JSX.Element[];
  headerPanelContent?: JSX.Element | JSX.Element[];
  className?: string;
}

export const Dashboard: FC<IDashboard> = ({
  icon,
  title,
  children,
  headerPanelContent,
  className,
}) => {
  return (
    <div className={clsx('dashboard', className)}>
      <div className="dashboard__header">
        {icon}
        <span>{title}</span>
      </div>
      {headerPanelContent && (
        <div className="dashboard__header-panel">{headerPanelContent}</div>
      )}
      {children}
    </div>
  );
};
