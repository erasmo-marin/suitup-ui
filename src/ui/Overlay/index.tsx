import React, { useCallback, useEffect } from 'react';
import {
  Transition,
  AnimatePresence,
  TargetAndTransition,
  motion,
  Variants,
} from 'framer-motion';
import classnames from 'classnames';
import noop from 'lodash/noop';
import styled from 'styled-components';
import Portal from '../Portal';
import { AccessibilityFocusTrap } from '../Accessibility';

export type OverlayProps = {
  children?: React.ReactNode;
  open?: boolean;
  hasFocusTrap?: boolean;
  className?: string;
  closeOnBlur?: boolean;
  closeOnEsc?: boolean;
  animationVariants?: Variants;
  transition?: Transition;
  onBlur?: () => void;
  onClose?: () => void;
  onOpen?: () => void;
};

export type OverlayChildProps = {
  children?: React.ReactNode;
  open?: boolean;
  className?: string;
  animationVariants?: Variants;
  transition?: Transition;
  animate?: TargetAndTransition;
  onOpen?: () => void;
  onClick?: () => void;
};

const variants: Variants = {
  initial: { opacity: 0 },
  appear: { opacity: 1 },
  disappear: { opacity: 0 },
};

const StyledOverlay = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100000;

  & [data-focus-lock-disabled] {
    display: contents;
  }

  & [data-focus-guard] {
    display: contents;
  }
`;

const Overlay = ({
  children,
  className,
  open = true,
  hasFocusTrap = open,
  animationVariants = variants,
  transition,
  closeOnBlur = false,
  closeOnEsc = false,
  onBlur = noop,
  onClose = noop,
  onOpen = noop,
}: OverlayProps): JSX.Element => {
  const classes = classnames(className, 'overlay');

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEsc) {
        event.preventDefault();
        event.stopPropagation();
        onClose();
      }
    },
    [closeOnEsc, onClose],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      e.preventDefault();
      e.stopPropagation();
      onBlur();
      if (closeOnBlur) onClose();
    },
    [onBlur, onClose, closeOnBlur],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Portal>
      <AccessibilityFocusTrap readyToFocus={hasFocusTrap}>
        <AnimatePresence key="overlay">
          {open && (
            <StyledOverlay
              key="overlay-motion"
              className={classes}
              variants={animationVariants}
              transition={transition}
              initial="initial"
              animate="appear"
              exit="disappear"
              onClick={handleClick}
              onAnimationStart={onOpen}
            />
          )}
        </AnimatePresence>
        {children}
      </AccessibilityFocusTrap>
    </Portal>
  );
};

const getOverlayAnimation = (variant, animationVariants, custom = {}) => {
  const baseObj = animationVariants[variant];
  return {
    ...baseObj,
    ...custom,
  };
};

const OverlayChild = ({
  open = true,
  children,
  className,
  animationVariants = variants,
  transition,
  onClick = noop,
  onOpen = noop,
  animate,
}: OverlayChildProps) => {
  const classes = classnames('overlay-child', className);
  const variant = open ? 'appear' : 'disappear';
  const mergedAnimate = getOverlayAnimation(
    variant,
    animationVariants,
    animate,
  );
  return (
    <motion.div
      key="overlay-child-motion"
      className={classes}
      variants={animationVariants}
      initial={mergedAnimate}
      animate={mergedAnimate}
      transition={transition}
      onClick={onClick}
      onAnimationStart={onOpen}
    >
      {children}
    </motion.div>
  );
};

Overlay.Child = OverlayChild;
export default Overlay;
