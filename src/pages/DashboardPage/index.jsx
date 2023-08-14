import { Link } from "react-router-dom"
import Logo from "../../images/Logo.svg"

export const Dashboard = ({user, Logout}) => {

    return(
        <main>
            <header>
                <img src={Logo} alt="Logo Kenzie Hub" />
                <button onClick={Logout}> Sair</button>
            </header>
            <section>
                <div>
                    <h2>Olá, {user.name}</h2>
                    <p>{user.course_module}</p>
                </div>
                <div>
                    <h2>Que pena! Estamos em desenvolvimento :( </h2>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
            </section>
        </main>
    )
}