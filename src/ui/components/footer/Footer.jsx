import './footer.css';


export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container overflow-hidden text-center">
                <div className="col-12 align-items-center">
                    <div className="col">
                        <h4>Redes sociales</h4>
                        <div className="container overflow-hidden text-center">
                            <div className="row gy-2">
                                <div className="col-6">
                                    <div className="p-3">
                                        <a href="https://facebook.com" target='blank_' className='link-primary'>Facebook</a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3">
                                        <a href="https://instagram.com" target='blank_' className='link-primary'>Instagram</a>

                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3">
                                        <a href="https://whatsapp.com" target='blank_' className='link-primary'>Whatsapp</a>

                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3">
                                        <a href="https://linkedin.com" target='blank_' className='link-primary'>Linkedin</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
