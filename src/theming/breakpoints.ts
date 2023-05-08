import type * as CSS from 'csstype';

export type ThemeBreakpointsType = {
  tablet: CSS.Property.Width;
  desktop: CSS.Property.Width;
  widescreen: CSS.Property.Width;
  fullhd: CSS.Property.Width;
};

export const breakpoints: ThemeBreakpointsType = {
  tablet: '769px',
  desktop: '1024px',
  widescreen: '1216px',
  fullhd: '1408px',
};
