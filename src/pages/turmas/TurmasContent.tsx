
import { Box, Button, IconButton, InputBase, InputLabel, Menu, Modal, Pagination, Stack, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import TuneIcon from '@mui/icons-material/Tune';
import Voltar from '../../images/voltar.svg'
import IconTurmascol from '../../images/icon_turmas.svg'
import { useNavigate } from 'react-router-dom';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  bgcolor: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};

const TurmasContent: React.FC = () => {

  const [ano, setAno] = React.useState('');

  const handleChangeAno = (event: SelectChangeEvent) => {
    setAno(event.target.value);
  };

  const [anoTurma, setAnoTurma] = React.useState('');

  const handleChangeAnoTurma = (event: SelectChangeEvent) => {
    setAnoTurma(event.target.value);
  };

  const [classe, setClasse] = React.useState('');

  const handleChangeClasse = (event: SelectChangeEvent) => {
    setClasse(event.target.value);
  };

  const [periodo, setPeriodo] = React.useState('');

  const handleChangePeriodo = (event: SelectChangeEvent) => {
    setPeriodo(event.target.value);
  };
  const turmas = [
    { name: '5 serie A', turno: 'Noite' },
    { name: '5 serie A', turno: 'Manhã' },
    { name: '5 serie A', turno: 'Tarde' },
    { name: '5 serie A', turno: 'Integral' },
    { name: '5 serie A', turno: 'Integral' },
    { name: '5 serie A', turno: 'Integral' },

  ]


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };

  const [page, setPage] = React.useState(1);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedTurmas = turmas.slice((page - 1) * 5, page * 5);


  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);


  const navigate = useNavigate();
 

  const Filtro = (

    <Box sx={{ display: { xs: 'flex', md: 'block' }, flexDirection: { xs: 'column', width: '100%' } }}>

      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel>Ano</InputLabel>
        <Select
          value={ano}
          onChange={handleChangeAno}
          label='Ano'

        >

          <MenuItem value={10}>2024</MenuItem>
          <MenuItem value={20}>2023</MenuItem>
          <MenuItem value={30}>2022</MenuItem>
          <MenuItem value={30}>2021</MenuItem>
        </Select>

      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel>Ano Turma</InputLabel>
        <Select
          value={anoTurma}
          onChange={handleChangeAnoTurma}
          label='Ano Turma'
        >

          <MenuItem value={1}>1 Fundamental</MenuItem>
          <MenuItem value={2}>2 Fundamental</MenuItem>
          <MenuItem value={3}>3 Fundamental</MenuItem>
          <MenuItem value={4}>4 Fundamental</MenuItem>
        </Select>

      </FormControl>

      <FormControl sx={{
        m: 1, minWidth:
          120
      }} size='small'>
        <InputLabel>Classe</InputLabel>
        <Select
          value={classe}
          onChange={handleChangeClasse}
          label='Classe'
        >

          <MenuItem value={10}>A</MenuItem>
          <MenuItem value={20}>B</MenuItem>
          <MenuItem value={30}>C</MenuItem>
          <MenuItem value={30}>D</MenuItem>
        </Select>

      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120, }} size='small'>
        <InputLabel>Período</InputLabel>
        <Select
          value={periodo}
          onChange={handleChangePeriodo}
          label='Período'
        >

          <MenuItem value={10}>Manhã</MenuItem>
          <MenuItem value={20}>tarde</MenuItem>
          <MenuItem value={30}>Noite</MenuItem>
          <MenuItem value={30}>Integral</MenuItem>

        </Select>

      </FormControl>
    </Box>

  )


  return (
    <Box sx={{
      padding: '30px 20px',
      height: '100vh',
      background: '#FBFBFB',

    }}>

      <Box sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center'
      }}>
        <img src={IconTurmascol} width='40px' style={{
          margin: '10px',

        }} alt="Icon turmas" />
        <Typography variant="h4" gutterBottom sx={{
          fontSize: '28px',
          fontWeight: 'bold'
        }}>
          Turmas
        </Typography>

      </Box>

      <Box sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '30px 0px 20px'
      }}>
        <div style={{
          border: 'solid 1px #D6D6D6',
          borderRadius: '10px',
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          width: '82%',
          marginRight: '10px'
        }}>
          <Search sx={{ color: '#D6D6D6' }} />
          <InputBase placeholder='Search...' />
        </div>




        <div>
          <Button sx={{
            display: { xs: 'block', md: 'none' }, color: '#350C00', '&:hover': {
              borderRadius: '10px',
              color: '#FFAF85',
              bgcolor: '#FFDAC6',
              transition: '.0s',
              boxShadow: "none",
              border: '#FF7224 solid 1px'
            }
          }} onClick={handleOpenModal}><TuneIcon /></Button>
          <Modal

            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >

            <Box height={'100%'} sx={style}>
              <Box>

                <Button sx={{ color: '#000', fontWeight: 'bold', textTransform: 'none', fontSize: '24px', mb: '20px' }}
                  onClick={handleCloseModal}
                >
                  <img style={{ marginRight: '10px' }} src={Voltar} alt="Icone voltar" /> Filtro
                </Button>


                <Box >
                  {Filtro}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    sx={{
                      backgroundColor: '#FF7224',
                      color: 'white',
                      width: '100%',
                      textTransform: 'none',
                      fontSize: '16px',
                      mt: '30px',
                      padding: '8px, 16px, 8px, 16px',
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: '#FF914D',
                      },
                      '&:active': {
                        backgroundColor: '#E65D00',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                      },
                      display: { xs: 'block', md: 'none' }

                    }}
                  >
                    Salvar
                  </Button>
                </Box>

              </Box>
            </Box>
          </Modal>
        </div>

        <Button
          sx={{
            backgroundColor: '#FF7224',
            color: 'white',
            width: '125px',
            textTransform: 'none',
            fontSize: '16px',
            padding: '8px, 16px, 8px, 16px',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#FF914D',
            },
            '&:active': {
              backgroundColor: '#E65D00',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            },
            display: { xs: 'none', md: 'block' }

          }}
          onClick={() => { navigate('/cadastrar-turma') }}
        >
          Novo Turma
        </Button>

      </Box>

      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        {Filtro}
      </Box>


      {
        paginatedTurmas.map((turmas, index) => (
          <Stack sx={{ background: '#fff', my: '40px', p: '8px 20px', borderRadius: '10px', border: '1px solid #ccc' }} direction='row' justifyContent='space-between' >
            <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '10px', }} key={index}>
              <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }} >{turmas.name}</Typography>
              <Typography sx={{ fontSize: '12px' }}>{turmas.turno}</Typography>
            </Stack>
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >

              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
                

              }}
              sx={{
                boxShadow: 'none',
               
                
              }}
            
            > 
            <Box sx={{display:'flex', flexDirection:'column',
            alignItems:'flex-start'
            }}>
            <Button onClick={() => navigate('/seriesturmas')} style={{ textDecoration: 'none' }}>
                <MenuItem sx={{
                  textTransform: 'none', bgcolor: 'white', color: "black", borderRadius: "12px", p: "10px", mx: '10px', justifyContent: "start",
                  '&:hover': {
                    borderRadius: '10px',
                    color: '#FFAF85',
                    bgcolor: '#FFDAC6', transition: '.0s'
                  }
                }} ><GroupsOutlinedIcon sx={{ color: '#ccc', mr: '10px' }} />Visualizar turma</MenuItem>
              </Button>
              
              <Button onClick={() => navigate('/chamadas')} style={{ textDecoration: 'none' }}>
              <MenuItem sx={{
                textTransform: 'none', bgcolor: 'white', color: "black", borderRadius: "12px", p: "10px", mx: '10px', justifyContent: "start", boxShadow: "none",
                '&:hover': {
                  borderRadius: '10px',
                  color: '#FFAF85',
                  bgcolor: '#FFDAC6', transition: '.0s', boxShadow: "none"
                }
              }}><EmojiPeopleIcon sx={{ color: '#ccc', mr: '10px' }}onClick={() => navigate('/chamadas')}  />Chamada</MenuItem>
              </Button>
            
              <MenuItem sx={{
                textTransform: 'none', bgcolor: 'white', color: "black", borderRadius: "12px", p: "10px", mx: '10px', justifyContent: "start", boxShadow: "none",
                '&:hover': {
                  borderRadius: '10px',
                  color: '#FFAF85',
                  bgcolor: '#FFDAC6', transition: '.0s', boxShadow: "none"
                }
              }} onClick={handleClose}><ReceiptLongIcon sx={{ color: '#ccc', mr: '10px' }} />Notas</MenuItem>
              <MenuItem sx={{
                textTransform: 'none', bgcolor: 'white', color: "black", borderRadius: "12px", p: "10px", mx: '10px', justifyContent: "start", boxShadow: "none",
                '&:hover': {
                  borderRadius: '10px',
                  color: '#FFAF85',
                  bgcolor: '#FFDAC6', transition: '.0s', boxShadow: "none"
                }
              }} ><DisabledByDefaultIcon sx={{ color: '#ccc', mr: '10px' }} />Faltas</MenuItem>
              <MenuItem sx={{
                textTransform: 'none', bgcolor: 'white', color: "black", borderRadius: "12px", p: "10px", mx: '10px', justifyContent: "start", boxShadow: "none",
                '&:hover': {
                  borderRadius: '10px',
                  color: '#FFAF85',
                  bgcolor: '#FFDAC6', transition: '.0s', boxShadow: "none"
                }
              }} onClick={handleClose}><PriorityHighIcon sx={{ color: '#ccc', mr: '10px' }} />Ocorrências</MenuItem>
              </Box>
            </Menu>
          </Stack>
        ))
      }



      <Stack sx={{ display: 'flex', alignItems: 'center' }} spacing={2}>

        <Pagination
          sx={{
            width: { md: '300px', sx: '10px' },
            '& .Mui-selected': {
              color: '#000',
              border: '1px solid ',
              background: '#fff',
              borderRadius: '10px',

            },
            '& .MuiPaginationItem-previousNext': {
              backgroundColor: 'transparent',
              color: '#FFA270',
              '&:hover': {
                backgroundColor: '#FFBD99',

              },
            },
          }}
          count={Math.ceil(turmas.length / 5)} page={page} onChange={handleChange} />
      </Stack>

    </Box>

  );
};

export default TurmasContent;
