type Props = { image: string, alt: string };

export const RandomFox = ({ image, alt }: Props): JSX.Element => {
    // const random = () => Math.floor(Math.random() * 123) + 1;
    // const image: string = `https://randomfox.ca/images/${random()}.jpg`;

    return (
        <>
            <img width={320} height="auto" alt={alt} src={image} className="" />
        </>
    )
}