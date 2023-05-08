import React from 'react';

export type GenericContainerProps = {
  children?: JSX.Element[] | React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
};
