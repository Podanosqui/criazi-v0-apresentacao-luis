import { Box, Button, FormControl, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import logo from '../../images/Link → logo-escolas-HORIZO.png.svg' // Verifique se o caminho da imagem está correto
import { VisibilityOff } from "@mui/icons-material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const textFieldStyles = {
    color: '#422107',
    borderRadius: '8px',
    background: "white",
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#A3A3A3', // Ajustando a cor da borda quando não está em foco
    }
};

interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    {
        const [_password, setPassword] = useState('');
        const [showPassword, setShowPassword] = useState(false);
        const navigate = useNavigate();

        const handleClickShowPassword = () => {
            setShowPassword(!showPassword);
        };

        const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
        };

        const handleLogin = () => {
            navigate('/home');
            onLogin();
        };

        return (
            <Box sx={{ background: "#FFEBE0", width: '100%', height: '100vh', display: "flex", justifyContent: "center", alignItems: 'center' }}>
                <Box sx={{ background: { sm: "#fff", xs: "#FFEBE0" }, maxWidth: 600, width: "100%", p: "2rem", m: '10px', borderRadius: "1rem" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                        <img src={logo} alt="logo" />
                    </Box>
                    <Stack sx={{ p: "0.5rem", my: "0.5rem" }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: "1rem" }}>Fazer login</Typography>
                        <Typography variant="body2" fontWeight='bold'>
                            E-mail<span style={{ color: "#EC0000" }}>*</span>
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            placeholder='Email@exemplo.com'
                            InputProps={{
                                sx: textFieldStyles,
                            }}
                        />
                        <Box>
                            <Typography variant="body2" sx={{ mt: "1rem", fontWeight: "bold" }}>
                                Senha<span style={{ color: "#EC0000" }}>*</span>
                            </Typography>
                        </Box>
                        <FormControl sx={{ my: 1 }} fullWidth variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="***********"
                                sx={{
                                    borderRadius: "0.5rem",
                                    color: "#422107",
                                    background: "white",
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#A3A3A3', // Ajustando a cor da borda quando não está em foco
                                    },
                                }}
                            />
                        </FormControl>
                        <Typography variant="body2" sx={{ mb: '3em', cursor: 'pointer' }} onClick={() => navigate('/esqueci-senha')}>
                            Esqueci minha senha
                        </Typography>
                        <Button
                            sx={{
                                background: '#FF7224',
                                color: "white",
                                width: "100%",
                                p: '8px 16px 8px 16px',
                                fontSize: "16px",
                                textTransform: "none",
                                borderRadius: "8px",
                                '&:hover': {
                                    background: '#FF7224', // mantém a mesma cor de fundo no hover
                                }
                            }}
                            onClick={handleLogin}
                        >
                            Entrar
                        </Button>
                    </Stack>
                </Box>
            </Box>
        );
    }
}

export default Login;
