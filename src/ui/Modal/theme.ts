import type * as CSS from 'csstype';
import { colors } from '../../theming/colors';

export type ModalThemeType = {
  mobile?: {
    width?: CSS.Property.Width;
    maxWidth?: CSS.Property.MaxWidth;
    height?: CSS.Property.Height;
    maxHeight?: CSS.Property.MaxHeight;
    backgroundColor?: CSS.Property.BackgroundColor;
    borderRadius?: CSS.Property.BorderRadius;
    boxShadow?: CSS.Property.BoxShadow;
    margin?: CSS.Property.Margin;
    Vail?: {
      backgroundColor?: CSS.Property.BackgroundColor;
    };
  };
  desktop?: {
    width?: CSS.Property.Width;
    maxWidth?: CSS.Property.MaxWidth;
    height?: CSS.Property.Height;
    maxHeight?: CSS.Property.MaxHeight;
    backgroundColor?: CSS.Property.BackgroundColor;
    borderRadius?: CSS.Property.BorderRadius;
    boxShadow?: CSS.Property.BoxShadow;
    margin?: CSS.Property.Margin;
    Vail?: {
      backgroundColor?: CSS.Property.BackgroundColor;
    };
  };
};

export const ModalTheme: ModalThemeType = {
  mobile: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundColor: colors.background.elevatedPrimary,
    borderRadius: '36px 36px 0 0',
    boxShadow: 'none',
    margin: '8px 0 0 0',
    Vail: {
      backgroundColor: 'rgba(0,0,0,0.85)',
    },
  },
  desktop: {
    width: '90vw',
    height: '90vh',
    maxWidth: '750px',
    maxHeight: '750px',
    backgroundColor: colors.background.elevatedPrimary,
    borderRadius: '36px',
    boxShadow: `0 4px calc(4px * 2) rgba(0, 0, 0, 0.05),
                0 calc(4px * 2) calc(4px * 3) rgba(0, 0, 0, 0.05),
                0 calc(4px * 3) calc(4px * 4) rgba(0, 0, 0, 0.05),
                0 calc(4px * 4) calc(4px * 5) rgba(0, 0, 0, 0.05)`,
    margin: 'auto',
    Vail: {
      backgroundColor: 'rgba(0,0,0,0.85)',
    },
  },
};
