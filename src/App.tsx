import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Portfolio } from './layout/sections/portfolio/Portfolio';
import { Footer } from './layout/footer/Footer';

function App() {
    return (
        <StyledApp>
            <Header />
            <div>
                <Main />
                <Skills />
                <Portfolio />
                <Contacts />
            </div>
            <Footer />
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
