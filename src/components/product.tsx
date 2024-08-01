import { product } from "../../db/schema/products";

export default function Product({ product }: { product: product }) {
	return (
		<div className="group relative max-w-[40ch]">
			<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
				<img
					src={product.imageUrl!}
					alt="Front of men's Basic Tee in black."
					className="h-full w-full object-cover object-center lg:h-full lg:w-full"
				/>
			</div>
			<div className="p-2 flex justify-between bg-gray-800 rounded-b-lg min-h-24">
				<div>
					<h3 className="text-sm text-gray-200 line-clamp-1">
						<a href="#">
							<span
								aria-hidden="true"
								className="absolute inset-0"
							/>
							{product.name}
						</a>
					</h3>
					<p className="mt-1 text-sm text-gray-400 line-clamp-3">
						{product.description}
					</p>
				</div>
				<p className="text-sm font-medium text-gray-100">
					R${product.price}
				</p>
			</div>
		</div>
	);
}
