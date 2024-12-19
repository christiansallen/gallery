import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/s87FhmPt79X5mOoIpQzBpbjhyQPao9Us635lnN2z0TWZxqfY",
  "https://utfs.io/f/s87FhmPt79X5GYYAKS0Vq49ch7sxRL2C6pJB8fTvneyQVuNW",
  "https://utfs.io/f/s87FhmPt79X5Nx18whlgIH8UqOoWcabDrJP23wCNYXyB5EeL",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
