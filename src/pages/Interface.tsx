import React from 'react';
import { Typography, Paper, Box, List, ListItem, ListItemIcon, ListItemText, Grid, Card, CardContent } from '@mui/material';
import { Computer, Settings, Assessment, Description, Build, Speed } from '@mui/icons-material';

const Interface = () => {
  const features = [
    {
      icon: <Computer />,
      title: 'Главное окно',
      description: 'Поля ввода параметров, выпадающие списки выбора катализатора и сырья, кнопки управления.',
    },
    {
      icon: <Settings />,
      title: 'Режим проектировщика',
      description: 'Ввод технического задания, анализ результатов, построение графиков.',
    },
    {
      icon: <Build />,
      title: 'Административный режим',
      description: 'Управление справочными данными, редактирование баз катализаторов и оборудования.',
    },
    {
      icon: <Assessment />,
      title: 'Визуализация',
      description: 'Автоматическое построение графиков изменения концентраций, температурных профилей.',
    },
    {
      icon: <Description />,
      title: 'Отчётность',
      description: 'Формирование Excel и PDF отчётов с протоколом расчёта и справкой по установке.',
    },
    {
      icon: <Speed />,
      title: 'Офлайн работа',
      description: 'Все расчёты и сохранения выполняются локально, без подключения к интернету.',
    },
  ];

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          🖥 Интерфейс программы
        </Typography>
        <Typography variant="h6" gutterBottom>
          📌 Назначение
        </Typography>
        <Typography paragraph>
          Программа разработана с учётом удобства для проектировщика. В интерфейсе реализованы два режима:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText 
              primary="Режим проектировщика" 
              secondary="для ввода технического задания и анализа результатов"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Build />
            </ListItemIcon>
            <ListItemText 
              primary="Режим администратора" 
              secondary="для управления справочными данными (оборудование, катализаторы, сырьё)"
            />
          </ListItem>
        </List>
        <Typography paragraph>
          Программа построена на языке C# с применением технологий Windows Forms и встроенной СУБД SQLite.
        </Typography>
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        🔳 Основные элементы интерфейса
      </Typography>

      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" component="h2" gutterBottom align="center">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          📝 Этапы работы в режиме проектировщика
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="1. Ввод технического задания"
              secondary="Тип сырья, желаемое октановое число, расход и параметры реакции (T, P, время)"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="2. Запуск расчёта"
              secondary="Автоматический подбор оборудования, расчёт выхода и октанового числа, построение графиков"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="3. Просмотр результатов"
              secondary="Таблица с результатами, кнопка «Графики» для вывода концентраций и зависимости октанового числа"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="4. Сохранение отчёта"
              secondary="Экспорт Excel с двумя листами: «Протокол расчёта» и «Справка по установке». Возможность сохранения как PDF"
            />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          📂 Административный режим
        </Typography>
        <List>
          <ListItem>
            - редактирование базы катализаторов и оборудования;
          </ListItem>
          <ListItem>
            - добавление новых элементов в справочники;
          </ListItem>
          <ListItem>
            - просмотр таблицы напрямую через интерфейс;
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          📈 Визуализация
        </Typography>

        <Typography paragraph>
          Графики строятся автоматически:
        </Typography>

        <List>
          <ListItem>
            - изменение концентраций веществ по времени;
          </ListItem>
          <ListItem>
            - прогноз октанового числа;
          </ListItem>
          <ListItem>
            - температурный профиль;
          </ListItem>
        </List>
      </Paper>

       <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
         💡 Дополнительно
        </Typography>

        <List>
          <ListItem>
            - программа работает офлайн, не требует подключения к интернету;
          </ListItem>
          <ListItem>
            - все расчёты и сохранения выполняются локально;
          </ListItem>
          <ListItem>
            - справочная система вызывается из главного окна по кнопке «Справка»;
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Interface; 