import CategoryList from "./components/CategoryList";
import ImageSlider from './components/ImageSlider';
import ProductTeaser from "./components/ProductTeaser";
import EmployeeList from "./components/EmployeeList";
import Link from "next/link";
import Image from "next/image";


async function getCategories() {
    const response = await fetch("https://fakestoreapi.com/products/categories", {
        next: { revalidate: 3600 }, // fetch data every hour
    });
    return response.json();
}

export default async function Home() {
    const categories = await getCategories();

    // pics for ImageSlider
    const images = [
        '/coding.jpg',
        '/coding1.jpg',
        '/coding2.jpg',
        '/coding3.jpg',
    ];
    return (
        <main>
            <div className="p-24 text-center">
                <h1 className="text-3xl font-bold">Willkommen zur Hybrid-App.</h1>
                <p className="text-xl mt-2 text-gray-600">
                    Diese Anwendung nutzt verschiedene Rendering-Techniken, um Inhalte darzustellen.<br />
                    Im Vergleich dazu steht die <Link href="http://ba-csr.vercel.app" target="_blank" className="underline"> Seite mit reinem CSR</Link>.<br />
                </p>
            </div>

            <div className="bg-gray-800 grid grid-cols-2 gap-4 mt-12 text-white">
                <div className="m-24 py-12 text-left">
                    <h2 className="text-2xl font-bold">Eingesetzte Techniken</h2>
                    <p className="text-xl mt-2 mb-12">Diese Seite wird teilweise serverseitig (mit SSR und SSG) gerendert.<br />
                        Dabei sind einzelene Komponenten noch mit CSR gerendert, darum ist dies eine hybride App.<br />
                    </p>
                </div>
                <div className="justify-self-end">
                    <Image src="/coding1.jpg" alt="Laptop und Notizbuch auf Schreibtisch" priority={true} width="700" height="700" />
                    <p>Bild Quelle von: https://www.pexels.com/de-de/foto/blauer-einziehbarer-stift-574070/</p>
                </div>
            </div>

            <div className="text-center mx-48 my-24">
                <h2 className="text-2xl font-bold">Bilderslider</h2>
                <p className="text-xl mt-2">
                    Im Folgenden wird ein Bildslider erstellt, der vier Bilder enthält, durch die du dich durchklicken kannst.
                    Er wird clientseitig gerendert, da er eine Interaktion von den Nutzer:innen erfordert und dabei ein Zustand gespeichert wird.
                    Jedoch werden die Bilder bereits am Server vorbereitet.
                </p>
            </div>

            <ImageSlider images={images} />


            <CategoryList categories={categories}/>
            {categories.map((category) => (
                <ProductTeaser key={category} selectedCategory={category} />
            ))}


            <div className="bg-gray-800 text-center text-white p-24">
                <h2 className="text-2xl font-bold">Daten fetchen</h2>
                <p className="text-xl mt-2">Um nun noch weitere Daten zu fetchen, holen wir uns 50 Mitarbeiter:innen von einer Open Source API rei (https://randomuser.me), die uns Fake Daten und Bilder übermittelt. Diese Visitenkarten werden nun vom Server zusammengestellt und an den Client fix und fertig gesendet.</p>
            </div>

            {/* Employees */}
            <EmployeeList/>

            <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="m-24 py-12 text-left">
                    <h2 className="text-2xl font-bold">Eingesetzte Techniken</h2>
                    <p className="text-xl mt-2 mb-12">Diese Seite wird clientseitig (mit CSR) gerendert.<br />
                        Dabei wird die Seite im Browser aufgebaut und die Inhalte dynamisch nachgeladen.<br />
                    </p>
                </div>
                <div className="justify-self-end">
                    <Image src="/coding1.jpg" alt="Laptop und Notizbuch auf Schreibtisch" priority={false} href="https://www.pexels.com/de-de/foto/blauer-einziehbarer-stift-574070/" width="700" height="700" />
                    <p>Bild Quelle von: https://www.pexels.com/de-de/foto/blauer-einziehbarer-stift-574070/</p>
                </div>
            </div>

            <footer className="bg-gray-800 text-white p-24 mt-16">
                <h2 className="text-3xl font-bold mb-4">Test Footer</h2>
                <p className="text-lg mb-4">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <div className="space-x-4 mt-8">
                    <a href="#" className="text-xl hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="text-xl hover:text-gray-400">Terms of Service</a>
                    <a href="#" className="text-xl hover:text-gray-400">Contact</a>
                </div>


                <div className="flex space-x-6 mt-8">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">INSTA</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GITHUB</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                </div>
                <div className="mt-8">
                    <p className="text-sm">© 2025 Simone K. All rights reserved.</p>
                </div>
            </footer>

        </main>
    );
}
