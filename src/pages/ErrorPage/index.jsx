import LogoError from"../../images/error.svg";
import styles from "./style.module.scss";

export const ErrorPage = () => {
    return(
        <main className={styles.mainn}>
            <div className={styles.divError}>
                <img className={styles.divImg} src={LogoError} alt="Error 404" />
                <p className={styles.messagerror}>Não foi possivel encontrar a página!</p>
            </div>
        </main>
    )
}