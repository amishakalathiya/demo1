import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <section>
                    <div className="footer">
                        <div className="center">
                            <h2><b>ℑ𝔫𝔣𝔦𝔫𝔦𝔱𝔶</b></h2>
                            <h6>L O U N G E &nbsp; B A R</h6>
                            <br />
                            <div className="input-icon">
                                <i className="fas fa-arrow-right"></i>

                                <input className="input" type="text" placeholder="enter your email address" />
                            </div><br />
                            <div className="buy">
                                <button>subscribe now</button><br /><br />
                            </div>
                        </div>
                        <div className="link">
                            <br /><table>
                                <tbody><tr>
                                    <td>
                                        <a href="home.php">Home</a>
                                        <a href="product.php">Products</a>
                                        <a href="orders.php">Orders</a>
                                        <a href="about.php">About Us</a>
                                        <a href="contact.php">Contact Us</a>
                                    </td>
                                </tr>
                                </tbody></table>
                        </div>
                        <div className="symbol">
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
                            <a href="https://twitter.com/?lang=en-in"><i className="fab fa-twitter" /></a>
                            <a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a>
                            <a href="https://www.google.com/"><i className="fab fa-facebook-f" /></a>
                        </div>
                        <p>Create by Mr.web designer &nbsp;| &nbsp;<a href="#" style={{ color: 'purple' }}>all rights reserved</a> </p><br />
                        <h5>term to use &nbsp; | &nbsp; privacy &amp; policy</h5><br /><br />
                    </div>
                </section>
            </footer>
        </>

    )
}
