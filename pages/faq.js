import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import NavbarTwo from "../components/_App/NavbarTwo";

const FAQs = () => {
    return (
        <>
			<NavbarTwo />
			
			<PageBanner 
                pageTitle="FAQs" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQs"
            /> 
			
            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="faq-accordion accordion-box">
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Oque nós fazemos?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>A Smartiny é uma agritech com foco no desenvolvimento de produtos e dispositivos para coleta, processamento, e visualização de dados. Nossos dispositivos são projetados levando em consideração o custo beneficio.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Onde posso comprar os dispositivos?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Após realizar o login em nossa plataforma, você irá ver um icone de loja no menu lateral, na nossa loja online você pode comprar desde a aplicação pronta até sensores e peças individuais.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Os nossos produtos possuem garantia?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Sim, todos os nossos dispositivos e hardwares possuem garantia de 1 ano contra defeito de fábrica, e suporte gratuito contra defeito causado por interperies.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Quais são os prazos de entrega?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Após a identificação do pagamento os dispositivos serão postados em até 7 dias uteis se precisar de montagem, ou 1 dia util se for um sensor ou peça individual.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Preciso pagar para usar a plataforma localmente?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p> Nossa plataforma OnDemand é gratuita e você recebe acesso a ela após a compra de qualquer dispositivo da Smartiny.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Por que comprar da Smartiny?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Nosso foco é no desenvolvimento de produtos de baixo custo, e com qualidade, queremos disponibilizar tecnologias de ponta para qualquer produtor rural, com isso todos ganham.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="ticket-box">
                        <h3>Possui alguma duvida que não foi respondida acima? entre em contato com nossa equipe pelos canais abaixo.</h3>

                        <div className="box-one">
                            <i className="ri-customer-service-line"></i>
                            <a href="tel:3128959800">(66)996516832</a>
                        </div>

                        <div className="box-two">
                            <i className="ri-earth-line"></i>
                            <a href="mailto:hello.me@ozen.com">contato@smartiny.com</a>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="faq-shape-1">
                    <img src="/images/faq/shape-1.png" alt="image" />
                </div>
                <div className="faq-shape-2">
                    <img src="/images/faq/shape-2.png" alt="image" />
                </div>
                <div className="faq-shape-3">
                    <img src="/images/faq/shape-3.png" alt="image" />
                </div>
                <div className="faq-shape-4">
                    <img src="/images/faq/shape-4.png" alt="image" />
                </div>
                <div className="faq-shape-5">
                    <img src="/images/faq/shape-5.png" alt="image" />
                </div>
            </div>
	 
			<Footer />
		</>
    )
}

export default FAQs;