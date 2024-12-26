import type { FC } from 'react';
import type { ResizeVariants } from '../../../types/resize';
import clsx from 'clsx';

import './resize.scss';

interface IResize {
  variant: ResizeVariants;
  onMouseDown: (direction: ResizeVariants) => void;
}

export const Resize: FC<IResize> = ({ variant, onMouseDown }) => {
  return (
    <div
      className={clsx('resize', `resize__${variant}`)}
      onMouseDown={() => onMouseDown(variant)}
    />
  );
};
