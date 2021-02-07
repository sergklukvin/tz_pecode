import React from 'react';
import CardItem from '../CardItem/CardItem';

class MyWatchList extends React.Component {
  render() {
    const storeLc = [];
    const checkStore = JSON.parse(localStorage.getItem('watch'));

    if (checkStore === null) {
      localStorage.setItem('watch', JSON.stringify(storeLc));
    }

    if (checkStore !== null) {
      return (
        <>
          <div className='cardWrap'>
            {checkStore.map((item) => (
              <CardItem key={item.id} data={item} />
            ))}
          </div>
        </>
      );
    }
    return <div>Not for watching...</div>;
  }
}

export default MyWatchList;
