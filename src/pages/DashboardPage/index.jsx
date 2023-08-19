import { useContext } from "react";
import Logo from "../../images/Logo.svg";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const Dashboard = () => {
    const {user, Logout} = useContext(UserContext);
    return(
        <main className={styles.main}>
            <header className={styles.header}>
                <img src={Logo} alt="Logo Kenzie Hub" />
                <button className={styles.buttonLogout} onClick={Logout}> Sair</button>
            </header>
            <section className={styles.sectionDashboard}>
                <div className={styles.divBorder}>
                    <div className={styles.divContentUser}>
                    <h2 className="tipograph titleDashboard">Olá,{user?.name}</h2>
                    <p className={styles.p}>{user?.course_module}</p>
                </div>
                </div>
                <div className={styles.divDash}>
                    <h2 className="tipograph titleDashboard">Que pena! Estamos em desenvolvimento :( </h2>
                    <p className="tipograph textDashboard">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
            </section>
        </main>
    );
};