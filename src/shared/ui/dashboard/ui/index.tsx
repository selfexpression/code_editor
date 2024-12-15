import { type JSX, type FC } from 'react';

import './index.scss';

interface DashboardProps {
  icon: JSX.Element;
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const Dashboard: FC<DashboardProps> = ({ icon, title, children }) => {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        {icon}
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
};
