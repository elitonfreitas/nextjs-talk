import { FC } from 'react';
import { HTMLDivElementProps } from 'interfaces';
import { StyledBox } from './styles';

type BoxProps = HTMLDivElementProps;

export const Box: FC<BoxProps> = (props: BoxProps) => <StyledBox {...props} />;

export default Box;
