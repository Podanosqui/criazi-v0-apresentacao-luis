import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import logo from '../../images/Link → logo-escolas-HORIZO.png.svg'
import { useNavigate } from 'react-router-dom';


const textFieldStyles = {
    color: '#422107',
    borderRadius: '8px',
    background:"white",
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#A3A3A3',
    }
};

export default function RecuperarSenha() {

    const navigate = useNavigate();

    const handleSalvar = () => {
        navigate('/');
    };

    return (
        <>
            <Box sx={{ background: "#FFEBE0", width: '100%', height: '100vh', display: "flex", justifyContent: "center", alignItems: 'center' }}>
                <Box sx={{ background: {sm:"#fff",xs:"#FFEBE0"}, maxWidth: 600, width: "100%", p: "2rem", m: '10px', borderRadius: "1rem",}}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                        <img src={logo} alt="logo"  />
                    </Box>
                    <Stack sx={{ p: "0.5rem", my: "0.5rem" }}>
                        <Typography variant="h6" fontWeight='bold'> Defina uma nova senha</Typography>
                        <Typography sx={{mb: "1rem" }}>Você está alterando a senha do e-mail marquinhos@outlook.com</Typography>
                        <Typography variant="body2" fontWeight='bold'>
                          Nova senha<span style={{color:"#EC0000"}}>*</span>
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            placeholder='Email@exemplo.com'
                            type="password"
                            InputProps={{
                                sx: textFieldStyles,
                            }}
                        />


                        <Typography variant="body2" fontWeight='bold' sx={{mt:'10px'}}> 
                         Repita sua nova senha<span style={{color:"#EC0000"}}>*</span>
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            placeholder='Email@exemplo.com'
                            type="password"
                            InputProps={{
                                sx: textFieldStyles,
                            }}
                        />

                        <Button 
                            sx={{
                                background: '#FF7224', 
                                color: "white", 
                                width: "100%", 
                                p: '8px 16px 8px 16px', 
                                fontSize: "16px",
                                textTransform:"none",
                                borderRadius:"8px",
                                mt:"3rem",
                                '&:hover': {
                                    background: '#FF7224', // mantém a mesma cor de fundo no hover
                                }
                            }}
                            onClick={handleSalvar} 
                        >
                            Salvar
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}
