import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const FeaturedSponsorDisplayCard = ({item}) => {
    const { image, name, description } = item;
    return(
        <Card style={{width: "60%"}} className='mx-auto'>
            <CardImg src={image} alt={name}  />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
}

export default FeaturedSponsorDisplayCard;