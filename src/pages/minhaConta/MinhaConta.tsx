import * as React from 'react';
import { Box, Button, Grid, Stack, TextField, Typography, Modal } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo1 from '../../images/pose1.svg'
import logo2 from '../../images/pose2.svg'
import logo3 from '../../images/pose3.svg'
import logo4 from '../../images/pose4.svg'
import logo5 from '../../images/pose5.svg'
import logo6 from '../../images/pose6.svg'
import logo7 from '../../images/pose7.svg'
import logo8 from '../../images/pose8.svg'
import logo9 from '../../images/pose9.svg'

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '75%', sm: '60%', md: '40%' },
    height: '90%',
    bgcolor: 'background.paper',
    borderRadius: "8px",
    p: 2,
};

const MinhaConta: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedAvatar, setSelectedAvatar] = React.useState<string | null>(null); // Estado para armazenar o avatar selecionado
    const [tempSelectedAvatar, setTempSelectedAvatar] = React.useState<string | null>(null); // Estado temporário para armazenar o avatar selecionado

    const handleOpen = () => {
        setOpen(true);
        setTempSelectedAvatar(selectedAvatar); // Definir temporariamente o avatar selecionado para o estado temporário
    };

    const handleClose = () => setOpen(false);

    const handleAvatarSelect = (avatar: string) => {
        setTempSelectedAvatar(avatar); // Atualizar temporariamente o estado com o avatar selecionado
    };

    const handleRemoveAvatar = () => setSelectedAvatar(null); // Limpar o avatar selecionado

    const handleSaveAvatar = () => {
        setSelectedAvatar(tempSelectedAvatar); // Definir o avatar selecionado no estado principal após salvar
        handleClose(); // Fechar o modal após salvar
    };

    const images = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

    return (
        <>
            <Box>
                <Stack direction='row' alignItems='center' fontSize='30px' color='#422107' fontWeight='bold'>
                    <AccountCircleOutlinedIcon sx={{ color: '#B82900', width: "40px", fontSize: "40px", mr: "10px" }} />Minha Conta
                </Stack>
                <Typography color='#2F465E' mt='10px'>Edite alguns de seus dados cadastrais</Typography>

                <Box sx={{ mt: "2rem", ml: '1rem' }}>
                    <Typography variant='h6'>Avatar</Typography>
                    <Stack direction='row' mt='1rem' alignItems='center' gap='1rem'>
                        {selectedAvatar ? (
                            <img src={selectedAvatar} alt="Avatar" style={{ width: "124px", height: "124px", borderRadius: "50%", background: "#D9D9D9", objectFit:"contain" }} />
                        ) : (
                            <Typography
                                sx={{ width: "124px", height: "124px", borderRadius: "50%", background: "#D9D9D9", cursor: 'pointer' }}
                                onClick={handleOpen}
                            ></Typography>
                        )}
                        <Stack gap='1rem'>
                            <Button onClick={handleOpen} sx={{ color: "#FF7224", border: "1px solid #FF7224", borderRadius: "8px", fontSize: { xs: "12px", sm: "16px" } }}>Editar Avatar</Button>
                            <Button onClick={handleRemoveAvatar} sx={{ justifyContent: "flex-start", color: "#FF0000", fontSize: { xs: "12px", sm: "16px" } }}>Remover Avatar</Button>
                        </Stack>
                    </Stack>
                </Box>



                <Grid container spacing={4} sx={{ width: 'auto', mt: "1rem" }}>
                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '40%' }}>
                        <Typography mb='10px'>Nome</Typography>
                        <TextField fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '40%' }}>
                        <Typography mb='10px'>Telefone</Typography>
                        <TextField fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '40%' }}>
                        <Typography mb='10px'>Endereço</Typography>
                        <TextField fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ width: '40%' }}>
                        <Typography mb='10px'>E-mail</Typography>
                        <TextField fullWidth />
                    </Grid>
                </Grid>

                <Box display='flex' mt='2rem' sx={{ justifyContent: { xs: 'center', sm: "flex-end" } }}>
                    <Button sx={{
                        background: '#FF7224', color: "white", borderRadius: "8px", textTransform: "none", p: "8px 32px", fontSize: "20px",
                        '&:hover': {
                            background: '#FF8C42'
                        },
                    }}>Salvar alterações</Button>
                </Box>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle} style={{ overflow: 'auto' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight='bold'>
                            Avatar
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", mt: 2 }}>
                            <Typography id="modal-modal-description" color='#7A7A7A'>
                                Seu avatar
                            </Typography>
                            <Box sx={{
                                width: '100px', height: "100px", background: '#D9D9D9', borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", my: 1
                            }}>
                                {tempSelectedAvatar && ( // Mostrar o avatar temporário selecionado apenas se estiver selecionado temporariamente
                                    <img
                                        src={tempSelectedAvatar}
                                        alt="Avatar"
                                        style={{ width: "70px", position: "relative", cursor: 'pointer' }}
                                        onClick={() => handleAvatarSelect(tempSelectedAvatar)} // Atualizar temporariamente o avatar selecionado
                                    />
                                )}
                            </Box>

                            <Box sx={{ width: '100%', height: '1px', backgroundColor: '#D6D6D6', my: 3, mx: 'auto' }} />
                        </Box>

                        <Box>
                            <Typography color='#242424' fontWeight='bold'>Escolha um avatar</Typography>
                        </Box>

                        <Grid container>
                            {images.map((image, index) => (
                                <Grid item key={index} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box
                                        sx={{
                                            width: '70px', height: '70px', background: '#FFF0E8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', my: 1,
                                            mx: { xs: 'auto' }, // Centralizar horizontalmente
                                            mr: { xs: '10px' }, // Adicionar margem direita entre as imagens
                                            ml: { xs: '10px' }, // Adicionar margem esquerda entre as imagens
                                        }}
                                    >
                                        <img
                                            src={image}
                                            alt={`Pose ${index + 1}`}
                                            style={{ width: '50px', position: 'relative', cursor: 'pointer' }} // Adicionando cursor pointer para indicar que é clicável
                                            onClick={() => handleAvatarSelect(image)} // Atualizar temporariamente o avatar selecionado
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                        <Stack direction={{ xs: 'column-reverse', sm: 'row' }} justifyContent='center' mt='1rem' gap='10px'>
                            <Button onClick={handleClose} sx={{
                                color: "black", borderRadius: "8px", textTransform: "none", p: "8px 32px", fontSize: "20px", mr: { xs: "2rem", md: 0 },
                                mb: { xs: 0, md: "1rem" },
                                width: '100%',
                                '&:hover': {
                                    background: '#FF8C42', color: "white"
                                },
                            }}>Cancelar</Button>
                            <Button onClick={handleSaveAvatar} sx={{
                                color: "black", borderRadius: "8px", textTransform: "none", p: "8px 32px", fontSize: "20px", mr: { xs: "2rem", md: 0 },
                                mb: { xs: 0, md: "1rem" },
                                width: '100%',
                                '&:hover': {
                                    background: '#FF8C42', color: "white"
                                },
                            }}>Salvar</Button>

                        </Stack>
                    </Box>
                </Modal>
            </Box>
        </>
    );
}

export default MinhaConta;

