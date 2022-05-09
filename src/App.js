import TelaLogin from "./Componentes/TelaLogin";
import TelaCadastro from "./Componentes/TelaCadastro";
import TelaHome from "./Componentes/TelaHome";
import TelaMovimentacao from "./Componentes/TelaMovimentacao";
import DadosUsuario from "./Componentes/Context"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    return(
        <DadosUsuario>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro/>} />
                    <Route path="/home" element={<TelaHome/>}/>
                    <Route path="/:tipo" element={<TelaMovimentacao/>} />
                </Routes>
            </BrowserRouter>
        </DadosUsuario>
    )
}