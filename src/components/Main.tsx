import './Main.css'

const cardStyle = {
    width: 288,
    borderRadius: 20
}

export function Main() {
    return (
        <main className="col-12 container-fluid">
            <section>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner d-flex justify-content-center">
                        <div className="carousel-item active">
                            <img src="./assets/img/linda-xu-fUEP0djb1hA-unsplash.jpg" alt="..." height="350px" />
                        </div>
                        <div className="carousel-item">
                            <img src="./assets/img/paul-gaudriault-a-QH9MAAVNI-unsplash.png" alt="..." height="350px" />
                        </div>
                        <div className="carousel-item">
                            <img src="./assets/img/ryan-plomp-PGTO_A0eLt4-unsplash.png" alt="..." height="350px" />
                        </div>
                        <div className="carousel-item">
                            <img src="./assets/img/shyam-mishra-zuo1zb6mEcY-unsplash.png" alt="..." height="350px" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="col-12 mt-4">
                <div className="row justify-content-around">
                    <div className="card" style={cardStyle}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>
                    <div className="card" style={cardStyle}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>
                    <div className="card" style={cardStyle}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>
                    <div className="card" style={cardStyle}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid">
                <ul className="brand">
                    <li className="brand-item">
                        <img src="./assets/img/logo/logo-marca/Adidas-Logo.svg" alt="A.D.I.D.A.S" />
                    </li>
                    <li className="brand-item">
                        <img src="./assets/img/logo/logo-marca/Air_Jordan-Logo.svg" alt="Air Jordan" />
                    </li>
                    <li className="brand-item">
                        <img src="./assets/img/logo/logo-marca/Asics-Logo.svg" alt="Asics" />
                    </li>
                    <li className="brand-item">
                        <img src="./assets/img/logo/logo-marca/Converse_(shoe_company)-Logo.svg" alt="Converse" />
                    </li>
                    <li className="brand-item">
                        <img src="./assets/img/logo/logo-marca/Fila_(company)-Logo.svg" alt="Fila" />
                    </li>
                    <li className="brand-item">
                        <img src="./assets/img/logo/logo-marca/Mizuno_Corporation-Logo.svg" alt="Mizuno" />
                    </li>
                    <li className="brand-item">
                        <img src="./assets/img/logo/logo-marca/New_Balance-Logo.svg" alt="New Balance" />
                    </li>
                    <li className="brand-item">
                        <img src="./assets/img/logo/logo-marca/Nike,_Inc.-Nike-Logo.svg" alt="Nike" />
                    </li>
                    <li className="brand-item">
                        <img src="./assets/img/logo/logo-marca/oakley-logo.svg" alt="Oakley" />
                    </li>
                    <li className="brand-item">
                        <img src="./assets/img/logo/logo-marca/olympikus-logo.svg" alt="Olympikus" />
                    </li>
                    <li className="brand-item">
                        <img src="./assets/img/logo/logo-marca/Puma_(brand)-Logo.svg" alt="Puma" />
                    </li>
                    <li className="brand-item">
                        <img src="./assets/img/logo/logo-marca/Reebok-Logo.svg" alt="Reebok" />
                    </li>
                </ul>
            </section>
        </main>
    )
}