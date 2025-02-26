export default async function getData(url: string) {
    const res = await fetch(url);
    if (res.ok) {
        const { data: data } = await res.json();
        return data;
    }
    throw new Error(`${res.status} Something went wrong`);
}