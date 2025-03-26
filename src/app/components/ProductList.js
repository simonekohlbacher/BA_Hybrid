import ProductCard from '../components/ProductCard';

export default async function ProductList() {

    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    if (!Array.isArray(products)) {
        return <p>No products available</p>;
    }

    return (
        <div className="bg-gray-100 p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Products</h2>
            <p className="text-xl text-center mb-12">Lorem ipsum</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-24">
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
