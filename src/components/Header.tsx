import './Header.css'
export function Header() {
    return (
        <header className="container-fluid">
            <img src="./assets/img/logo/Tennis Store.png" alt="logo" className="logotipo" />
            <nav className="navbar-expand-lg navbar">
                <ul className="navbar-nav">
                    <li className="navbar-brand">
                        <select className="for-select nav-item list-menu">
                            <option value="">Masculino</option>
                            <option value="">Masculino</option>
                            <option value="">Masculino</option>
                            <option value="">Masculino</option>
                            <option value="">Masculino</option>
                        </select>
                    </li>
                    <li className="navbar-brand">
                        <select className="for-select nav-item list-menu">
                            <option value="">Feminino</option>
                            <option value="">Feminino</option>
                            <option value="">Feminino</option>
                            <option value="">Feminino</option>
                            <option value="">Feminino</option>
                        </select>
                    </li>
                    <li className="navbar-brand">
                        <select className="for-select nav-item list-menu">
                            <option value="">Marcas</option>
                            <option value="">Marcas</option>
                            <option value="">Marcas</option>
                            <option value="">Marcas</option>
                            <option value="">Marcas</option>
                        </select>
                    </li>
                    <li className="navbar-brand">
                        <select className="for-select nav-item list-menu">
                            <option value="">Novidades</option>
                            <option value="">Novidades</option>
                            <option value="">Novidades</option>
                            <option value="">Novidades</option>
                            <option value="">Novidades</option>
                        </select>
                    </li>
                    <li className="navbar-brand">
                        <select className="for-select nav-item list-menu">
                            <option value="">Esportes</option>
                            <option value="">Esportes</option>
                            <option value="">Esportes</option>
                            <option value="">Esportes</option>
                            <option value="">Esportes</option>
                        </select>
                    </li>
                    <li className="navbar-brand">
                        <select className="for-select nav-item list-menu">
                            <option value="">Tênis</option>
                            <option value="">Tênis</option>
                            <option value="">Tênis</option>
                            <option value="">Tênis</option>
                            <option value="">Tênis</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
