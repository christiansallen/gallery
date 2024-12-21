import Link from "next/link";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

interface Image {
  id: number;
  name: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

export default async function HomePage() {
  let images: Image[] = [];
  try {
    images = await db.query.images.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    });
  } catch (error) {
    console.error("Failed to fetch images:", error);
  }

  async function Images() {
    return (
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col gap-2">
            <div className="w-48">
              <img src={image.url} alt="image" />
            </div>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    );
  }

  console.log("images: ", images);
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in</div>
      </SignedOut>
      <SignedIn>{Images()}</SignedIn>
    </main>
  );
}
