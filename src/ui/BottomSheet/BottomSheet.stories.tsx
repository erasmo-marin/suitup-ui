import React, { useState } from 'react';
import type { Story, StoryDefault } from '@ladle/react';
import StoriesWrapper from '../../utils/StoriesWrapper';
import Button from '../Button';
import Container from '../../layout/Container';
import BottomSheet from './index';
import Modal from '../Modal';

export default {
  decorators: [
    (Component) => (
      <StoriesWrapper>
        <Component />
      </StoriesWrapper>
    ),
  ],
} satisfies StoryDefault;

export const MinimalBottomSheet: Story = () => {
  const [open, setOpen] = useState(false);

  const closeBottomSheet = () => setOpen(false);
  const openBottomSheet = () => setOpen(true);

  return (
    <>
      <Button variant="primary" onClick={openBottomSheet}>
        Open BottomSheet
      </Button>
      <BottomSheet
        open={open}
        onBlur={closeBottomSheet}
        onClose={closeBottomSheet}
      >
        <BottomSheet.Title>This is the title</BottomSheet.Title>
        <BottomSheet.Content>
          <Container>
            <p>This is a bottom sheet</p>
            <Button
              variant="primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Save
            </Button>
          </Container>
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};

export const BottomSheetAndModal: Story = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);

  const closeAll = () => {
    setOpen(false);
    setModalOpen(false);
  };
  const openBottomSheet = () => setOpen(true);

  return (
    <>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Open Modal
      </Button>
      <Modal uniqId="bottom-sheet-test" open={modalOpen}>
        <Modal.Content>
          <Container>
            <Button variant="primary" onClick={openBottomSheet}>
              Open BottomSheet
            </Button>
          </Container>
        </Modal.Content>
      </Modal>
      <BottomSheet open={open} onBlur={closeAll} onClose={closeAll}>
        <BottomSheet.Title>This is the title</BottomSheet.Title>
        <BottomSheet.Content>
          <Container>
            <p>This is a bottom sheet</p>
            <Button
              variant="primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={closeAll}
            >
              Save
            </Button>
          </Container>
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};
