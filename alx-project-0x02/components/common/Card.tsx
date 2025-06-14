import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-xl font-semibold mb-2 text-blue-600">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;