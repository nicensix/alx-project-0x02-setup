import Card from "@/components/common/Card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">Welcome to the Home Page 🏠</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="Explore Destinations"
          content="Discover properties from all around the world with amazing views and great prices."
        />
        <Card
          title="Flexible Payment Options"
          content="Choose how you want to pay—now, later, or monthly. Total freedom!"
        />
        <Card
          title="Verified Listings"
          content="Only trusted and quality-checked properties appear in your search results."
        />
      </div>
    </div>
  );
}