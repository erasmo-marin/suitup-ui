import type * as CSS from 'csstype';

export type NotificationThemeType = {
  display?: CSS.Property.Display;
  alignItems?: CSS.Property.AlignItems;
  width?: CSS.Property.Width;
  padding?: CSS.Property.Padding;
  borderRadius?: CSS.Property.BorderRadius;
  height?: CSS.Property.Height;
  background?: CSS.Property.Background;
  backdropFilter?: CSS.Property.BackdropFilter;
  boxShadow?: CSS.Property.BoxShadow;
  Title?: {
    overflow?: CSS.Property.Overflow;
    whiteSpace?: CSS.Property.WhiteSpace;
    textOverflow?: CSS.Property.TextOverflow;
    fontSize?: CSS.Property.FontSize;
    fontWeight?: CSS.Property.FontWeight;
    color?: CSS.Property.Color;
    margin?: CSS.Property.Margin;
  };
  Description?: {
    fontSize: CSS.Property.FontSize;
    fontWeight: CSS.Property.FontWeight;
    color: CSS.Property.Color;
    margin: CSS.Property.Margin;
  };
  CloseButton?: {
    position?: CSS.Property.Position;
    top?: CSS.Property.Top;
    left?: CSS.Property.Left;
    width?: CSS.Property.Width;
    height?: CSS.Property.Height;
    borderRadius?: CSS.Property.BorderRadius;
    border?: CSS.Property.Border;
    display?: CSS.Property.Display;
    alignItems?: CSS.Property.AlignItems;
    justifyContent?: CSS.Property.JustifyContent;
    boxShadow?: CSS.Property.BoxShadow;
    cursor?: CSS.Property.Cursor;
  };
  Icon?: {
    marginRight?: CSS.Property.MarginRight;
  };
  Time?: {
    marginTop?: CSS.Property.MarginTop;
    alignSelf?: CSS.Property.AlignSelf;
    marginLeft?: CSS.Property.MarginLeft;
    fontSize?: CSS.Property.FontSize;
    lineHeight?: CSS.Property.LineHeight;
    fontWeight?: CSS.Property.FontWeight;
    color?: CSS.Property.Color;
  };
  Content?: {
    overflow?: CSS.Property.Overflow;
    flexGrow?: CSS.Property.FlexGrow;
    display?: CSS.Property.Display;
    flexFlow?: CSS.Property.FlexFlow;
    justifyContent?: CSS.Property.JustifyContent;
  };
};
export const NotificationTheme: NotificationThemeType = {
  display: 'flex',
  alignItems: 'center',
  width: '346px',
  padding: '16px',
  borderRadius: '15px',
  height: 'fit-content',
  background: 'rgba(255, 255, 255, 0.5)',
  backdropFilter: 'blur(10px)',
  boxShadow: `rgba(0, 0, 0, 0.05) 0px 10px 20px,
    rgba(0, 0, 0, 0.1) 0px 6px 6px, inset 0 0 0 1px rgba(0, 0, 0, 0.15)`,
  Title: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '14px',
    fontWeight: 600,
    color: '#000',
    margin: 0,
  },
  Description: {
    fontSize: '14px',
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.8)',
    margin: 0,
  },
  CloseButton: {
    position: 'absolute',
    top: '-6px',
    left: '-6px',
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    border: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `rgba(0, 0, 0, 0.05) 0px 10px 20px,
      rgba(0, 0, 0, 0.1) 0px 6px 6px, inset 0 0 0 1px rgba(0, 0, 0, 0.15)`,
    cursor: 'pointer',
    display: 'none',
  },
  Icon: {
    marginRight: '16px',
  },
  Time: {
    marginTop: '2px',
    alignSelf: 'flex-start',
    marginLeft: '16px',
    fontSize: '12px',
    lineHeight: '17.5px',
    fontWeight: 300,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  Content: {
    overflow: 'hidden',
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
  },
};
