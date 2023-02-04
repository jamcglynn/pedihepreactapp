import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import ExerciseLibrary from './pages/ExerciseLibrary';
import BlogPage from './pages/Blog';
import HomePage from './pages/Home';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='exerciselibrary' element={<ExerciseLibrary />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
