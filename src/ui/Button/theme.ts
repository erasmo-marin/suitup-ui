import type * as CSS from 'csstype';
import { colors } from '../../theming/colors';

export type VariantsModifiersType = Partial<{
  backgroundColor: CSS.Property.BackgroundColor;
  color: CSS.Property.Color;
  border: CSS.Property.Border;
  borderRadius: CSS.Property.BorderRadius;
  padding: CSS.Property.Padding;
}>;

export type ButtonThemeType = Partial<{
  primary: VariantsModifiersType;
  secondary: VariantsModifiersType;
  tertiary: VariantsModifiersType;
  quaternary: VariantsModifiersType;
}>;

const defaultValues = {
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  padding: '12px 24px',
};

export const ButtonTheme: ButtonThemeType = {
  primary: {
    backgroundColor: colors.global.primary,
    ...defaultValues,
  },
  secondary: {
    backgroundColor: colors.global.secondary,
    ...defaultValues,
  },
  tertiary: {
    backgroundColor: colors.global.tertiary,
    ...defaultValues,
  },
  quaternary: {
    backgroundColor: colors.global.quaternary,
    ...defaultValues,
  },
};
