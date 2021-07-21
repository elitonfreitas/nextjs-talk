import {
  CSSObject,
  shouldForwardProp,
  styled,
  background,
  borders,
  color,
  layout,
  flexbox,
  grid,
  position,
  shadow,
  space,
} from 'infra';

const defaultStyle: CSSObject = {
  display: 'block',
  boxSizing: 'border-box',
};

export const StyledBox = styled('div', {
  shouldForwardProp,
})(defaultStyle, background, borders, color, layout, flexbox, grid, position, shadow, space);
