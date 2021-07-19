import { FC } from 'react';
import { Container } from 'components/layout/Container';
import { Box } from 'components/layout/Box';
import cms from '../../../../__mocks__/home2.cms.json';
import { Link } from 'components/navigation/Link';
import { Image } from 'components/custom/Image';

export const Header: FC = () => {
  const {
    content: { header, menu, loggedMenu, notLoggedMenu },
  } = cms;

  if (!header) {
    return null;
  }

  const { logo, labels: headerLabels } = header;
  let base = 1;

  if (menu && menu.length) {
    base += 1;
  }
  if ((loggedMenu && loggedMenu.length) || (notLoggedMenu && notLoggedMenu.length)) {
    base += 1;
  }

  return (
    <Box bg="brand.primary.regular" zIndex={0}>
      <Container display="flex" alignItems="center" color="brand.secondary.regular" padding="2">
        <Box justifyContent={{ base: 'center', md: 'start' }} width={[1 / 3, 1 / 2, 0]}></Box>
        <Box justifyContent={{ base: 'center', md: 'start' }} width={[1 / 3, 1 / 2]}>
          <Link
            href={logo.url}
            display={{ base: base === 1 ? 'flex' : 'flex', md: 'inline-flex' }}
            justifyContent="center"
            height={{ base: '27px', md: '44px' }}
            data-testid="header-logo"
          >
            <Image image={logo} defaultWidth={156} defaultHeight={40} priority />
          </Link>
        </Box>

        <Box width={[1 / 3, 1 / 2]} display="flex" justifyContent="flex-end" alignItems="center">
          <Link
            href={headerLabels.supportLink}
            display={{ base: 'none', md: 'inline-block' }}
            marginRight="4"
            data-testid="header-call-center"
          >
            <Box ml="1.5">{headerLabels.support}</Box>
          </Link>

          <Link
            href={headerLabels.enterUrl}
            variant="outline"
            display={{ base: 'none', md: 'inline-block' }}
            data-testid="usermenu-enter-link"
          >
            {headerLabels.enterText}
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
