import FormCard from "./assets/pages/SignPage";
import { Routes, Route } from "react-router-dom";
// import NoChangePage from "./assets/pages/NoChangePage";
import MainPage from "./assets/pages/MainPage";
import GamePage from "./assets/pages/GamePage";
import SearchPage from "./assets/pages/SearchPage";

function App() {
    return (
        <Routes>
            {/* <Route path="/" element={<NoChangePage />}> */}
            <Route path="/IO-Hub/" element={<MainPage />} />
            <Route path="/game/*" element={<GamePage />} />
            <Route path="/signup" element={<FormCard />} />
            <Route path="/signin" element={<FormCard />} />
            <Route path="/category" element={<FormCard />} />
            <Route path="/game" element={<FormCard />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/settings" element={<FormCard />} />
            {/* </Route> */}
        </Routes>
    );
}
export default App;
