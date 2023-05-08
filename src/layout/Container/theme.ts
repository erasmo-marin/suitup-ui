import type * as CSS from 'csstype';
import { colors } from '../../theming/colors';

export type ContainerThemeType = {
  backgroundColor?: CSS.Property.BackgroundColor;
};

export const ContainerTheme: ContainerThemeType = {
  backgroundColor: colors.background.primary,
};
