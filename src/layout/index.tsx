import { FC, ReactNode } from "react";
import { LayoutContainer } from "./layout.style";
import { Header, Footer } from "Components";

const Layout: FC<{children: ReactNode}> = ({children}) => {
    console.log('layout');
    
    return <LayoutContainer id="content">
        {children}
        <Footer />
    </LayoutContainer>
};

export default Layout;