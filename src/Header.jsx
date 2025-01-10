import React from "react";
import Navbar from "./components/Navbar";
import SearchDialog from './components/SearchDialog';

import './assets/chomsky-webfont/style.css';

function Header() {
    return (
        <header>
            {/* Banner con fecha y título */}
            <div className="banner">       
                <div style={{lineHeight: '0.5'}}> 
                    <span>
                        {new Date().toLocaleDateString('en-US', {
                            weekday: 'long', // Nombre completo del día (Thursday)
                            year: 'numeric', // Año completo (2025)
                            month: 'long', // Nombre completo del mes (January)
                            day: 'numeric' // Día del mes (9)
                        })}
                    </span>
                    <p>Today's Paper</p>
                </div>

                {/* Título del periódico */}
                <h1 style={{
                    fontFamily: "Chomsky Regular", 
                    fontSize: "4rem", 
                    fontWeight: "150"}}>
                    The New York Times
                </h1>

                {/* Botón de diálogo de búsqueda */}
                <DialogDisplay />
            </div>

            {/* Navbar */}
            <Navbar />
        </header>
    );
}

function DialogDisplay() {
    const openDialog = () => {
        const dialog = document.getElementById('search-dialog');
        if (dialog) dialog.showModal();
    };

    const closeDialog = () => {
        const dialog = document.getElementById('search-dialog');
        if (dialog) dialog.close();
    };

    return (
        <>
            <button id = "Busqueda" onClick={openDialog}>🔍</button>
            <dialog id="search-dialog">
                <SearchDialog onClose={closeDialog} />
            </dialog>
        </>
    );
}

export default Header;
