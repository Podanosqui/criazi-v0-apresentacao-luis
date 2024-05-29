import { Box, Button, Grid, Stack, TextField, Typography }
  from "@mui/material"

import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";




const CustomTextField = styled(TextField)(() => ({
  '& .MuiInputLabel-root': {
    display: 'none',

  },
  '& .MuiInputBase-root': {
    height: '34px',
    '& input': {
      '&::placeholder': {
        opacity: 1,
        color: '#ccc',
      },
    },
  },
}));
const Consumo = [
  { label: 'Selecione uma opção' },
  { label: 'Selecione uma opção' },
  { label: 'Selecione uma opção' },
  { label: 'Selecione uma opção' },
];




export default function CadastrarTurma() {

  const navigate = useNavigate();

  return (

    <Box sx={{ width: { lg: '100%' } }}>

      <Stack direction="row" alignItems="center" width="100%">
      <Button onClick={() =>{navigate('/turmas')}} sx={{ color: '#422107' }}> <ArrowBackIosIcon /></Button>
        <Typography
          fontSize="24px"
          fontWeight="600"
          sx={{ color: '#422107' }}
        >
          Cadastrar aluno
        </Typography>
      </Stack>

      
      <Grid container spacing={2} sx={{ width: '100%', }}>
        <Grid item xs={12} lg={6} sx={{ width: '40%' }}>
          <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Ano<span style={{ color: "#EC0000" }}>*</span></Typography>
          <TextField InputProps={{
            style: {
              height: '34px'
            }
          }} fullWidth placeholder="Digite aqui" />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ width: '40%' }}>
          <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Classe<span style={{ color: "#EC0000" }}>*</span></Typography>
          <TextField InputProps={{
            style: {
              height: '34px'
            }
          }} fullWidth placeholder="Digite aqui" />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ width: '40%' }}>
          <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Turno <span style={{ color: "#EC0000" }}>*</span></Typography>
          <TextField InputProps={{
            style: {
              height: '34px'
            }
          }} fullWidth placeholder="Digite aqui" />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ width: '40%' }}>
          <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Modulos</Typography>
         
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Consumo}
            renderInput={(params) => (
              <CustomTextField
                {...params}
                placeholder="Selecione uma opção"
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Selecione uma opção"}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ width: '40%' }}>
          <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Professores</Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Consumo}
            renderInput={(params) => (
              <CustomTextField
                {...params}
                placeholder="Selecione uma opção"
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Selecione uma opção"}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ width: '40%' }}>
          <Typography sx={{ py: '10px', fontSize: '12px', fontWeight: 'bold' }}>Alunos</Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Consumo}
            renderInput={(params) => (
              <CustomTextField
                {...params}
                placeholder="Selecione uma opção"
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Selecione uma opção"}
              />
            )}
          />
        </Grid>

      </Grid>

      <Stack direction={{ xs: 'column-reverse', sm: 'row', }} justifyContent={{ xs: 'center', lg: 'end' }} mt='1rem'  gap='10px'>
        <Button sx={{
          color: "black", borderRadius: "8px", textTransform: "none", p: "8px 32px", fontSize: "18px", mr: { xs: "2rem", md: 0 },
          mb: { xs: 0, md: "1rem" },
          width: { xs: '100%', lg: '145px' },
          border: '1px #ccc solid',
          '&:hover': {
            background: '#FF8C42', color: "white"
          },
        }}>Cancelar</Button>
        <Button sx={{
          color: "black", borderRadius: "8px", textTransform: "none", p: "8px 32px", fontSize: "18px", mr: { xs: "2rem", md: 0 },
          mb: { xs: 0, md: "1rem" },
          width: { xs: '100%', lg: '145px' },
          border: '1px #ccc solid',
          '&:hover': {
            background: '#FF8C42', color: "white"
          },
        }}>Salvar</Button>

      </Stack>

    </Box>

  )
}