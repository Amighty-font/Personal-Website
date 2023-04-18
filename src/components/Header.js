import "./Header.css";

const Header = () => {

    return (
        <nav className="header">
            <div style={{ textAlign: 'left' }}>
                <a className="title" href="/">Timothy.</a>
            </div>
            <div className="button-container" style={{ textAlign: 'right' }}>
                <a className="button" href="/photography">PHOTOGRAPHY</a>
                <a className="button" href="/software">SOFTWARE</a>
            </div>
        </nav>
    )
}

export default Header;