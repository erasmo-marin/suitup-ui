import type * as CSS from 'csstype';
import { colors } from '../../theming/colors';

type InputBaseThemeType = Partial<{
  background: CSS.Property.Background;
  color: CSS.Property.Color;
  fill: CSS.Property.Fill;
  transition: CSS.Property.Transition;
  border: CSS.Property.Border;
  borderRadius: CSS.Property.BorderRadius;
  boxSizing: CSS.Property.BoxSizing;
  height: CSS.Property.Height;
  padding: CSS.Property.Padding;
  margin: CSS.Property.Margin;
  width: CSS.Property.Width;
}>;

export type InputThemeType = InputBaseThemeType &
  Partial<{
    Focus: InputBaseThemeType;
    Disabled: InputBaseThemeType;
    Placeholder: Partial<{
      color: CSS.Property.Color;
    }>;
  }>;

export const InputTheme: InputThemeType = {
  background: 'transparent',
  color: colors.label.primaryRgb,
  fill: colors.label.primaryRgb,
  transition: 'all 0.43s cubic-bezier(0.25, 0.95, 0.44, 1)',
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: '12px',
  boxSizing: 'border-box',
  height: '36px',
  padding: '12px',
  margin: 0,
  width: 'auto',
  Disabled: {
    border: 'none',
  },
  Placeholder: {
    color: colors.label.secondaryRgb,
  },
};
