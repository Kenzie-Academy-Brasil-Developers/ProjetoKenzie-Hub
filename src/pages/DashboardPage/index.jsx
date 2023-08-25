import { useContext } from "react";
import Logo from "../../images/Logo.svg";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../../components/TechList";


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
                    <TechList />
                </div>
            </section>
        </main>
    );
};