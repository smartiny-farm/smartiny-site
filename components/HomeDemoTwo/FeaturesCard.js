import React from 'react';
import Link from 'next/link';

const FeaturesCard = () => {
    return (
        <>
            <div className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-box">
                                <Link href="/">
                                    <a><img src="/images/features/features-1.png" alt="image" /></a>
                                </Link>
                                
                                <h3>
                                    <Link href="/">
                                        <a>Web e Mobile</a>
                                    </Link>
                                </h3>
                                <p>Nossa suite de aplicações conta com diferentes modulos para coleta, processamento, e visualização de dados.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-box">
                                <Link href="/services-details">
                                    <a><img src="/images/features/features-2.png" alt="image" /></a>
                                </Link>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Inteligência artificial de ponta a ponta </a>
                                    </Link>
                                </h3>
                                <p>Nossos produtos utilizam Inteligência Artiticial para realizar diversas tarefas, simples ou complexas, nós criamos soluções que trazem beneficios ao Agro.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-box">
                                <Link href="/services-details">
                                    <a><img src="/images/features/features-3.png" alt="image" /></a>
                                </Link>
                                <h3>
                                    <Link href="/services-details">
                                        <a>IoT</a>
                                    </Link>
                                </h3>
                                <p>Nossos dispositivos de IoT são totalmente modulares, permitindo a conexão de diferentes sensores, gerando dados que trazem comodidade e fazem a diferença para o produtor.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="features-shape-1">
                    <img src="/images/features/shape-1.png" alt="image" />
                </div>
                <div className="features-shape-2">
                    <img src="/images/features/shape-2.png" alt="image" />
                </div>
                <div className="features-shape-3">
                    <img src="/images/features/shape-3.png" alt="image" />
                </div>
                <div className="features-shape-4">
                    <img src="/images/features/shape-4.png" alt="image" />
                </div>
            </div>

            {/* Features Card Style */}
            <style jsx>{`
                .features-area {
                    position: relative;
                    z-index: 1;
                }
                .single-features-box {
                    text-align: center;
                    margin-bottom: 30px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    border: 1px solid #E6EDF6;
                    padding: 35px 22px;
                    position: relative;
                    z-index: 1;
                    border-radius: 5px;
                    overflow: hidden;
                }
                .single-features-box::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 0;
                    background: var(--main-gradient-color);
                    z-index: -1;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    border-radius: 5px;
                }
                .single-features-box img {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-features-box h3 {
                    font-size: 25px;
                    margin-top: 30px;
                    margin-bottom: 15px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-features-box h3 a {
                    color: var(--black-color);
                }
                .single-features-box p {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-features-box:hover::before {
                    height: 100%;
                }
                .single-features-box:hover h3 a {
                    color: var(--white-color);
                }
                .single-features-box:hover p {
                    color: var(--white-color);
                }

                .features-shape-1 {
                    position: absolute;
                    top: 15%;
                    left: 40%;
                    -webkit-transform: translateY(-15%) translateX(-40%);
                            transform: translateY(-15%) translateX(-40%);
                    z-index: 1;
                }
                .features-shape-2 {
                    position: absolute;
                    top: 20%;
                    right: 40%;
                    -webkit-transform: translateY(-20%) translateX(-40%);
                            transform: translateY(-20%) translateX(-40%);
                    z-index: 1;
                }
                .features-shape-3 {
                    position: absolute;
                    top: 8%;
                    right: 50%;
                    -webkit-transform: translateY(-8%) translateX(-50%);
                            transform: translateY(-8%) translateX(-50%);
                    z-index: 1;
                }
                .features-shape-4 {
                    position: absolute;
                    top: 10%;
                    right: 48%;
                    -webkit-transform: translateY(-10%) translateX(-48%);
                            transform: translateY(-10%) translateX(-48%);
                    z-index: 1;
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .single-features-box h3 {
                        font-size: 20px;
                    }
                    .single-features-box {
                        padding: 35px 15px;
                    }
                    .features-shape-1, .features-shape-2, .features-shape-3, .features-shape-4 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .single-features-box {
                        padding: 35px 15px;
                    }
                    .single-features-box h3 {
                        font-size: 22px;
                    }
                    .features-shape-1, .features-shape-2, .features-shape-3, .features-shape-4 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .single-features-box {
                        padding: 25px 14px;
                    }
                    .single-features-box h3 {
                        font-size: 20px;
                    }
                    .features-shape-1, .features-shape-2, .features-shape-3, .features-shape-4 {
                        display: none;
                    }
                }
                
            `}</style>
        </>
    )
}

export default FeaturesCard;