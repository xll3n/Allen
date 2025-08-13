import AnimeCard from '@/components/AnimeCard';

const animes = [
  {
    id: 1,
    title: 'Solo Leveling',
    image: 'https://placehold.co/300x450/000000/FFFFFF/png?text=Solo+Leveling',
  },
  {
    id: 2,
    title: 'Attack on Titan',
    image: 'https://placehold.co/300x450/000000/FFFFFF/png?text=Attack+on+Titan',
  },
  {
    id: 3,
    title: 'Jujutsu Kaisen',
    image: 'https://placehold.co/300x450/000000/FFFFFF/png?text=Jujutsu+Kaisen',
  },
  {
    id: 4,
    title: 'Demon Slayer',
    image: 'https://placehold.co/300x450/000000/FFFFFF/png?text=Demon+Slayer',
  },
  {
    id: 5,
    title: 'Naruto',
    image: 'https://placehold.co/300x450/000000/FFFFFF/png?text=Naruto',
  },
  {
    id: 6,
    title: 'One Piece',
    image: 'https://placehold.co/300x450/000000/FFFFFF/png?text=One+Piece',
  },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Popular Anime</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {animes.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
