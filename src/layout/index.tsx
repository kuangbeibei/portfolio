import { FC, ReactNode } from "react";
import { LayoutContainer } from "./layout.style";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return <LayoutContainer>
        {children}
    </LayoutContainer>
};

export default Layout;