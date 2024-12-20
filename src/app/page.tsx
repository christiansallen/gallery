import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

interface Post {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export default async function HomePage() {
  let images: Post[] = [];
  try {
    images = await db.query.images.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    });
  } catch (error) {
    console.error("Failed to fetch images:", error);
  }

  console.log("images: ", images);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "=" + index} className="flex flex-col gap-2">
            <div className="w-48">
              <img src={image.url} alt="image" />
            </div>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
