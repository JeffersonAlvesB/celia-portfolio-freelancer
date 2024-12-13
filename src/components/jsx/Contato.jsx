import styles from "../css/Contato.module.css";
import { useState, useEffect } from "react";
import Modal from "./Modal.jsx";
import emailjs from "@emailjs/browser";

const Contato = () => {
    const [email, setEmail] = useState("");
    const [menssagem, setMensagem] = useState("");
    const [nome, setNome] = useState("");
    const [apareceModalErrado, setApareceModalErrado] = useState(false);
    const [apareceModalCerto, setApareceModalCerto] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        if (nome === "" || menssagem === "" || email === "") {
            setApareceModalErrado(true);
            return;
        }

        const templateParams = {
            from_name: nome,
            message: menssagem,
            email: email,
        };

        emailjs
            .send(
                "service_qa7vo0b",
                "template_mjz1h2f",
                templateParams,
                "PLEFpfXygrB_9hIQD"
            )
            .then(() => {
                setApareceModalCerto(true);
                setEmail("");
                setMensagem("");
                setNome("");
            });
    };

    const fecharModal = () => {
        setApareceModalErrado(false);
        setApareceModalCerto(false);
    };

    useEffect(() => {
        if (apareceModalErrado || apareceModalCerto) {
            const timer = setTimeout(() => {
                fecharModal();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [apareceModalErrado, apareceModalCerto]);

    return (
        <section className={styles.container_contato} id="contato">
            <div className={styles.container_width}>
                <h2 className={styles.titulo}>Contato</h2>
                <form className={styles.container_ipts} onSubmit={sendEmail}>
                    <input
                        className={styles.inputs_textos}
                        type="text"
                        placeholder="Digite seu nome completo:"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        className={styles.inputs_textos}
                        type="email"
                        placeholder="Digite seu email:"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        className={styles.form_textarea}
                        cols="20"
                        rows="5"
                        placeholder="Sua mensagem:"
                        value={menssagem}
                        onChange={(e) => setMensagem(e.target.value)}
                    ></textarea>
                    <input
                        className={styles.input_submit}
                        type="submit"
                        value="Enviar"
                    />
                </form>
            </div>
            {apareceModalErrado && (
                <div className={styles.Modal}>
                    <Modal
                        click={fecharModal}
                        texto="Preencha todos os campos"
                    />
                </div>
            )}
            {apareceModalCerto && (
                <div className={styles.Modal}>
                    <Modal
                        click={fecharModal}
                        texto="Formulário enviado com sucesso!"
                    />
                </div>
            )}
        </section>
    );
};

export default Contato;
