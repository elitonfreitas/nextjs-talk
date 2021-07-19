import { styled, CSSObject, shouldForwardProp, space, color, layout, flexbox } from 'infra';

const defaultStyle: CSSObject = {
  display: 'block',
  boxSizing: 'border-box',
};

export const StyledBox = styled('div', {
  shouldForwardProp,
})(defaultStyle, layout, flexbox, space, color);
