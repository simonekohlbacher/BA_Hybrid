import ProductList from '../../components/ProductList';

export default async function ProductCategoryPage({ params }) {
    const { category } = params;
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const products = await response.json();

    return (
        <div>
            <h1 className="text-2xl font-bold text-center m-12">Produkte in {category}</h1>
            <ProductList selectedCategory={category} />
        </div>
    );
}