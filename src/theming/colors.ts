import type * as CSS from 'csstype';

export type ThemeColorsType = {
  global: {
    primary: CSS.Property.Color;
    secondary: CSS.Property.Color;
    tertiary: CSS.Property.Color;
    quaternary: CSS.Property.Color;
  };
  background: {
    app: CSS.Property.Color;
    primary: CSS.Property.Color;
    elevatedPrimary: CSS.Property.Color;
    secondary: CSS.Property.Color;
    elevatedSecondary: CSS.Property.Color;
    tertiary: CSS.Property.Color;
    elevatedTertiary: CSS.Property.Color;
    quaternary: CSS.Property.Color;
  };
  fill: {
    primary: CSS.Property.Color;
    secondary: CSS.Property.Color;
    tertiary: CSS.Property.Color;
    quaternary: CSS.Property.Color;
    primaryRgb: CSS.Property.Color;
    secondaryRgb: CSS.Property.Color;
    tertiaryRgb: CSS.Property.Color;
    quaternaryRgb: CSS.Property.Color;
  };
  label: {
    primary: CSS.Property.Color;
    secondary: CSS.Property.Color;
    tertiary: CSS.Property.Color;
    quaternary: CSS.Property.Color;
    primaryRgb: CSS.Property.Color;
    secondaryRgb: CSS.Property.Color;
    tertiaryRgb: CSS.Property.Color;
    quaternaryRgb: CSS.Property.Color;
  };
};

export const colors: ThemeColorsType = {
  global: {
    primary: '#2E1760',
    secondary: '#86da9b',
    tertiary: '#171738',
    quaternary: '#7180B9',
  },
  background: {
    app: 'rgb(248, 248, 250)',
    primary: 'rgb(255, 255, 255)',
    elevatedPrimary: 'rgb(255, 255, 255)',
    secondary: 'rgb(239, 239, 244)',
    elevatedSecondary: 'rgb(239, 239, 244)',
    tertiary: 'rgb(255, 255, 255)',
    elevatedTertiary: 'rgb(255, 255, 255)',
    quaternary: 'rgb(255, 255, 255)',
  },
  fill: {
    primary: '120, 120, 128',
    secondary: '120, 120, 128',
    tertiary: '118, 118, 128',
    quaternary: '116, 116, 128',
    primaryRgb: 'rgb(120, 120, 128)',
    secondaryRgb: 'rgb(120, 120, 128)',
    tertiaryRgb: 'rgb(118, 118, 128)',
    quaternaryRgb: 'rgb(116, 116, 128)',
  },
  label: {
    primary: '43, 43, 43',
    secondary: '60, 60, 67',
    tertiary: '60, 60, 67',
    quaternary: '60, 60, 67',
    primaryRgb: 'rgba(43, 43, 43)',
    secondaryRgb: 'rgba(60, 60, 67)',
    tertiaryRgb: 'rgba(60, 60, 67)',
    quaternaryRgb: 'rgba(60, 60, 67)',
  },
};
