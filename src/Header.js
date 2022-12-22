import React from "react";

const logo = "./assets/icons/logo_outset_completed_2.png";

function Header() {
    return(
        <header>
            <figure className="headerLogo"><a href="index.html"><img className="logoIcon" src={ logo } alt="Logo del website de podcast" /></a></figure>
            <nav className="headerMenu">
                <ul className="menuIcon">
                    {/* <li className="menuIcon__item"><a href="index.html"><img src="../assets/icons/icons-micro.png" alt="Icono de un micro para la sección de Episodios" /></a></li>
                    <li className="menuIcon__item"><a href="index.html"><img src="../assets/icons/icons-conexion.png" alt="Icono de las siluetas de personas para la sección de Nosotros" /></a></li>
                    <li className="menuIcon__item"><a href="index.html"><img src="../assets/icons/icons-charla.png" alt="Icono de una persona hablando para la sección de Entrevistas" /></a></li>
                    <li className="menuIcon__item"><a href="index.html"><img src="../assets/icons/icons-noticias.png" alt="Icono de un periódico para la sección de Tópicos" /></a></li> */}
                </ul>
                <ul className="menuList">
                    <li className="menuList__item"><a href="index.html">Home</a></li>
                    <li className="menuList__item"><a href="index.html">Productos</a></li>
                    <li className="menuList__item"><a href="index.html">Nosotros</a></li>
                    <li className="menuList__item"><a href="index.html">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export { Header }