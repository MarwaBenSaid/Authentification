import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
import PrivateRoute from './utils/PrivateRoute'
import { Fragment } from 'react';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <div className="App">


<BrowserRouter>

 <Fragment>
 <AuthProvider>
        <Header/>
        <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>}/>
          </Route>
<Route element={<Login/>} path="/login" />
</Routes>
</AuthProvider>
</Fragment>

</BrowserRouter>
    </div>
  );
}

export default App;
