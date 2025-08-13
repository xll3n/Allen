import React from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import Layout from '@/components/Layout';

const WatchPage = ({ params }) => {
  const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">
          Watching Anime ID: {params.id}, Episode: {params.episode}
        </h1>
        <div className="w-full aspect-video">
          <VideoPlayer url={videoUrl} />
        </div>
      </div>
    </Layout>
  );
};

export default WatchPage;
