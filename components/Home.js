import React from 'react'
import { PageHeader, Row, Col, Image, Button, Carousel } from 'react-bootstrap'

export default () => {
    return (
        <Row>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <Image src="../img/une/une1.jpg" />
                        <Carousel.Caption>
                            <h3>La déception</h3>
                            <p>Les ELans échouent 14 - 6 face aux champions de France en titre</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="../img/une/une2.jpg" />
                        <Carousel.Caption>
                            <h3>Dimanche 13 Novembre 18h30</h3>
                            <p>Venez nombreux supporter les roses et bleus lors de leur première rencontre à domicile.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="../img/une/une3.jpg" />
                        <Carousel.Caption>
                            <h3>Le retour en D3</h3>
                            <p>Landry Labat, attendu cette année avec nos Elans G, a finalement signé pour une année de plus en D3.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <section>
                <Row>
                    <PageHeader>Bienvenue sur le site des Elans Loisirs</PageHeader>
                    <p>
                        Les Elans loisirs de Champigny est une équipe de hockey sur glace située en région parisienne (Champigny sur Marne) et engagée dans le Trophée Fédéral Loisir.<br /><br />
                        Pour la saison 2016 - 2017 les Elans loisirs sont en Ligue 1 du trophée loisir et ont pour objectif d'atteindre la finale nationale pour la première fois de leur histoire.<br /><br />
                        La ligue 1 du Trophée Loisir est composée des équipes suivantes :<br />
                        Meudon, Paris, Champigny, Franconville, Fontenay, Vitry et Evry.
                    </p>
                </Row>


                <Row>
                    <PageHeader>Les photos en téléchargement</PageHeader>

                    <Col xs={12} className="photo">
                        <ul>
                            <li><Button bsStyle="primary" href="../photo/downloads/saison2013.zip">Saison 2012 - 2013 (4 Go)</Button></li>
                            <li><Button bsStyle="primary" href="../photo/downloads/saison2014.zip">Saison 2013 - 2014</Button></li>
                            <li><Button bsStyle="primary" href="../photo/downloads/saison2015.zip">Saison 2014 - 2015</Button></li>
                            <li><Button bsStyle="primary" href="../photo/downloads/saison2015.zip">Saison 2015 - 2016</Button></li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={5}>
                        <PageHeader>Dimanche 13 Novembre 18h30</PageHeader>
                        <Row className="rencontre">
                            <Col xs={12} md={8} mdOffset={2}>
                                <table>
                                    <tr>
                                        <td><img src="img/logos/logo-eg.png" alt="Les Elans de Champigny" /></td>
                                        <td>VS</td>
                                        <td><img src="img/logos/logo-fontenay.png" alt="Les Pumas de Fontenay" /></td>
                                    </tr>
                                </table>
                            </Col>
                        </Row>

                        <Row>
                            <p>
                                La deuxième journée du trophée loisir de nos Elans seront face aux Pumas de Fontenay. Ce sera leur premier match à domicile alors venez nombreux les encourager.
                            </p>
                        </Row>
                    </Col>
                    <Col xs={12} md={5} mdOffset={1}>
                        <PageHeader>Le dernier article de la Gaizette</PageHeader>

                        <div className="">
                            <Image src="../img/gaizette/equipe2016.jpg" alt="equipe les elans loisirs" responsive />
                        </div>

                        <Row>
                            <h2>Fin de saison pour les EGs</h2>
                            <p>
                                Après un exercice 2015/2016 pour le moins compliqué, l’heure est aux premiers bilans du côté des roses et bleus. A cet effet, les dirigeants campinois devraient se réunir prochainement pour identifier les forces et les faiblesses d’une équipe en perdition et de préparer au mieux la saison prochaine. Malgré une nouvelle participation aux playoffs, l’année fut délicate pour […]
                                <br /><br />
                                <Button bsStyle="info" bsSize="small" href="http://la-gaizette.fr/fin-de-saison-pour-les-eg/" target="_blank">Lire l'article</Button>
                            </p>
                        </Row>
                    </Col>
                </Row>
            </section>
        </Row>
    );
}