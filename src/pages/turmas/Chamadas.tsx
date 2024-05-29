
import React, { useState } from 'react';
import { Button, Stack, Typography,  InputBase, Box, IconButton, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoTeacher from '../../images/teacher-logo.svg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';



const Chamadas: React.FC = () => {

    const Chamada = [
        { name: "Craig Cullhane", image: LogoTeacher, status: true, status2: false },
        { name: "Craig Cullhane", image: LogoTeacher, status: true, status2: false },
        { name: "Craig Cullhane", image: LogoTeacher, status: true, status2: false },
        { name: "Craig Cullhane", image: LogoTeacher, status: true, status2: false },
        { name: "Craig Cullhane", image: LogoTeacher, status: true, status2: false },
        { name: "Craig Cullhane", image: LogoTeacher, status: true, status2: false },
      
    ];

    
        const [expanded, setExpanded] = useState(false);
      
        const handleToggleAccordion = () => {
          setExpanded(!expanded);
        };
 

    const AnySeries = [
        { ano: '6º Ano', turma: 'A', periodo: 'Noturno', diciplina: 'Matemática' },
    ];


    const [page, setPage] = React.useState(1);
    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const paginatedChamadas = Chamada.slice((page - 1) * 5, page * 5);

    const navigate = useNavigate();


    const handleNavigateTurmas = () => {
        navigate('/turmas');
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

                                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

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
                  
                </Stack>
                <Stack
                    width="100%"
                >
                    {Chamada.map((series, index) => (
                        <Accordion expanded={expanded}>
                            <AccordionSummary
                                
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Box sx={{width:'100%',display:'flex', justifyContent:'space-between'}}>
                                <Box>
                                    <img src={series.image} />
                                <Typography fontSize='16px' fontWeight='bold' variant="body1"> {series.name}</Typography>
                                    </Box>
                                    <Box>
                                        <IconButton>
                                            v1
                                        </IconButton>
                                        <IconButton>
                                            v2
                                        </IconButton>
                                        <IconButton onClick={handleToggleAccordion}>
                                            v3
                                        </IconButton>
                                    </Box>

                                </Box>
                                 
                               
                            </AccordionSummary>

                            <AccordionDetails>


                                <Box key={index} sx={{ display: 'flex', justifyContent: { xs: 'space-between', md: 'flex-start' }, alignItems: 'center', padding: '8px' }}>

                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

                                        
                                       
                                        <Typography fontSize='12px' fontWeight='bold' variant="body1"> {series.status}</Typography>
                                        <Typography fontSize='12px' fontWeight='bold' variant="body1"> {series.status2}</Typography>
                
                                    </Box>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
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

                    count={Math.ceil(Chamada.length / 5)} page={page} onChange={handleChange} />
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

                >
                    Finalizar
                </Button>
            </Stack>


        </Stack>

    );
};

export default Chamadas;
