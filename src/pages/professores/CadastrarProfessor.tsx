import { Stack, Typography } from "@mui/material";

//Icons
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';

export default function CadastrarProfessor() {
    return (
        <>
            <Stack direction="row" alignItems="center" width="100%">
                <DesignServicesOutlinedIcon sx={{ color: "#b82900", mr: 2 }} fontSize='large' />
                <Typography
                    fontSize="24px"
                    fontWeight="600"
                >
                    Cadastrar professor
                </Typography>
            </Stack>
        </>
    );
}