import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    props.data[1](value);
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination
        count={props.data[0].pages}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}
