import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import { AppWrapper } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Portfolio from 'pages/Portfolio/Portfolio';
import Contacts from 'pages/Contacts/ContactsPage';
import TaskManagement from 'pages/TaskManagement/TaskManagement';
import Shop from 'pages/Shop/Shop';

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <Routes>
        <Route path="/my-test-task-project" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/task-management" element={<TaskManagement />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
};

export default App;
