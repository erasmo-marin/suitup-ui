import { useMemo } from 'react';
import { useTheme } from 'styled-components';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import { ThemeType } from './theme';

const useOverrides = <T>(key: keyof ThemeType, overrides?: T): T => {
  const theme = useTheme();
  const baseStyles = get(theme, key) as T;
  const merged = useMemo(
    () => (overrides ? merge(cloneDeep(baseStyles), overrides) : baseStyles),
    [overrides, baseStyles],
  );
  return merged as T;
};

export default useOverrides;
