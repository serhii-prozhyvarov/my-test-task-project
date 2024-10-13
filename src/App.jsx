import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import { AppWrapper } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Portfolio from 'pages/Portfolio';
import Contacts from 'pages/Contacts';
import TaskManagement from 'pages/TaskManagement';

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/task-management" element={<TaskManagement />} />{' '}
        {/* Добавлено */}
      </Routes>
      <Footer />
    </AppWrapper>
  );
};

export default App;
