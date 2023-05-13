import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Cross1Icon } from '@radix-ui/react-icons';
import useOverrides from '../../theming/useOverrides';
import { NotificationThemeType } from './theme';
import OverridesProvider from '../../theming/OverridesProvider';
import withContextOverrides from '../../theming/withContextOverrides';

const NotificationContainer = styled(motion.div)`
  display: ${({ styles }) => styles?.display};
  align-items: ${({ styles }) => styles?.alignItems};
  position: relative;
  width: ${({ styles }) => styles?.width};
  padding: ${({ styles }) => styles?.padding};
  border-radius: ${({ styles }) => styles?.borderRadius};
  height: ${({ styles }) => styles?.height};
  background: ${({ styles }) => styles?.background};
  backdrop-filter: ${({ styles }) => styles?.backdropFilter};
  box-shadow: ${({ styles }) => styles?.boxShadow};
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    .notification-close-button {
      display: flex;
    }
  }
`;

const CloseButton = withContextOverrides(
  'Notification.CloseButton',
  styled(motion.button)`
    position: ${({ styles }) => styles?.position};
    top: ${({ styles }) => styles?.top};
    left: ${({ styles }) => styles?.left};
    width: ${({ styles }) => styles?.width};
    height: ${({ styles }) => styles?.height};
    border-radius: ${({ styles }) => styles?.borderRadius};
    border: ${({ styles }) => styles?.border};
    align-items: ${({ styles }) => styles?.alignItems};
    justify-content: ${({ styles }) => styles?.justifyContent};
    box-shadow: ${({ styles }) => styles?.boxShadow};
    cursor: ${({ styles }) => styles?.cursor};
    display: ${({ styles }) => styles?.display};
  `,
);

const Title = withContextOverrides(
  'Notification.Title',
  styled.h3`
    overflow: ${({ styles }) => styles?.overflow};
    white-space: ${({ styles }) => styles?.whiteSpace};
    text-overflow: ${({ styles }) => styles?.textOverflow};
    font-size: ${({ styles }) => styles?.fontSize};
    font-weight: ${({ styles }) => styles?.fontWeight};
    color: ${({ styles }) => styles?.color};
    margin: ${({ styles }) => styles?.margin};
  `,
);

const Description = withContextOverrides(
  'Notification.Description',
  styled.p`
    font-size: ${({ styles }) => styles?.fontSize};
    font-weight: ${({ styles }) => styles?.fontWeight};
    color: ${({ styles }) => styles?.color};
    margin: ${({ styles }) => styles?.margin};
  `,
);

const Icon = withContextOverrides(
  'Notification.Icon',
  styled.div`
    margin-right: ${({ styles }) => styles?.marginRight};
  `,
);

const Time = withContextOverrides(
  'Notification.Time',
  styled.span`
    margin-top: ${({ styles }) => styles?.marginTop};
    align-self: ${({ styles }) => styles?.alignSelf};
    margin-left: ${({ styles }) => styles?.marginLeft};
    font-size: ${({ styles }) => styles?.fontSize};
    line-height: ${({ styles }) => styles?.lineHeight};
    font-weight: ${({ styles }) => styles?.fontWeight};
    color: ${({ styles }) => styles?.color};
  `,
);

const Content = withContextOverrides(
  'Notification.Content',
  styled.div`
    overflow: ${({ styles }) => styles?.overflow};
    flex-grow: ${({ styles }) => styles?.flexGrow};
    display: ${({ styles }) => styles?.display};
    flex-flow: ${({ styles }) => styles?.flexFlow};
    justify-content: ${({ styles }) => styles?.justifyContent};
  `,
);

export type NotificationProps = React.InputHTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  overrides?: NotificationThemeType;
};

const Notification = ({ children, overrides, ...rest }: NotificationProps) => {
  const styles = useOverrides<NotificationThemeType>({
    key: 'Notification',
    overrides,
  });

  return (
    <OverridesProvider overrides={overrides}>
      <NotificationContainer styles={styles} {...rest}>
        <CloseButton className="notification-close-button">
          <Cross1Icon />
        </CloseButton>
        {children}
      </NotificationContainer>
    </OverridesProvider>
  );
};

Notification.Icon = Icon;
Notification.Time = Time;
Notification.Content = Content;
Object.assign(Notification.Content, { Title });
Object.assign(Notification.Content, { Description });

export default Notification;
