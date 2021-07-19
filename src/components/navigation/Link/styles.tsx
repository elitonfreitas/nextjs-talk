import { styled, CSSObject, shouldForwardProp, space, border, color, layout, flexbox, variant } from 'infra';

const defaultStyle: CSSObject = { cursor: 'pointer', ':hover': { opacity: 0.85 } };
const defaultVariants = {
  variants: {
    regular: {
      boxShadow: 'default',
    },
    outline: {
      px: 4,
      py: 2,
      boxShadow: 'default',
      borderRadius: 8,
      border: '1px solid',
    },
  },
};

export const StyledLink = styled('a', {
  shouldForwardProp,
})(variant(defaultVariants), defaultStyle, layout, flexbox, space, color, border);
