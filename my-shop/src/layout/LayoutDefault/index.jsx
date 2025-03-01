// import { Outlet } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import CartMini from "../../components/CartMini";

function LayoutDefault() {
  const handleClick = (e) => {
    return e.isActive ? "header__item header__item--active" : "header__item";
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header__logo">
            <NavLink className={handleClick} to="/">
              Logo
            </NavLink>
          </div>
          <div className="menu">
            <div className="header__cart">
              <CartMini item={handleClick} />
            </div>
          </div>
        </header>
        <main className="main">
          <div className="main__item">
            <Outlet />
          </div>
        </main>
        <footer className="footer">
          <div className="footer__item">bachthanhvin</div>
        </footer>
      </div>
    </>
  );
}
export default LayoutDefault;
