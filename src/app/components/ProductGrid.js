import ProductCard from '../components/ProductCard';
import Link from 'next/link';

const fetchProducts = async (selectedCategory) => {
    const url = selectedCategory
        ? `https://fakestoreapi.com/products/category/${selectedCategory}`
        : "https://fakestoreapi.com/products";
    const response = await fetch(url, { cache: "force-cache" });
    const products = await response.json();
    return products;
};
export const revalidate = 3600; // Regeneration alle 60 Minuten

export default async function ProductList({ selectedCategory, showBackButton, showMoreButton }) {
    const products = await fetchProducts(selectedCategory);

    if (!Array.isArray(products)) {
        return <p>Keine Produkte verfügbar</p>;
    }

    return (
        <div className="bg-gray-100 p-8">
            <h3 className="text-xl font-bold text-center mb-6">{selectedCategory}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-6 mb-24">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                    />
                ))}
            </div>

            <div className="flex justify-center gap-4">
                {showBackButton && (
                    <Link href="/">
                        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
                            ⬅ Zurück
                        </button>
                    </Link>
                )}
                {showMoreButton && (
                    <Link href={selectedCategory ? `/products/${selectedCategory}` : "/products"}>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Mehr Ansehen
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}
