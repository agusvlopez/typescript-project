import { useRef } from "react";

type Props = { image: string, alt: string };

export const RandomFox = ({ image, alt }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
    // const random = () => Math.floor(Math.random() * 123) + 1;
    // const image: string = `https://randomfox.ca/images/${random()}.jpg`;

    return (
        <>
            <img ref={node} width={320} height="auto" alt={alt} src={image} className="" />
        </>
    )
}