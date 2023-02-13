import { Card, CardImg, CardBody } from 'reactstrap';
import blogimage from '../assets/img/notebook.png';

const BlogCard = () => {
    return(
        <Card style={{width: "104%"}} className='mx-auto'>
            <CardImg src={blogimage} alt="Pen and paper" />
            <CardBody>
                Clinicians from the pediatric physical therapy community share their insights on new treatment trends and methods.
            </CardBody>
        </Card>
    );
}

export default BlogCard;