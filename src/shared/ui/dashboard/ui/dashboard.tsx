import { type JSX, type FC, useRef } from 'react';
import { clsx } from 'clsx';

import './dashboard.scss';

interface IDashboard {
  icon: JSX.Element;
  title: string;
  children: JSX.Element | JSX.Element[];
  headerPanelContent?: JSX.Element | JSX.Element[];
  dashboardContent?: JSX.Element | JSX.Element[];
  classNames?: string;
  hasPadding?: boolean;
}

export const Dashboard: FC<IDashboard> = ({
  icon,
  title,
  children,
  headerPanelContent,
  classNames,
  hasPadding = true,
}) => {
  const dashboardRef = useRef<HTMLDivElement | null>(null);
  const isHidden =
    dashboardRef.current?.clientWidth && dashboardRef.current.clientWidth <= 50;
  const isContentReadable =
    dashboardRef.current?.clientWidth &&
    dashboardRef.current.clientWidth >= 400;

  return (
    <div
      className={clsx('dashboard', classNames, {
        'dashboard--hidden-content': isHidden,
      })}
      ref={dashboardRef}
    >
      <div
        className={clsx('dashboard__header', {
          'dashboard__header--hidden-content': isHidden,
        })}
      >
        {icon}
        <span>{title}</span>
      </div>
      {!isHidden && (
        <>
          {headerPanelContent && (
            <div className="dashboard__header-panel">{headerPanelContent}</div>
          )}

          <div
            className={clsx('dashboard__content', {
              'dashboard__content--has-padding': hasPadding,
              'dashboard__content--hidden-content': !isContentReadable,
            })}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};
