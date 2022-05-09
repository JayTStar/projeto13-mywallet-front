import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function TelaCadastro (){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacao, setConfirmacao] = useState("");

    const nav = useNavigate()

    function cadastrar(){
        if(senha !== confirmacao){
            alert("As senhas não são compatíveis");
        }
        else{
            const usuario = {
                nome: nome,
                email: email,
                senha: senha
            }

            const req = axios.post('http://localhost:5000/cadastrar', usuario);

            req.then((res) =>{
                console.log(res);

                nav("/")
            });

            req.catch((err) => {
                console.log(err)
            })
        }
    }

    return(
        <Pagina>
           <Titulo>My Wallet</Titulo>
           <Form>
               <Nome type="text" placeholder="Nome" onChange={(e) => {setNome(e.target.value)}}></Nome>
               <Email type="email" placeholder="E-mail" onChange={(e) => {setEmail(e.target.value)}}></Email>
               <Senha type="password" placeholder="Senha" onChange={(e) => {setSenha(e.target.value)}}></Senha>
               <ConfirmSenha type="password" placeholder="Confirme a Senha" onChange={(e) => {setConfirmacao(e.target.value)}}></ConfirmSenha>
           </Form>
           <Cadastrar onClick={cadastrar}>Cadastrar</Cadastrar>
           <Login to={{pathname: "/"}}>Já tem uma conta? Entre agora!</Login>
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
const Nome = styled.input`
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
const Email = Nome
const Senha = Nome
const ConfirmSenha = Nome

const Cadastrar = styled.button`
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
    border:none;
`
const Login = styled(Link)`
    width: 100%;
    height: 18px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

    color: #FFFFFF;
`