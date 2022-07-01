import { createContext, useContext } from "react";

export interface MenuContextInterface {
    open: boolean,
    handleMenuSwitch: () => void
}

const MenuContext = createContext<MenuContextInterface | null>(null);

export const useMenuContext = () => useContext(MenuContext);

export default MenuContext;