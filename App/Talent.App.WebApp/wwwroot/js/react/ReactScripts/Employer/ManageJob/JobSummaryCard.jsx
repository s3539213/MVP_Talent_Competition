import React from 'react';
import Cookies from 'js-cookie';
import { Button, Card, Popup,Icon, Label, Segment, Grid } from 'semantic-ui-react';
import moment from 'moment';

export class JobSummaryCard extends React.Component {
    constructor(props) {
        super(props);
        
        this.selectJob = this.selectJob.bind(this)
    }

    componentDidMount(){

        console.log(this.props)
    }
    

    selectJob(id) {
        var cookies = Cookies.get('talentAuthToken');
        //url: 'http://localhost:51689/listing/listing/closeJob',
    }

    render() {
        return(
            
            <Card className="ui card">
                <Segment  className="ui card">
                <Card.Content >
                
                    <Card.Header><span>TITLE</span></Card.Header>
                    {/* <Segment >    */}
                    <Label  color='black' ribbon='right'>
                        <Icon name='user'> 0 </Icon>
                    </Label>
                    {/* </Segment> */}
                    <Card.Meta className="meta-description">City, Location</Card.Meta>
                   
                    <Card.Description className="description job-summary">Summary</Card.Description>
                    
                    </Card.Content>
                    
                    <Card.Content extra>
                        
                        <Label color="red" horizontal size="large" floated="left">Expired</Label>
                        {/* <Label color="red" horizontal size="small">Expired</Label>    */}
                        
                        <Button.Group basic color="blue" floated="right" size="mini" >
                            <Button icon='ban' content='Close'/> 
                            <Button icon='edit outline' content='Edit'/>
                            <Button icon='copy outline' content='Copy'/>    
                        </Button.Group>
                        
                    </Card.Content>
                    
                    </Segment>
            </Card>
            
        )
        

    }
}