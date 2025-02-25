async function getData() {
    const res = await fetch("https://snowtooth-hotel-api.fly.dev");
    return res.jason();
}
export default async function Page() {
    const data = await getData();

    return (
        <main>
            <div>
                <h1>Hotel Details</h1>
                <div> {JSON.stringify(data)}</div>
            </div>
        </main>
    );
}