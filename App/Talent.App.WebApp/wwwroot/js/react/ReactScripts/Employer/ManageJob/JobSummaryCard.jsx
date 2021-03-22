import React from 'react';
import Cookies from 'js-cookie';
import { Button, Card, Popup,Icon, Label, Segment, Grid } from 'semantic-ui-react';
import moment from 'moment';

export class JobSummaryCard extends React.Component {
    constructor(props) {
        super(props);

        // const jobs = props.jobs
        
        this.selectJob = this.selectJob.bind(this)
    }

    componentDidMount(){
        console.log("mount")
        console.log(this.props.jobs)
        return true
         
    }

    selectJob(id) {
        var cookies = Cookies.get('talentAuthToken');
        //url: 'http://localhost:51689/listing/listing/closeJob',
    }

    render() {
        
            // this.props.jobs.forEach((job) => {
            return(
                <div>
                <Card.Group itemsPerRow={3}>
                    
                    {this.props.jobs.map(item => {
                        
                        return(
                            <Card className="ui card">
                            <Card.Content >
                                <Card.Header >{item.title}</Card.Header>
                                <Label  color='black' ribbon='right'>
                                    <Icon name='user'> 0 </Icon>
                                </Label>
                                <Card.Meta className="meta-description">{item.location.city}, {item.location.country}</Card.Meta>
                                <Card.Description className="description job-summary">{item.summary}</Card.Description>
                                </Card.Content>
                                
                                <Card.Content extra>   
                                    <Label color="red" horizontal size="large" floated="left">Expired</Label> 
                                    <Button.Group basic color="blue" floated="right" size="mini" >
                                        <Button icon='ban' content='Close'/> 
                                        <Button icon='edit outline' content='Edit'/>
                                        <Button icon='copy outline' content='Copy'/>    
                                    </Button.Group>   
                                </Card.Content>
                            </Card>
                        )
                    })}
                </Card.Group> 
                </div>
            )
        

    }
}

{/* <Card className="ui card">
<Segment  className="ui card">
<Card.Content >

    <Card.Header></Card.Header>
    
    <Label  color='black' ribbon='right'>
        <Icon name='user'> 0 </Icon>
    </Label>
    
    <Card.Meta className="meta-description">City, Location</Card.Meta>

    <Card.Description className="description job-summary">Summary</Card.Description>
    
    </Card.Content>
    
    <Card.Content extra>
        
        <Label color="red" horizontal size="large" floated="left">Expired</Label>
        
        
        <Button.Group basic color="blue" floated="right" size="mini" >
            <Button icon='ban' content='Close'/> 
            <Button icon='edit outline' content='Edit'/>
            <Button icon='copy outline' content='Copy'/>    
        </Button.Group>
        
    </Card.Content>
    
    </Segment>
</Card>  */}