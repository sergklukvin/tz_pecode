import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomizedDialogs from '../Dialog/CustomizedDialogs';

const useStyles = makeStyles({
  root: {
    margin: 5,
    width: 300,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  let dataObj = props.data;

  const addToStore = (event) => {
    let temp = JSON.parse(localStorage.getItem('watch'));

    const check = temp.find((el) => el.id === +event.target.id);

    if (check === undefined) {
      temp.push(dataObj);
    }

    localStorage.setItem('watch', JSON.stringify(temp));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img src={props.data.image} style={{ width: '300px' }} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.data.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='div'>
            <div>
              status: <b>{props.data.status}</b>
            </div>
            <div>
              spacies: <b>{props.data.species}</b>
            </div>
            <div>
              gender: <b>{props.data.gender}</b>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          <CustomizedDialogs data={props} />
        </Button>
        <Button size='small' color='primary'>
          <div
            id={props.data.id}
            onClick={addToStore}
            style={{
              position: 'relative',
              zIndex: '1000',
              border: '1px solid gray',
              padding: '5px',
              borderRadius: '5px',
            }}
          >
            add to watch
          </div>
        </Button>
      </CardActions>
    </Card>
  );
}
