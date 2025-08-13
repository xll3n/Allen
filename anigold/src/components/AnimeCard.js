import Link from 'next/link';
import Image from 'next/image';

const AnimeCard = ({ anime }) => {
  return (
    <Link href={`/anime/${anime.id}`} className="border border-gray-700 rounded-lg overflow-hidden hover:border-yellow-500 transition">
      <Image
        src={anime.image}
        alt={anime.title}
        width={300}
        height={450}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{anime.title}</h3>
      </div>
    </Link>
  );
};

export default AnimeCard;
