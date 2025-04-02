import ProductCard from "../../../components/ProductCard";
import Link from "next/link";

async function getProduct(id) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
            throw new Error("Produkt nicht gefunden");
        }
        return res.json();
    } catch (error) {
        console.error("Fehler beim Laden der Produktdaten:", error);
        return null;
    }
}

export default async function ProductDetail({ params }) {
    const product = await getProduct(params.id);
    if (!product) {
        return <p>Produkt nicht gefunden.</p>;
    }
    return (
        <div className="p-6 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Produkt Detail</h1>
            <ProductCard
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
            />
            <Link href="/">
                <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">Zurück</button>
            </Link>
        </div>
    );
}
