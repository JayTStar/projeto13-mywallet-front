import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useUser, useToken, useID } from "./Context";

export default function TelaLogin(){
    const [email, setEmail] = useState("");
    const [senha,setSenha] = useState("");

    const navigate = useNavigate();

    const {setUsuario} = useUser();
    const {setToken} = useToken();
    const {setId} = useID();

    function login(){
        const usuario = {
            email: email,
            senha: senha
        }

        const requisicao = axios.post("http://localhost:5000/login", usuario);

        requisicao.then((resposta) => {
            console.log(resposta.data);

            localStorage.setItem("token", resposta.data.token);

            setUsuario(resposta.data.name);
            setToken(resposta.data.token);
            setId(resposta.data.userId);

            navigate("/home");
        })

        requisicao.catch((erro) => {
            console.log(erro);

            alert("Email ou Senha incorretos");
        })
    }

    return(
       <Pagina>
           <Titulo>My Wallet</Titulo>
           <Form>
               <Email type="email" placeholder="E-mail" onChange={(e) => {setEmail(e.target.value)}}></Email>
               <Senha type="password" placeholder="Senha" onChange={(e) => {setSenha(e.target.value)}}></Senha>
           </Form>
           <Entrar onClick={login}>Entrar</Entrar>
           <Cadastro to={{pathname: "/cadastro"}}>Primeira vez? Cadastre-se!</Cadastro>
       </Pagina>
    )
}

const Pagina = styled.main`
    width:100%;
    height:100vh;

    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    box-sizing: border-box;
    padding: 20%;
`
const Titulo = styled.h1`
    width: 147px;
    height: 50px;
    left: 113px;
    top: 159px;

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

const Email = styled.input`
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
const Senha = styled.input`
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
const Entrar = styled.button`
    width: 326px;
    height: 46px;

    background: #A328D6;
    border-radius: 5px;

    box-sizing: border-box;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;
`
const Cadastro = styled(Link)`
    width: auto;
    height: 18px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

    color: #FFFFFF;
`