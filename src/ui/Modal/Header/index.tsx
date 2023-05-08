import React from 'react';
import styled from 'styled-components';
import { Cross1Icon, ChevronLeftIcon } from '@radix-ui/react-icons';

const HeaderContainer = styled.div`
  height: 56px;
  min-height: 56px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dedede;
`;

const ActionButton = styled.button`
  background: transparent;
  border: none;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background: #dedede;
  }
`;

const TitleCol = styled.div`
  align-text: center;
  display: flex;
  justify-content: center;
  flex-grow: 1;
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
};

const ModalHeader = ({
  title,
  leftButton,
  onLeftButtonClick,
  rightButton,
  onRightButtonClick,
}: ModalHeaderProps) => (
  <HeaderContainer>
    <ActionCol>
      {leftButton ? (
        <ActionButton onClick={onLeftButtonClick}>
          {getActionButton(leftButton)}
        </ActionButton>
      ) : null}
    </ActionCol>
    <TitleCol>{title}</TitleCol>
    <ActionCol>
      {rightButton ? (
        <ActionButton onClick={onRightButtonClick}>
          {getActionButton(rightButton)}
        </ActionButton>
      ) : null}
    </ActionCol>
  </HeaderContainer>
);

export default ModalHeader;
