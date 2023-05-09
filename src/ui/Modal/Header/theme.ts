import type * as CSS from 'csstype';

export type ModalHeaderThemeType = {
  height?: CSS.Property.Height;
  minHeight?: CSS.Property.MinHeight;
  borderBottom: CSS.Property.BorderBottom;
  background?: CSS.Property.Background;
  ActionButton: {
    background: CSS.Property.Background;
    border: CSS.Property.Border;
    width: CSS.Property.Width;
    height: CSS.Property.Height;
    display: CSS.Property.Display;
    justifyContent: CSS.Property.JustifyContent;
    alignItems: CSS.Property.AlignItems;
    cursor: CSS.Property.Cursor;
    borderRadius: CSS.Property.BorderRadius;
    hover: {
      background: CSS.Property.Background;
    };
  };
  Title: {
    textAlign: CSS.Property.TextAlign;
    display: CSS.Property.Display;
    justifyContent: CSS.Property.JustifyContent;
    flexGrow: CSS.Property.FlexGrow;
  };
};

export const ModalHeaderTheme: ModalHeaderThemeType = {
  height: '56px',
  minHeight: '56px',
  background: 'transparent',
  borderBottom: `1px solid rgba(0,0,0,0.2)`,
  ActionButton: {
    background: 'transparent',
    border: 'none',
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
