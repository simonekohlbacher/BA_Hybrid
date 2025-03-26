import ProductList from "./components/ProductList";
import ImageSlider from './components/ImageSlider';
import Link from "next/link";
import Image from "next/image";

export default function Home() {

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
                    <p className="text-xl mt-2 mb-12">Diese Seite wird serverseitig (mit SSR) gerendert.<br />
                        Dabei wird die Seite im Browser aufgebaut und die Inhalte dynamisch nachgeladen.<br />
                    </p>
                </div>
                <div className="justify-self-end">
                    <Image src="/coding1.jpg" alt="Laptop und Notizbuch auf Schreibtisch" priority={false} href="https://www.pexels.com/de-de/foto/blauer-einziehbarer-stift-574070/" width="700" height="700" />
                </div>
            </div>

            <div className="text-center mx-48 my-24">
                <h2 className="text-2xl font-bold">Test</h2>
                <p className="text-xl mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
            </div>

            <ProductList selectedCategory="jewelery" />
            <ProductList selectedCategory="electronics" />

            <div className="bg-gray-800 text-center text-white p-24">
                <h2 className="text-2xl font-bold">Test</h2>
                <p className="text-xl mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
            </div>

            <ImageSlider images={images} />

            <ProductList selectedCategory="men's clothing" />
            <ProductList selectedCategory="women's clothing" />

            <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="m-24 py-12 text-left">
                    <h2 className="text-2xl font-bold">Eingesetzte Techniken</h2>
                    <p className="text-xl mt-2 mb-12">Diese Seite wird clientseitig (mit CSR) gerendert.<br />
                        Dabei wird die Seite im Browser aufgebaut und die Inhalte dynamisch nachgeladen.<br />
                    </p>
                </div>
                <div className="justify-self-end">
                    <Image src="/coding.jpg" alt="Laptop und Notizbuch auf Schreibtisch" priority="priority" href="https://www.pexels.com/de-de/foto/blauer-einziehbarer-stift-574070/" width="700" height="700" />
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
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-8 w-8 hover:opacity-80" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="h-8 w-8 hover:opacity-80" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2023.png" alt="LinkedIn" className="h-8 w-8 hover:opacity-80" />
                    </a>
                </div>
                <div className="mt-8">
                    <p className="text-sm">© 2025 Simone K. All rights reserved.</p>
                </div>
            </footer>

        </main>
    );
}
