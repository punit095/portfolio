import React, {useContext} from 'react';
import {MyContext} from '../context/MyContext';

const pages = ['About', 'Experience', 'Projects', 'Contact'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = (props) => {
    const {Container, Box, AppBar, Toolbar, Typography, Menu, Button, MenuItem, Fade, IconButton, MenuIcon, ListItemIcon, Settings} = useContext(MyContext);
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };
    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <AppBar position="fixed" sx={{backgroundColor: '#171923', mt: {xs: '-4px', sm: 0}}}>
            <Container maxWidth="xl">
              <Fade in timeout={900}>
                <Toolbar disableGutters>
                    {/* mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mt: 1,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {'<Punit />'}
                        </Typography>
                         <IconButton
                            size="large"
                            aria-label="user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            id="account-menu"
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            onClick={handleCloseNavMenu}
                            PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                                },
                                '&:before': {
                                content: '""',
                                display: { xs: 'block', md: 'none' },
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                                },
                            },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} 
                                    onClick={
                                        page === "About" ? 
                                            props.aboutClick : 
                                        page === "Experience" ? 
                                            props.expClick :
                                        page === "Projects" ? 
                                            props.projectClick :
                                        page === "Contact" ? 
                                            props.contactClick
                                        : null
                                    }>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    {page}
                                </MenuItem>
                            ))} 
                        </Menu>
                        {/* <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="left">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */} 
                    </Box> 
                    {/* ends */}

                    {/* desktop */} 
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
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
                        {'<Punit />'}
                    </Typography>
                    <Box sx={{ flexGrow: 1, justifyContent: 'right', display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                // onClick={handleCloseNavMenu}
                                onClick={page === "About" ? 
                                        props.aboutClick : 
                                    page === "Experience" ? 
                                        props.expClick :
                                    page === "Projects" ? 
                                        props.projectClick :
                                    page === "Contact" ? 
                                        props.contactClick
                                    : null
                                }
                                variant="text"
                                sx={{ mx: 1, my: 1, color: 'white', fontSize: '16px', display: 'block', textTransform: 'capitalize' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {/* <Tooltip title="Profile">
                            <IconButton onClick={handleOpenUserMenu} size="large" edge="start" color="inherit" aria-label="menu">
                                <Avatar alt="Punit Parmar" src={logo} />
                                <MenuIcon  />
                            </IconButton>
                        </Tooltip> */}
                        {/* <Menu
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
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}
                    </Box>
                </Toolbar>
              </Fade>
            </Container>
        </AppBar>
    )
}

export default Header;
