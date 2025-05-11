import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFound = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
    <Paper elevation={3} sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ErrorOutlineIcon color="error" sx={{ fontSize: 64, mb: 2 }} />
      <Typography variant="h3" fontWeight={700} gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Страница не найдена
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Такой страницы не существует или она была перемещена.
      </Typography>
      <Button variant="contained" color="primary" component={RouterLink} to="/">
        На главную
      </Button>
    </Paper>
  </Box>
);

export default NotFound; 