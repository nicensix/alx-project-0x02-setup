import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([{ title: "Welcome!", content: "This is the first post." }]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Home Page 🏠</h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <Card key={i} title={post.title} content={post.content} />
          ))}
        </div>
        {isModalOpen && <PostModal onClose={() => setIsModalOpen(false)} onSubmit={addPost} />}
      </div>
    </div>
  );
}