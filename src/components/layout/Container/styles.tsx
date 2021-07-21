import { styled, CSSObject, shouldForwardProp, space, color, layout } from 'infra';

const defaultStyle: CSSObject = {
  margin: '0 auto',
};

export const StyledContainer = styled('div', { shouldForwardProp })(defaultStyle, space, color, layout);
