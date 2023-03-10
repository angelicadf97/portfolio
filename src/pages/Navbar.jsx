const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg" id="topo">
            <div className="container-fluid">
                <span style={{ fontSize: '3rem' }}>Angélica Flores</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <input type="checkbox" id="menu-hamburguer" />
                    <label htmlFor="menu-hamburguer">
                        <div className="menu">
                            <span className="hamburguer">

                            </span>
                        </div>
                    </label>

                    {/* <span className="navbar-toggler-icon"></span> */}
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#Education">Educação</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Stacks">Stacks</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Projects">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Contact">Contato</a>
                        </li>
                        <li className="nav-item">
                            {props.darkmode}
                        </li>
                    </ul>
                </div>
            </div>
            <a className="position-fixed bottom-0 end-0 m-4" href="#topo" role="button">
                <i className='fas fa-hand-point-up' style={{"fontSize": "36px"}}></i>
            </a>
        </nav>
    )
}

export default Navbar;