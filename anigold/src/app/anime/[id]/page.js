import Image from 'next/image';
import Link from 'next/link';

const animes = [
  {
    id: 1,
    title: 'Solo Leveling',
    image: 'https://placehold.co/300x450/000000/FFFFFF/png?text=Solo+Leveling',
    description: 'When an infamous weakling gains newfound powers, he must navigate a world of monsters and politics.',
    episodes: [
      { id: 1, title: 'Episode 1' },
      { id: 2, title: 'Episode 2' },
      { id: 3, title: 'Episode 3' },
    ],
  },
  {
    id: 2,
    title: 'Attack on Titan',
    image: 'https://placehold.co/300x450/000000/FFFFFF/png?text=Attack+on+Titan',
    description: 'In a world where humanity resides within enormous walls, they must fight for survival against giant man-eating Titans.',
    episodes: [
      { id: 1, title: 'Episode 1' },
      { id: 2, title: 'Episode 2' },
      { id: 3, title: 'Episode 3' },
    ],
  },
  {
    id: 3,
    title: 'Jujutsu Kaisen',
    image: 'https://placehold.co/300x450/000000/FFFFFF/png?text=Jujutsu+Kaisen',
    description: 'A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman\'s school to be able to locate the demon\'s other body parts and thus exorcise himself.',
    episodes: [
      { id: 1, title: 'Episode 1' },
      { id: 2, title: 'Episode 2' },
      { id: 3, title: 'Episode 3' },
    ],
  },
    {
    id: 4,
    title: 'Demon Slayer',
    image: 'https://placehold.co/300x450/000000/FFFFFF/png?text=Demon+Slayer',
    description: 'A young man becomes a demon slayer after his family is slaughtered and his younger sister is turned into a demon.',
    episodes: [
      { id: 1, title: 'Episode 1' },
      { id: 2, title: 'Episode 2' },
      { id: 3, title: 'Episode 3' },
    ],
  },
  {
    id: 5,
    title: 'Naruto',
    image: 'https://placehold.co/300x450/000000/FFFFFF/png?text=Naruto',
    description: 'A young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.',
    episodes: [
      { id: 1, title: 'Episode 1' },
      { id: 2, title: 'Episode 2' },
      { id: 3, title: 'Episode 3' },
    ],
  },
  {
    id: 6,
    title: 'One Piece',
    image: 'https://placehold.co/300x450/000000/FFFFFF/png?text=One+Piece',
    description: 'Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger.',
    episodes: [
      { id: 1, title: 'Episode 1' },
      { id: 2, title: 'Episode 2' },
      { id: 3, title: 'Episode 3' },
    ],
  },
];

const AnimeDetailPage = ({ params }) => {
  const anime = animes.find((a) => a.id === parseInt(params.id));

  if (!anime) {
    return <div>Anime not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <Image
          src={anime.image}
          alt={anime.title}
          width={300}
          height={450}
          className="rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{anime.title}</h1>
          <p className="text-lg mb-8">{anime.description}</p>
          <h2 className="text-2xl font-bold mb-4">Episodes</h2>
          <ul>
            {anime.episodes.map((episode) => (
              <li key={episode.id} className="mb-2">
                <Link href={`/watch/${anime.id}/${episode.id}`} className="hover:text-yellow-500 transition">
                  {episode.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailPage;
