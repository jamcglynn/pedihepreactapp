import { CardGroup, Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import exercisehandout from '../../src/app/assets/img/exercisehandout.jpg';
import uploadyourown from '../../src/app/assets/img/uploadyourown.jpg';
import ptoncomputer from '../../src/app/assets/img/ptoncomputer.jpg';
import { Link } from 'react-router-dom';

const HomepageCard = () => {
    return(
        <CardGroup style= {{textAlign: 'center'}}>
            <Card>
                <CardImg
                    src={exercisehandout}
                    alt='Exercise handout'
                />
                <CardBody>
                    <CardTitle>
                        <Link to='/exerciselibrary'><strong>Browse Exercise Libraries</strong></Link>
                    </CardTitle>
                    <CardSubtitle className='mb-2' tag='h3'>Search by body part, development skill, or by keyword.</CardSubtitle>
                    <CardText>Explore curated exercises created by our team members or created by pediatric physical therapists just like you!</CardText>
                </CardBody>
            </Card>
            <Card>
                <CardImg 
                    src={uploadyourown}
                    alt='Sample exercises'
                />
                <CardBody>
                    <CardTitle>
                        <Link to='/myprograms'><strong>Upload Your Own Exercises</strong></Link>
                    </CardTitle>
                    <CardSubtitle className='mb-2' tag='h3'>Tailor your home exercise program to meet your needs.</CardSubtitle>
                    <CardText>Enable patients and their families to better understand exercise prescription when worded in your own terms.</CardText>
                </CardBody> 
            </Card>
            <Card>
                <CardImg 
                    src={ptoncomputer}
                    alt='PT accessing PediHEP on computer'
                />
                <CardBody>
                    <CardTitle>
                        <Link to='/myprograms'><strong>View Your Saved Programs</strong></Link>
                    </CardTitle>
                    <CardSubtitle className='mb-2' tag='h3'>Enjoy quick access to previously saved programs.</CardSubtitle>
                    <CardText>Easy accessibility and editing allows you to cater to your patients' specific needs.</CardText>
                </CardBody>
            </Card>
        </CardGroup>
    );
}

export default HomepageCard;