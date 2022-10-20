import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyled from "./assets/styles/globalstyle";

import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";


export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyled />
            <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cadastro" element={<RegistrationPage />} />
                    {/* <Route path="/habitos" element={<HabitsPage />} />
                    <Route path="/hoje" element={<TodayPage /> } />
                    <Route path="/historico" element={<HistoricPage /> } /> */}
            </Routes>
        </BrowserRouter>
    )
}