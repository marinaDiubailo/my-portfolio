import './App.css';

import { Header } from './layout/header/Header';
import { Contact } from './layout/sections/contact/Contact';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';

function App() {
    return (
        <div className="App">
            <Header />
            <main style={{ flexGrow: '1' }}>
                <Main />
                <Skills />
                <Works />
                <Contact />
            </main>
            <footer
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '120px',
                }}
            >
                <small style={{ opacity: 0.5 }}>
                    © 2024 Marina Diubailo | All rights reserved
                </small>
            </footer>
        </div>
    );
}

export default App;
