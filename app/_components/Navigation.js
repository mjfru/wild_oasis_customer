import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
	// Using the auth() function from our auth.js
	const session = await auth();
	console.log(session);

	return (
		<nav className="z-10 text-xl">
			<ul className="flex items-center gap-16">
				<li>
					<Link
						href="/cabins"
						className="transition-colors hover:text-accent-400"
					>
						Cabins
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className="transition-colors hover:text-accent-400"
					>
						About
					</Link>
				</li>
				<li>
					{/* Conditionally rendering user info if they're in session */}
					{session?.user?.image ? (
						<Link
							href="/account"
							className="flex items-center gap-4 transition-colors hover:text-accent-400"
						>
							<img
								src={session.user.image}
								className="h-8 rounded-full"
								alt={session.user.name}
								referrerPolicy="no-referrer"
							/>
							<span>Guest area</span>
						</Link>
					) : (
						<Link
							href="/account"
							className="transition-colors hover:text-accent-400"
						>
							Guest area
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
}
