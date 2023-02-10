import {
    Carousel,
    CarouselItem,
    CarouselCaption,
} from 'reactstrap';
import carousel1 from '../app/assets/img/carousel1.jpg';
import carousel2 from '../app/assets/img/carousel2.jpg';
import carousel3 from '../app/assets/img/caudalweightshiftpronebaby.jpg'


const HomePageCarouselAgain = () => {
    return (
        <Carousel>
            <CarouselItem>
                <img
                    className='d-block w-100'
                    src={carousel1}
                    alt='Baby on physioball' />
                <CarouselCaption>
                    <h3>"PediHEP has helped me create and access custom content for my patients."</h3>
                    <p>- John T., PT, DPT</p>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
                <img
                    className='d-block w-100'
                    src={carousel2}
                    alt='Girl lifting weights with assist from physical therapist' />
                <CarouselCaption>
                    <h3>"This site has helped me strengthen rapport with patients & families."</h3>
                    <p>- Alexis S., PT, MSPT</p>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
                <img    
                    className='d-block w-100'
                    src={carousel3}
                    alt='Baby in prone' />
                <CarouselCaption>
                    <h3>"PediHEP has helped expand my exercise prescription and creativity"</h3>
                    <p>- Anna M., PT, DPT</p>
                </CarouselCaption>
            </CarouselItem>
        </Carousel>
    );
}

export default HomePageCarouselAgain;
