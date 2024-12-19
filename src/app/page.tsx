import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/s87FhmPt79X5mOoIpQzBpbjhyQPao9Us635lnN2z0TWZxqfY",
  "https://utfs.io/f/s87FhmPt79X5GYYAKS0Vq49ch7sxRL2C6pJB8fTvneyQVuNW",
  "https://utfs.io/f/s87FhmPt79X5Nx18whlgIH8UqOoWcabDrJP23wCNYXyB5EeL",
];

interface Post {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default async function HomePage() {
  let posts: Post[] = [];
  try {
    posts = await db.query.posts.findMany();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  console.log("posts: ", posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "=" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
