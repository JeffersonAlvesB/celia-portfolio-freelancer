import styles from "../css/Topo.module.css";
import { IoSunnyOutline, IoMoonSharp } from "react-icons/io5";
import Logo from "../../assets/Logo.png";
import { useState, useEffect } from "react";

const Topo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLightMode, setIsLightMode] = useState(false);

    const menuHamburgue = () => {
        setIsOpen(!isOpen);
    };

    const fecharMenu = () => {
        setIsOpen(false);
    };

    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
    };

    useEffect(() => {
        if (isLightMode) {
            document.body.setAttribute("data-theme", "light");
        } else {
            document.body.setAttribute("data-theme", "dark");
        }
    }, [isLightMode]);

    return (
        <header className={styles.container_header}>
            <div className={styles.container_width}>
                <img className={styles.logo} src={Logo} alt="logo" />
                <nav className={styles.nav_link}>
                    <ul
                        className={`${styles.container_links} ${
                            isOpen ? styles.open : ""
                        }`}
                    >
                        <li className={styles.lista_links}>
                            <a
                                className={styles.links}
                                href="#inicio"
                                onClick={fecharMenu}
                            >
                                Início
                            </a>
                        </li>
                        <li className={styles.lista_links}>
                            <a
                                className={styles.links}
                                href="#sobre"
                                onClick={fecharMenu}
                            >
                                Sobre
                            </a>
                        </li>
                        <li className={styles.lista_links}>
                            <a
                                className={styles.links}
                                href="#imoveis"
                                onClick={fecharMenu}
                            >
                                Imóveis
                            </a>
                        </li>
                        <li className={styles.lista_links}>
                            <a
                                className={styles.links}
                                href="#contato"
                                onClick={fecharMenu}
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
                <label className={styles.container_mode}>
                    <input
                        type="checkbox"
                        className={styles.ipt_mode}
                        onChange={toggleTheme}
                    />
                    <IoSunnyOutline className={styles.sun} />
                    <IoMoonSharp className={styles.moon} />
                    <span className={styles.toggle}></span>
                </label>
                <div className={styles.menu_icon} onClick={menuHamburgue}>
                    <div
                        className={`${styles.menu_linha} ${
                            isOpen ? styles.active : ""
                        }`}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topo;
