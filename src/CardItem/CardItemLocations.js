import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomizedDialogsLocations from '../Dialog/CustomizedDialogsLocations';

const useStyles = makeStyles({
  root: {
    width: 250,
    margin: 15,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.data.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='div'>
            <div>
              Type: <b>{props.data.type}</b>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          <CustomizedDialogsLocations data={props} />
        </Button>
      </CardActions>
    </Card>
  );
}
