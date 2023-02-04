import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselCaption,
    CarouselIndicators,
    CarouselControl
} from 'reactstrap';

const items = [
    {
        src: 'src\app\assets\carousel1.jpg',
        altText: 'Baby on physioball with physical therapist',
        caption: '"PediHEP has helped me create and access custom content for my patients."' + '- John T., PT, DPT',
        key: 1,
    },
    {
        src: 'src\app\assets\carousel2.jpg',
        altText: 'Girl lifting weights with guidance from physical therapist',
        caption: '"This site has helped me strengthen rapport with patients & families."' + '- Alexis S., PT, MSPT',
        key: 2,
    },
    {
        src: 'src\app\assets\caudalweightshiftpronebaby.jpg',
        altText: 'Baby in prone',
        caption: '"PediHEP has helped expand my exercise prescription and creativity"' + '- Anna M., PT, DPT',
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
                    captionText={item.caption}
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
            //do I need to spread something here
        >
            <CarouselIndicators
                items={items}
                activeInde={activeIndex}
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