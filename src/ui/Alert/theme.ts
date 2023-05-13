import type * as CSS from 'csstype';

export type AlertThemeType = {
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

export const AlertTheme: AlertThemeType = {
  mobile: {
    width: '350px',
    height: 'fit-content',
    maxWidth: '80vw',
    maxHeight: 'fit-content',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '15px',
    boxShadow: 'none',
    margin: 'auto',
    Vail: {
      backgroundColor: 'rgba(0,0,0,0.85)',
    },
  },
  desktop: {
    width: '350px',
    height: 'fit-content',
    maxWidth: '600px',
    maxHeight: 'fit-content',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '15px',
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
