import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";

type LazyImageProps = {
    src: string,
    alt: string,
    // especificamos que onLazyLoad es un valor opcional de tipo void que aceptará un argumento de tipo HTMLImageElement
    onLazyLoad?: (node: HTMLImageElement) => void
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export const LazyImage = ({ src, alt, onLazyLoad, ...imgprops }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null);
    const [currentSrc, setCurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");
    const [isLazyLoaded, setIsLazyLoaded] = useState(false);

    useEffect(() => {
        if (isLazyLoaded) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting || !node.current) {
                    return;
                }

                setCurrentSrc(src);
                observer.disconnect();
                setIsLazyLoaded(true);

                if (typeof onLazyLoad === "function") {
                    onLazyLoad(node.current);
                }

                // Ejemplo de extension de Window con Plausible
                // window.plausible("lazyload", { props: { src } });
            });
        });

        if (node.current) {
            observer.observe(node.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [src, onLazyLoad, isLazyLoaded]);

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