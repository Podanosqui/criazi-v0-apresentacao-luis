import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import logo from '../../images/Link → logo-escolas-HORIZO.png.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


const textFieldStyles = {
    color: '#422107',
    borderRadius: '8px',
    background:"white",
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#A3A3A3', // Ajustando a cor da borda quando não está em foco
    }
};

export default function EsqueciSenha() {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleReceberEmail = () => {
        // Aqui você pode adicionar lógica para enviar o e-mail de recuperação de senha
        // Após enviar o e-mail com sucesso, redirecione para a página de redefinição de senha
        navigate('/redefinir-senha');
    };


    return (
        <>
            <Box sx={{ background: "#FFEBE0", width: '100%', height: '100vh', display: "flex", justifyContent: "center", alignItems: 'center' }}>
                <Box sx={{ background: {sm:"#fff",xs:"#FFEBE0"}, maxWidth: 600, width: "100%", p: "2rem", m: '10px', borderRadius: "1rem",}}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                        <img src={logo} alt="logo"  />
                    </Box>
                    <Stack sx={{ p: "0.5rem", my: "0.5rem" }}>
                        <Typography variant="h6" fontWeight='bold'> Recuperar Senha</Typography>
                        <Typography sx={{mb: "1rem" }}>Enviaremos as informações o link para alterar sua senha no e-mail digitado.</Typography>
                        <Typography variant="body2" fontWeight='bold'>
                            E-mail<span style={{color:"#EC0000"}}>*</span>
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            placeholder='Email@exemplo.com'
                            InputProps={{
                                sx: textFieldStyles,
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            onClick={handleReceberEmail}
                        >
                            Receber e-mail
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}
