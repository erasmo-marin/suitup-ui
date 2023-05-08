import React from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, target = document.body }) =>
  createPortal(<>{children}</>, target);

export default Portal;
