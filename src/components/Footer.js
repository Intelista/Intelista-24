import React from 'react';
const must =  "../images/must.png";

export default function Footer() {
  return (
    <footer className="px-4 divide-y bg-opacity-40  bg-black dark:bg-gray-100 text-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
	<div className="lg:w-1/3">
		<div className="flex items-center justify-center w-12 h-12 rounded-full">
			<img src={must} className="flex-shrink-0 w-18 h-18 rounded-full text-gray-900 dark:text-gray-50" alt="Description" />
		</div>
		<span className="pirateOne  self-center text-2xl font-semibold">I N T E L I S T A</span>
		</div>

		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-gray-50 dark:text-gray-900">Co Ordinator</h3>
				<ul className="space-y-1">
					<li>
						<p rel="noopener noreferrer">Shanmugam S</p>
						
					</li>
					<li>
						<p rel="noopener noreferrer">Subashini M </p>
					</li>
					<li>
						<p rel="noopener noreferrer">Contact +91 99620 75982</p>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-gray-50 dark:text-gray-900">Head Of the Department</h3>
				<ul className="space-y-1">
					<li>
						<p rel="noopener noreferrer">Dr.V. Belmer Gladson</p>
					</li>
					
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase text-gray-50 dark:text-gray-900">Developers</h3>
				<ul className="space-y-1">
					<li>
						<p rel="noopener noreferrer" > Nathaniel Felix L & Gokul P</p>
					</li>
					<li>
						<p rel="noopener noreferrer">Any technical issue contact us : +91 90477 69425</p>
						<li>
						<p rel="noopener noreferrer">+91 97861 83710</p>
						</li>
					</li>
					
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase text-gray-50 dark:text-gray-900">Social media</div>
				<div className="flex justify-start space-x-4">
					<a
						href="https://www.facebook.com/people/Intelista-AI/pfbid035miJrspsPJ3wXdL2xKKQ4qvCvUzgzhcA2gRzjXuA5wMwtPrX6MxSjoneNxcZtdjNl/?mibextid=qi2Omg&rdid=fqweRDn4EGnUSPK0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FMEkRkQL5hWxyw2BM%2F%3Fmibextid%3Dqi2Omg"
						target="_blank"
						rel="noopener noreferrer"
						title="Facebook"
						className="flex items-center p-2 transition-colors duration-200 hover:text-blue-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 32 32"
							className="w-6 h-6 fill-current"
						>
							<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
						</svg>
					</a>
					<a
						href="https://www.youtube.com/@intelista24"
						target="_blank"
						rel="noopener noreferrer"
						title="YouTube"
						className="flex items-center p-2 transition-colors duration-200 hover:text-red-600"
						>
						<svg
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6 fill-current"
						>
							<path d="M23.498 6.186a2.994 2.994 0 0 0-2.109-2.123C19.651 3.5 12 3.5 12 3.5s-7.651 0-9.389.563a2.994 2.994 0 0 0-2.109 2.123A31.907 31.907 0 0 0 0 12c-.001 1.309.08 2.614.502 3.814a2.994 2.994 0 0 0 2.109 2.123C4.349 20.5 12 20.5 12 20.5s7.651 0 9.389-.563a2.994 2.994 0 0 0 2.109-2.123c.423-1.2.503-2.505.502-3.814.001-1.309-.08-2.614-.502-3.814ZM9.75 15.12V8.88l5.625 3.12-5.625 3.12Z"></path>
						</svg>
						</a>


					<a
						href="https://www.instagram.com/intelista_24/?igsh=bXRtZHVqMjBwNmU1"
						target="_blank"
						rel="noopener noreferrer"
						title="Instagram"
						className="flex items-center p-2 transition-colors duration-200 hover:text-pink-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							fill="currentColor"
							className="w-6 h-6 fill-current"
						>
							<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.703-0.072 2.197-0.084 6.469-0.084zM16 7.787c-4.525 0-8.213 3.692-8.213 8.213 0 4.525 3.692 8.213 8.213 8.213s8.213-3.692 8.213-8.213c0-4.525-3.688-8.213-8.213-8.213zM16 21.817c-3.198 0-5.787-2.589-5.787-5.787s2.589-5.787 5.787-5.787 5.787 2.589 5.787 5.787c0 3.198-2.589 5.787-5.787 5.787zM25.771 6.573c-1.057 0-1.914 0.86-1.914 1.914s0.857 1.914 1.914 1.914 1.914-0.86 1.914-1.914-0.86-1.914-1.914-1.914z"></path>
						</svg>
					</a>
					<a
						href="mailto:intelista24@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						title="Email"
						className="flex items-center p-1 transition-colors duration-200 hover:text-blue-700"
						>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6 fill-current"
						>
							<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
						</svg>
						</a>

				</div>

			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center text-gray-400 dark:text-gray-600">© Team Design Freaks . All rights reserved.</div>
</footer>

  );
}