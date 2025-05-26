interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
}

const UsersServer = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000); // Simulate a delay of 1 second
  });
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users312312",
  );
  const users: User[] = await response.json();
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className={"border p-4 mb-4 rounded shadow"}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersServer;
