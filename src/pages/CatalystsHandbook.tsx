import React from 'react';
import {
  Typography, Paper, Box, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ScienceIcon from '@mui/icons-material/Science';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BuildIcon from '@mui/icons-material/Build';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';

const requirements = [
  {
    icon: <SpeedIcon />,
    title: 'Высокая активность',
    description: 'При низких температурах',
  },
  {
    icon: <CheckCircleIcon />,
    title: 'Устойчивость',
    description: 'К отравлению (серой, водой, олефинами)',
  },
  {
    icon: <BuildIcon />,
    title: 'Простота регенерации',
    description: 'Возможность восстановления активности',
  },
  {
    icon: <ScienceIcon />,
    title: 'Длительный срок службы',
    description: 'Экономическая эффективность',
  },
];

const catalysts = [
  {
    name: 'ИП-62ВК',
    type: 'Платиновый',
    carrier: 'Al₂O₃, HCl',
    temp: '130–150',
    features: 'Высокая активность, устойчивость к сере',
  },
  {
    name: 'СИ-2',
    type: 'Платиновый',
    carrier: 'Хлорированный Al₂O₃',
    temp: '120–140',
    features: 'Используется в установках «Изомалк»',
  },
  {
    name: 'UOP Penex',
    type: 'Pt/Cl⁻',
    carrier: 'Запатентованный',
    temp: '130–160',
    features: 'Зарубежная лицензия, высокая эффективность',
  },
  {
    name: 'EUROCAT',
    type: 'Pt/Sn',
    carrier: 'Al₂O₃',
    temp: '150–180',
    features: 'Дополнительный модификатор — олово',
  },
  {
    name: 'ЛЖК-100',
    type: 'Без Pt',
    carrier: 'цеолит',
    temp: '180–220',
    features: 'Дешевле, но менее стабилен',
  },
];

const dualActivityRows = [
  {
    center: (
      <>
        <b>Кислотный</b> (AlCl<sub>3</sub>, H<sup>+</sup>,<br />хлорированные оксиды)
      </>
    ),
    function: 'Инициирует карбкатионную изомеризацию',
  },
  {
    center: (<><b>Металлический</b> (Pt, Pd)</>),
    function: 'Обеспечивает дегидрирование/гидрирование, удаляет примеси',
  },
];

const CatalystsHandbook = () => (
  <Box>
    <Paper elevation={3} sx={{ p: 4, mb: 4, display: 'flex', alignItems: 'center' }}>
      <ReceiptIcon sx={{ fontSize: 48, mr: 2 }} />
      <Typography variant="h4" component="h1" fontWeight={700}>
        Справочник катализаторов
      </Typography>
    </Paper>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">🧪 Катализаторы в изомеризации</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h6" gutterBottom>
          📚 Роль катализаторов
        </Typography>
        <Typography paragraph>
          Катализаторы — это ключевой элемент процесса изомеризации. Именно они обеспечивают:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="высокую скорость реакции при умеренных температурах" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="выборочное направление преобразования линейных алканов в их изомеры" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="стабильность и эффективность при многократной переработке сырья" />
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">🔬 Принцип действия</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <ListItem>
            <ListItemText primary="1. Линейный алкан адсорбируется на поверхности катализатора" />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. На кислотном центре создаётся карбкатион" />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. Происходит перегруппировка в разветвлённый изомер" />
          </ListItem>
          <ListItem>
            <ListItemText primary="4. Металлический центр восстанавливает молекулу и освобождает поверхность" />
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">🔄 Требования к катализатору</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 3, mb: 2 }}>
          {requirements.map((req, index) => (
            <Card key={index} sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  {req.icon}
                </Box>
                <Typography variant="h6" component="h2" gutterBottom align="center">
                  {req.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {req.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">🧠 Подбор в программе</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography paragraph>
          Разработанный программный комплекс содержит встроенную базу катализаторов. Выбор происходит автоматически в зависимости от:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="температуры и давления в реакторе" />
          </ListItem>
          <ListItem>
            <ListItemText primary="типа исходного сырья (пентан, гексан)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="заданного октанового числа" />
          </ListItem>
        </List>
        <Typography paragraph>
          При необходимости можно вручную задать предпочтительный катализатор для расчёта.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SettingsIcon sx={{ fontSize: 32, mr: 1 }} />
          <Typography variant="h5" fontWeight={700}>
            Двойная активность катализаторов
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography paragraph sx={{ fontSize: 20 }}>
          Промышленные катализаторы <b>изомеризации</b> обладают <b>двойной функцией</b>:
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Активный центр</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Функция в процессе</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dualActivityRows.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>{row.center}</TableCell>
                  <TableCell align="center" sx={{ fontSize: 18 }}>{row.function}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>

    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Катализатор</TableCell>
            <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Тип</TableCell>
            <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Основной носитель</TableCell>
            <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Температура (°C)</TableCell>
            <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Особенности</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {catalysts.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>{row.name}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.carrier}</TableCell>
              <TableCell align="center">{row.temp}</TableCell>
              <TableCell align="left">{row.features}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default CatalystsHandbook; 