import Button from "@/components/common/Button";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        About This Project
      </h1>
      <div className="flex flex-wrap gap-4">
        <Button label="Small" size="small" shape="rounded-sm" />
        <Button label="Medium" size="medium" shape="rounded-md" />
        <Button label="Large" size="large" shape="rounded-full" />
      </div>
    </div>
  );
}