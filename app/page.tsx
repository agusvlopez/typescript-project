'use client';
import { LazyImage } from "../src/components/LazyImage";
import { NextPage } from "next";
import { MouseEventHandler, useState } from 'react';

const random = () => Math.floor(Math.random() * 123) + 1;

const Home = () => {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {

    const newImageItem: IFoxImageItem = {
      id: '1',
      url: `https://randomfox.ca/images/${random()}.jpg`
    }

    setImages([
      ...images,
      newImageItem
    ]);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm">
        <div>
          <h1 className="text-3xl font-bold">New App</h1>
          <button onClick={addNewFox}>Add new fox</button>
        </div>
        {images.map(({ id, url }) => (
          <div className="p-4" key={id}>
            <LazyImage
              alt="Zorro"
              src={url}
              onClick={() => console.log("hey")}
              title="Random Fox"
              width={320}
              height="auto"
              className="rounded bg-gray-300"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
export default Home;