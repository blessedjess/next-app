import {
	AlertTriangle,
	ArrowRight,
	Check,
	ChevronLeft,
	ChevronRight,
	Circle,
	ClipboardCheck,
	Copy,
	CreditCard,
	File,
	FileText,
	HelpCircle,
	Image,
	Laptop,
	Loader2,
	LucideProps,
	Moon,
	MoreVertical,
	Pizza,
	Plus,
	Settings,
	SunMedium,
	Trash,
	Twitter,
	User,
	X,
	MapPin,
	Phone,
	type Icon as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
	logo: (props: LucideProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<circle cx="12" cy="12" r="10"></circle>
		</svg>
	),
	close: X,
	spinner: Loader2,
	chevronLeft: ChevronLeft,
	chevronRight: ChevronRight,
	trash: Trash,
	post: FileText,
	page: File,
	media: Image,
	settings: Settings,
	billing: CreditCard,
	ellipsis: MoreVertical,
	add: Plus,
	warning: AlertTriangle,
	user: User,
	arrowRight: ArrowRight,
	help: HelpCircle,
	pizza: Pizza,
	twitter: Twitter,
	check: Check,
	copy: Copy,
	copyDone: ClipboardCheck,
	sun: SunMedium,
	moon: Moon,
	laptop: Laptop,
	mapPin: MapPin,
	phone: Phone,
	gitHub: (props: LucideProps) => (
		<svg viewBox="0 0 438.549 438.549" {...props}>
			<path
				fill="currentColor"
				d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
			></path>
		</svg>
	),
	radix: (props: LucideProps) => (
		<svg viewBox="0 0 25 25" fill="none" {...props}>
			<path
				d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
				fill="currentcolor"
			></path>
			<path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
			<path
				d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
				fill="currentcolor"
			></path>
		</svg>
	),
	npm: (props: LucideProps) => (
		<svg viewBox="0 0 24 24" {...props}>
			<path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
		</svg>
	),
	yarn: (props: LucideProps) => (
		<svg viewBox="0 0 24 24" {...props}>
			<path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z" />
		</svg>
	),
	pnpm: (props: LucideProps) => (
		<svg viewBox="0 0 24 24" {...props}>
			<path d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z" />
		</svg>
	),
	react: (props: LucideProps) => (
		<svg viewBox="0 0 24 24" {...props}>
			<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
		</svg>
	),
	tailwind: (props: LucideProps) => (
		<svg viewBox="0 0 24 24" {...props}>
			<path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
		</svg>
	),
	email: (props: LucideProps) => (
		<svg viewBox="0 0 135.35 83.12" fill="#f7ae47" {...props}>
			<path d="M131.59,83.12H3.77c-1.56,0-2.95-.96-3.51-2.41-.56-1.45-.17-3.1,.98-4.15L47.09,35c1.33-1.21,3.33-1.31,4.77-.23l15.81,11.73,15.81-11.73c1.44-1.07,3.44-.97,4.77,.23l45.85,41.56c1.15,1.05,1.55,2.69,.99,4.15-.56,1.45-1.96,2.41-3.51,2.41Zm-118.06-7.53H121.82l-36.33-32.92-15.57,11.55c-1.33,.99-3.16,.99-4.49,0l-15.57-11.55L13.53,75.58Z" />
			<path d="M3.77,83.12c-.52,0-1.04-.11-1.53-.32C.88,82.19,0,80.84,0,79.35V3.77C0,2.34,.8,1.04,2.07,.4,3.34-.24,4.87-.11,6.01,.74L51.87,34.77c.91,.67,1.46,1.71,1.52,2.84,.06,1.13-.4,2.22-1.23,2.98L6.3,82.14c-.71,.64-1.61,.98-2.53,.98ZM7.53,11.25v59.6L43.69,38.08,7.53,11.25Z" />
			<path d="M131.59,83.12c-.92,0-1.82-.34-2.53-.98l-45.85-41.56c-.84-.76-1.29-1.85-1.23-2.98,.06-1.13,.61-2.17,1.52-2.84L129.34,.74c1.14-.85,2.67-.98,3.94-.34,1.27,.64,2.07,1.94,2.07,3.36V79.35c0,1.49-.88,2.84-2.24,3.44-.49,.22-1.01,.32-1.53,.32Zm-39.93-45.03l36.16,32.77V11.25l-36.16,26.83Z" />
			<path d="M67.68,54.96c-.79,0-1.58-.25-2.24-.74L1.52,6.79C.22,5.82-.32,4.13,.19,2.58,.7,1.04,2.14,0,3.77,0h127.82c1.62,0,3.07,1.04,3.58,2.58,.51,1.54-.03,3.24-1.33,4.21l-63.91,47.42c-.67,.49-1.46,.74-2.24,.74ZM15.16,7.53l52.51,38.97L120.19,7.53H15.16Z" />
		</svg>
	),
	instagram: (props: LucideProps) => (
		<svg
			width="21"
			height="21"
			viewBox="0 0 21 21"
			fill="black"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M20.9466 6.17408C20.8974 5.05826 20.7169 4.29115 20.4584 3.62644C20.1917 2.92086 19.7814 2.28916 19.2438 1.76402C18.7186 1.23071 18.0826 0.816309 17.3851 0.553821C16.7164 0.295339 15.9531 0.114899 14.8371 0.0657021C13.7127 0.0123392 13.3558 0 10.5041 0C7.65239 0 7.29545 0.0123392 6.17525 0.0615356C5.05923 0.110732 4.29197 0.291333 3.62729 0.549654C2.92142 0.816309 2.28959 1.22655 1.76436 1.76402C1.23095 2.28916 0.816625 2.92503 0.553926 3.62243C0.295395 4.29115 0.114921 5.0541 0.0657146 6.16991C0.0123415 7.29406 0 7.65093 0 10.5021C0 13.3532 0.0123415 13.7101 0.0615474 14.8301C0.110753 15.9459 0.291388 16.713 0.549919 17.3777C0.816625 18.0833 1.23095 18.715 1.76436 19.2401C2.28959 19.7735 2.92558 20.1879 3.62312 20.4503C4.29197 20.7088 5.05506 20.8893 6.17125 20.9385C7.29128 20.9878 7.64838 21 10.5001 21C13.3518 21 13.7087 20.9878 14.8289 20.9385C15.9449 20.8893 16.7122 20.7088 17.3769 20.4503C18.7885 19.9047 19.9045 18.7889 20.4502 17.3777C20.7086 16.709 20.8892 15.9459 20.9385 14.8301C20.9877 13.7101 21 13.3532 21 10.5021C21 7.65093 20.9958 7.29406 20.9466 6.17408ZM19.0552 14.748C19.01 15.7736 18.8377 16.3275 18.6941 16.6967C18.3411 17.6115 17.6149 18.3376 16.6999 18.6905C16.3306 18.8341 15.7726 19.0063 14.7509 19.0514C13.643 19.1007 13.3107 19.1129 10.5083 19.1129C7.70576 19.1129 7.36934 19.1007 6.26549 19.0514C5.2397 19.0063 4.68578 18.8341 4.31649 18.6905C3.86114 18.5222 3.44665 18.2556 3.11023 17.9069C2.76146 17.5663 2.49475 17.1561 2.32646 16.7008C2.18285 16.3316 2.01055 15.7736 1.96551 14.7522C1.91614 13.6446 1.90396 13.3122 1.90396 10.5103C1.90396 7.7083 1.91614 7.37194 1.96551 6.26846C2.01055 5.24287 2.18285 4.68905 2.32646 4.31983C2.49475 3.86441 2.76146 3.45016 3.11439 3.11364C3.45483 2.76494 3.86514 2.49828 4.32066 2.33018C4.68994 2.1866 5.24804 2.01433 6.26966 1.96914C7.37751 1.91994 7.70993 1.9076 10.5123 1.9076C13.3189 1.9076 13.6512 1.91994 14.755 1.96914C15.7808 2.01433 16.3347 2.1866 16.704 2.33018C17.1594 2.49828 17.5739 2.76494 17.9103 3.11364C18.2591 3.45417 18.5258 3.86441 18.6941 4.31983C18.8377 4.68905 19.01 5.24687 19.0552 6.26846C19.1044 7.3761 19.1167 7.7083 19.1167 10.5103C19.1167 13.3122 19.1044 13.6404 19.0552 14.748Z"
				fill="black"
			/>
			<path
				d="M10.5 6C8.01567 6 6 8.01554 6 10.5C6 12.9845 8.01567 15 10.5 15C12.9845 15 15 12.9845 15 10.5C15 8.01554 12.9845 6 10.5 6ZM10.5 13.419C8.88829 13.419 7.58096 12.1118 7.58096 10.5C7.58096 8.88816 8.88829 7.58096 10.5 7.58096C12.1118 7.58096 13.419 8.88816 13.419 10.5C13.419 12.1118 12.1118 13.419 10.5 13.419Z"
				fill="black"
			/>
			<path
				d="M18 5.5C18 6.32835 17.3284 7 16.4999 7C15.6716 7 15 6.32835 15 5.5C15 4.67146 15.6716 4 16.4999 4C17.3284 4 18 4.67146 18 5.5Z"
				fill="black"
			/>
		</svg>
	),
	facebook: (props: LucideProps) => (
		<svg
			width="21"
			height="21"
			viewBox="0 0 21 21"
			fill="black"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M10.5001 0C4.7011 0 0 4.72075 0 10.544C0 15.7667 3.78548 20.092 8.74886 20.9296V12.7437H6.21594V9.79796H8.74886V7.62588C8.74886 5.10564 10.2817 3.73225 12.5209 3.73225C13.5934 3.73225 14.515 3.8125 14.7826 3.84784V6.48217L13.2295 6.48292C12.012 6.48292 11.7773 7.06377 11.7773 7.91643V9.79645H14.6824L14.3035 12.7422H11.7773V21C16.9724 20.3651 21 15.9296 21 10.5409C21 4.72075 16.2989 0 10.5001 0Z"
				fill="black"
			/>
		</svg>
	),
	linkedin: (props: LucideProps) => (
		<svg
			height="800px"
			width="800px"
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 291.319 291.319"
			{...props}
		>
			<g>
				<path
					fill="#0E76A8"
					d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66s-65.21,145.659-145.66,145.659S0,226.1,0,145.66
		S65.21,0,145.659,0z"
				/>
				<path
					fill="#FFFFFF"
					d="M82.079,200.136h27.275v-90.91H82.079V200.136z M188.338,106.077
		c-13.237,0-25.081,4.834-33.483,15.504v-12.654H127.48v91.21h27.375v-49.324c0-10.424,9.55-20.593,21.512-20.593
		s14.912,10.169,14.912,20.338v49.57h27.275v-51.6C218.553,112.686,201.584,106.077,188.338,106.077z M95.589,100.141
		c7.538,0,13.656-6.118,13.656-13.656S103.127,72.83,95.589,72.83s-13.656,6.118-13.656,13.656S88.051,100.141,95.589,100.141z"
				/>
			</g>
		</svg>
	),
};
