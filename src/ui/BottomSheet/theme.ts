import type * as CSS from 'csstype';
import { colors } from '../../theming/colors';

export type BottomSheetThemeType = Partial<{
  mobile: Partial<{
    width: CSS.Property.Width;
    maxWidth: CSS.Property.MaxWidth;
    height: CSS.Property.Height;
    maxHeight: CSS.Property.MaxHeight;
    backgroundColor: CSS.Property.BackgroundColor;
    borderRadius: CSS.Property.BorderRadius;
    boxShadow: CSS.Property.BoxShadow;
    margin: CSS.Property.Margin;
    Vail: Partial<{
      backgroundColor: CSS.Property.BackgroundColor;
    }>;
  }>;
  desktop: Partial<{
    width: CSS.Property.Width;
    maxWidth: CSS.Property.MaxWidth;
    height: CSS.Property.Height;
    maxHeight: CSS.Property.MaxHeight;
    backgroundColor: CSS.Property.BackgroundColor;
    borderRadius: CSS.Property.BorderRadius;
    boxShadow: CSS.Property.BoxShadow;
    margin: CSS.Property.Margin;
    Vail: Partial<{
      backgroundColor: CSS.Property.BackgroundColor;
    }>;
  }>;
}>;

export const BottomSheetTheme: BottomSheetThemeType = {
  mobile: {
    width: '100%',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundColor: colors.background.elevatedPrimary,
    borderRadius: '36px 36px 0 0',
    boxShadow: 'none',
    margin: '0 auto',
    Vail: {
      backgroundColor: 'rgba(0,0,0,0.85)',
    },
  },
  desktop: {
    width: '500px',
    height: 'auto',
    maxWidth: '500px',
    maxHeight: '50vh',
    backgroundColor: colors.background.elevatedPrimary,
    borderRadius: '36px 36px 0 0',
    boxShadow: `0 4px calc(4px * 2) rgba(0, 0, 0, 0.05),
              0 calc(4px * 2) calc(4px * 3) rgba(0, 0, 0, 0.05),
              0 calc(4px * 3) calc(4px * 4) rgba(0, 0, 0, 0.05),
              0 calc(4px * 4) calc(4px * 5) rgba(0, 0, 0, 0.05)`,
    margin: '0 auto',
    Vail: {
      backgroundColor: 'rgba(0,0,0,0.85)',
    },
  },
};
