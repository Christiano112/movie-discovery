import React from "react";
import SideNav from "@/components/nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Fragment>
            <div className="flex">
                <div className="h-full fixed px-0 mx-0">
                    <SideNav />
                </div>
                <div className="absolute right-0 min-h-100vh left-0 md:left-[13rem]">
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Layout;