import Link from "next/link";

const mockData = [
  {
    id: 1,
    url: "https://utfs.io/f/59d457da-e809-4b79-b87b-5f7343cae065-g0lhcn.jpg",
  },
  {
    id: 2,
    url: "https://utfs.io/f/e33fedc9-9ba1-410c-b067-45b8231487d3-ed973w.jpg",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex gap-4 p-8">
        {mockData.map((image) => (
          <div>
            <img src={image.url} alt="image" className="w-48" />
          </div>
        ))}
      </div>
    </main>
  );
}
