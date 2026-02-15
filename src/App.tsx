import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import StrategyCall from './pages/StrategyCall';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/strategy-call" element={<StrategyCall />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
