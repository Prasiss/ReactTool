async function getDate() {
    const res = await fetch(
        "https://snowtooth-api-rest.fly.dev"
    );
    return res.json();
}



export default async function Page() {
    const data = await getDate();
    return (
        <main>
            <h1>This is a mountain info page</h1>
            <table>
                <thead>
                    <tr>
                        <th>lift name</th>
                        <th>Current status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((lift) => (
                        <tr key={lift.id}>
                            <td>{lift.name}</td>
                            <td>{lift.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}