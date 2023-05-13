import { useMemo } from 'react';
import { useTheme } from 'styled-components';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import { ThemeType } from './theme';
import { useOverridesContext } from './OverridesProvider';

type UseOverridesProps<T> = {
  key: keyof ThemeType;
  overrides?: T;
  fromContext?: boolean;
};

const useOverrides = <T>({
  key,
  overrides: overridesFromArgs,
  fromContext = false,
}: UseOverridesProps<T>): T => {
  const theme = useTheme();
  const baseStyles = get(theme, key) as T;
  const { overrides: overridesFromContext } = useOverridesContext();
  const overrides = fromContext ? overridesFromContext : overridesFromArgs;

  const merged = useMemo(
    () => (overrides ? merge(cloneDeep(baseStyles), overrides) : baseStyles),
    [overrides, baseStyles],
  );
  return merged as T;
};

export default useOverrides;
