import React from 'react';
import { Transition, Variants, TargetAndTransition } from 'framer-motion';
import styled from 'styled-components';
import { LayerLevels } from '../../theming/layers';
import Overlay, { type OverlayProps } from '../Overlay';
import useOverrides from '../../theming/useOverrides';
import { BottomSheetThemeType } from './theme';
import { colors } from '../../theming/colors';

const BottomSheetContent = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  overflow: auto;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
`;

const BottomSheetTitle = styled.div`
  position: relative;
  height: 56px;
  min-height: 56px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid rgba(${colors.fill.secondary}, 0.2);
  &:after {
    content: ' ';
    width: 30px;
    height: 3px;
    border-radius: 3px;
    background-color: rgba(${colors.fill.secondary}, 0.2);
    position: absolute;
    top: 5px;
  }
`;

const BottomSheetOverlay = styled(Overlay)`
  z-index: ${(props) => props.zIndex};
`;
const BottomSheetContainer = styled(Overlay.Child)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ styles }) => styles.mobile.backgroundColor};
  border-radius: ${({ styles }) => styles.mobile.borderRadius};
  width: ${({ styles }) => styles.mobile.width};
  max-width: ${({ styles }) => styles.mobile.maxWidth};
  height: ${({ styles }) => styles.mobile.height};
  max-height: ${({ styles }) => styles.mobile.maxHeight};
  box-shadow: ${({ styles }) => styles.mobile.boxShadow};
  margin: ${({ styles }) => styles.mobile.margin};
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  overflow: hidden;
  z-index: ${(props) => props.zIndex};

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
  initial: { y: 'calc(100% + 100px)' },
  appear: {
    y: '100px',
  } /* 100px is the extra padding to avoid a cutted bottom sheet on bounce animation */,
  disappear: { y: 'calc(100% + 100px)' },
};

export type BottomSheetProps = OverlayProps & {
  children?: React.ReactNode;
  overrides?: BottomSheetThemeType;
  open?: boolean;
  label?: string;
  role?: string;
  animationVariants?: Variants;
  vailAnimationVariants?: Variants;
  vailTransition?: Transition;
  animate?: TargetAndTransition;
};

const BottomSheet = ({
  label = 'modal',
  role = 'dialog',
  open,
  onClose,
  onBlur,
  closeOnBlur = true,
  closeOnEsc = true,
  animationVariants = defaultVariants,
  vailAnimationVariants,
  transition = defaultTransition,
  vailTransition,
  overrides,
  animate = {},
  children,
}: BottomSheetProps) => {
  const styles = useOverrides<BottomSheetThemeType>({
    key: 'BottomSheet',
    overrides,
  });

  return (
    <BottomSheetOverlay
      open={open}
      hasFocusTrap={open}
      closeOnBlur={closeOnBlur}
      closeOnEsc={closeOnEsc}
      onClose={onClose}
      onBlur={onBlur}
      transition={vailTransition}
      animationVariants={vailAnimationVariants}
      zIndex={LayerLevels.BOTTOM_SHEET}
    >
      <BottomSheetContainer
        animationVariants={animationVariants}
        open={open}
        transition={transition}
        label={label}
        role={role}
        animate={animate}
        styles={styles}
        zIndex={LayerLevels.BOTTOM_SHEET + 1}
      >
        {children}
      </BottomSheetContainer>
    </BottomSheetOverlay>
  );
};

BottomSheet.Content = BottomSheetContent;
BottomSheet.Title = BottomSheetTitle;

export default BottomSheet;
