import styles from "@/styles/RootLayout.module.css";
import { Layout } from "antd";
import Link from "next/link";
import React, { ReactNode } from "react";

const { Header, Content, Footer } = Layout;

interface RootLayoutProps {
	children: ReactNode; // This allows any valid React children to be passed
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<Layout>
			<Header className="sticky top-0 z-10 flex items-center justify-between w-full">
				<nav className="w-full">
					<div className="flex items-center justify-between">

						<Link href="/" className="flex items-center">
							<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
								MoonTech
							</span>
						</Link>

            <ul className="flex gap-5 p-0 m-0 font-medium">
              <li className="list-none">
                <Link href="/" className="text-white">
                  Home
                </Link>
              </li>
              {/* Dropdown category */}
              <li className={styles.navbarDropdown}>
                <Link href="#" className="text-white">
                  Categories
                </Link>
                <div className={styles.dropdown}>
                  <Link href="#">CPU / Processor</Link>
                  <Link href="#">Motherboard</Link>
                  <Link href="#">RAM</Link>
                  <Link href="#">Power Supply Unit</Link>
                  <Link href="#">Storage Device</Link>
                  <Link href="#">Monitor</Link>
                  <Link href="#">Others</Link>
                </div>
              </li>
            </ul>
            
            <Link
              href="#"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Build PC
            </Link>
              
					</div>
				</nav>
			</Header>
			<Content className="site-layout" style={{ padding: "0 50px" }}>
				<div style={{ padding: 24, minHeight: 380, background: "#fff" }}>
					{children}
				</div>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Ant Design ©2023 Created by Ant UED
			</Footer>
		</Layout>
	);
};

export default RootLayout;
