import { FC } from 'react';
import NextLink from 'next/link';
import { HTMLAnchorElementProps } from 'interfaces';
import { StyledLink } from './styles';

type Variants = 'regular' | 'outline';

interface LinkProps extends HTMLAnchorElementProps {
  href: string;
  variant?: Variants;
}

export const Link: FC<LinkProps> = ({ children, href, ...props }: LinkProps) => (
  <NextLink href={href}>
    <StyledLink {...props}>{children}</StyledLink>
  </NextLink>
);

Link.defaultProps = {
  variant: 'regular',
};

export default Link;
