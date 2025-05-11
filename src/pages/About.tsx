import { Typography, Paper, Box, List, ListItem, ListItemIcon, ListItemText, TableContainer, TableHead, Table, TableCell, TableRow, TableBody } from '@mui/material';
import { Science, CheckCircle } from '@mui/icons-material';

const fractions = [
  {
    fractionName: 'н-Пентан',
    formula: 'C₅H₁₂',
    octanNumber: '~62',
    afterIsomerization: 'изо-Пентан (RON ~92)',
  },
  {
    fractionName: 'н-Гексан',
    formula: 'C₆H₁₄',
    octanNumber: '~30',
    afterIsomerization: '2,2-диметилбутан (~94)',
  },
  {
    fractionName: 'Изо-гексан',
    formula: 'C₆H₁₄ (разв.)',
    octanNumber: '~83',
    afterIsomerization: '–',
  },
];

const About = () => {
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ⚗️ Что такое изомеризация
        </Typography>
        
        <Typography variant="h6" gutterBottom>
          📚 Общее описание процесса
        </Typography>
        <Typography paragraph>
          Изомеризация — это химический процесс превращения нормальных (линейных) алканов в их разветвлённые изомеры. Эти изомеры обладают более высоким октановым числом, что делает их ценным компонентом товарного бензина.
        </Typography>
        <Typography paragraph>
          Процесс применяется, в первую очередь, для лёгких бензиновых фракций (C₅–C₆), таких как:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="н-пентан (C₅H₁₂)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="н-гексан (C₆H₁₄)" />
          </ListItem>
        </List>
        <Typography paragraph>
          В результате изомеризации, например, н-гексан превращается в 2,2-диметилбутан, что значительно улучшает топливные характеристики.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          🎯 Цель процесса
        </Typography>
        <Typography paragraph>
          Главная задача изомеризации — повысить октановое число фракций без добавления вредных веществ, таких как тетраэтилсвинец. Это позволяет производить экологически чистые бензины, соответствующие современным стандартам (Евро-5 и выше).
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          🔬 Химическая суть
        </Typography>
        <Typography paragraph>
          Изомеризация происходит под действием двух типов катализаторов:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Science />
            </ListItemIcon>
            <ListItemText 
              primary="Кислотный центр" 
              secondary="инициирует реакцию карбкатионного типа"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Science />
            </ListItemIcon>
            <ListItemText 
              primary="Металлический центр (обычно платина)" 
              secondary="способствует удалению примесей (гидрогенолиз, дегидрирование/гидрирование)"
            />
          </ListItem>
        </List>
        <Typography paragraph>
          Процесс протекает в условиях:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Температура: 120–180 °C" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Давление: 1–3 МПа" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Водородная атмосфера (для стабилизации катализатора)" />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4  }}>
        <Typography variant="h6" gutterBottom>
          ⚙️ Промышленное значение
        </Typography>
        <Typography paragraph>
          Изомеризация — важнейший процесс глубокой переработки нефти, обеспечивающий:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="primary" />
            </ListItemIcon>
            <ListItemText primary="увеличение выхода моторного топлива" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="primary" />
            </ListItemIcon>
            <ListItemText primary="снижение количества тяжёлых и малополезных компонентов" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="primary" />
            </ListItemIcon>
            <ListItemText primary="улучшение экологических показателей бензина" />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
        🧾 Сравнение фракций
        </Typography>
        
        <TableContainer sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Фракция</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Формула</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>Октан. число (RON)</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18 }}>После изомеризации</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fractions.map((row) => (
                <TableRow key={row.fractionName}>
                  <TableCell align="center">{row.fractionName}</TableCell>
                  <TableCell align="center">{row.formula}</TableCell>
                  <TableCell align="center">{row.octanNumber}</TableCell>
                  <TableCell align="center">{row.afterIsomerization}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          🏭 Типовые установки
        </Typography>
        <Typography paragraph>
          Чаще всего применяются изомеризационные блоки типа:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Изомалк (катализаторы СИ-2, ИП-62)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Пенекс (лицензия UOP)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Изомакс (совмещение с реформингом)" />
          </ListItem>
        </List>
        <Typography paragraph>
          Каждая установка адаптирована под конкретный состав сырья, требования к выходу и глубину переработки.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          📈 Почему изомеризация — приоритетный процесс
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText primary="Повышает октан без повышения содержания ароматических или токсичных компонентов" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText primary="Не требует сложного оборудования (в сравнении с крекингом)" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText primary="Позволяет перерабатывать широкую фракцию стабильного нафты" />
          </ListItem>
        </List>
      </Paper>

     
    </Box>
  );
};

export default About; 