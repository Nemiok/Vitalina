import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FactoryIcon from '@mui/icons-material/Factory';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ScienceIcon from '@mui/icons-material/Science';
import CalculateIcon from '@mui/icons-material/Calculate';
import ComputerIcon from '@mui/icons-material/Computer';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DescriptionIcon from '@mui/icons-material/Description';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { mode, toggleTheme } = useTheme();

  const navItems = [
    { text: 'Главная', path: '/', icon: <HomeIcon /> },
    { text: 'О проекте', path: '/about', icon: <InfoIcon /> },
    { text: 'Оборудование', path: '/equipment', icon: <BuildIcon /> },
    { text: 'Математическая модель', path: '/math-model', icon: <CalculateIcon /> },
    { text: 'Интерфейс', path: '/interface', icon: <ComputerIcon /> },
    { text: 'Пример расчёта', path: '/example', icon: <AssessmentIcon /> },
    { text: 'Документация', path: '/documentation', icon: <DescriptionIcon /> },
    { text: 'Справочник катализаторов', path: '/catalysts-handbook', icon: <ScienceIcon /> },
  ];

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <FactoryIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Система проектирования установок изомеризации
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="toggle theme"
          onClick={toggleTheme}
          sx={{ mr: 2 }}
        >
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.path}
              component={RouterLink}
              to={item.path}
              onClick={handleClose}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 