import React from 'react';
import styled from 'styled-components';
import { Cross1Icon, ChevronLeftIcon } from '@radix-ui/react-icons';
import useOverrides from '../../../theming/useOverrides';
import { ModalHeaderThemeType } from './theme';

const HeaderContainer = styled.div`
  height: ${({ styles }) => styles?.height};
  background: ${({ styles }) => styles?.background};
  min-height: ${({ styles }) => styles?.height};
  display: flex;
  align-items: center;
  border-bottom: ${({ styles }) => styles?.borderBottom};
`;

const ActionButton = styled.button`
  background: ${({ styles }) => styles?.background};
  color: ${({ styles }) => styles?.color};
  border: ${({ styles }) => styles?.border};
  width: ${({ styles }) => styles?.width};
  height: ${({ styles }) => styles?.height};
  display: ${({ styles }) => styles?.display};
  justify-content: ${({ styles }) => styles?.justifyContent};
  align-items: ${({ styles }) => styles?.alignItems};
  cursor: ${({ styles }) => styles?.cursor};
  border-radius: ${({ styles }) => styles?.borderRadius};
  &:hover {
    background: ${({ styles }) => styles?.hover.background};
  }
`;

const TitleCol = styled.div`
  text-align: ${({ styles }) => styles?.textAlign};
  display: ${({ styles }) => styles?.display};
  justify-content: ${({ styles }) => styles?.justifyContent};
  flex-grow: ${({ styles }) => styles?.flexGrow};
`;

const ActionCol = styled.div`
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type ModalHeaderActionButtonType = 'back' | 'close';

const getActionButton = (buttonType: ModalHeaderActionButtonType) => {
  switch (buttonType) {
    case 'close':
      return <Cross1Icon />;
    case 'back':
      return <ChevronLeftIcon />;
    default:
      return null;
  }
};

export type ModalHeaderProps = {
  title?: React.ReactNode;
  leftButton?: ModalHeaderActionButtonType;
  onLeftButtonClick?: () => void;
  rightButton?: ModalHeaderActionButtonType;
  onRightButtonClick?: () => void;
  overrides?: ModalHeaderThemeType;
};

const ModalHeader = ({
  title,
  leftButton,
  onLeftButtonClick,
  rightButton,
  onRightButtonClick,
  overrides,
}: ModalHeaderProps) => {
  const styles = useOverrides<ModalHeaderThemeType>('ModalHeader', overrides);

  return (
    <HeaderContainer styles={styles}>
      <ActionCol>
        {leftButton ? (
          <ActionButton
            onClick={onLeftButtonClick}
            styles={styles?.ActionButton}
          >
            {getActionButton(leftButton)}
          </ActionButton>
        ) : null}
      </ActionCol>
      <TitleCol styles={styles?.Title}>{title}</TitleCol>
      <ActionCol>
        {rightButton ? (
          <ActionButton
            onClick={onRightButtonClick}
            styles={styles?.ActionButton}
          >
            {getActionButton(rightButton)}
          </ActionButton>
        ) : null}
      </ActionCol>
    </HeaderContainer>
  );
};

export default ModalHeader;
