import type * as CSS from 'csstype';

export type ContainerThemeType = Partial<{
  backgroundColor: CSS.Property.BackgroundColor;
}>;

export const ContainerTheme: ContainerThemeType = {
  backgroundColor: 'transparent',
};
