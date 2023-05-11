import React, { useEffect, useState } from 'react';
import { Transition, Variants, TargetAndTransition } from 'framer-motion';
import Overlay, { type OverlayProps } from '../Overlay';
import { styled } from '../../theming/theme';
import useOverrides from '../../theming/useOverrides';
import { ModalThemeType } from './theme';
import ModalHeader from './Header';
import { useModalContext } from './context';
import useIsMobile from '../../hooks/useIsMobile';
import { LayerLevels } from '../../theming/layers';

const MODAL_BASE_Z_INDEX = LayerLevels.MODAL;

const ModalOverlay = styled(Overlay)`
  z-index: ${(props) => props.zIndex};
`;

const ModalBox = styled(Overlay.Child)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
  box-sizing: border-box;
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

const ModalContent = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  overflow: auto;
  padding-bottom: 16px; /*Needed to compensate top margin on mobile*/
  @media (min-width: 769px) {
    padding-bottom: 0px;
  }
`;

type ResponsiveVariantsType = {
  desktop: Variants;
  mobile: Variants;
};

const defaultVariants: ResponsiveVariantsType = {
  desktop: {
    initial: { y: '100vh', scale: 0.8 },
    appear: { y: 0, scale: 1 },
    disappear: { y: '100vh', scale: 0.8 },
  },
  mobile: {
    initial: { y: '100vh', scale: 0.8 },
    appear: { y: 0, scale: 1 },
    disappear: { y: '100vh', scale: 0.8 },
  },
};

const defaultTransition = {
  type: 'spring',
  bounce: 0.15,
  duration: 0.5,
};

export type ModalProps = OverlayProps & {
  uniqId: string;
  label?: string;
  role?: string;
  animationVariants?: ResponsiveVariantsType;
  vailAnimationVariants?: Variants;
  vailTransition?: Transition;
  overrides?: ModalThemeType;
  animate?: TargetAndTransition;
};

const computeMobileMarginTop = (modalPosition: number, openModals: number) => {
  if (modalPosition === -1) return 0;

  if (modalPosition + 1 === openModals) return 16;

  return -8;
};

const Modal = ({
  uniqId,
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
}: ModalProps) => {
  const [overlayZIndex, setOverlayZIndex] = useState(0);
  const styles = useOverrides<ModalThemeType>('Modal', overrides);
  const {
    onModalOpen,
    onModalClose,
    modalPosition,
    openModals,
    modalIsActive,
  } = useModalContext(uniqId);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (open) {
      // zIndex should be updated only when opening, when closing we keep the same one as before
      setOverlayZIndex(MODAL_BASE_Z_INDEX + 2 * modalPosition);
      onModalOpen();
    } else {
      onModalClose();
    }
  }, [open, onModalOpen, onModalClose, modalPosition]);

  const scale =
    modalPosition === -1 ? 1 : 1 - (openModals - modalPosition - 1) * 0.03;
  const marginTop = isMobile
    ? computeMobileMarginTop(modalPosition, openModals)
    : 'auto';

  const modalVariants = isMobile
    ? animationVariants.mobile
    : animationVariants.desktop;

  return (
    <ModalOverlay
      open={open}
      hasFocusTrap={modalIsActive && open}
      closeOnBlur={closeOnBlur}
      closeOnEsc={modalIsActive && closeOnEsc}
      onClose={onClose}
      onBlur={onBlur}
      transition={vailTransition}
      animationVariants={vailAnimationVariants}
      zIndex={overlayZIndex}
    >
      <ModalBox
        animationVariants={modalVariants}
        open={open}
        transition={transition}
        label={label}
        role={role}
        animate={{
          scale,
          marginTop,
          ...animate,
        }}
        styles={styles}
        zIndex={overlayZIndex + 1}
      >
        {children}
      </ModalBox>
    </ModalOverlay>
  );
};

Modal.Content = ModalContent;
Modal.Header = ModalHeader;

export default Modal;
