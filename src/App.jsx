import './App.module.css';
import {Router} from "./Router";
import {Navbar} from "./components/NavBar/Navbar";
import {BrowserRouter} from "react-router-dom";

import styles from './App.module.css';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className={styles.container}>
                <Router />
            </div>
        </BrowserRouter>
    );
}

export default App;
