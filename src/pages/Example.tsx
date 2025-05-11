import React from 'react';
import { Typography, Paper, Box, List, ListItem, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Calculate, Assessment, Build } from '@mui/icons-material';

const dataInput = [
  {
    paramName: 'Сырьё',
    value: 'н-гексан',
  },
  {
    paramName: 'Катализатор',
    value: 'ИП-62ВК',
  },
  {
    paramName: 'Температура',
    value: '140 °C',
  },
    {
    paramName: 'Давление',
    value: '2.5 МПа',
  },
  {
    paramName: 'Расход сырья',
    value: '100 м³/ч',
  },
  {
    paramName: 'Время пребывания',
    value: '10 мин',
  },
  {
    paramName: 'Требуемое октановое число',
    value: '≥ 85',
  },
];

const computationResults = [
  { component: 'н-гексан', before: '92.0', after: '5.2' },
  { component: '2-метилпентан', before: '3.1', after: '44.3' },
  { component: '3-метилпентан', before: '2.7', after: '43.8' },
  { component: '2,2-диметилбутан', before: '1.0', after: '5.6' },
  { component: '2,3-диметилбутан', before: '1.2', after: '1.1' },
];


const Example = () => {

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          📊 Пример расчёта изомеризации
        </Typography>

          <Typography variant="h6" gutterBottom>
          📌 Вводные данные
        </Typography>
        
        <TableContainer sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ fontWeight: 700, fontSize: 18 }}>Параметр</TableCell>
                <TableCell align="left" sx={{ fontWeight: 700, fontSize: 18 }}>Значение</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataInput.map((row) => (
                <TableRow key={row.paramName}>
                  <TableCell align="left">{row.paramName}</TableCell>
                  <TableCell align="left">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          🧮 Результаты расчёта
        </Typography>
        <Typography paragraph>
          После нажатия кнопки «Рассчитать» программа автоматически:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Build />
            </ListItemIcon>
            <ListItemText primary="подобрала подходящий реактор и теплообменник" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Calculate />
            </ListItemIcon>
            <ListItemText primary="рассчитала концентрации веществ на выходе" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Assessment />
            </ListItemIcon>
            <ListItemText primary="спрогнозировала октановое число готового продукта" />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          📋 Выходной состав (моль%)
        </Typography>
         <TableContainer sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ fontWeight: 700, fontSize: 18 }}>Компонент</TableCell>
                <TableCell align="left" sx={{ fontWeight: 700, fontSize: 18 }}>До реакции</TableCell>
                <TableCell align="left" sx={{ fontWeight: 700, fontSize: 18 }}>После реакции</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {computationResults.map((row) => (
                <TableRow key={row.component}>
                  <TableCell align="left">{row.component}</TableCell>
                  <TableCell align="left">{row.before}</TableCell>
                  <TableCell align="left">{row.after}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          🟢 Итог
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Расчётное октановое число: 86.4"
              secondary="Энергопотребление: 14.2 ГДж/сутки"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Выбор оборудования:"
              secondary={
                <>
                  Реактор: трубчатый, 12 м³<br />
                  Теплообменник: кожухотрубчатый, S=34 м²
                </>
              }
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Example; 