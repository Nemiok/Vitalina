import React from 'react';
import { Typography, Paper, Box, Card, CardContent } from '@mui/material';
import { Factory, Science, Calculate, Build, Assessment, Description } from '@mui/icons-material';

const Home = () => {
  const features = [
    {
      icon: <Calculate fontSize="large" />,
      title: 'Расчёт концентраций',
      description: 'Расчёт концентраций веществ по математической модели реактора идеального вытеснения.',
    },
    {
      icon: <Build fontSize="large" />,
      title: 'Выбор оборудования',
      description: 'Автоматизированный выбор оборудования по заданным параметрам.',
    },
    {
      icon: <Science fontSize="large" />,
      title: 'Подбор катализатора',
      description: 'Подбор катализатора из встроенной справочной базы.',
    },
    {
      icon: <Assessment fontSize="large" />,
      title: 'Визуализация',
      description: 'Графическая визуализация результатов: концентрации, температурные профили, октановое число.',
    },
    {
      icon: <Description fontSize="large" />,
      title: 'Отчётность',
      description: 'Формирование технического отчёта в формате Excel и PDF.',
    },
    {
      icon: <Factory fontSize="large" />,
      title: '3D-моделирование',
      description: 'Создание 3D-модели установки через интеграцию с системой визуализации PlantLinker.',
    },
  ];

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          🏭 Интеллектуальная система проектирования установок изомеризации
        </Typography>
        <Typography variant="h6" gutterBottom>
          📌 Назначение проекта
        </Typography>
        <Typography paragraph>
          Разрабатываемый программный комплекс предназначен для поддержки инженерного проектирования установок каталитической изомеризации лёгких бензиновых фракций, широко применяемых в нефтеперерабатывающей промышленности. Главная задача системы — обеспечить автоматизированный выбор оборудования и катализаторов, а также выполнить расчёты ключевых технологических параметров на основе заданного технического задания.
        </Typography>
        <Typography paragraph>
          Программа ориентирована на специалистов, занимающихся проектированием, оптимизацией и анализом изомеризационных процессов, и может применяться как в образовательной, так и в исследовательской среде.
        </Typography>
      </Paper>

      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        ⚙️ Основные возможности
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
        {features.map((feature, index) => (
          <Box key={index}>
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
          </Box>
        ))}
      </Box>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          🧠 Обоснование актуальности
        </Typography>
        <Typography paragraph>
          В условиях современной технологической и энергетической трансформации, значимость эффективной переработки углеводородного сырья резко возрастает. Изомеризация как один из ключевых процессов вторичной переработки позволяет:
        </Typography>
        <ul>
          <li>Повышать октановое число бензиновых фракций без использования вредных добавок</li>
          <li>Повышать выход товарного бензина</li>
          <li>Снижать экологическую нагрузку и обеспечить соответствие нормам Евро-5 и выше</li>
        </ul>
        <Typography paragraph>
          Разработка инструментов цифрового проектирования для таких установок отвечает задачам импортозамещения, устойчивого развития и цифровизации инженерной деятельности.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          🧩 Архитектура решения
        </Typography>
        <Typography paragraph>
          Программа реализована на языке C# с использованием встраиваемой базы данных SQLite. Вся логика расчётов, выборки из базы, построения графиков и подготовки отчётов реализуется локально, без необходимости подключения к интернету. Это делает систему универсальной и готовой к работе в изолированных промышленных контурах.
        </Typography>
        <Typography paragraph>
          Сайт, на котором вы находитесь, представляет собой справочно-презентационный модуль системы. Он описывает как теоретические основы процессов изомеризации, так и функциональные возможности разработанного программного обеспечения.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Home; 