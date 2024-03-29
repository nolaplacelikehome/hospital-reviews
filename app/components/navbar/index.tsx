"use client"
import Link from "next/link";
import { useState } from "react";

const navigation = [
	{ name: 'Search', href: '/', current: true },
	{ name: 'Profile', href: '/profile', current: false },
	{ name: 'Test', href: '/', current: false }
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [btnId, setBtnId] = useState("");

	const toggleMenu = (btnSignature: string) => {
		setBtnId(btnSignature);
		setIsOpen(!isOpen);
	}

	return (
		<nav className="bg-gray-500">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-6">
				<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<button type="button" onClick={() => toggleMenu("menu")} className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
							<span className="absolute -inset-0.5"></span>
							<span className="sr-only">Open main menu</span>
							<svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
							</svg>
							<svg className="hidden h-6 w-6" fill="none" viewBox="0 0 0 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<p className="h-8 w-auto pt-1 sm:pt-0">Hospital Reviews</p>
						</div>
						<div className="hidden sm:ml-6 md:ml-12 sm:block">
							<div className="flex space-x-7">
								<Link href="">Search</Link>
								<Link href="">Profile</Link>
								<Link href="">Dashboard</Link>
							</div>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
							<span className="absolute -inset-1.5"></span>
							<span className="sr-only">View notifications</span>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
							</svg>
						</button>
						<div className="relative ml-3">
							<div>
								<button type="button" onClick={() => toggleMenu("profile")}>
									<span className="absolute -inset-1.5"></span>
									<span className="sr-only">Open user menu</span>
									<img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
								</button>
							</div>
							<div className={`${isOpen && btnId == "profile" ? "visible" : "hidden"} z-5 absolute right-0 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button`}>
								<Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">Your Profile</Link>
								<Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Settings</Link>
								<Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Sign out</Link>
          		</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${isOpen && btnId == "menu" ? "visible absolute" : "hidden"} sm:hidden`}>
				<div className="space-y-1 z-5 px-2 pb-3 pt-2">
					<Link href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Search</Link>
					<Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Profile</Link>
					<Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Dashboard</Link>
				</div>
			</div>
		</nav>
	);
}