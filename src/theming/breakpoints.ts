import type * as CSS from 'csstype';

export type ThemeBreakpointsType = {
  tablet: CSS.Property.Width;
  desktop: CSS.Property.Width;
  widescreen: CSS.Property.Width;
  fullhd: CSS.Property.Width;
};

export const breakpointsValues = {
  mobile: 0,
  tablet: 769,
  desktop: 1024,
  widescreen: 1216,
  fullhd: 1408,
};

export const breakpoints: ThemeBreakpointsType = {
  tablet: `${breakpointsValues.tablet}px`,
  desktop: `${breakpointsValues.desktop}px`,
  widescreen: `${breakpointsValues.widescreen}px`,
  fullhd: `${breakpointsValues.fullhd}px`,
};
