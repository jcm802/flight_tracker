import { signIn, signOut, useSession } from 'next-auth/react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SurfingIcon from '@mui/icons-material/Surfing';
// import ThemeToggleButton from '../ThemeToggleButton';
import { useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';

export type HeaderProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void; }>,
}

function Header(props: HeaderProps) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const theme = useTheme();
  const { data: session } = useSession();
  const username = session?.user?.name as string;

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const tabletCheck = useMediaQuery('(min-width: 768px)');

  return (
    <AppBar position="fixed" sx={{ marginBottom: "40px"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SurfingIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JCM Projects
          </Typography>
          <SurfingIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JCM Projects
          </Typography>
          {/* <ThemeToggleButton ColorModeContext={props.ColorModeContext} /> */}
          {tabletCheck ? (
                        <Box sx={{ paddingRight: 3, marginLeft: 'auto' }}>
                        <Typography>Signed in as {session?.user?.email}</Typography>
                      </Box>
          ) : null}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Profile Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={username} src={session?.user?.image as string} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Link
                  href={"/dashboard/profile"}
                  style={{
                    color: theme.palette.text.primary,
                    textDecoration: "none",
                  }}
                >
                  <Typography textAlign="center">Profile</Typography>
                </Link>
              </MenuItem>
                <MenuItem onClick={() => session ? signOut() : signIn()}>
                  <Typography textAlign="center">{session ? 'Logout' : 'Login' }</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

