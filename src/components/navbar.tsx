import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';

export default function Navbar() {
	return (
		<header className='flex h-20 w-full shrink-0 items-center px-8 md:px-10 bg-black dark:text-white'>
			<Sheet>
				<SheetTrigger asChild>
					<Button className='md:hidden' size='icon' variant='outline'>
						<MenuIcon />
						<span className='sr-only'>Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left'>
					<a className='mr-6 hidden lg:flex' href='/'>
						<MountainIcon />
						<span className='sr-only'>Acme Inc</span>
					</a>
					<div className='grid gap-2 py-6'>
						<a className='flex w-full items-center py-2 text-lg font-semibold' href='/'>
							Home
						</a>
						<a className='flex w-full items-center py-2 text-lg font-semibold' href='/'>
							Server side
						</a>
						<a className='flex w-full items-center py-2 text-lg font-semibold' href='/client'>
							Client side
						</a>
						<a className='flex w-full items-center py-2 text-lg font-semibold' href='#'>
							Contact
						</a>
					</div>
				</SheetContent>
			</Sheet>
			<a className='mr-6 hidden md:flex pr-4' href='/'>
				<MountainIcon />
				<span className='sr-only'>Acme Inc</span>
			</a>
			<nav className='ml-auto hidden md:flex gap-6 pl-4'>
				<a
					className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
					href='#'
				>
					Home
				</a>
				<a
					className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
					href='/'
				>
					Server side
				</a>
				<a
					className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
					href='/client'
				>
					Client side
				</a>
				<a
					className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
					href='#'
				>
					Contact
				</a>
			</nav>
		</header>
	);
}

function MenuIcon() {
	return (
		<svg
			className='h-6 w-6'
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<line x1='4' x2='20' y1='12' y2='12' />
			<line x1='4' x2='20' y1='6' y2='6' />
			<line x1='4' x2='20' y1='18' y2='18' />
		</svg>
	);
}

function MountainIcon() {
	return (
		<svg
			className='h-6 w-6'
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='m8 3 4 8 5-5 5 15H2L8 3z' />
		</svg>
	);
}
