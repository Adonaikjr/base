import { Container } from "./styled";

export function Cadastro() {
    return (
        <Container>
            <h1>Cadastre-se</h1>
            <form>
                <fieldset>
                    <label>Nome</label>
                    <input type="text" />
                    <label>Sobrenome</label>
                    <input type="text" name="" id="" />
                    <label>Nome de usuario</label>
                    <input type="text" />
                    <label>Senha</label>
                    <input type="password" name="" id="" />
                    <label>Confirmar senha</label>
                    <input type="password" name="" id="" />
                </fieldset>
            </form>
        </Container>
    )
}