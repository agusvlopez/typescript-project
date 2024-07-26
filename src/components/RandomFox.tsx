import { useEffect, useRef, useState } from "react";

type Props = { image: string, alt: string };

export const RandomFox = ({ image, alt }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null);
    const [source, setSource] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");
    // const random = () => Math.floor(Math.random() * 123) + 1;
    // const image: string = `https://randomfox.ca/images/${random()}.jpg`;

    useEffect(() => {
        //nuevo observador
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    //onIntersection -> console.log
                    setSource(image);
                }
            });
        });

        if (node.current) {
            //observer node
            observer.observe(node.current);
        }

        //desconectar
        return () => {
            observer.disconnect();
        }
    }, [image]);

    return (
        <>
            <img ref={node} width={320} height="auto" alt={alt} src={source} className="rounded bg-gray-300" />
        </>
    )
}