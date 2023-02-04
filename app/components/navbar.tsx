"use client";
import React, { Component, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	BookmarkSquareIcon,
	CursorArrowRaysIcon,
	ShieldCheckIcon,
	Squares2X2Icon,
	XMarkIcon,
	CalendarDaysIcon,
	NewspaperIcon,
} from "@heroicons/react/24/outline";
import Headroom from "react-headroom";
import Link from "next/dist/client/link";
import PopoverMenu from "./popoverMenu";

const visit = [
	{
		name: "admission",
		description:
			"Book an upcoming party or check availability on your event date",
		href: "/admission",
		target: "_top",
		icon: CalendarDaysIcon,
	},
	{
		name: "hours",
		description: "Send us any feedback or inquiries",
		href: "/contact",
		target: "_top",
		icon: CursorArrowRaysIcon,
	},
	{
		name: "waiver",
		description: "Sign a waiver for your children in advance",
		href: "/waiver",
		target: "_top",
		icon: ShieldCheckIcon,
	},
	{
		name: "gallery",
		description: "Learn more about the team.",
		href: "/gallery",
		target: "_top",
		icon: Squares2X2Icon,
	},
];
const party = [
	{
		name: "packages",
		description:
			"Get all of your questions answered in our forums or contact support.",
		href: "/packages",
		target: "_top",
		icon: NewspaperIcon,
	},
	{
		name: "book",
		description:
			"Learn how to maximize our platform to get the most out of it.",
		href: "https://giggles-play.square.site/",
		target: "_none",
		icon: BookmarkSquareIcon,
	},
];
const read = [
	{
		name: "blog",
		description:
			"Book an upcoming party or check availability on your event date",
		href: "/articles",
		target: "_top",
		icon: CalendarDaysIcon,
	},
	{
		name: "shop",
		description: "Send us any feedback or inquiries",
		href: "/shop",
		target: "_top",
		icon: CursorArrowRaysIcon,
	},
];
const mobile1 = [
	{
		name: "admission",
		description:
			"Book an upcoming party or check availability on your event date",
		href: "/booking",
		target: "_none",
		icon: CalendarDaysIcon,
	},
	{
		name: "hours",
		description: "Send us any feedback or inquiries",
		href: "/contact",
		target: "_top",
		icon: CursorArrowRaysIcon,
	},
	{
		name: "waiver",
		description: "Sign a waiver for your children in advance",
		href: "/waiver",
		target: "_top",

		icon: ShieldCheckIcon,
	},
	{
		name: "gallery",
		description: "Learn more about the team.",
		href: "/gallery",
		target: "_top",
		icon: Squares2X2Icon,
	},
];
const mobile2 = [
	{
		name: "packages",
		description:
			"Get all of your questions answered in our forums or contact support.",
		href: "/packages",
		target: "_top",
		icon: NewspaperIcon,
	},
	{
		name: "book",
		description:
			"Learn how to maximize our platform to get the most out of it.",
		href: "/booking",
		target: "_none",
		icon: BookmarkSquareIcon,
	},
];

interface Props {}

interface State {
	articles: any[];
}

class Navbar3 extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { articles: [] };
	}

	render() {
		return (
			<Headroom
				style={{
					zIndex: 40,
					maxWidth: "1280px",
					marginLeft: "auto",
					marginRight: "auto",
				}}
				className=""
			>
				<Popover as="nav" className="relative bg-white ">
					<div className="mx-auto px-1 sm:px-0 ">
						<div className="flex  max-h-[80px] items-center justify-between border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10 px-0">
							<div className="flex justify-start lg:w-0 lg:flex-1">
								<nav>
									<Link
										href="/"
										className="flex justify-center items-center hover:scale-105"
									>
										<img className="object-scale-down w-32" src="giggles.svg" />
									</Link>
								</nav>
							</div>
							<div className="-my-2 -mr-2 md:hidden">
								<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
									<span className="sr-only">Open menu</span>
									<Bars3Icon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>

							<Popover.Group as="nav" className="hidden space-x-8 md:flex ">
								<Link
									href="/"
									className="text-base font-normal text-gray-500 hover:text-black hover:underline"
								>
									home
								</Link>
								<PopoverMenu solutions={visit} title="visit" />
								<PopoverMenu solutions={party} title="party" />
								<Link
									href="/about"
									className="text-base font-normal text-gray-500 hover:text-black hover:underline"
								>
									learn
								</Link>
								<PopoverMenu solutions={read} title="read" />
							</Popover.Group>
							<div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
								<Link
									href="/contact"
									className="ml-8 mr-4 inline-flex items-center justify-center whitespace-nowrap rounded-3xl border border-transparent hover:bg-[#f7ae47] px-4 py-2 text-base font-medium text-white shadow-sm bg-[#ec6a52] hover:scale-105"
								>
									get in touch
								</Link>
							</div>
						</div>
					</div>

					<Transition
						as={Fragment}
						enter="duration-100 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							className="fixed w-full top-0 transform transition md:hidden"
						>
							{({ close }) => (
								<button
									className="absolute w-full text-left p-2"
									onClick={async () => {
										await close();
									}}
								>
									<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
										<div className="px-5 pt-2 pb-6">
											<div className="flex items-center justify-between">
												<div>
													<Link href="/">
														<img
															className="w-auto h-12"
															src="giggles-logo-2.svg"
														/>
													</Link>
												</div>
												<div className="-mr-2">
													<div className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
														<span className="sr-only">Close menu</span>
														<XMarkIcon className="h-6 w-6" aria-hidden="true" />
													</div>
												</div>
											</div>
											<div className="mt-6">
												<nav className="grid gap-y-8">
													{mobile1.map((item) => (
														<Link
															key={item.name}
															href={item.href}
															target={item.target}
															className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
														>
															<item.icon
																className="h-6 w-6 flex-shrink-0 text-[#435a6c]"
																aria-hidden="true"
															/>
															<span className="ml-3 text-base font-medium text-gray-900">
																{item.name}
															</span>
														</Link>
													))}
												</nav>
											</div>
										</div>
										<div className="space-y-6 py-6 px-5">
											<div className="grid grid-cols-2 gap-y-4 gap-x-8">
												<Link
													href="/articles"
													className="text-base font-medium text-gray-900 hover:text-gray-700"
												>
													blog
												</Link>

												<Link
													href="/learn"
													className="text-base font-medium text-gray-900 hover:text-gray-700"
												>
													learn
												</Link>
												{mobile2.map((item) => (
													<Link
														key={item.name}
														href={item.href}
														target={item.target}
														className="text-base font-medium text-gray-900 hover:text-gray-700"
													>
														{item.name}
													</Link>
												))}
											</div>
											<div>
												<Link
													href="/contact"
													className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#99bdbb] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#435a6c]"
												>
													get in touch
												</Link>
											</div>
										</div>
									</div>
								</button>
							)}
						</Popover.Panel>
					</Transition>
				</Popover>
			</Headroom>
		);
	}
}

export default Navbar3;
