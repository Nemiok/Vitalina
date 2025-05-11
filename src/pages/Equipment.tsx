import { Typography, Paper, Box, Grid, Card, CardContent, List, ListItem, ListItemText, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { LocalFireDepartment, SwapHoriz, Science, Compress, Settings } from '@mui/icons-material';

const apparatusParts = [
  {
    name: 'Реактор',
    purpose: 'Изомеризация сырья',
    type: 'Трубчатый',
    typicalParams: '150 °C, 2.5 МПа',
  },
  {
    name: 'Теплообменник',
    purpose: 'Подогрев сырья',
    type: 'Кожухотрубчатый',
    typicalParams: 'ΔT ≈ 50–100 °C',
  },
  {
    name: 'Колонна стабилизации',
    purpose: 'Разделение компонентов',
    type: 'Ректификационная',
    typicalParams: '10–20 тарелок, 1–3 МПа',
  },
  {
    name: 'Сепаратор',
    purpose: 'Газожидкостное разделение',
    type: 'Горизонтальный',
    typicalParams: '0.5–1.5 м³ объёма',
  },
  {
    name: 'Насос сырья',
    purpose: 'Перекачка жидкой смеси',
    type: 'Центробежный',
    typicalParams: 'До 100 м³/ч',
  },
];

const Equipment = () => {
  const equipmentItems = [
    {
      icon: <LocalFireDepartment fontSize="large" />,
      title: 'Реактор изомеризации',
      description: 'Зона протекания основной химической реакции. Трубчатая конструкция с футеровкой и теплоизоляцией. Рабочие параметры: 120–180 °C, 1–3 МПа, наличие циркуляции водорода.',
    },
    {
      icon: <SwapHoriz fontSize="large" />,
      title: 'Теплообменники',
      description: 'Предварительный подогрев сырья и утилизация тепла. Типы: кожухотрубчатые, пластинчатые. Роль: экономия энергоресурсов, стабилизация температурного режима.',
    },
    {
      icon: <Science fontSize="large" />,
      title: 'Колонна стабилизации',
      description: 'Разделение реакционной смеси и удаление лёгких фракций. Принцип: ректификация. Выход: изомеризат (основной продукт), лёгкие газы (вверх), тяжёлые фракции (низ).',
    },
    {
      icon: <Compress fontSize="large" />,
      title: 'Абсорбер или сепаратор',
      description: 'Разделение газа и жидкости, отделение водорода. Важность: предотвращает потерю катализатора и обеспечивает регенерацию водорода.',
    },
    {
      icon: <Settings fontSize="large" />,
      title: 'Насосы и компрессоры',
      description: 'Обеспечение циркуляции сырья, продуктов и водорода. Параметры: производительность подбирается под поток и давление.',
    },
  ];

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          🧱 Оборудование установок изомеризации
        </Typography>
        <Typography variant="h6" gutterBottom>
          📦 Основные компоненты
        </Typography>
        <Typography paragraph>
          Установка изомеризации включает в себя набор типового химико-технологического оборудования. Каждый элемент играет ключевую роль в обеспечении безопасного и эффективного протекания процесса.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {equipmentItems.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ mr: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" component="h2">
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={3} sx={{ p: 4, mb: 4, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
        🧾 Таблица компонентов
        </Typography>
        
        <TableContainer sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Оборудование</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Назначение</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Тип</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Параметры (типично)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apparatusParts.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.purpose}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.typicalParams}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          🔎 Подбор оборудования в программе
        </Typography>
        <Typography paragraph>
          Разработанный программный комплекс автоматически выбирает оборудование на основе следующих параметров:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Производительность (м³/ч)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Рабочая температура и давление" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Характеристики катализатора" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Требуемый октановый уровень" />
          </ListItem>
        </List>
        <Typography paragraph>
          Каждое решение логически обосновано и согласовано с данными в базе.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Equipment; 