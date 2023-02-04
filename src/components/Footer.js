import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 2, offset: 1 }} sm='4'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to ='/exerciselibrary'>Exercise Library</Link>
                            </li>
                            <li>
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <h5>Social</h5>
                            <a 
                                className='btn btn-social-icon btn-instagram'
                                href='http://instagram.com'
                            >
                                <i className='fa fa-instagram'></i>
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-facebook'
                                href='http://www.facebook.com'
                            >
                                <i className='fa fa-facebook'></i>
                            </a>{' '}
                            <a 
                                className='btn btn-social-icon btn-twitter'
                                href='http://twitter.com/'
                            >
                                <i className='fa fa-twitter'></i>
                            </a>{' '}
                            <a 
                                className='btn btn-social-icon btn-github'
                                href='https://github.com/jamcglynn/pedihepreactapp.git'
                            >
                                <i className='fa fa-github'></i>
                            </a>{' '}
                    </Col>
                    <Col xs='6' sm='4' className='text-center'>
                        <a 
                            role='button'
                            className='btn btn-link'
                            href='tel:+15554443030'
                        >
                            <i className='fa fa-phone'>1-555-444-3030
                            </i>
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:pedihep@pedihep.com'
                        >
                            <i className='fa fa-envelope'> pedihep@pedihep.com 
                            </i>
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;