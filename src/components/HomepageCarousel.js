import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselCaption,
    CarouselIndicators,
    CarouselControl,
} from 'reactstrap';
import carousel1 from '../app/assets/carousel1.jpg';
import carousel2 from '../app/assets/carousel2.jpg';
import carousel3 from '../app/assets/caudalweightshiftpronebaby.jpg'

const items = [
    {
        src: carousel1,
        altText: 'Baby on physioball with physical therapist',
        caption: '"PediHEP has helped me create and access custom content for my patients."',
        creator: '- John T., PT, DPT',
        key: 1,
    },
    {
        src: carousel2,
        altText: 'Girl lifting weights with guidance from physical therapist',
        caption: '"This site has helped me strengthen rapport with patients & families."',
        creator: '- Alexis S., PT, MSPT',
        key: 2,
    },
    {
        src: carousel3,
        altText: 'Baby in prone',
        caption: '"PediHEP has helped expand my exercise prescription and creativity"',
        creator: '- Anna M., PT, DPT',
        key: 3,
    },
];

const HomepageCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} className="d-block w-100" />
                <CarouselCaption
                    captionText={item.creator}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel> 
    );
}

export default HomepageCarousel;