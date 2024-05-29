// src/pages/HomePage/ErpContent.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';

const ErpContent: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{mt:'3rem'}}>
        Seção ERP
      </Typography>
      <Typography variant="body1">
        Aqui você pode acessar e gerenciar o sistema ERP.
      </Typography>
    </Box>
  );
};

export default ErpContent;
