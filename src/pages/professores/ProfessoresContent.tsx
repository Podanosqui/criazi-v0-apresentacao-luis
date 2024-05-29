import React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Stack, TextField, Typography, IconButton, Menu, Pagination, useMediaQuery, Modal } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

// Icons
import TuneIcon from '@mui/icons-material/Tune';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import LogoTeacher from '../../images/teacher-logo.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const ProfessoresContent: React.FC = () => {

  const navigate = useNavigate();

  const [ano, setAno] = React.useState('');

  const handleChangeAno = (event: SelectChangeEvent) => {
    setAno(event.target.value as string);
  };

  const [status, setStatus] = React.useState('');

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const professores = [
    { name: "Professor 1", image: LogoTeacher, status: true },
    { name: "Professor 2", image: LogoTeacher, status: false },
    { name: "Professor 3", image: LogoTeacher, status: true }
  ];

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

  const paginatedProfessores = professores.slice((page - 1) * 8, page * 8);

  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <Stack
      height="90vh"
      maxHeight="90vh"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack width="100%">

        <Stack direction="row" alignItems="center" width="100%">
          <DesignServicesOutlinedIcon sx={{ color: "#b82900", mr: 2 }} fontSize='large' />
          <Typography
            fontSize="24px"
            fontWeight="600"
          >
            Professores
          </Typography>
        </Stack>

        <Stack
          width="100%"
          my={3}
          direction="row"
        >
          <Stack
            width="100%"
            mr={1}>
            <TextField
              label="Search"
              type="search"
              variant="outlined"
            />
          </Stack>
          {!isMobile &&
            <Stack
              direction="row"
              width="100%"
            >
              <Stack
                minWidth="100px"
                width="100%"
                mr={1}>
                <FormControl fullWidth>
                  <InputLabel>Ano</InputLabel>
                  <Select
                    value={ano}
                    label="Ano"
                    onChange={handleChangeAno}
                  >
                    <MenuItem value={10}>2024</MenuItem>
                    <MenuItem value={20}>2023</MenuItem>
                    <MenuItem value={30}>2022</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Stack
                minWidth="100px"
                width="100%"
                mr={1}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={status}
                    label="Status"
                    onChange={handleChangeStatus}
                  >
                    <MenuItem value={10}>Ativo</MenuItem>
                    <MenuItem value={20}>Inativo</MenuItem>
                    <MenuItem value={30}>Geral</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Stack>
                <Button
                  onClick={() => navigate("/professores/cadastrarprofessor")}
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#ff7224",
                    color: "#fff",
                    fontWeight: "600",
                    width: "140px",
                    p: "15px",
                    '&:hover': {
                      outline: "1px solid #ff7224",
                      color: "#ff7224"
                    }
                  }}>
                  Novo Professor
                </Button>
              </Stack>
            </Stack>
          }

          {isMobile &&
            <Stack
              ml={2}
            >
              <IconButton
                onClick={handleOpenModal}
                sx={{
                  padding: ".5rem"
                }}
              >
                <TuneIcon fontSize='large' />
              </IconButton>
              <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >


                <Stack
                  sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#FBFBFB',
                    border: '2px solid #000',
                    p: 3,
                  }}
                >


                  <Stack
                    direction="row"
                    alignItems="center"
                    width="105px"
                    mb={2}
                  >
                    <IconButton
                      sx={{
                        color: "#000",
                        mr: 2
                      }}
                      onClick={handleCloseModal}>
                      <ArrowBackIosNewIcon />
                    </IconButton>
                    <Typography
                      fontWeight="600"
                      fontSize="24px"
                    >
                      Filtro
                    </Typography>
                  </Stack>

                  <Stack
                  mb={3}
                    width="100%"
                    >
                    <FormControl fullWidth>
                      <InputLabel>Ano</InputLabel>
                      <Select
                        value={ano}
                        label="Ano"
                        onChange={handleChangeAno}
                      >
                        <MenuItem value={10}>2024</MenuItem>
                        <MenuItem value={20}>2023</MenuItem>
                        <MenuItem value={30}>2022</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>

                  <Stack
                    width="100%"
                    >
                    <FormControl fullWidth>
                      <InputLabel>Status</InputLabel>
                      <Select
                        value={status}
                        label="Status"
                        onChange={handleChangeStatus}
                      >
                        <MenuItem value={10}>Ativo</MenuItem>
                        <MenuItem value={20}>Inativo</MenuItem>
                        <MenuItem value={30}>Geral</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>

                </Stack>



              </Modal>
            </Stack>

          }

        </Stack>
        <Stack
          width="100%"
        >
          {paginatedProfessores.map((professor, index) => (
            <Stack
              my={1}
              key={index}
              width="100%"
              justifyContent="space-between"
              direction="row"
              alignItems="center"
            >
              <Stack
                direction="row"
                alignItems="center"
              >

                <img
                  src={professor.image}
                  alt={professor.name}
                  style={{ width: '32px' }}
                />
                <Typography mx={1}>
                  {professor.name}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
              >
                {professor.status == true &&
                  <Typography
                    textAlign="center"
                    p="3px"
                    sx={{
                      border: "1px solid #B8F7AE",
                      backgroundColor: "#E6FFE2",
                      width: "80px",
                      color: "#00530D",
                      borderRadius: "14px",
                      mr: 3
                    }}
                  >
                    Ativo
                  </Typography>
                }
                {!professor.status == true &&
                  <Typography
                    textAlign="center"
                    p="3px"
                    sx={{
                      border: "1px solid #FFA4A4",
                      backgroundColor: "#FFDADB",
                      width: "80px",
                      color: "#850000",
                      borderRadius: "14px",
                      mr: 3
                    }}
                  >
                    Inativo
                  </Typography>
                }
                <Stack>
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
                  >
                    <MenuItem onClick={handleClose}><CreateOutlinedIcon sx={{ mr: 1 }} />Editar aluno</MenuItem>
                    <MenuItem sx={{ color: "#990000" }} onClick={handleClose}><CancelOutlinedIcon sx={{ mr: 1 }} />Inativar</MenuItem>
                  </Menu>

                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      {!isMobile &&
        <Stack>
          <Pagination count={Math.ceil(professores.length / 5)} page={page} onChange={handleChange} />

        </Stack>

      }
      {isMobile &&
        <Stack
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Pagination count={Math.ceil(professores.length / 5)} page={page} onChange={handleChange} />
          <Button
            fullWidth
            onClick={() => navigate("/professores/cadastrarprofessor")}
            sx={{
              textTransform: "none",
              backgroundColor: "#ff7224",
              color: "#fff",
              fontWeight: "600",
              mt: 2,
              p: "15px",
              '&:hover': {
                outline: "1px solid #ff7224",
                color: "#ff7224"
              }
            }}>
            Novo Professor
          </Button>
        </Stack>

      }
    </Stack>
  );
};

export default ProfessoresContent;
