import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Router from './Pages/Router/Router';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
        <Router/>
    </div>
    </ChakraProvider>
  );
}

export default App;
