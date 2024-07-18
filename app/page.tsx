'use client';
import { RandomFox } from "../src/components/RandomFox";
import { NextPage } from "next";
import { useState } from 'react';

const random = () => Math.floor(Math.random() * 123) + 1;

type ImageItem = { id: string, url: string };

const Home = () => {
  const [images, setImages] = useState<Array<ImageItem>>([
    { id: '1', url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: '2', url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: '3', url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: '4', url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <h1 className="text-3xl font-bold">New App</h1>
        {images.map(({ id, url }) => (
          <div className="p-4" key={id}>
            <RandomFox alt="Zorro" image={url} />
          </div>
        ))}
      </div>
    </main>
  );
}
export default Home;