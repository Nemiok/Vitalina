import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Box, Container } from '@mui/material';
import Navbar from './components/Navbar';
import { Home, About, Equipment, MathModel, Interface, Example, Documentation, CatalystsHandbook, NotFound } from './pages';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/math-model" element={<MathModel />} />
              <Route path="/interface" element={<Interface />} />
              <Route path="/example" element={<Example />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/catalysts-handbook" element={<CatalystsHandbook />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
