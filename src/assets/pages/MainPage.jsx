import GameCardsContainer from "../components/GameCardsContainer";
import Header from "../components/Header";
import "../styles/MainPage.css";
import FixedButton from "../components/FixedButton";
import Footer from "../components/Footer";
function MainPage() {
    return (
        <div id="main-page-container">
            <Header />

            <GameCardsContainer title="Adicionados Recentemente" />
            <GameCardsContainer title="Melhores Avaliados" sort={"score"} />
            <Footer />
            <FixedButton />
        </div>
    );
}
export default MainPage;
