
import React from 'react';
import { Button, MenuItem, Stack, Typography, IconButton, Menu, Pagination, InputBase, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoTeacher from '../../images/teacher-logo.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Search } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const SeriesTurmas: React.FC = () => {

    const Sturmas = [
        { name: "Craig Cullhane", image: LogoTeacher, status: true },
        { name: "Craig Cullhane", image: LogoTeacher, status: false },
        { name: "Craig Cullhane", image: LogoTeacher, status: true },
        { name: "Craig Cullhane", image: LogoTeacher, status: true },
        { name: "Craig Cullhane", image: LogoTeacher, status: true },
        { name: "Craig Cullhane", image: LogoTeacher, status: true },
    ];

    // aqui eu mudei tbm >>>>>


    const AnySeries = [
        { ano: '6º Ano', turma: 'A', periodo: 'Noturno', diciplina: 'Matemática' },
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

    const paginatedTurmas = Sturmas.slice((page - 1) * 5, page * 5);

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/cadastrar-alunos');
    };
    const handleNavigateTurmas = () => {
        navigate('/turmas');
    };

    const handleNavigateResumoAluno = () => {
        navigate('/resumo-aluno');
    };


    
    return (
        <Stack
            height="100vh"
            maxHeight="90vh"
            justifyContent="space-between"
            alignItems="center"
        >

            <Stack width="100%"
                padding='10px 20px' >

                <Stack direction="row" alignItems="center" width="100%">

                    <Button sx={{ color: 'black', display: { xs: 'block', md: 'none' } }} onClick={handleNavigateTurmas}> <ArrowBackIosIcon /></Button>

                    <Box width='100%' sx={{ display: 'flex', flexDirection: 'column' }}>

      {AnySeries.map((series, index) => (
        <Box key={index} sx={{ display: 'flex', justifyContent: { xs: 'space-between', md: 'flex-start' }, alignItems: 'center', padding: '8px' }}>

          <Box sx={{ display: 'flex', gap: '10px', alignItems:'center' }}>

            <Typography fontSize='16px' fontWeight='bold' variant="body1"> {series.ano}</Typography>
            <Typography fontSize='16px' fontWeight='bold' variant="body1"> {series.turma}</Typography>
            <Typography fontSize='12px' fontWeight='bold' variant="body1"> {series.periodo}</Typography>

          </Box>

          <Typography color='#5C5C5C' marginLeft='20px' fontSize='12px' fontWeight='bold' variant="body1"> {series.diciplina}</Typography>
        </Box>
      ))}
    </Box>
                </Stack>
                <Stack
                    width="100%"
                    my={3}
                    direction="row"
                >
                    <Stack
                        width="100%"
                        mr={1}>
                        <div style={{
                            border: 'solid 1px #D6D6D6',
                            borderRadius: '10px',
                            padding: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '95%',
                            marginRight: '10px'
                        }}>
                            <Search sx={{ color: '#D6D6D6' }} />
                            <InputBase placeholder='Search...' />
                        </div>
                    </Stack>

                    <Stack
                        direction="row"
                    >
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
                            onClick={handleNavigate}
                        >
                            Novo Aluno
                        </Button>

                    </Stack>



                </Stack>
                <Stack
                    width="100%"
                >
                    {paginatedTurmas.map((Sturmas, index) => (
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
                                    src={Sturmas.image}
                                    alt={Sturmas.name}
                                    style={{ width: '32px' }}
                                />
                                <Typography mx={1}>
                                    {Sturmas.name}
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                alignItems="center"
                            >
                                {Sturmas.status == true &&
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
                                {!Sturmas.status == true &&
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
                                        <MoreVertIcon sx={{ display: { xs: 'none', md: 'block' } }} />
                                        <KeyboardArrowDownIcon sx={{ display: { xs: 'block', md: 'none' } }}
                                         />
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
                                        <MenuItem onClick={handleNavigateResumoAluno }><CreateOutlinedIcon sx={{ mr: 1 }} />Editar aluno</MenuItem>
                                        <MenuItem sx={{ color: "#990000" }} onClick={handleClose}><CancelOutlinedIcon sx={{ mr: 1 }} />Inativar</MenuItem>
                                    </Menu>

                                </Stack>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>

            </Stack>
            <Stack flexDirection='row'
                sx={{
                    flexDirection: 'column', alignItems: 'center',
                    width: '100%'
                }}>

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

                    count={Math.ceil(Sturmas.length / 5)} page={page} onChange={handleChange} />
                <Button
                    sx={{
                        backgroundColor: '#FF7224',
                        color: 'white',
                        width: '95%',
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
                    onClick={handleNavigate}
                >
                    Novo Aluno
                </Button>
            </Stack>


        </Stack>

    );
};

export default SeriesTurmas;
