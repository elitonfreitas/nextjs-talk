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

export interface HTMLDivElementProps
  extends DOMAttributes<'div'>,
    BorderProps,
    ColorProps,
    GridProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface HTMLAnchorElementProps
  extends DOMAttributes<'a'>,
    BorderProps,
    ColorProps,
    GridProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps,
    VariantArgs {}
