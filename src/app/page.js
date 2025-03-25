//Diese Seite wird statisch generiert SSG

export default function Home() {
    return (
        <main className="">

            <div className="grid grid-cols-2 gap-4 p-4 mt-12">
                <div className="p-4">
                    <h1 className="text-3xl font-bold">Willkommen zur Hybrid-App!</h1>
                    <p className="mt-2 text-gray-600">Diese Anwendung nutzt verschiedene Rendering-Techniken.</p>
                </div>
               <div className="p-4">
                    <img src="/logo.png" alt="Logo" className="h-48 ml-24" />
                </div>
            </div>
            <div className="bg-gray-800">
                <div className="mx-12 text-white py-12 text-center">
                    <h2 className="text-xl font-bold ">Server-Side Rendering (SSR)</h2>
                    <p className="mt-2 mb-12">Einige Seiten werden serverseitig gerendert.</p>
                    <a href={"/dashboard"} className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                        Dashboard
                    </a>
                </div>
            </div>

            <div>
                <div className="mx-12 text-gray-800 text-right py-12">
                    <h2 className="text-xl font-bold ">Server-Side Rendering (SSR)</h2>
                    <p className="mt-2 text-gray-800 mb-12">Einige Seiten werden serverseitig gerendert.</p>
                    <a href={"/dashboard"} className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                        Dashboard
                    </a>
                </div>
            </div>





        </main>
    );
}
