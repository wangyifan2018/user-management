import './App.css';
import { AppRouter } from './routes/AppRouter';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
