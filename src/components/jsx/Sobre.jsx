import styles from "../css/Sobre.module.css";
import CeliaPerfil from "../../assets/celiaperfil.jpeg";
import {
    FaWhatsapp,
    FaFacebook,
    FaInstagram,
    FaEnvelope,
} from "react-icons/fa";

const Sobre = () => {
    return (
        <section className={styles.container_sobre} id="sobre">
            <div className={styles.container_width}>
                <div>
                    <img
                        className={styles.foto_perfil}
                        src={CeliaPerfil}
                        alt="foto_perfil"
                    />
                </div>
                <div className={styles.box_sobre}>
                    <h2 className={styles.titulo}>Sobre mim</h2>
                    <p className={styles.paragrafo}>
                        Olá! Sou Célia, corretora de imóveis, com 46 anos de
                        idade e uma paixão por transformar sonhos em realidade.
                        Dedico-me a ajudar meus clientes a realizar o&nbsp;
                        <span className={styles.enfase}>
                            sonho da casa própria
                        </span>
                        , acompanhando cada etapa do processo com atenção e
                        transparência. Meu compromisso é entender as
                        necessidades de cada pessoa e oferecer o suporte
                        necessário para encontrar o lar perfeito. Vamos juntos
                        dar o primeiro passo para fazer do seu sonho uma
                        realidade?
                    </p>
                    <div className={styles.container_links}>
                        <a
                            className={styles.links}
                            href="https://wa.me/5521968150252"
                            target="_blank"
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            className={styles.links}
                            href="https://www.facebook.com/profile.php?id=100015505650863&mibextid=ZbWKwL"
                            target="_blank"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            className={styles.links}
                            href="https://www.instagram.com/corretora_celiaalves?igsh=YzljYTk1ODg3Zg=="
                            target="_blank"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            className={styles.links}
                            href="mailto:celiaaclaimoveis40@gmail.com"
                            target="_blank"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
