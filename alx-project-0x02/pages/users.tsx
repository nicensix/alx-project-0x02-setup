import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode,
    },
  }));

  return {
    props: { users },
  };
};

export default function Users({ users }: { users: UserProps[] }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">Users Directory 🧑‍💼</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </div>
    </div>
  );
}