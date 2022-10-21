import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logoimg from "../../assets/images/Logoimg.jpg"

export default function HomePage() {

    const [form, setForm] = useState({ email: "", password: "" });

    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    function sendRegistration(e) {
        e.preventDefault();

        const body = {
            ...form
        }

        console.log(body);

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)

        promise.then(() => {
            navigate("/Habitos")
        })

        promise.catch(() => alert("Senha e/ou email incorretos. Tente novamente!"))
    }


    return (
        <>
            <Logo>
                <img src={Logoimg} alt="Logo-Trackit" />
            </Logo>
            <FormularioLogin>
                <form onSubmit={sendRegistration}>
                    <SessaoInputLogin>
                        <input
                            name="email"
                            type="text"
                            value={form.email}
                            onChange={handleForm}
                            placeholder="email"
                            required>
                        </input>
                    </SessaoInputLogin>
                    <SessaoInputLogin>
                        <input
                            name="password"
                            type="text"
                            value={form.password}
                            onChange={handleForm}
                            placeholder="senha"
                            required>
                        </input>
                    </SessaoInputLogin>
                    <BotaoLogin>
                        <button type="submit">Entrar</button>
                    </BotaoLogin>
                </form>
            </FormularioLogin>
            <Cadastrar>
                <Link to={"/cadastro"}>
                    <h1>Não tem uma conta? Cadastre-se!</h1>
                </Link>
            </Cadastrar>

        </>
    )
}

const Logo = styled.div`
    width: 50%;
    height: 200px;
    margin: 50px auto 30px; 
    img {
        width: 100%;
        height: 100%;
    }
`
const FormularioLogin = styled.div`
width: 80vw;
margin: 40px auto 0 auto;
display: flex;
flex-direction: column;
`

const SessaoInputLogin = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 3px;
    input {
        width: 100%;
        height: 45px;
        padding-left: 10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: black;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder {
            color: #AFAFAF;
        }
    }
`
const BotaoLogin = styled.div`
    display: flex;
    justify-content: center;
        button {
            width: 100%;
            height: 45px;
            background: #52B6FF;
            border-radius: 4.63636px;
            margin-top: 2px;
            margin-bottom: 20px;
            border: none;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20.976px;
            line-height: 26px;
            text-align: center;
            color: #FFFFFF;
        }
`
const Cadastrar = styled.div`
         margin: auto;
        width: fit-content;
    h1 {
        width: fit-content;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #52B6FF;
        &:hover {
            cursor: pointer;
        }
    }
`