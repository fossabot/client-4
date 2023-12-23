/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.jsx`
 * client | Semantyk
 *
 * Created: Nov 30, 2023
 * Modified: Dec 22, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
//* Local Imports
import "@/app/layout.css";
import { getMetadata } from "@/backend/logic/seo";
import SessionProvider from "@/frontend/logic/SessionProvider";
import Footer from "@/frontend/ui/components/molecules/Footer";


//* Main
export async function generateMetadata() {return await getMetadata();}

export default function RootLayout({ children }) {
    // Return
    return (
        <html lang="en">
        <body id="App" className={"bg-dark text-light"}>
        <SessionProvider>
            {children}
            <Footer/>
        </SessionProvider>
        </body>
        </html>
    );
}