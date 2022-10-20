import { Link } from "react-router-dom"
import styled from "styled-components"
import Logoimg from "../../assets/images/Logoimg.jpg"

export default function RegistrationPage() {
    return (
        <>
            <Logo>
                <img src={Logoimg} alt="Logo-Trackit" />
            </Logo>
            <FormularioCadastro>
                <form>
                    <SessaoInputCadastro>
                        <input name="email" type="text" placeholder="email" required></input>
                    </SessaoInputCadastro>
                    <SessaoInputCadastro>
                        <input name="senha" type="text" placeholder="senha" required></input>
                    </SessaoInputCadastro>
                    <SessaoInputCadastro>
                        <input name="nome" type="text" placeholder="nome" required></input>
                    </SessaoInputCadastro>
                    <SessaoInputCadastro>
                        <input name="foto" type="text" placeholder="foto" required></input>
                    </SessaoInputCadastro>
                    <BotaoCadastro>
                        <button type="submit">Cadastrar</button>
                    </BotaoCadastro>
                </form>
            </FormularioCadastro>
            <Link to={"/"}>
                <Voltar>
                    <h1>Já tem uma conta? Faça login!</h1>
                </Voltar>
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

const FormularioCadastro = styled.div`
width: 80vw;
margin: 40px auto 0 auto;
display: flex;
flex-direction: column;
`
const SessaoInputCadastro = styled.div`
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
const BotaoCadastro = styled.div`
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
const Voltar = styled.div`
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