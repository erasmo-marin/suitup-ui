import React from 'react';
import { Transition, Variants, TargetAndTransition } from 'framer-motion';
import styled from 'styled-components';
import { LayerLevels } from '../../theming/layers';
import Overlay, { type OverlayProps } from '../Overlay';
import useOverrides from '../../theming/useOverrides';
import { AlertThemeType } from './theme';

const AlertContent = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  overflow: auto;
`;

const AlertOverlay = styled(Overlay)`
  z-index: ${(props) => props.zIndex};
`;
const AlertContainer = styled(Overlay.Child)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ styles }) => styles.mobile.backgroundColor};
  border-radius: ${({ styles }) => styles.mobile.borderRadius};
  width: ${({ styles }) => styles.mobile.width};
  max-width: ${({ styles }) => styles.mobile.maxWidth};
  height: ${({ styles }) => styles.mobile.height};
  max-height: ${({ styles }) => styles.mobile.maxHeight};
  box-shadow: ${({ styles }) => styles.mobile.boxShadow};
  margin: ${({ styles }) => styles.mobile.margin};
  overflow: hidden;
  z-index: ${(props) => props.zIndex};
  backdrop-filter: blur(4px);

  @media (min-width: 769px) {
    background-color: ${({ styles }) => styles.desktop.backgroundColor};
    border-radius: ${({ styles }) => styles.desktop.borderRadius};
    width: ${({ styles }) => styles.desktop.width};
    max-width: ${({ styles }) => styles.desktop.maxWidth};
    height: ${({ styles }) => styles.desktop.height};
    max-height: ${({ styles }) => styles.desktop.maxHeight};
    box-shadow: ${({ styles }) => styles.desktop.boxShadow};
    margin: ${({ styles }) => styles.desktop.margin};
  }
`;

const defaultTransition = {
  type: 'spring',
  bounce: 0.15,
  duration: 0.5,
};

const defaultVariants: Variants = {
  initial: { y: '100vh', scale: 0.8 },
  appear: { y: 0, scale: 1 },
  disappear: { y: '100vh', scale: 0.8 },
};

export type AlertProps = OverlayProps & {
  children?: React.ReactNode;
  overrides?: AlertThemeType;
  open?: boolean;
  label?: string;
  role?: string;
  animationVariants?: Variants;
  vailAnimationVariants?: Variants;
  vailTransition?: Transition;
  animate?: TargetAndTransition;
};

const Alert = ({
  label = 'modal',
  role = 'dialog',
  open,
  onClose,
  onBlur,
  closeOnBlur = false,
  closeOnEsc = false,
  animationVariants = defaultVariants,
  vailAnimationVariants,
  transition = defaultTransition,
  vailTransition,
  overrides,
  animate = {},
  children,
}: AlertProps) => {
  const styles = useOverrides<AlertThemeType>({ key: 'Alert', overrides });

  return (
    <AlertOverlay
      open={open}
      hasFocusTrap={open}
      closeOnBlur={closeOnBlur}
      closeOnEsc={closeOnEsc}
      onClose={onClose}
      onBlur={onBlur}
      transition={vailTransition}
      animationVariants={vailAnimationVariants}
      zIndex={LayerLevels.ALERT}
    >
      <AlertContainer
        animationVariants={animationVariants}
        open={open}
        transition={transition}
        label={label}
        role={role}
        animate={animate}
        styles={styles}
        zIndex={LayerLevels.ALERT + 1}
      >
        {children}
      </AlertContainer>
    </AlertOverlay>
  );
};

Alert.Content = AlertContent;

export default Alert;
