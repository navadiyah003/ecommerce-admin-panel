import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './Components/Signup';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import Fetchproduct from './Components/Fetchproduct';
import Updateproduct from './Components/Updateproduct';
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <main className='main-wrapper'>
                <Routes>
                    <Route element={<PrivateComponent />}>
                        <Route path="/get" element={<Fetchproduct/>} />
                        <Route path="/add" element={<AddProduct/>} />
                        <Route path="/update/:id" element={<Updateproduct/>} />
                        <Route path="/logout" element={<h1> Product Component</h1>} />
                        <Route path="/profile" element={<h1> Profile</h1>} />
                    </Route>


                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />

                </Routes>
                </main>
            </BrowserRouter>

        </div>
    );
}

export default App;
