import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";

type LazyImageProps = { src: string, alt: string };

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export const LazyImage = ({ src, alt, ...imgprops }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null);
    const [currentSrc, setCurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");
    // const random = () => Math.floor(Math.random() * 123) + 1;
    // const image: string = `https://randomfox.ca/images/${random()}.jpg`;

    useEffect(() => {
        //nuevo observador
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    //onIntersection -> console.log
                    setCurrentSrc(src);
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
    }, [src]);

    return (
        <>
            <img
                ref={node}
                alt={alt}
                src={currentSrc}
                {...imgprops}
            />
        </>
    )
}