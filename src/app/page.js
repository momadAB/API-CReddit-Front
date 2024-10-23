import { fetchUserData } from "./actions";

export default async function Home() {
  const Data = await fetchUserData();

  return (
    <div>
      <pre>{JSON.stringify(Data, null, 2)}</pre>
    </div>
  );
}
