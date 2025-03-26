import ProductCard from '../components/ProductCard';

export default async function ProductList({ selectedCategory }) {

    const url = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
        : 'https://fakestoreapi.com/products';
    const response = await fetch(url, { cache: "force-cache" });
    const products = await response.json();

    if (!Array.isArray(products)) {
        return <p>No products available</p>;
    }

    return (
        <div className="bg-gray-100 p-8">
            <h3 className="text-xl font-bold text-center mb-6">{selectedCategory}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-6 mb-24">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}
