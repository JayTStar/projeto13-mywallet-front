import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useUser, useToken, useID, useMov } from "./Context";
import axios from "axios";
import { useState, useEffect } from "react";

export default function TelaHome(){
    const navigate = useNavigate();

    const {usuario} = useUser();
    const {token} = useToken();
    const {id} = useID();
    const {mov, setMov} = useMov();

    let soma = 0;

    const config = {
        headers: {
            "authorization": `Bearer ${token}`
        }
    }

    console.log(token)

    useEffect(() => {
        const req = axios.get("http://localhost:5000/movimentacoes", config);

        req.then((res) => {
            console.log(res.data);

            setMov(res.data);
        });
        req.catch((err) => {
            console.log(err);
        })

    }, [])

    mov.forEach(elemento => {
        if(elemento.tipo === "entrada"){
            soma += parseFloat(elemento.valor);
        }
        else{
            soma -= parseFloat(elemento.valor);
        }
    });

    return(
        <Pagina>
            <Topo><p>Olá, {usuario}</p> <ion-icon name="exit-outline"></ion-icon></Topo>
            <Registros>
                {mov.map(elemento => {return (elemento.tipo === 'entrada') ? <Positivo><span>{elemento.titulo}</span> {elemento.valor}</Positivo> : <Negativo><span>{elemento.titulo}</span> {elemento.valor}</Negativo>})}
                <Saldo><span>Saldo:</span>  {soma}</Saldo>
            </Registros>
            <Base>
                <Entrada onClick={() => {navigate("/entrada")}}><ion-icon name="add-circle-outline"></ion-icon> <p>Nova Entrada</p></Entrada>
                <Saída onClick={() => {navigate("/saida")}}><ion-icon name="remove-circle-outline"></ion-icon> <p>Nova Saída</p></Saída>
            </Base>
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
const Topo = styled.header`
    width: 100%;
    height: 10%;

    box-sizing: border-box;
    padding: 0 10% 0 10%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;

        color: #FFFFFF;
    }
    ion-icon{
        font-size: 26px;
        
        color: #FFFFFF;
    }
`
const Registros = styled.div`
    width:80%;
    height: 70%;

    background-color: #FFFFFF;
    border-radius: 5px;

    box-sizing: border-box;

    padding: 3%;

    position: relative;
`
const Positivo = styled.p`
    width: 100%;
    height: auto;

    display:flex;
    justify-content: space-between;

    color: green;

    span{
        color: black;
    }
`
const Negativo = styled.p`
    width: 100%;
    height: auto;

    display:flex;
    justify-content: space-between;

    color: red;

    span{
        color: black;
    }
`
const Saldo = styled.p`
    width: 100%;
    height: auto;

    display:flex;
    justify-content: space-between;

    position: absolute;
    bottom:0;
`
const Base = styled.div`
    width 100%;
    height: 15%;

    display: flex;
    justify-content: center;

    position: relative;

    box-sizing: border-box;

    padding: 0 5% 0 5%
`
const Entrada= styled.button`
    width: 40%;
    height: 100%;

    background: #A328D6;
    border-radius: 5px;

    margin: 0 5% 0 5%;

    border:none;

    position: relative;

    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;

        color: #FFFFFF;
    }

    ion-icon{
        font-size: 25px;
        color: #FFFFFF;

        position: absolute;
        top: 5%;
        left: 5%;
    }
`
const Saída = Entrada;