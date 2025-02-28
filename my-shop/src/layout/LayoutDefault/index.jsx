// import { Outlet } from "react-router-dom";
import "./LayoutDefault.scss";

function LayoutDefault() {
  return (
    <>
      <header className="header">
        <div className="header__logo">logo</div>
        <div className="menu">
          <div className="header__cart">cart</div>
        </div>
      </header>
      <main className="main">
        <div className="main__item">{/* <Outlet /> */}</div>
      </main>
      <footer className="footer">
        <div className="footer__item">bachthanhvin</div>
      </footer>
    </>
  );
}
export default LayoutDefault;
