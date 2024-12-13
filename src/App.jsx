import "./App.css";
import Topo from "./components/jsx/Topo";
import Inicio from "./components/jsx/Inicio";
import Sobre from "./components/jsx/Sobre";
import Imoveis from "./components/jsx/Imoveis";
import Contato from "./components/jsx/Contato";
import Footer from "./components/jsx/Footer";
import ZapIcon from "./assets/whatsapp.png";

function App() {
    return (
        <>
            <Topo />
            <main>
                <Inicio />
                <Sobre />
                <Imoveis />
                <Contato />
            </main>
            <Footer />
            <a
                href="https://wa.me/5521968150252"
                target="_blank"
                className="link-fixo"
            >
                <img
                    className="whatsapp_icon_fixo"
                    src={ZapIcon}
                    alt="Ícone do WhatsApp"
                />
            </a>
        </>
    );
}

export default App;
