import Image from "next/image";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const data = await getImages();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex gap-4 p-8">
        {data.map((post) => (
          <div key={post.id} className="flex w-48 h-48 flex-col gap-2">
            <Image
              src={post.url}
              alt={post.name}
              style={{
                objectFit: "contain",
              }}
              // fill
              width={192}
              height={192}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
