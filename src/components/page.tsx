import Product from '../components/product';
import { useEffect, useState } from 'react';

export interface ProductType {
	id: string;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
}

export default function ClientPage() {
	const searchParams = new URLSearchParams(window.location.search);

	const search = searchParams.get('limit') ?? 10;
	const [products, setProducts] = useState<ProductType[]>([]);

	useEffect(() => {
		fetch(`https://projeto-tcc-server.vercel.app/api/products-client?limit=${search}`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
			});
	}, [search]);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-12 lg:p-24 bg-foreground'>
			<div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
				{products.map((product) => (
					<Product product={product} key={product.id} />
				))}
			</div>
		</main>
	);
}
