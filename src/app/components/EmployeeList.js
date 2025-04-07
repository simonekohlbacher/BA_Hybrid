
export default async function UserList() {
    const res = await fetch('https://randomuser.me/api/?results=50', {
        next: { revalidate: 604800 }, // fetch data every week
    });
    const data = await res.json();
    const users = data.results;

    return (
        <div className="p-4 mx-12 mt-12">
            <h1 className="text-3xl font-bold mb-6 text-center">Mitarbeiterübersicht</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {users.map((user, index) => (
                    <div
                        key={user.login.uuid}
                        className="p-4 border rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-6"
                    >
                        <img
                            src={user.picture.large}
                            alt={`${user.name.first} ${user.name.last}`}
                            className="w-32 h-32 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                        />
                        <div className="flex flex-col justify-between h-full">
                            <div className="font-semibold text-lg">
                                {user.name.title} {user.name.first} {user.name.last}
                            </div>
                            <div className="text-sm text-gray-600">{user.email}</div>
                            <div className="text-sm">
                                {user.location.city}, {user.location.street.name}{' '}
                                {user.location.street.number}
                            </div>
                            <div className="text-sm text-gray-500">{user.phone}</div>
                            <button className="mt-4 bg-gray-800 rounded px-4 py-2 text-white hover:bg-gray-600 w-fit">
                                Kontaktieren
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
