import type * as CSS from 'csstype';
import { colors } from '../../theming/colors';

export type AppContainerThemeType = Partial<{
  background: CSS.Property.BackgroundColor;
  borderRadius: CSS.Property.BackgroundColor;
}>;

export const AppContainerTheme: AppContainerThemeType = {
  borderRadius: '36px',
  background: colors.background.app,
};
