import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ModalContext } from '../../ui/Modal/context';
import useIsMobile from '../../hooks/useIsMobile';
import useOverrides from '../../theming/useOverrides';
import { AppContainerThemeType } from './theme';

const Void = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  background: #000;
`;

const Main = styled(motion.main)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  background: ${({ styles }) => styles.background};
`;

const Scroller = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: ${({ lockScroll }) => (lockScroll ? 'hidden' : 'auto')};
`;

const mainVariants = {
  desktop: {
    zoomedOut: {
      scale: 0.98,
      borderRadius: '36px',
    },
    initial: {
      scale: 1,
      borderRadius: 0,
    },
  },
  mobile: {
    zoomedOut: {
      y: -16,
      scale: 0.95,
      borderRadius: '36px',
    },
    initial: {
      y: 0,
      scale: 1,
      borderRadius: 0,
    },
  },
};

type AppContainerProps = {
  children?: React.ReactNode;
  overrides?: AppContainerThemeType;
  animateDesktop?: boolean;
};

const transition = {
  type: 'spring',
  bounce: 0.15,
  duration: 0.5,
};

const AppContainer = ({
  children,
  animateDesktop = false,
  overrides,
}: AppContainerProps) => {
  const { openModals } = useContext(ModalContext);
  const isMobile = useIsMobile();
  const styles = useOverrides({ key: 'AppContainer', overrides });
  const shouldAnimate = openModals > 0 && (isMobile || animateDesktop);
  const variants = isMobile ? mainVariants.mobile : mainVariants.desktop;

  return (
    <Void styles={styles}>
      <Main
        styles={styles}
        animate={shouldAnimate ? variants.zoomedOut : variants.initial}
        transition={transition}
      >
        <Scroller lockScroll={shouldAnimate}>{children}</Scroller>
      </Main>
    </Void>
  );
};

export default AppContainer;
