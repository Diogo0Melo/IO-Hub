import SignPage from "./assets/pages/SignPage";
import { Routes, Route } from "react-router-dom";
import NoChangePage from "./assets/pages/NoChangePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<NoChangePage />}>
                <Route path="/signup" element={<SignPage />} />
                <Route path="/signin" element={<SignPage />} />
            </Route>
        </Routes>
    );
}
export default App;
