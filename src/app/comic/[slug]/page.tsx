import Link from "next/link";

const chapters = [1, 2, 3, 4];

export default async function ComicDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params; // ✅ รอให้ params ถูกโหลดก่อนใช้

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">เรื่อง: {slug}</h1>
      <h2 className="text-lg mt-2">เลือกตอน:</h2>
      <ul className="mt-2 space-y-2">
        {chapters.map((ch) => (
          <li key={ch}>
            <Link href={`/comic/${slug}/${ch}`}>
              <span className="text-blue-500 hover:underline cursor-pointer">
                ตอนที่ {ch}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
