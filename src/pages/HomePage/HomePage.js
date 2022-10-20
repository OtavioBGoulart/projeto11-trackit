import { Link } from "react-router-dom"
import styled from "styled-components"
import Logoimg from "../../assets/images/Logoimg.jpg"

export default function HomePage() {

    return (
        <>
            <Logo>
                <img src={Logoimg} alt="Logo-Trackit" />
            </Logo>
            <FormularioLogin>
                <form>
                    <SessaoInputLogin>
                        <input name="email" type="text" placeholder="email" required></input>
                    </SessaoInputLogin>
                    <SessaoInputLogin>
                        <input name="senha" type="text" placeholder="senha" required></input>
                    </SessaoInputLogin>
                    <BotaoLogin>
                        <button type="submit">Entrar</button>
                    </BotaoLogin>
                </form>
            </FormularioLogin>
            <Link to={"/cadastro"}>
                <Cadastrar>
                    <h1>Não tem uma conta? Cadastre-se!</h1>
                </Cadastrar>
            </Link>
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
        display: flex;
        justify-content: center;
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