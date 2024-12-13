import styles from "../css/Imoveis.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CasaSlide1 from "../../assets/CasaSlide1.jpeg";
import CasaSlide2 from "../../assets/CasaSlide2.jpeg";
import CasaSlide3 from "../../assets/CasaSlide3.jpeg";
import CasaSlide4 from "../../assets/CasaSlide4.jpeg";
import { FaWhatsapp } from "react-icons/fa";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";

const Imoveis = () => {
    return (
        <section className={styles.container_imoveis} id="imoveis">
            <div className={styles.container_width}>
                <div className={styles.container_textos}>
                    <h2 className={styles.titulo}>Imóveis</h2>
                    <p className={styles.paragrafo}>
                        Confira as fotos de alguns imóveis disponíveis para a
                        realização do seu sonho da casa própria.
                    </p>
                </div>
                <div>
                    <Swiper
                        effect={"flip"}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[EffectFlip, Pagination, Navigation]}
                        className={styles.swiper}
                    >
                        <SwiperSlide className={styles.swiper_slide}>
                            <div className={styles.swiper_box}>
                                <img src={CasaSlide1} alt="Imóvel 1" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiper_slide}>
                            <div className={styles.swiper_box}>
                                <img src={CasaSlide2} alt="Imóvel 2" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiper_slide}>
                            <div className={styles.swiper_box}>
                                <img src={CasaSlide3} alt="Imóvel 3" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiper_slide}>
                            <div className={styles.swiper_box}>
                                <img src={CasaSlide4} alt="Imóvel 4" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiper_slide}>
                            <div className={styles.swiper_box_zap}>
                                <h3 className={styles.subtitulo_zap}>
                                    Mais imóveis no meu zap:
                                </h3>
                                <a
                                    href="https://wa.me/5521968150252"
                                    target="_blank"
                                    className={styles.btn_zap}
                                >
                                    <FaWhatsapp />
                                    Whatsapp
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Imoveis;
