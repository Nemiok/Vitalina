import React from 'react';
import { Typography, Paper, Box, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { Description, Download, Science, Build, Calculate } from '@mui/icons-material';

const Documentation = () => {
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          📚 Документация
        </Typography>
        <Typography variant="h6" gutterBottom>
          📌 Руководство пользователя
        </Typography>
        <Typography paragraph>
          Полное руководство пользователя содержит подробное описание всех функций программы, примеры расчётов и рекомендации по работе с системой.
        </Typography>
        <Button
          variant="contained"
          startIcon={<Download />}
          sx={{ mt: 2 }}
        >
          Скачать руководство (PDF)
        </Button>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          📋 Техническая документация
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Science />
            </ListItemIcon>
            <ListItemText 
              primary="Математическая модель" 
              secondary="Описание уравнений и алгоритмов расчёта"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Build />
            </ListItemIcon>
            <ListItemText 
              primary="База данных оборудования" 
              secondary="Справочник типового оборудования и его характеристик"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Calculate />
            </ListItemIcon>
            <ListItemText 
              primary="Методика расчётов" 
              secondary="Подробное описание методики подбора оборудования и катализаторов"
            />
          </ListItem>
        </List>
        <Button
          variant="contained"
          startIcon={<Download />}
          sx={{ mt: 2 }}
        >
          Скачать техническую документацию (PDF)
        </Button>
      </Paper>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          📝 Примеры отчётов
        </Typography>
        <Typography paragraph>
          Примеры типовых отчётов, генерируемых программой:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText 
              primary="Протокол расчёта" 
              secondary="Пример расчёта изомеризации н-гексана"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText 
              primary="Справка по установке" 
              secondary="Технические характеристики подобранного оборудования"
            />
          </ListItem>
        </List>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            startIcon={<Download />}
            sx={{ mr: 2 }}
          >
            Скачать пример отчёта (Excel)
          </Button>
          <Button
            variant="contained"
            startIcon={<Download />}
          >
            Скачать пример отчёта (PDF)
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Documentation; 