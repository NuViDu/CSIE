import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo_csie.png';

class Header extends React.Component {
    render(){
        return(
        /*<header>
            <nav className="navbar navbar-default navbar-fixed-top show-scroll visible">
                <div className="container">
                    <div className="navbar-header">
                    <img src={logo} className="navbar-brand navbar-link" alt="logo" />
                        <button
                            className="navbar-toggle collapsed"
                            data-target="#navcol-1"
                            data-toggle="collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navcol-1" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active" role="presentation">
                                <Link to='/'>
                                    <a>Thi thử trực tuyến</a>
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to='/ontap'>
                                    <a>Tài liệu ôn tập</a>
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to='/hoso'>
                                    <a>Hồ sơ</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>*/
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
        );
    }
}

export default Header;