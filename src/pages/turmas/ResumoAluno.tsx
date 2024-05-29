import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextSend from '../../images/textSend.svg'
import Enviar from '../../images/enviar.svg'
import School from '../../images/school.svg'
import { useNavigate } from 'react-router-dom';
import IconFamilia from '../../images/familiaIcon.svg'
import { useState } from "react";
export default function ResumoAluno() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/seriesturmas');
  };
 
  // const [expandedPanel, setExpandedPanel] = useState(null);

  // const handleChange = (panel:string) => (_event, isExpanded:boolean) => {
  //   setExpandedPanel(isExpanded ? panel : null);
  // };

  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);

 
  const handleChange = (panel: string) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <Stack

      alignItems="center"
    >
      <Stack direction="row" alignItems="center" width="100%">
        <Button onClick={handleNavigate} sx={{ color: '#422107' }}> <ArrowBackIosIcon /></Button>
        <Typography
          fontSize="24px"
          fontWeight="600"
          sx={{ color: '#422107' }}
        >
          Resumo aluno
        </Typography>
      </Stack>
      <Box>
      <Box sx={{ width: '100%', padding: '10px 0px', borderRadius: '10px' }}>
          <Accordion expanded={expandedPanel === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                borderRadius: '8px',
                backgroundColor: expandedPanel === 'panel1' ? '#FFDAC6' : '#FFF',
                '&:hover': {
                  backgroundColor: '#FFDAC6',
                },
                '&:active': {
                  backgroundColor: '#FFDAC6',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                },
              }}
            ><Box>
                <img src={School}  alt="Icone School" />
                <Typography sx={{mt:'8px', fontSize:'14px'}}>Editar Aluno</Typography>
              </Box>

              
            </AccordionSummary>

           
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, width: '100%' }}>
              <Box sx={{ width: { lg: '50%' } }}>
                <AccordionDetails>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px', p: '10px 10px', mb: '10px' }}>Dados pessoais</Typography>

                  <Grid container spacing={2} >
                    <Grid item xs={12} lg={6} >
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Nome Completo <span style={{ color: "#EC0000" }}>*</span></Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} lg={6} >
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Nome Social</Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Data de nascimento <span style={{ color: "#EC0000" }}>*</span> </Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>RG e CPF ou Certidão de nascmento</Typography>
                      <Button sx={{
                        fontSize: '12px', color: '#000', borderRadius: '10px', border: '1px #D6D6D6 solid', width: '100%', display: 'flex',
                        justifyContent: 'flex-start',
                        gap: '8px',
                        textTransform: 'none'
                      }}><img src={TextSend} /> clique para enviar</Button>
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Foto 3/4</Typography>
                      <Button sx={{
                        fontSize: '12px', color: '#000', borderRadius: '10px', border: '1px #D6D6D6 solid', width: '100%', display: 'flex',
                        justifyContent: 'flex-start',
                        gap: '8px',
                        textTransform: 'none'
                      }}><img src={TextSend} /> clique para enviar</Button>
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Comprovante de residência</Typography>
                      <Button sx={{
                        fontSize: '12px', color: '#000', borderRadius: '10px', border: '1px #D6D6D6 solid', width: '100%', display: 'flex',
                        justifyContent: 'flex-start',
                        gap: '8px',
                        textTransform: 'none'
                      }}><img src={TextSend} /> clique para enviar</Button>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Box>


              <Box sx={{ width: { lg: '50%' } }}>
                <AccordionDetails>
                  <Typography variant="h6" sx={{ py: '10px', fontWeight: 'bold', fontSize: '18px', p: '10px 10px', mb: '10px', }}>Endereço</Typography>
                  <Grid container spacing={2} sx={{ width: '100%', }}>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Cep</Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Logradouro <span style={{ color: "#EC0000" }}>*</span></Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Complemento</Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Estado</Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Cidade</Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>

                  </Grid>
                </AccordionDetails>
              </Box>
            </Box>


            <Box sx={{ width: '100%' }}>
              <AccordionDetails>
                <Typography variant="h6" sx={{ py: '10px', fontWeight: 'bold', fontSize: '18px', p: '10px 10px', mb: '10px' }}>
                  Dados da família
                </Typography>
                <Grid container spacing={2} sx={{ width: '100%' }}>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Nome da mãe <span style={{ color: "#EC0000" }}>*</span></Typography>
                    <TextField InputProps={{
                      style: {
                        height: '34px'
                      }
                    }} fullWidth placeholder="Digite aqui" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Telefone da mãe</Typography>
                    <TextField InputProps={{
                      style: {
                        height: '34px'
                      }
                    }} fullWidth placeholder="Digite aqui" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Nome do pai <span style={{ color: "#EC0000" }}>*</span></Typography>
                    <TextField InputProps={{
                      style: {
                        height: '34px'
                      }
                    }} fullWidth placeholder="Digite aqui" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Telefone do pai</Typography>
                    <TextField InputProps={{
                      style: {
                        height: '34px'
                      }
                    }} fullWidth placeholder="Digite aqui" />
                  </Grid>

                </Grid>
              </AccordionDetails>
            </Box>


            <Box sx={{ width: '100%' }}>
              <AccordionDetails>
                <Typography variant="h6" sx={{ py: '10px', fontWeight: 'bold', fontSize: '18px', p: '10px 10px', mb: '10px', }}>
                  Contato aluno
                </Typography>
                <Grid container spacing={2} sx={{ width: '100%' }}>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>E-mail <span style={{ color: "#EC0000" }}>*</span></Typography>
                    <TextField InputProps={{
                      style: {
                        height: '34px'
                      }
                    }} fullWidth placeholder="mail.example@gmail.com" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Valor 1º pagamento</Typography>
                    <TextField InputProps={{
                      style: {
                        height: '34px'
                      }
                    }} fullWidth placeholder="Digite aqui" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Telefone <span style={{ color: "#EC0000" }}>*</span></Typography>
                    <TextField InputProps={{
                      style: {
                        height: '34px'
                      }
                    }} fullWidth placeholder="(__) _ ____-____" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Valor da mensalidade</Typography>
                    <TextField InputProps={{
                      style: {
                        height: '34px'
                      }
                    }} fullWidth placeholder="Digite aqui" />
                  </Grid>

                </Grid>
              </AccordionDetails>
            </Box>

            <Box sx={{ width: '100%' }}>
              <AccordionDetails>
                <Typography variant="h6" sx={{ py: '10px', fontWeight: 'bold', fontSize: '18px', p: '10px 10px', mb: '10px', }}>
                  Ensino
                </Typography>
                <Grid container spacing={2} sx={{ width: '100%' }}>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Histórico escolar</Typography>
                    <Button sx={{
                      fontSize: '12px', color: '#000', borderRadius: '10px', border: '1px #D6D6D6 solid', width: '100%', display: 'flex',
                      justifyContent: 'flex-start',
                      gap: '8px',
                      textTransform: 'none'
                    }}><img src={TextSend} /> clique para enviar</Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Atestado de conclusão</Typography>
                    <Button sx={{
                      fontSize: '12px', color: '#000', borderRadius: '10px', border: '1px #D6D6D6 solid', width: '100%', display: 'flex',
                      justifyContent: 'flex-start',
                      gap: '8px',
                      textTransform: 'none'
                    }}><img src={TextSend} /> clique para enviar</Button>
                  </Grid>


                </Grid>
              </AccordionDetails>
            </Box>

            <Box sx={{ width: '100%' }}>
              <AccordionDetails>
                <Typography variant="h6" sx={{ py: '10px', fontWeight: 'bold', fontSize: '18px', p: '10px 10px', mb: '10px', }}>
                  Outros arquivos
                </Typography>
                <Grid container spacing={2} sx={{ width: '100%' }}>
                  <Grid item xs={12} >
                    <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Outros arquivos</Typography>
                    <Button sx={{
                      fontSize: '12px', color: '#000', borderRadius: '10px', border: '1px #D6D6D6 solid', width: '100%', display: 'flex',
                      justifyContent: 'flex-start',
                      gap: '8px',
                      textTransform: 'none',
                      mb: '20px'
                    }}><img src={Enviar} /> clique para enviar</Button>

                    <Button sx={{
                      fontSize: '12px', color: '#000', borderRadius: '10px', border: '1px #D6D6D6 solid', width: '100%', display: 'flex',
                      justifyContent: 'flex-start',
                      gap: '8px',
                      textTransform: 'none',
                      mb: '20px'
                    }}><img src={Enviar} /> Arquivo.type</Button>
                  </Grid>


                </Grid>
              </AccordionDetails>
            </Box>
          </Accordion>

        </Box>

        <Box sx={{ width: '100%', padding: '10px 0px', borderRadius: '10px' }}>
          <Accordion expanded={expandedPanel === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                borderRadius: '8px',
                backgroundColor: expandedPanel === 'panel2' ? '#FFDAC6' : '#FFF',
                '&:hover': {
                  backgroundColor: '#FFDAC6',
                },
                '&:active': {
                  backgroundColor: '#FFDAC6',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                },
              }}
            ><Box>
                <img src={IconFamilia}  alt="Icone School" />
                <Typography sx={{mt:'8px', fontSize:'14px'}}>Editar familiares</Typography>
              </Box>

              
            </AccordionSummary>
            <AccordionDetails>
              <Box width='100%' >
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, width: '100%' }}>
                  
                
              <Box sx={{ width: { lg: '50%' } }}>
                <AccordionDetails>
                  <Typography variant="h6" sx={{ py: '10px', fontWeight: 'bold', fontSize: '18px', p: '10px 10px', mb: '10px', }}>Dados pessoais</Typography>
                  <Grid container spacing={2} sx={{ width: '100%', }}>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Nome completo <span style={{ color: "#EC0000" }}>*</span></Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Parentesco <span style={{ color: "#EC0000" }}>*</span></Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Representante Legal</Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Data de nascimento</Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>RG/CPF <span style={{ color: "#EC0000" }}>*</span></Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>

                  </Grid>
                </AccordionDetails>
              </Box>
              <Box sx={{ width: { lg: '50%' } }}>
                <AccordionDetails>
                  <Typography variant="h6" sx={{ py: '10px', fontWeight: 'bold', fontSize: '18px', p: '10px 10px', mb: '10px', }}>Endereço</Typography>
                  <Grid container spacing={2} sx={{ width: '100%', }}>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Cep</Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Logradouro <span style={{ color: "#EC0000" }}>*</span></Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Numero</Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Complemento</Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Estado</Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '40%' }}>
                      <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Cidade</Typography>
                      <TextField InputProps={{
                        style: {
                          height: '34px'
                        }
                      }} fullWidth placeholder="Digite aqui" />
                    </Grid>

                  </Grid>
                </AccordionDetails>
              </Box>
              </Box>
              
              <Box sx={{ width: '100%' }}>
              <AccordionDetails>
                <Typography variant="h6" sx={{ py: '10px', fontWeight: 'bold', fontSize: '18px', p: '10px 10px', mb: '10px', }}>
                  Outros arquivos
                </Typography>
                <Grid container spacing={2} sx={{ width: '100%' }}>
                  <Grid item xs={12} >
                    <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Outros arquivos</Typography>
                    <Button sx={{
                      fontSize: '12px', color: '#000', borderRadius: '10px', border: '1px #D6D6D6 solid', width: '100%', display: 'flex',
                      justifyContent: 'flex-start',
                      gap: '8px',
                      textTransform: 'none',
                      mb: '20px'
                    }}><img src={Enviar} /> clique para enviar</Button>

                    <Button sx={{
                      fontSize: '12px', color: '#000', borderRadius: '10px', border: '1px #D6D6D6 solid', width: '100%', display: 'flex',
                      justifyContent: 'flex-start',
                      gap: '8px',
                      textTransform: 'none',
                      mb: '20px'
                    }}><img src={Enviar} /> Arquivo.type</Button>
                  </Grid>


                </Grid>
              </AccordionDetails>
            </Box>
              </Box>
              
              
            </AccordionDetails>
          </Accordion>


        </Box>

        <Stack direction={{ xs: 'column-reverse', sm: 'row' }} justifyContent={{ xs: 'center', lg: 'end' }} mt='1rem' gap='10px'>
          <Button sx={{
            color: "black", borderRadius: "8px", textTransform: "none", p: "8px 32px", fontSize: "20px", mr: { xs: "2rem", md: 0 },
            mb: { xs: 0, md: "1rem" },
            width:  { xs: '100%', lg: '145px' },
            border: '1px #ccc solid',
            '&:hover': {
              background: '#FF8C42', color: "white"
            },
          }}>Cancelar</Button>
          <Button sx={{
            color: "black", borderRadius: "8px", textTransform: "none", p: "8px 32px", fontSize: "20px", mr: { xs: "2rem", md: 0 },
            mb: { xs: 0, md: "1rem" },
            width:  { xs: '100%', lg: '145px' },
            border: '1px #ccc solid',
            '&:hover': {
              background: '#FF8C42', color: "white"
            },
          }}>Salvar</Button>

        </Stack>

      </Box>

    </Stack>
  )
}