import React from "react";

function Footer() {
    return (
        <footer>
            <section className="copy">
                <p>© 2022 — Outset</p>
            </section>
            <section className="networks">
                <ul className="networks--list">
                    <li className="networks--item"><img src="../assets/icons/icons-email.png" alt="Icono de la aplicación Spotify"/></li>
                    <li className="networks--item"><a href="https://www.instagram.com/outsetraffic/" target="_blank"><img src="../assets/icons/icons-instagram.png" alt="Icono de la aplicación Instagram"/></a></li>
                    <li className="networks--item"><img src="../assets/icons/icons-twitter.png" alt="Icono de la aplicación Twitter"/></li>
                    <li className="networks--item"><img src="../assets/icons/icons-facebook.png" alt="Icono de la aplicación Facebook"/></li>
                    <li className="networks--item"><img src="../assets/icons/icons-telegrama.png" alt="Icono de la aplicación Telegram"/></li>
                </ul>
            </section>
        </footer>
    );
}

export { Footer };