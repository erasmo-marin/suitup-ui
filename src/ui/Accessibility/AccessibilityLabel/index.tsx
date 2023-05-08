import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

const LabelWraper = styled.span`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
  clip-path: inset(0px 0px 99.9% 99.9%);
  overflow: hidden;
  height: 1px;
  width: 1px;
  padding: 0;
  border: 0;
`;

export interface AccessibilityLabelProps {
  className?: string;
  text?: string;
}

const AccessibilityLabel = ({
  className,
  text = '',
  ...rest
}: AccessibilityLabelProps): JSX.Element => {
  const classes = classnames(className, { 'accessibility-label': true });
  return (
    <LabelWraper className={classes} {...rest}>
      {text}
    </LabelWraper>
  );
};

export default AccessibilityLabel;
