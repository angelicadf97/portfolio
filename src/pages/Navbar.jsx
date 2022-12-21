const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg" id="topo">
            <div className="container-fluid">
                <spam className="navbar-brand">Angélica Flores</spam>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#Education">Educação</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Skills">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Projects">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact">Contato</a>
                        </li>
                        <li className="nav-item">
                            {props.darkmode}
                        </li>
                    </ul>
                </div>
            </div>
            <a class="btn btn-primary position-fixed bottom-0 end-0 m-4" href="#topo" role="button">Subir</a>
        </nav>
    )
}

export default Navbar;