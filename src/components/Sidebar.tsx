import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Drawer, IconButton, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material";
import Logo from '../images/logo.svg';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Sidebar: React.FC = () => {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isMobile = useMediaQuery('(max-width:900px)');

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Stack
      bgcolor="#FFFAF6"
      width="280px"
      height="100%"
      justifyContent="space-between"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: '1.5rem',
        background: '#FFFAF6',
        borderRadius: '0 8px',
        border: '1px solid #FFDAC6',
      }}
    >
      <Stack direction='row' sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
      }}
      >
        <IconButton onClick={handleDrawerToggle}>
          <ArrowBackIosNewIcon sx={{ color: "#B82900" }} />
        </IconButton>
        <img src={Logo} alt="Logo Criazi" style={{ width: '56px' }} />
        <Box>
          <Typography fontWeight='bold' fontSize='22px'>Escola Criazi</Typography>
          <Typography sx={{ color: '#8D8D8D', fontSize: '14px' }}>Email@email.com</Typography>
        </Box>
      </Stack>

      <Stack height="80%">
        <Button
          onClick={() => {
            navigate('/minhaconta')
            setMobileOpen(false)
          }}
          sx={{
            my: 1,
            mx: 2,
            textTransform: "none",
            color: "#422107",
            fontSize: "16px",
            display: "flex",
            justifyContent: "flex-start",
            '&:hover': {
              outline: '1px solid #ff7224',
              color: "#ff7224"
            }
          }}>
          <AccountCircleOutlinedIcon sx={{ mr: 1 }} />Minha Conta
        </Button>
        <Button
          onClick={() => {
            navigate('/home')
            setMobileOpen(false)
          }}
          sx={{
            my: 1,
            mx: 2,
            textTransform: "none",
            color: "#422107",
            fontSize: "16px",
            display: "flex",
            justifyContent: "flex-start",
            '&:hover': {
              outline: '1px solid #ff7224',
              color: "#ff7224"
            }
          }}>
          <HomeOutlinedIcon sx={{ mr: 1 }} />Home
        </Button>
        <Button
          onClick={() => {
            navigate('/professores')
            setMobileOpen(false)
          }}
          sx={{
            my: 1,
            mx: 2,
            textTransform: "none",
            color: "#422107",
            fontSize: "16px",
            display: "flex",
            justifyContent: "flex-start",
            '&:hover': {
              outline: '1px solid #ff7224',
              color: "#ff7224"
            }
          }}><DesignServicesOutlinedIcon sx={{ mr: 1 }} />Professores
        </Button>
        <Button
          onClick={() => {
            navigate('/turmas')
            setMobileOpen(false)
          }}
          sx={{
            my: 1,
            mx: 2,
            textTransform: "none",
            color: "#422107",
            fontSize: "16px",
            display: "flex",
            justifyContent: "flex-start",
            '&:hover': {
              outline: '1px solid #ff7224',
              color: "#ff7224"
            }
          }}><GroupsOutlinedIcon sx={{ mr: 1 }} />Turmas
        </Button>
        <Button
          onClick={() => {
            navigate('/erp')
            setMobileOpen(false)
          }}
          sx={{
            my: 1,
            mx: 2,
            textTransform: "none",
            color: "#422107",
            fontSize: "16px",
            display: "flex",
            justifyContent: "flex-start",
            '&:hover': {
              outline: '1px solid #ff7224',
              color: "#ff7224"
            }
          }}><AttachMoneyOutlinedIcon sx={{ mr: 1 }} />ERP
        </Button>
      </Stack>
      <Stack>
        <Button
          onClick={() => {
            navigate('/')
            setMobileOpen(false)
          }}
          sx={{
            my: 1,
            mx: 2,
            textTransform: "none",
            color: "#422107",
            fontSize: "16px",
            display: "flex",
            justifyContent: "flex-start",
            '&:hover': {
              outline: '1px solid #ff7224',
              color: "#ff7224"
            }
          }}><LogoutIcon sx={{ mr: 1 }} />Logout
        </Button>
      </Stack>
    </Stack>
  );


  return (
    <>
      {!isMobile &&
        <Stack
          bgcolor="#FFFAF6"
          width="280px"
          height="100%"
          position="fixed"
          justifyContent="space-between"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            py: '1.5rem',
            background: '#FFFAF6',
            borderRadius: '0 8px',
            border: '1px solid #FFDAC6',
          }}
        >
          <Button
            onClick={() => {
              navigate('/minhaconta')
              setMobileOpen(false)
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              mb: "1.5rem"
            }}
          >
            <img src={Logo} alt="Logo Criazi" style={{ width: '56px' }} />
            <Box >
              <Typography fontWeight='bold' fontSize='18px' color='#422107'>Escola Criazi</Typography>
              <Typography sx={{ color: '#8D8D8D', fontSize: '12px', textAlign: "start" }}>Email@email.com</Typography>
            </Box>
          </Button>

          <Stack height="80%">
            <Button
              onClick={() => navigate('/home')}
              sx={{
                my: 1,
                mx: 2,
                textTransform: "none",
                color: "#422107",
                fontSize: "16px",
                display: "flex",
                justifyContent: "flex-start",
                '&:hover': {
                  outline: '1px solid #ff7224',
                  color: "#ff7224"
                }
              }}>
              <HomeOutlinedIcon sx={{ mr: 1 }} />Home
            </Button>
            <Button
              onClick={() => navigate('/professores')}
              sx={{
                my: 1,
                mx: 2,
                textTransform: "none",
                color: "#422107",
                fontSize: "16px",
                display: "flex",
                justifyContent: "flex-start",
                '&:hover': {
                  outline: '1px solid #ff7224',
                  color: "#ff7224"
                }
              }}><DesignServicesOutlinedIcon sx={{ mr: 1 }} />Professores
            </Button>
            <Button
              onClick={() => navigate('/turmas')}
              sx={{
                my: 1,
                mx: 2,
                textTransform: "none",
                color: "#422107",
                fontSize: "16px",
                display: "flex",
                justifyContent: "flex-start",
                '&:hover': {
                  outline: '1px solid #ff7224',
                  color: "#ff7224"
                }
              }}><GroupsOutlinedIcon sx={{ mr: 1 }} />Turmas
            </Button>
            <Button
              onClick={() => navigate('/erp')}
              sx={{
                my: 1,
                mx: 2,
                textTransform: "none",
                color: "#422107",
                fontSize: "16px",
                display: "flex",
                justifyContent: "flex-start",
                '&:hover': {
                  outline: '1px solid #ff7224',
                  color: "#ff7224"
                }
              }}><AttachMoneyOutlinedIcon sx={{ mr: 1 }} />ERP
            </Button>
            <Button
              onClick={() => navigate('/faltas')}
              sx={{
                my: 1,
                mx: 2,
                textTransform: "none",
                color: "#422107",
                fontSize: "16px",
                display: "flex",
                justifyContent: "flex-start",
                '&:hover': {
                  outline: '1px solid #ff7224',
                  color: "#ff7224"
                }
              }}><AttachMoneyOutlinedIcon sx={{ mr: 1 }} />faltas
            </Button>
          </Stack>
          <Stack>
            <Button
              onClick={() => navigate('/')}
              sx={{
                my: 1,
                mx: 2,
                textTransform: "none",
                color: "#422107",
                fontSize: "16px",
                display: "flex",
                justifyContent: "flex-start",
                '&:hover': {
                  outline: '1px solid #ff7224',
                  color: "#ff7224"
                }
              }}><LogoutIcon sx={{ mr: 1 }} />Logout
            </Button>
          </Stack>
        </Stack>
      }

      {isMobile &&

        <>
          <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', position: "absolute", right: "1%", top: "1%" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
          </Toolbar>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
            }}
          >
            {drawerContent}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
            }}
            open
          >
            {drawerContent}
          </Drawer>
        </>

      }

    </>
  );
};

export default Sidebar;
