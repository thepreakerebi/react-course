import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

const DishDetail = ({ dish, comments }) => {

    const [isModalOpen, setIsModalOpen] = useState(false); 
    
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const RenderDish = ({ dish }) => {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    const dateConverter = dateString => {
        let d = new Date(dateString);
        return d.toDateString();
    }

    const RenderComments = dish => {
        if (dish != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        { comments.map(comment => {
                            return (
                                <li className="mb-2">
                                    <p>{comment.comment}</p>
                                    <span>-- {comment.author}, {dateConverter(comment.date)}</span>
                                </li>
                            )
                        })}
                    </ul>
                    <Button onClick={toggleModal} outline><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    return ( 
        <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={comments} />
                    </div>
                </div>
                <CommentForm toggleModal={toggleModal} isModalOpen={isModalOpen} />
        </div>
    );
}
 
export default DishDetail;