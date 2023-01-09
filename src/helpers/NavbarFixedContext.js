import { createContext, useState } from "react";

export const NavbarFixedContext = createContext();

export const NavbarFixedProvider = ({ children }) => {
    const [fixedNavBar, setFixedNavbar] = useState(false)
    const [initialNavbarPosition, setInitialNavbarPosition] = useState();

    return(
        <NavbarFixedContext.Provider value={[fixedNavBar, setFixedNavbar, initialNavbarPosition, setInitialNavbarPosition]}>
            {children}
        </NavbarFixedContext.Provider>
    )
}