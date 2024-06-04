import * as React from 'react';
import { Box, Button, Stack, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateIcon from '@mui/icons-material/Create';
import qulquer from '../../images/close.svg'
const accordionsData = [
    {
        name: "Marcelo",
        dates: [
            { date: "18/04/2024", justification: "luizinho precisou ir ao medico" },
            { date: "19/04/2024", justification: "maria não teve transporte" },
            { date: "20/04/2024", justification: "joão está com febre" }
        ]
    },
    {
        name: "João",
        dates: [
            { date: "21/04/2024", justification: "lucas teve uma consulta médica" },
            { date: "22/04/2024", justification: "marcela ficou doente" },
            { date: "23/04/2024", justification: "carlos faltou por motivos pessoais" }
        ]
    },
    {
        name: "Maria",
        dates: [
            { date: "24/04/2024", justification: "lucas precisou ir ao dentista" },
            { date: "25/04/2024", justification: "maria não teve transporte" },
            { date: "26/04/2024", justification: "joão está com febre" }
        ]
    },
    // Adicione mais dados conforme necessário
];

export default function Faltas() {
    const [selectedUnit, setSelectedUnit] = React.useState(1);

    const handleUnitChange = (unit: number) => {
        setSelectedUnit(unit);
    };

    const getButtonStyles = (unit: number) => ({
        borderRadius: "8px", mr: "1rem", mt: "1rem",
        backgroundColor: selectedUnit === unit ? '#FF7224' : '#ffffff',
        color: selectedUnit === unit ? '#ffffff' : '#000000',
        '&:hover': {
            backgroundColor: selectedUnit === unit ? '#FF7224' : '#e0e0e0',
        },
    });

    return (
        <>
            <Box>
                <Stack direction='row' alignItems='center' gap='10px'>
                    <HomeOutlinedIcon sx={{ fontSize: "50px", color: "#B82900" }} />
                    <Typography variant="h5" fontWeight='bold'>Faltas</Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between' mt='2rem'>
                    <Typography>6º ano A</Typography>
                    <Typography>Noite</Typography>
                </Stack>

                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <Button sx={getButtonStyles(1)} onClick={() => handleUnitChange(1)}>Unidade 1</Button>
                    <Button sx={getButtonStyles(2)} onClick={() => handleUnitChange(2)}>Unidade 2</Button>
                    <Button sx={getButtonStyles(3)} onClick={() => handleUnitChange(3)}>Unidade 3</Button>
                    <Button sx={getButtonStyles(4)} onClick={() => handleUnitChange(4)}>Unidade 4</Button>
                </Box>

                <Box mt="2rem">
                    {selectedUnit === 1 && (
                        <Typography>
                            <Box>
                                {accordionsData.map((data, index) => (
                                    <Accordion elevation={0} key={index}>
                                        <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ borderRadius: "8px", '&:hover': { background: "#FFFAF6", transition: "0.1s", border: "1px solid #FFBD99", } }}>
                                            <AccordionSummary
                                                // expandIcon={<ExpandMoreIcon />}
                                                aria-controls={`panel${index + 1}-content`}
                                                id={`panel${index + 1}-header`} sx={{ width: "80%" }}
                                            >
                                                {data.name}
                                            </AccordionSummary>
                                            <Box display='flex' alignItems='center' gap='20px' p='15px' sx={{ flexDirection: { md: 'column', lg: 'row' } }}>
                                                <Typography>Faltas: 03</Typography>
                                                <Typography sx={{ borderRadius: "16px", background: "#B8F7AE", color: "#158D28", p: '5px' }}>Aprovado</Typography>
                                            </Box>
                                        </Stack>
                                        <AccordionDetails>
                                            {data.dates.map((date, dateIndex) => (
                                                <Accordion key={dateIndex}>
                                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                        {date.date}
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography variant="body1">Justificativa:</Typography>
                                                        <Stack direction='row' width='100%' alignItems='center' justifyContent='space-between' sx={{ background: "#F8F8F8", borderRadius: "8px" }}>
                                                            <Typography sx={{ mt: "10px", p: "10px" }}>{date.justification}</Typography>
                                                            <CreateIcon sx={{ mr: "1rem" }} />
                                                        </Stack>
                                                    </AccordionDetails>
                                                </Accordion>
                                            ))}
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </Box>
                        </Typography>
                    )}

                    {selectedUnit === 2 && (
                        <Typography>
                            Conteúdo da Unidade 2
                        </Typography>
                    )}
                                    {selectedUnit === 3 && (
                    <Typography>
                        Conteúdo da Unidade 3
                    </Typography>
                )}

                {selectedUnit === 4 && (
                    <Typography>
                        Conteúdo da Unidade 4
                    </Typography>
                )}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', outline: '1px solid red', mt: '1rem' }}>
      <Accordion sx={{ marginRight: '1rem' }}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          {/* Aqui você pode adicionar qualquer conteúdo para o cabeçalho do Accordion */}
          Accordion Header
        </AccordionSummary>
        <AccordionDetails>
          {/* Aqui você pode adicionar qualquer conteúdo para o corpo do Accordion */}
          <Typography>
            Texto que aparece quando o Accordion é expandido.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box>
        <img src={qulquer} alt="" />
      </Box>
      <button style={{ marginRight: '1rem' }}>botao1</button>
      <button>botao2</button>
    </Box>
        </Box>
    </>
)
}
