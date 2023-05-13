import React from 'react';
import type { Story, StoryDefault } from '@ladle/react';
import StoriesWrapper from '../../utils/StoriesWrapper';
import Notification from './index';

export default {
  decorators: [
    (Component) => (
      <StoriesWrapper>
        <Component />
      </StoriesWrapper>
    ),
  ],
} satisfies StoryDefault;

export const Default: Story = () => (
  <Notification>
    <Notification.Icon>
      <img
        alt="instagram"
        src="https://imagepng.org/wp-content/uploads/2017/08/instagram-icone-icon-1.png"
        width="36px"
        height="auto"
      />
    </Notification.Icon>
    <Notification.Content>
      <Notification.Content.Title>
        This is the notification title
      </Notification.Content.Title>
      <Notification.Content.Description>
        More than 1 line description
      </Notification.Content.Description>
    </Notification.Content>
    <Notification.Time>22:22</Notification.Time>
  </Notification>
);
