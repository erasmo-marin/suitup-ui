import React from 'react';
import FocusLock from 'react-focus-lock';

const AccessibilityFocusTrap = ({
  children,
  readyToFocus,
  returnFocus = true,
}) => (
  <FocusLock
    returnFocus={returnFocus}
    disabled={!readyToFocus}
    onDeactivation={(observedRef) => {
      setTimeout(() => observedRef.focus(), 0);
    }}
  >
    {children}
  </FocusLock>
);

export default AccessibilityFocusTrap;
