import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FadeIn from 'react-fade-in';
import Card from '../components/Card.js';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.projects
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card className="nav-link" to={item.path} item={item} key={item.id}/>
        })
    }

    render() {
        return (
            <FadeIn delay={100}>
                <Container fluid={true}>
                    <Row className="justify-content-center">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </FadeIn>
        )
    }
}

export default Grid;