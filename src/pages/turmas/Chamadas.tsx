import React, { useState } from 'react';
import { Button, Stack, Typography, Box, Pagination, Grid, Paper, TextField, Modal, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoTeacher from '../../images/teacher-logo.svg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PresenteIcon from '../../images/okIcon.svg';
import FaltouIcon from '../../images/close.svg';
import BlocoDeNotas from '../../images/blocoDeNotas.svg';
import IconChamada from '../../images/IconChamada.svg';
import { format } from 'date-fns';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Chamadas: React.FC = () => {
    const [quantidadePresentes, setQuantidadePresentes] = useState(0);
    const [quantidadeFaltas, setQuantidadeFaltas] = useState(0);
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalStudentIndex, setModalStudentIndex] = useState(-1);


    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => setPage(value);

    const navigate = useNavigate();
    const handleNavigateTurmas = () => navigate('/turmas');

    const currentDate = new Date();
    const formattedDate = format(currentDate, 'dd/MM/yyyy');

    const Chamada = [
        { name: "Craig Cullhane", image: LogoTeacher, presente: false, faltou: false, showModalButton: false },
        { name: "Jane Doe", image: LogoTeacher, presente: false, faltou: false, showModalButton: false },
        { name: "John Smith", image: LogoTeacher, presente: false, faltou: false, showModalButton: false },
        // Adicione mais itens conforme necessário
    ];
    

    const [students, setStudents] = useState(Chamada);

// Função para alterar presença
const handlePresenteClick = (index: number) => {
    const newStudents = [...students];

    // Verifica se a opção de presença já está selecionada
    const isPresenteSelected = newStudents[index].presente;

    // Verifica se a opção de falta está selecionada
    const isFaltouSelected = newStudents[index].faltou;

    // Se presença já está selecionada, desmarque-a
    if (isPresenteSelected) {
        newStudents[index].presente = false;
        setQuantidadePresentes(quantidadePresentes - 1);
    } else {
        // Se falta está selecionada, desmarque-a
        if (isFaltouSelected) {
            newStudents[index].faltou = false;
            setQuantidadeFaltas(quantidadeFaltas - 1);
        }
        
        // Marque presença
        newStudents[index].presente = true;
        setQuantidadePresentes(quantidadePresentes + 1);
    }

    // Atualize o estado dos alunos
    setStudents(newStudents);
};

// Função para alterar falta
const handleFaltouClick = (index: number) => {
    const newStudents = [...students];

    // Verifica se a opção de falta já está selecionada
    const isFaltouSelected = newStudents[index].faltou;

    // Verifica se a opção de presença está selecionada
    const isPresenteSelected = newStudents[index].presente;

    // Se falta já está selecionada, desmarque-a e atualize a quantidade de faltas
    if (isFaltouSelected) {
        newStudents[index].faltou = false;
        setQuantidadeFaltas(quantidadeFaltas - 1);
    } else {
        // Se presença está selecionada, desmarque-a e atualize a quantidade de presenças
        if (isPresenteSelected) {
            newStudents[index].presente = false;
            setQuantidadePresentes(quantidadePresentes - 1);
        }

        // Marque falta
        newStudents[index].faltou = true;
        setQuantidadeFaltas(quantidadeFaltas + 1);

        // Definir a propriedade showModalButton como true para exibir o botão do modal
        newStudents[index].showModalButton = true;
    }

    // Atualize o estado dos alunos
    setStudents(newStudents);
};

const handleModalOpen = () => {
    setOpenModal(true);
};

const handleModalClose = () => {
    setOpenModal(false);
};



    const AnySeries = [
        { ano: '6º Ano', turma: 'A', periodo: 'Noturno', diciplina: 'Matemática' },
    ];

    return (
        <Stack height="100vh" maxHeight="90vh" justifyContent="space-between" alignItems="center">
            <Modal
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Justificativa de falta
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Motivo da falta"
                            multiline
                            rows={4}
                            defaultValue=""
                            variant="outlined"
                            onChange={(event) => setModalContent(event.target.value)}
                        />
                    </Typography>
                    <Button variant="contained" onClick={handleModalClose}>Fechar</Button>
                </Box>
            </Modal>
            <Stack width="100%" padding='10px 20px'>
                <Stack direction="row" alignItems="center" width="100%">
                    <Button sx={{ color: 'black', display: { xs: 'block', md: 'none' } }} onClick={handleNavigateTurmas}> 
                        <ArrowBackIosIcon />
                    </Button>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <img src={IconChamada} alt="Icone Chamada" />
                    </Box>
                    <Typography fontSize="24px" fontWeight="600" sx={{ color: '#422107' }}>
                        Chamada
                    </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" width="100%">
                    <Box width='100%' sx={{ display: 'flex', flexDirection: 'column' }}>
                        {AnySeries.map((series, index) => (
                            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Typography fontSize='16px' fontWeight='bold'>{series.ano}</Typography>
                                        <Typography fontSize='16px' fontWeight='bold'>{series.turma}</Typography>
                                        <Typography fontSize='12px' fontWeight='bold'>{series.periodo}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography color='#5C5C5C' marginLeft='20px' fontSize='12px' fontWeight='bold'>{series.diciplina}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Button
                                        sx={{
                                            backgroundColor: '#FF7224',
                                            color: 'white',
                                            width: '160px',
                                            textTransform: 'none',
                                            fontSize: '16px',
                                            padding: '8px 16px',
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
                                    >
                                        Finalizar
                                    </Button>
                                    <Box>
                                        <Typography sx={{ mx: '10px', fontWeight: 'bold' }}>Data {formattedDate}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Stack>

                <Stack width="100%" my='30px'>
                    <Grid container spacing={2} sx={{ mb: '20px' }}>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Paper style={{ height: 100 }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>{quantidadeFaltas}</Typography>
                                <Typography>Faltantes</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Paper style={{ height: 100 }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>{quantidadePresentes}</Typography>
                                <Typography>Presentes</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} lg={4}>
                            <Paper style={{ height: 100 }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>0</Typography>
                                <Typography>Pendente</Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Stack>
                    {students.map((student, index) => (
    <Accordion key={index}>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
                <Box sx={{ display: { xs: 'flex', md: 'block' } }}>
                    <img src={student.image} alt={student.name} />
                    <Typography fontSize='16px' fontWeight='bold' variant="body1"> {student.name}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }} >
                    <Box sx={{ display: { xs: 'flex', sm: 'row' } }}>
                        <Button sx={{ border: '1px solid #ccc', m: '10px', p: { xs: '8px 58px', sm: '4px 4px' }, borderRadius: { xs: 'none', sm: '50%' } }}
                            onClick={() => handleFaltouClick(index)}>
                            <img src={FaltouIcon} alt="faltou" />
                        </Button>
                        <Button sx={{ border: '1px solid #ccc', m: '10px', p: { xs: '8px 58px', sm: '4px 4px' }, borderRadius: { xs: 'none', sm: '50%' } }}
                            onClick={() => handlePresenteClick(index)}>
                            <img src={PresenteIcon} alt="presente" />
                        </Button>
                        {student.showModalButton && (
                            <Button
                                sx={{ border: '1px solid #ccc', m: '10px', p: { xs: '8px 58px', sm: '4px 4px' }, borderRadius: { xs: 'none', sm: '50%' } }}
                                onClick={() => {
                                    setOpenModal(true);
                                    // Outras lógicas relacionadas ao botão de notas, se necessário
                                }}
                            >
                                <img src={BlocoDeNotas} alt="notas" />
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>
        </AccordionSummary>
        <AccordionDetails>
            <TextField InputProps={{ style: { height: '34px', color: '#ccc' } }} fullWidth placeholder="Digite aqui" />
        </AccordionDetails>
    </Accordion>
))}

                    </Stack>
                </Stack>
            </Stack>
            <Stack flexDirection='row' sx={{ flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <Pagination
                    sx={{
                        width: { md: '300px', xs: '10px' },
                        '& .Mui-selected': {
                            color: '#000',
                            border: '1px solid',
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
                    count={Math.ceil(Chamada.length / 5)} page={page} onChange={handleChange} />
                <Button
                    sx={{
                        backgroundColor: '#FF7224',
                        color: 'white',
                        width: '95%',
                        textTransform: 'none',
                        fontSize: '16px',
                        mt: '30px',
                        padding: '8px 16px',
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
                    Finalizar
                </Button>
            </Stack>
        </Stack>
    );
};

export default Chamadas;
