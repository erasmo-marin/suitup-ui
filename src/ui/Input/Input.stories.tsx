import React from 'react';
import type { Story, StoryDefault } from '@ladle/react';
import StoriesWrapper from '../../utils/StoriesWrapper';
import Input from './index';

export default {
  decorators: [
    (Component) => (
      <StoriesWrapper>
        <Component />
      </StoriesWrapper>
    ),
  ],
} satisfies StoryDefault;

export const Default: Story = () => <Input placeholder="Write something..." />;

export const WithOverrides: Story = () => (
  <Input
    placeholder="Write something..."
    overrides={{
      background: 'blue',
      color: 'white',
      Placeholder: { color: 'white' },
    }}
  />
);
