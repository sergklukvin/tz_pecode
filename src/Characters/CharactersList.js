import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/getData';
import CardItem from '../CardItem/CardItem';
import PaginationBtn from '../Pagination/PaginationBtn';

const mapStateToProps = (state) => {
  return {
    characters: state.characters.results,
    info: state.characters.info,
    hasErrored: state.reducerHasErrored,
    isLoading: state.isLoading,
  };
};

class CharactersList extends React.Component {
  async componentDidMount() {
    await this.props.fetchData('https://rickandmortyapi.com/api/character');
  }

  onPostClicked = async (page) => {
    await this.props.fetchData(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
  };

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading characters</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    if (this.props.characters !== undefined) {
      return (
        <>
          <div className='cardWrap'>
            {this.props.characters.map((item) => (
              <CardItem key={item.id} data={item} />
            ))}
          </div>
          <div>
            <PaginationBtn data={[this.props.info, this.onPostClicked]} />
          </div>
        </>
      );
    }

    return <></>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
