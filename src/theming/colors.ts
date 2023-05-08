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
  };
  label: {
    primary: CSS.Property.Color;
    secondary: CSS.Property.Color;
    tertiary: CSS.Property.Color;
    quaternary: CSS.Property.Color;
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
    primary: 'rgba(120, 120, 128)',
    secondary: 'rgba(120, 120, 128)',
    tertiary: 'rgba(118, 118, 128)',
    quaternary: 'rgba(116, 116, 128)',
  },
  label: {
    primary: 'rgba(43, 43, 43)',
    secondary: 'rgba(60, 60, 67)',
    tertiary: 'rgba(60, 60, 67)',
    quaternary: 'rgba(60, 60, 67)',
  },
};
