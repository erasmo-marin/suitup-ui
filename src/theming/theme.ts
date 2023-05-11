import baseStyled from 'styled-components';
import { colors, type ThemeColorsType } from './colors';
import { ButtonTheme, type ButtonThemeType } from '../ui/Button/theme';
import { InputTheme, type InputThemeType } from '../ui/Input/theme';
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
import {
  AppContainerTheme,
  type AppContainerThemeType,
} from '../layout/AppContainer/theme';

export type ThemeType = {
  colors: ThemeColorsType;
  breakpoints: ThemeBreakpointsType;
  Button: ButtonThemeType;
  Input: InputThemeType;
  Modal: ModalThemeType;
  ModalHeader: ModalHeaderThemeType;
  Container: ContainerThemeType;
  AppContainer: AppContainerThemeType;
};

export const defaultTheme: ThemeType = {
  colors,
  breakpoints,
  Button: ButtonTheme,
  Input: InputTheme,
  Modal: ModalTheme,
  ModalHeader: ModalHeaderTheme,
  Container: ContainerTheme,
  AppContainer: AppContainerTheme,
};

export const styled = baseStyled<ThemeType>;
