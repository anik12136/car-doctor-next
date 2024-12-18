import Image from "next/image";
import Link from "next/link";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {

    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },

    ]
    return (
        <div className="bg-base-100">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul> */}

                    </div>

                    <Link href={"/"}>
                        <Image alt="logo" src="/assets/logo.svg" height={40} width={80} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul> */}
                    <div className="flex gap-6">
                        {
                            navItems.map((item) =>
                            (<Link href={`/${item.path}`} key={item.path} className="font-semibold hover:text-primary duration-300">
                                {item.title}
                            </Link>)
                            )}
                    </div>
                </div>
                <div className="navbar-end flex gap-6">
                    <IoSearch className="text-xl hover:text-primary duration-300"/>
                    <IoBagHandleOutline className="text-xl hover:text-primary duration-300"/>
                    <a className="btn btn-outline px-8 hover:text-white">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;