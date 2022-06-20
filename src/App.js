import './App.css';
import Box from "@mui/material/Box"
import Routes from './Routes';
function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: '#999999' }}
    >
      <Box
        style={{
          width: '500px',
          height: '100vh',
          backgroundColor: 'white'
        }}
      >
        <Routes />
        </Box>
    </Box>
  );
}

export default App;
