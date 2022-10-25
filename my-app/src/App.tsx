import "./App.css";
import { useState } from "react";
import { User } from './interfaces';

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () =>
    setUser({
      name: "Alistair",
      age: 40,
      province: "Barsaive",
      address: {
        city: "Valoyes",
        street: "Main Square",
        number: 12,
      },
      councellor: false,
    });

  return (
    <>
      <button onClick={fetchUser}>Fetch on click</button>
      {user && <p>{`Welcome ${user.name}`}</p>}
    </>
  );
}
