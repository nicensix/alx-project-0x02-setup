import Header from "@/components/layout/Header";

export default function Posts() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-blue-600">Posts Page ✍️</h2>
        <p className="text-gray-700 mt-2">Here’s where your posts will live.</p>
      </div>
    </div>
  );
}