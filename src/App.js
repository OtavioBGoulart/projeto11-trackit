import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyled from "./assets/styles/globalstyle";

import HomePage from "./pages/HomePage/HomePage";


export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyled />
            <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/cadastro" element={<ResgistrationPage />} />
                    <Route path="/habitos" element={<HabitsPage />} />
                    <Route path="/hoje" element={<TodayPage /> } />
                    <Route path="/historico" element={<HistoricPage /> } /> */}
            </Routes>
        </BrowserRouter>
    )
}