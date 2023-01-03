import './App.css';
import Layout from './pages/layout';
import Home from './pages/home';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Nopage from './pages/nopage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout></Layout>}>
          <Route index element={ <Home></Home>}></Route>
          <Route path='blogs' element={<Blog></Blog>}></Route>
          <Route path='contact' element={<Contact></Contact>}></Route>
          <Route path='*' element={<Nopage></Nopage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;