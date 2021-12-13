import React, { useContext } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import Search from "../Menu/Search";
import Logo from "../Logo/Logo";
import HeaderItem from "./NavbarItem";
import Button from "../Button/Button";
import authApi from "../../api/auth";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const location = useLocation();
  const { setUser, setIsAuth } = useContext(GlobalContext);
  let history = useHistory();

  async function logout() {
    try {
      await authApi.logout();
      localStorage.removeItem("token");
      setUser({});
      setIsAuth(false);
      history.push("/");
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  return (
    <div className="flex justify-between flex-row items-center py-4 px-12 border-solid border-b-2 border-gray-300">
      <div className="flex justify-between items-center w-3/5">
        <Logo />
        <div className="flex">
          <HeaderItem label="Home" path="/" />
          <HeaderItem label="Catalog" path="/catalog" />
          <HeaderItem label="Cart" path="/cart" />
        </div>
      </div>
      <div className="flex">
        {(location.pathname === "/catalog" || location.pathname === "/") && (
          <Search />
        )}
        <Button onClick={() => logout()} label="Logout" />
      </div>
    </div>
  );
};

export default Navbar;
