import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function Main(){
    return(
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="#">Navigation</Link>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link active" aria-current="page" to="NoutFound">Home</Link>
                            <Link className="nav-link" to="NotFound">What Is?</Link>
                            <Link className="nav-link" to="NotFound">Contact Us</Link>
                            <Link className="btn btn-outline-danger" to="NotFound">Log Out</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Banner */}
            <div className="banner">
                <div className="container-fluid gambar">
                    <h1 className="judul">Welcome to My Project</h1>
                    <p className="subjudul">Rafi Ahmad Khairan<br/>SI4403</p>
                    <Link className="btn btn-outline-light btn-lg" to="NotFound">More Info</Link>
                </div>
            </div>

            {/* Main */}
            <div className="main">
                <div className="container utama">
                    <h3 className="pengertian" id="what">What Is?</h3>
                    <div className="container">
                        <div className="check">
                            <h3 className="pengertian2">Check Box</h3><hr className="garisbawah"/>
                            A check box is a small interactive box that can be toggled by the user to indicate an affirmative or negative choice. It is frequently found in HTML input forms, dialog boxes, and in the GUIs of applications and operating systems.
                            <br/><br/>
                            When clicked, a check mark (✓) appears inside the box, to indicate an affirmative choice (yes). When clicked again, the check mark disappears, indicating a negative choice (no).
                            <br/><br/>
                            For example :
                            <div className="bawah">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                    <label className="form-check-label" for="inlineCheckbox1">1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                    <label className="form-check-label" for="inlineCheckbox2">2</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/>
                                    <label className="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
                                </div>
                            </div>
                        </div>
                        <div className="radio">
                            <h3 className="pengertian2">Radio Button</h3><hr className="garisbawah"/>
                            A radio button is one type of selection indicator in a list of options. If an option is selected, the circle is filled. If the option is not selected, the circle is empty. When one circle is selected, the others are deselected, so that only one option may be selected at any time.
                            <br/><br/>
                            For example :
                            <div className="bawah">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label className="form-check-label" for="inlineRadio1">1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label className="form-check-label" for="inlineRadio2">2</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled/>
                                    <label className="form-check-label" for="inlineRadio3">3 (disabled)</label>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <h3 className="pengertian2">Drop-down</h3><hr className="garisbawah"/>
                            In a computer GUI, a drop-down menu is a menu that offers a list of options. The title of the menu, or the currently-selected item in the list, is always displayed. When the visible item is clicked, other items from the list "drop-down" into view, and the user can choose from those options.
                            <br/><br/>
                            For example :
                            <div className="bawah">
                                <div className="btn-group">
                                    <button className="btn btn-dark btn-sm" type="button">
                                        Menu
                                    </button>
                                    <button type="button" className="btn btn-sm btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><Link className="dropdown-item" to="NotFound">Action</Link></li>
                                        <li><Link className="dropdown-item" to="NotFound">Another action</Link></li>
                                        <li><Link className="dropdown-item" to="NotFound">Something else here</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="NotFound">Separated link</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="container-fluid bg-dark footer">
                <div className="container">
                    <div className="contact" id="contact"><h3>Contact Us</h3></div>
                    <br/>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Nama</label>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Input text here"></textarea>
                        </div>
                        <div className="tombol">
                        <button type="button" className="btn btn-outline-success">Send Message</button>
                        <div className="row rafi">
                            <div className="col text-center">
                                <p>Made 2021 by Rafi Ahmad Khairan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main