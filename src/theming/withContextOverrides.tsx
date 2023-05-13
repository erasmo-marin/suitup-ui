import React from 'react';
import useOverrides from './useOverrides';

const withContextOverrides = (key, Component) =>
  function ContextOverridesWrapper(props) {
    const styles = useOverrides({ key, fromContext: true });
    return <Component styles={styles} {...props} />;
  };

export default withContextOverrides;
