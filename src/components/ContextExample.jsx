import { UserContext, useUser } from "../context/UserContext";

function Child() {
  const user = useUser();
  return <div>Hello, {user.name} (from Context)!</div>;
}

export default function ContextExample() {
  return (
    <UserContext.Provider value={{ name: "Jagannath" }}>
      <Child />
    </UserContext.Provider>
  );
}
