import { useParams, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {useState} from "react";
import { useToken, useID } from "./Context";
import axios from 'axios';

export default function TelaMovimentacao(){
    const {tipo} = useParams();
    const [valor,setValor] = useState("");
    const [descricao, setDescricao]= useState("");
    const {id} = useID();
    const {token} = useToken();
    const nav = useNavigate();

    const config = {
        headers: {
            "authorization": `Bearer ${token}`
        }
    }

    function salvar(){
        const mov = {
            titulo: descricao,
            valor: valor,
            tipo: tipo,
            usuarioId: id
        }

        const req = axios.post("http://localhost:5000/movimentacoes", mov , config);

        req.then((res) => {
            console.log(res);
            nav('/home');
        })

        req.catch((err) => {
            console.log(err)
        })
    }

    return(
        <Pagina>
            <Titulo>Nova {(tipo === "saida")? "saída": "entrada"}</Titulo>
            <Form>
                <Valor placeholder='Valor' onChange={(e) => {setValor(e.target.value)}}></Valor>
                <Descricao placeholder='Descrição' onChange={(e) => {setDescricao(e.target.value)}}></Descricao>
            </Form>
            <Salvar onClick={salvar}>Salvar {(tipo === "saida")? "saída": "entrada"}</Salvar>
        </Pagina>
    )
}

const Pagina = styled.main`
    width: 100%;
    height: 100%;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const Titulo = styled.h1`
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;

    color: #FFFFFF;
`
const Form = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Valor = styled.input`
    width: 326px;
    height: 58px;

    background: #FFFFFF;
    border-radius: 5px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;

    box-sizing: border-box;
    margin: 5%;
`
const Descricao = Valor;

const Salvar = styled.button`
    width: 326px;
    height: 46px;

    background: #A328D6;
    border-radius: 5px;


    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;
    border:none;
`