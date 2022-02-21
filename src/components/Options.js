import {CardGroup,Card, Button} from 'react-bootstrap/';


const Options = (props) => {
    
    return(

        <div className="options">
        <div>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Standard Translation</Card.Title>
                    <Card.Text>
                    For business or personal use where certification is not required by the receiver.
                    <div>$0.10 per word</div>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        <div>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Certified Translation</Card.Title>
                    <Card.Text>
                    For official use by universities, courts, and many local, state, and federal governments.
                    <div>$35 per page</div>

                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        </div>


)
}


export default Options
