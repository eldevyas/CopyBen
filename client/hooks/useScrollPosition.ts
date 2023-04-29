import { useEffect, useState } from 'react';

type ScrollPosition = {
    x: number;
    y: number;
};

const useScrollPosition = (): ScrollPosition => {
    const [position, setPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setPosition({ x: window.scrollX, y: window.scrollY });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return position;
};

export default useScrollPosition;
