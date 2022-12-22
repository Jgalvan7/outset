import React from "react";

function Content() {
    return (
        <main>
            <section className="heroIndex">
                <div>
                    <h1 className="heroIndex--title">Bienvenidos a Outset</h1>
                    <p className="heroIndex--text">Tu tienda de productos de diseño personalizados, si necesitas regalos personalizados o quieres comprar algo un poco mas exclusivo para tener un detalle con alguien mira nuestros productos.</p>
                    <button className="heroIndex--button">SABER MÁS</button>
                </div>
                <figure className="heroIndex--image"><img src="../assets/images/hero_design.png" alt="Imagen relacionada con el Podcast" /></figure>
            </section>
            <section className="moduloEpisodios">
                <h2>Productos destacados</h2>
                <article className="moduloEpisodios__item">
                <div className="containerPodcast">
                    <figure className="podcastCover"><img src="../assets/productos/Chaveros.png" alt="Imagen relacionada con el Podcast" /></figure>
                        <article className="podcastContent">
                        <h3 className="podcastContent--title">Llaveros con forma de corazón y la palabra Love en su interior, para sorprender en San Valentín. varios diseños disponibles.</h3>
                        {/* <p className="podcastContent--text">Podcast sobre puntos importantes de Javascript.</p> */}
                        <button className="podcastContent--button">Seguir</button>
                        <div className="podcastContent--media">
                            <button><a href="index.html"><img src="../assets/icons/icons-inicio.png" alt="Icono de forma cuadrada con triangulo en interior que hace referencia a comenzar"/></a></button>
                        </div>
                    </article>
                </div>
                <div className="containerPodcast">
                    <figure className="podcastCover"><img src="../assets/productos/20221106_130518.jpg" alt="Imagen relacionada con el Podcast"/></figure>
                        <article className="podcastContent">
                        <h3 className="podcastContent--title">Colgante con forma de corazón para el día de la madre, con las letras de Mamá en el borde.</h3>
                        {/* <p className="podcastContent--text">Syntactic Sugar, que significa y como aplicarlo en el código</p> */}
                        <button className="podcastContent--button">Seguir</button>
                        <div className="podcastContent--media">
                            <button><a href="index.html"><img src="../assets/icons/icons-inicio.png" alt="Icono de forma cuadrada con triangulo en interior que hace referencia a comenzar"/></a></button>
                        </div>
                    </article>
                </div>
                <div className="containerPodcast">
                    <figure className="podcastCover"><img src="../assets/productos/IMG-20221114-WA0002.jpeg" alt="Imagen relacionada con el Podcast"/></figure>
                    <article className="podcastContent">
                        <h3 className="podcastContent--title">Árbol de Navidad con frases bonitas para adornar las mesas y los hogares en estas fechas tan señaladas</h3>
                        {/* <p className="podcastContent--text">No por mucho madrugar amanece mas temprano</p> */}
                        <button className="podcastContent--button">Seguir</button>
                        <div className="podcastContent--media">
                            <button><a href="index.html"><img src="../assets/icons/icons-inicio.png" alt="Icono de forma cuadrada con triangulo en interior que hace referencia a comenzar"/></a></button>
                        </div>
                    </article>
                </div>
                <div className="containerPodcast">
                    <figure className="podcastCover"><img src="../assets/productos/20221114_183513.jpg" alt="Imagen relacionada con el Podcast"/></figure>
                    <article className="podcastContent">
                        <h3 className="podcastContent--title">Servilleteros con diferentes formas para darle un toque diferente las cenas Navideñas. </h3>
                        {/* <p className="podcastContent--text">La conferencia sobre The Rails SaaS Hype Train con Drew Bragg</p> */}
                        <button className="podcastContent--button">Seguir</button>
                        <div className="podcastContent--media">
                            <button><a href="index.html"><img src="../assets/icons/icons-inicio.png" alt="Icono de forma cuadrada con triangulo en interior que hace referencia a comenzar"/></a></button>
                        </div>
                    </article>
                </div>
                </article>
            </section>
            <section className="moduloFromWhere"><img className="moduloFromWhere--img" src="../assets/images/phone2.png" alt="Imagen de un móvil mostrando una noticia"/>
                <article className="moduloFromWhere--text">
                    <h3>Outset Mobile</h3>
                    <p>Siempre es un buen momento para tener un detalle con los demas o con uno mismo y Outset te lo pone fácil, haz tus compras desde tu móvil en nuestra eSHop y llevate algo especial y personalizado para esa ocasión.</p>
                </article>
            </section>
            <section className="moduloInvited">
                {/* <h3 className="moduloInvited--title">Galería</h3> */}
                <article className="moduloInvited--img">
                    <img src="../assets/images/Cajas.png" alt="Imagen de Grace Hopper"/>
                    <img src="../assets/images/portada_Facebook.png" alt="Imagen de Katie Bouman"/>
                    <img src="../assets/images/navidad.png" alt="Imagen de Margaret Hamilton"/>
                    <img src="../assets/images/bolas.png" alt="Imagen de ERA Univac 1103"/>
                    <img src="../assets/images/chaveros.png" alt="Imagen de Operadoras"/>
                    <img src="../assets/images/cartel.png" alt="Imagen de Susan Kare"/>
                </article>
            </section>
            {/* <section className="moduloThemes">
                <h3 className="moduloThemes--title">Nuestros Valores</h3>
                <article className="moduloThemes--themes">
                <ul className="themesList">
                    <li className="themesList--item">
                        <img src="../assets/icons/icon1.svg" alt=""/>
                        <p>Trabajo remoto</p>
                    </li>
                    <li className="themesList--item">
                        <img src="../assets/icons/icon2.svg" alt=""/>
                        <p>Repensando la programación</p>
                    </li>
                    <li className="themesList--item">
                        <img src="../assets/icons/icon3.svg" alt=""/>
                        <p>Bases del código</p>
                    </li>
                    <li className="themesList--item">
                        <img src="../assets/icons/icon4.svg" alt=""/>
                        <p>Seguridad informática</p>
                    </li>
                </ul>
                </article>
            </section> */}
            <section className="moduloLastUpdate">
                <h3 className="moduloLastUpdate--title">¿Estás interesado en algo? Contacta con nosotros.</h3>
                <button className="moduloLastUpdate--button">Contactar</button>
            </section>
        </main>
    );
}

export { Content };