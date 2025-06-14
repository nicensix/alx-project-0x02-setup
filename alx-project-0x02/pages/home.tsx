import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function Home() {
  const [posts, setPosts] = useState([
    { title: "Welcome!", content: "This is the first post." },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Home Page 🏠</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      {isModalOpen && (
        <PostModal onClose={() => setIsModalOpen(false)} onSubmit={addPost} />
      )}
    </div>
  );
}