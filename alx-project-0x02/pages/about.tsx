import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-8 flex flex-col items-center space-y-6">
        <h2 className="text-3xl font-bold text-blue-700">About This Project</h2>
        <div className="flex flex-wrap gap-4">
          <Button label="Small" size="small" shape="rounded-sm" />
          <Button label="Medium" size="medium" shape="rounded-md" />
          <Button label="Large" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  );
}