import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import { AppWrapper } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Portfolio from 'pages/Portfolio/Portfolio';
import Contacts from 'pages/Contacts/ContactsPage';
import TaskManagement from 'pages/TaskManagement/TaskManagement';

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <Routes>
        <Route path="/my-test-task-project" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/task-management" element={<TaskManagement />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
};

export default App;
