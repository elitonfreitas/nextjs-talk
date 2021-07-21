import { DOMAttributes } from 'react';
import {
  BorderProps,
  ColorProps,
  GridProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  VariantArgs,
} from 'infra';

export interface HTMLElementProps
  extends BorderProps,
    ColorProps,
    GridProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {
  as?: keyof JSX.IntrinsicElements;
}

export interface HTMLDivElementProps extends DOMAttributes<'div'>, HTMLElementProps {}
export interface HTMLAnchorElementProps extends DOMAttributes<'a'>, HTMLElementProps, VariantArgs {}
