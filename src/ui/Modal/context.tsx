import React, { useState, useCallback, useContext, createContext } from 'react';
import noop from 'lodash/noop';
import without from 'lodash/without';

const useModalStack = () => {
  const [modalStack, setModalStack] = useState<Array<string>>([]);

  const onOpen = useCallback((uniqId: string) => {
    setModalStack((stack) => {
      if (stack.indexOf(uniqId) === -1) return [...stack, uniqId];
      return stack;
    });
  }, []);

  const onClose = useCallback((uniqId: string) => {
    setModalStack((stack) => without(stack, uniqId));
  }, []);

  const getModalStackPosition = useCallback(
    (uniqId: string) => modalStack.indexOf(uniqId),
    [modalStack],
  );

  return {
    onOpen,
    onClose,
    openModals: modalStack.length,
    getModalStackPosition,
  };
};

const ModalContext = createContext({
  onOpen: noop,
  onClose: noop,
  openModals: 0,
  getModalStackPosition: noop,
});

const ModalProvider = ({ children }) => {
  const { onOpen, onClose, openModals, getModalStackPosition } =
    useModalStack();

  return (
    <ModalContext.Provider
      value={{ onOpen, onClose, openModals, getModalStackPosition }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (uniqId: string) => {
  const { onOpen, onClose, getModalStackPosition, openModals } =
    useContext(ModalContext);

  const onModalOpen = useCallback(() => {
    onOpen(uniqId);
  }, [uniqId, onOpen]);

  const onModalClose = useCallback(() => {
    onClose(uniqId);
  }, [uniqId, onClose]);

  return {
    onModalOpen,
    onModalClose,
    openModals,
    modalPosition: getModalStackPosition(uniqId),
  };
};
export default ModalProvider;
