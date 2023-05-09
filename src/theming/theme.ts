import baseStyled from 'styled-components';
import { colors, type ThemeColorsType } from './colors';
import { ButtonTheme, type ButtonThemeType } from '../ui/Button/theme';
import { ModalTheme, type ModalThemeType } from '../ui/Modal/theme';
import {
  ModalHeaderTheme,
  type ModalHeaderThemeType,
} from '../ui/Modal/Header/theme';
import {
  ContainerTheme,
  type ContainerThemeType,
} from '../layout/Container/theme';
import { type ThemeBreakpointsType, breakpoints } from './breakpoints';

export type ThemeType = {
  colors: ThemeColorsType;
  breakpoints: ThemeBreakpointsType;
  Button: ButtonThemeType;
  Modal: ModalThemeType;
  ModalHeader: ModalHeaderThemeType;
  Container: ContainerThemeType;
};

export const defaultTheme: ThemeType = {
  colors,
  breakpoints,
  Button: ButtonTheme,
  Modal: ModalTheme,
  ModalHeader: ModalHeaderTheme,
  Container: ContainerTheme,
};

export const styled = baseStyled<ThemeType>;
