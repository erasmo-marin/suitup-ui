import React, { useState } from 'react';
import type { Story, StoryDefault } from '@ladle/react';
import StoriesWrapper from '../../utils/StoriesWrapper';
import Button from '../Button';
import Container from '../../layout/Container';
import Alert from './index';
import Modal from '../Modal';
import LoremIpsum from '../../utils/LoremIpsum';

export default {
  decorators: [
    (Component) => (
      <StoriesWrapper>
        <Component />
      </StoriesWrapper>
    ),
  ],
} satisfies StoryDefault;

export const MinimalAlert: Story = () => {
  const [open, setOpen] = useState(false);

  const closeAlert = () => setOpen(false);
  const openAlert = () => setOpen(true);

  return (
    <>
      <Button variant="primary" onClick={openAlert}>
        Open Alert
      </Button>
      <Alert open={open} onBlur={closeAlert} onClose={closeAlert}>
        <Alert.Content>
          <Container>
            <p>This is an alert</p>
            <Button
              variant="primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Save
            </Button>
          </Container>
        </Alert.Content>
      </Alert>
    </>
  );
};

export const AlertAndModal: Story = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);

  const closeAll = () => {
    setOpen(false);
    setModalOpen(false);
  };
  const openAlert = () => setOpen(true);

  return (
    <>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Open Modal
      </Button>
      <Modal uniqId="bottom-sheet-test" open={modalOpen}>
        <Modal.Content>
          <Container>
            <Button variant="primary" onClick={openAlert}>
              Open Alert
            </Button>
            <LoremIpsum paragraphs={10} />
          </Container>
        </Modal.Content>
      </Modal>
      <Alert open={open} onBlur={closeAll} onClose={closeAll}>
        <Alert.Content>
          <Container>
            <p>This is an alert</p>
            <Button
              variant="primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={closeAll}
            >
              Save
            </Button>
          </Container>
        </Alert.Content>
      </Alert>
    </>
  );
};
