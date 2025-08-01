import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './bootstrap.css';
import './index.css';
//import { App } from '..'
import { BrowserRouter, Route } from 'react-router';
import { Routes } from 'react-router';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { Error404 } from './pages/Error404.jsx';
import { Services } from './pages/Services.jsx';
import { ServiceInner } from './pages/ServiceInner.jsx';
import { PublicTemplate } from './templates/PublicTemplates.jsx';
import { Todo } from './pages/Todo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicTemplate />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:service' element={<ServiceInner />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);