import React from 'react';
import type { Story, StoryDefault } from '@ladle/react';
import StoriesWrapper from '../../utils/StoriesWrapper';
import Button from './index';

export default {
  decorators: [
    (Component) => (
      <StoriesWrapper>
        <Component />
      </StoriesWrapper>
    ),
  ],
} satisfies StoryDefault;

export const PrimaryButton: Story = () => (
  <Button variant="primary">Hello!</Button>
);
export const SecondaryButton: Story = () => (
  <Button variant="secondary">Hello!</Button>
);
export const TertiaryButton: Story = () => (
  <Button variant="tertiary">Hello!</Button>
);
export const QuaternaryButton: Story = () => (
  <Button variant="quaternary">Hello!</Button>
);
export const WithOverrides: Story = () => (
  <Button
    variant="primary"
    overrides={{ primary: { backgroundColor: 'blue' } }}
  >
    Im blue!
  </Button>
);
