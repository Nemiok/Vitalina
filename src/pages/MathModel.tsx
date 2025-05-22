import React from 'react';
import { Typography, Paper, Box, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Calculate, Assessment, Speed } from '@mui/icons-material';

import { MathJax, MathJaxContext } from 'better-react-mathjax';

const mathJaxConfig = {
  loader: { load: ['input/tex', 'output/chtml'] },
};


const MathModel = () => {
  const theme = useTheme();

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          🧮 Математическая модель изомеризации
        </Typography>
        <Typography variant="h6" gutterBottom>
          📌 Зачем нужна модель
        </Typography>
        <Typography paragraph>
          Для оценки эффективности процесса изомеризации важно предсказать:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Calculate />
            </ListItemIcon>
            <ListItemText primary="как меняется концентрация компонентов с течением времени" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Calculate />
            </ListItemIcon>
            <ListItemText primary="насколько глубоко переработано сырьё" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Calculate />
            </ListItemIcon>
            <ListItemText primary="достигается ли заданное октановое число" />
          </ListItem>
        </List>
        <Typography paragraph>
          Математическая модель, встроенная в программу, позволяет выполнять эти расчёты автоматически, на основе введённых параметров.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          🧠 Основа: модель реактора идеального вытеснения (PFR)
        </Typography>
        <Typography paragraph>
          Система использует модель реактора идеального вытеснения (Plug Flow Reactor, PFR), в которой предполагается:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Speed />
            </ListItemIcon>
            <ListItemText primary="поступательное движение потока без перемешивания" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Speed />
            </ListItemIcon>
            <ListItemText primary="одинаковое время пребывания для всех элементов объёма" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Speed />
            </ListItemIcon>
            <ListItemText primary="равномерность параметров на поперечном сечении" />
          </ListItem>
        </List>
        <Typography paragraph>
          Это приближает модель к реальным условиям трубчатого реактора изомеризации.
        </Typography>
      </Paper>
      
      <MathJaxContext config={mathJaxConfig}>
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            📐 Основное уравнение
          </Typography>

          <Typography paragraph>
            Для каждого компонента системы:
          </Typography>

          <Box
            sx={{
              p: 2,
              bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100',
              borderRadius: 1,
              mb: 2,
            }}
          >
            <MathJax>{"\\( \\frac{dC_i}{dt} = -k_i \\cdot C_i \\)"}</MathJax>
          </Box>

          <Typography variant="h6" gutterBottom>
            📌 Обозначения
          </Typography>

          <List dense sx={{ mb: 2 }}>
            <ListItem>
              <ListItemText
                primary={<><MathJax inline>{"\\( C_i \\)"}</MathJax> — концентрация компонента <i>i</i> (моль/л)</>}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<><MathJax inline>{"\\( k_i \\)"}</MathJax> — константа скорости реакции (1/ч)</>}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<><MathJax inline>{"\\( t \\)"}</MathJax> — время пребывания (ч)</>}
              />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom>
            🧮 Решение
          </Typography>

          <Box
            sx={{
              p: 2,
              bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100',
              borderRadius: 1,
              mb: 2,
            }}
          >
            <MathJax>{"\\( C_i(t) = C_{i0} \\cdot e^{-k_i t} \\)"}</MathJax>
          </Box>

          <Typography paragraph>
            При необходимости учитываются и побочные реакции, влияние температуры и давления, а также механизм через карбкатионы.
          </Typography>
        </Paper>
      </MathJaxContext>

      <MathJaxContext config={mathJaxConfig}>
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            🌡 Влияние параметров
          </Typography>

          <Typography paragraph>
            Константа скорости определяется по уравнению Аррениуса:
          </Typography>

          <Box
            sx={{
              p: 2,
              bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100',
              borderRadius: 1,
              mb: 2,
            }}
          >
            <MathJax>{"\\( k = A \\cdot e^{-\\frac{E_a}{RT}} \\)"}</MathJax>
          </Box>

          <Typography variant="h6" gutterBottom>
            📌 Обозначения
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText
                primary={<><MathJax inline>{"\\( A \\)"}</MathJax> — предэкспоненциальный множитель</>}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<><MathJax inline>{"\\( E_a \\)"}</MathJax> — энергия активации</>}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<><MathJax inline>{"\\( R \\)"}</MathJax> — универсальная газовая постоянная</>}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<><MathJax inline>{"\\( T \\)"}</MathJax> — температура в K</>}
              />
            </ListItem>
          </List>
        </Paper>
      </MathJaxContext>  

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          📈 Результаты расчёта
        </Typography>
        <Typography paragraph>
          Программа на основе заданных параметров (сырьё, катализатор, температура, давление, расход, время пребывания) рассчитывает:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Assessment />
            </ListItemIcon>
            <ListItemText primary="графики изменения концентраций компонентов" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Assessment />
            </ListItemIcon>
            <ListItemText primary="состав продукта на выходе" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Assessment />
            </ListItemIcon>
            <ListItemText primary="предполагаемое октановое число" />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          🛠 Практическое применение
        </Typography>
        <Typography paragraph>
          Модель позволяет:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Calculate />
            </ListItemIcon>
            <ListItemText primary="спрогнозировать эффективность без опытных запусков" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Calculate />
            </ListItemIcon>
            <ListItemText primary="подобрать оптимальное сочетание катализатора и условий" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Calculate />
            </ListItemIcon>
            <ListItemText primary="оценить, соответствует ли продукт нормативам (Евро-5 и выше)" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default MathModel; 