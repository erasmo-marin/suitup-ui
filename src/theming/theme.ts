import baseStyled from 'styled-components';
import { colors, type ThemeColorsType } from './colors';
import { ButtonTheme, type ButtonThemeType } from '../ui/Button/theme';
import { InputTheme, type InputThemeType } from '../ui/Input/theme';
import { ModalTheme, type ModalThemeType } from '../ui/Modal/theme';
import {
  NotificationTheme,
  type NotificationThemeType,
} from '../ui/Notification/theme';
import {
  ContainerTheme,
  type ContainerThemeType,
} from '../layout/Container/theme';
import { type ThemeBreakpointsType, breakpoints } from './breakpoints';
import {
  AppContainerTheme,
  type AppContainerThemeType,
} from '../layout/AppContainer/theme';
import {
  BottomSheetTheme,
  type BottomSheetThemeType,
} from '../ui/BottomSheet/theme';
import { AlertTheme, type AlertThemeType } from '../ui/Alert/theme';

export type ThemeType = {
  colors: ThemeColorsType;
  breakpoints: ThemeBreakpointsType;
  Button: ButtonThemeType;
  Input: InputThemeType;
  Modal: ModalThemeType;
  Notification: NotificationThemeType;
  BottomSheet: BottomSheetThemeType;
  Alert: AlertThemeType;
  Container: ContainerThemeType;
  AppContainer: AppContainerThemeType;
};

export const defaultTheme: ThemeType = {
  colors,
  breakpoints,
  Button: ButtonTheme,
  Input: InputTheme,
  Modal: ModalTheme,
  Notification: NotificationTheme,
  BottomSheet: BottomSheetTheme,
  Alert: AlertTheme,
  Container: ContainerTheme,
  AppContainer: AppContainerTheme,
};

export const styled = baseStyled<ThemeType>;
