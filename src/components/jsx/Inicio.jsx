import styles from "../css/Inicio.module.css";
import CeliaAcla from "../../assets/celiaacla.jpeg";
import { FaHouse, FaKey } from "react-icons/fa6";

const Inicio = () => {
    return (
        <section className={styles.container_inicio} id="inicio">
            <div className={styles.container_width}>
                <div className={styles.container_textos}>
                    <h1 className={styles.titulo}>
                        Célia Alves
                        <br />
                        <span className={styles.profissao}>
                            Corretora de Imóveis
                            <div className={styles.icons}>
                                <div>
                                    <FaHouse />
                                </div>
                                <div>
                                    <FaKey />
                                </div>
                            </div>
                        </span>
                    </h1>
                    <p className={styles.paragrafo}>
                        Com experiência no mercado imobiliário, trabalho
                        na&nbsp;
                        <span className={styles.enfase}>Acla Imóveis</span>,
                        oferecendo uma ampla variedade de imóveis financiados
                        pela&nbsp;
                        <span className={styles.enfase}>
                            Caixa Econômica Federal
                        </span>
                        ,&nbsp;ajudando clientes a conquistar o imóvel dos
                        sonhos com segurança e condições especiais.
                    </p>
                    <a className={styles.contato} href="#contato">
                        Entre em contato
                    </a>
                </div>
                <div>
                    <img
                        className={styles.perfil_foto}
                        src={CeliaAcla}
                        alt="celia_acla"
                    />
                </div>
            </div>
        </section>
    );
};

export default Inicio;
