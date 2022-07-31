import React, {useState} from "react";
import './Footer.css';
import { Navbar, Nav } from 'react-bootstrap';
import { AiFillHome } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr"
import { ReactComponent as Odap } from "./image 7.svg";
import { BiUserCircle } from "react-icons/bi";
export default function Footer() {
    const [bcolor, setBcolor] = useState(0);
    const onMichin = () => {
        AiFillHome(
            {}
        )
    }
    return(
        <div className="bottom">
            <Navbar variant="white">
                <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="home"> <AiFillHome className="Iconhome" onClick={onMichin}/> </Nav.Link>
                        <Nav.Link href="#features" className="problems"><GrDocumentText className="doc"/></Nav.Link>
                        <Nav.Link href="#pricing" className="Odap"><Odap className="IconOdap"/></Nav.Link>
                        <Nav.Link href="#pr" className="user"><BiUserCircle className="IconUser"/></Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    )
}