import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Portfolio } from './layout/sections/portfolio/Portfolio';
import { Footer } from './layout/footer/Footer';
import { Particle } from './components/Particle/Particle';
import { GoTopBtn } from './components/GoTopBtn/GoTopBtn';

function App() {
    return (
        <StyledApp>
            <Particle />
            <Header />
            <div>
                <Main />
                <Skills />
                <Portfolio />
                <Contacts />
            </div>
            <Footer />
            <GoTopBtn />
        </StyledApp>
    );
}

const StyledApp = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default App;
