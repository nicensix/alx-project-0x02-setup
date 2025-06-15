import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg shadow-md bg-white p-4">
      <h2 className="text-xl font-semibold text-blue-600 mb-1">{name}</h2>
      <p className="text-gray-700 mb-1">📧 {email}</p>
      <p className="text-sm text-gray-600">
        🏠 {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;