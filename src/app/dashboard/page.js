//Das Dashboard wird serverseitig gerendert (Server-Side Rendering).

async function getData() {
    const res = await fetch("http://localhost:3000/api/data", { cache: "no-store" });
    return res.json();
}

import Counter from "../components/Counter";

export default async function Dashboard() {
    const data = await getData();

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="mt-2">Serverzeit: {data.serverTime}</p>

            {/* Client-seitige interaktive Komponente */}
            <Counter />
        </main>
    );
}