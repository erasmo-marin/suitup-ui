import React, { createContext, useContext } from 'react';

type Overrides = Record<string, any>;

const OverridesContext = createContext<{ overrides?: Overrides }>({
  overrides: {},
});

type OverridesProviderProps<T extends Overrides> = {
  children?: React.ReactNode;
  overrides?: T;
};

const OverridesProvider = <T extends Overrides>({
  children,
  overrides,
}: OverridesProviderProps<T>) => (
  <OverridesContext.Provider value={{ overrides }}>
    {children}
  </OverridesContext.Provider>
);

export const useOverridesContext = () => useContext(OverridesContext);

export default OverridesProvider;
