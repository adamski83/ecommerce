import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Head>
				<title>Crazy stuff</title>
			</Head>
			<header>
				<Navbar />
				<main className="main-container">{children}</main>
			</header>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
