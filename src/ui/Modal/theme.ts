import type * as CSS from 'csstype';
import { colors } from '../../theming/colors';

export type ModalHeaderThemeType = {
  height?: CSS.Property.Height;
  minHeight?: CSS.Property.MinHeight;
  borderBottom: CSS.Property.BorderBottom;
  background?: CSS.Property.Background;
  ActionButton?: {
    background?: CSS.Property.Background;
    border?: CSS.Property.Border;
    color?: CSS.Property.Color;
    width?: CSS.Property.Width;
    height?: CSS.Property.Height;
    display?: CSS.Property.Display;
    justifyContent?: CSS.Property.JustifyContent;
    alignItems?: CSS.Property.AlignItems;
    cursor?: CSS.Property.Cursor;
    borderRadius?: CSS.Property.BorderRadius;
    hover?: {
      background?: CSS.Property.Background;
    };
  };
  Title?: {
    textAlign?: CSS.Property.TextAlign;
    display?: CSS.Property.Display;
    justifyContent?: CSS.Property.JustifyContent;
    flexGrow?: CSS.Property.FlexGrow;
  };
};

export const ModalHeaderTheme: ModalHeaderThemeType = {
  height: '56px',
  minHeight: '56px',
  background: 'transparent',
  borderBottom: `1px solid rgba(${colors.fill.secondary}, 0.2)`,
  ActionButton: {
    background: 'transparent',
    border: 'none',
    color: colors.label.primary,
    width: '36px',
    height: '36px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '50%',
    hover: {
      background: '#dedede',
    },
  },
  Title: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
};

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
  Header: ModalHeaderThemeType;
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
  Header: ModalHeaderTheme,
};
