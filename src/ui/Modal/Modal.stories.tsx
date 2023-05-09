import React, { useState } from 'react';
import type { Story, StoryDefault } from '@ladle/react';
import StoriesWrapper from '../../utils/StoriesWrapper';
import LoremIpsum from '../../utils/LoremIpsum';
import Button from '../Button';
import Container from '../../layout/Container';
import Modal from './index';

export default {
  decorators: [
    (Component) => (
      <StoriesWrapper>
        <Component />
      </StoriesWrapper>
    ),
  ],
} satisfies StoryDefault;

export const MinimalModal: Story = () => {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <>
      <Button variant="primary" onClick={openModal}>
        Hello!
      </Button>
      <Modal
        uniqId="minimal-modal"
        open={open}
        onBlur={closeModal}
        onClose={closeModal}
      >
        <Modal.Content>
          <Container>
            <LoremIpsum paragraphs={10} />
          </Container>
        </Modal.Content>
      </Modal>
    </>
  );
};

const sizes = {
  big: { width: '800px', height: '800px' },
  small: {
    width: '400px',
    height: '200px',
  },
};

const ChildModal = ({ open, onClose, uniqId, overrides, children }) => (
  <Modal uniqId={uniqId} open={open} overrides={overrides}>
    <Modal.Header
      title="Child Modal"
      leftButton="back"
      onLeftButtonClick={onClose}
    />
    <Modal.Content>{children}</Modal.Content>
  </Modal>
);

export const ResizableModal: Story = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('big');

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  const toggleSize = () => {
    if (size === 'big') setSize('small');
    else setSize('big');
  };

  return (
    <>
      <Button variant="primary" onClick={openModal}>
        Hello!
      </Button>
      <Modal
        uniqId="resizable-modal"
        open={open}
        onBlur={closeModal}
        onClose={closeModal}
        animate={{ width: sizes[size].width, height: sizes[size].height }}
      >
        <Modal.Header
          title="Modal title"
          leftButton="close"
          onLeftButtonClick={closeModal}
        />
        <Modal.Content>
          <Container>
            <Button variant="primary" onClick={toggleSize}>
              Resize me
            </Button>
            <LoremIpsum paragraphs={10} />
          </Container>
        </Modal.Content>
      </Modal>
    </>
  );
};

export const ModalStack: Story = () => {
  const [open, setOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);
  const [subChildOpen, setSubChildOpen] = useState(false);

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <>
      <Button variant="primary" onClick={openModal}>
        Hello!
      </Button>
      <Modal
        open={open}
        onBlur={closeModal}
        onClose={closeModal}
        uniqId="parent"
      >
        <Modal.Header
          title="Modal title"
          leftButton="close"
          onLeftButtonClick={closeModal}
        />
        <Modal.Content>
          <Container>
            <Button variant="primary" onClick={() => setChildOpen(true)}>
              Open child modal
            </Button>
            <LoremIpsum paragraphs={10} />
          </Container>
        </Modal.Content>
      </Modal>
      <ChildModal
        open={childOpen}
        onClose={() => setChildOpen(false)}
        uniqId="child-modal"
        overrides={{ desktop: { width: '500px', height: '300px' } }}
      >
        <Container>
          <p>This is a child modal</p>
          <Button variant="primary" onClick={() => setSubChildOpen(true)}>
            Open child modal
          </Button>
        </Container>

        <ChildModal
          open={subChildOpen}
          onClose={() => setSubChildOpen(false)}
          uniqId="sub-child-modal"
          overrides={{ desktop: { width: '300px', height: '200px' } }}
        >
          <Container>
            <p>This is a sub child modal</p>
          </Container>
        </ChildModal>
      </ChildModal>
    </>
  );
};
