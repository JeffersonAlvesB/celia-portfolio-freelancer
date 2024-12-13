import styles from "../css/Modal.module.css";
import { BsX } from "react-icons/bs";

const Modal = ({ click, texto }) => {
    return (
        <div className={styles.container_modal}>
            <h4 className={styles.titulo_modal}>{texto}</h4>
            <button className={styles.btn_fechar}>
                <BsX onClick={click} className={styles.BsX} />
            </button>
        </div>
    );
};

export default Modal;
