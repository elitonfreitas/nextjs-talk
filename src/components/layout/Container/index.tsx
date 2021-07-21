import { FC } from 'react';
import { HTMLDivElementProps } from 'interfaces';
import { StyledContainer } from './styles';

type ContainerProps = HTMLDivElementProps;

export const Container: FC<ContainerProps> = (props: ContainerProps) => {
  return <StyledContainer className="container" width={{ base: '100%', lg: '1024px', xl: '1200px' }} {...props} />;
};

export default Container;
