import { IMG2_URL } from "../commons/constant";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={IMG2_URL}
                    alt="image not found"
                />
            </div>
            <div className="nav-list">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
