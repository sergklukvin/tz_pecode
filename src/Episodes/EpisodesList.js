import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/getData';
import CardItemEpisodes from '../CardItem/CardItemEpisodes';
import PaginationBtn from '../Pagination/PaginationBtn';

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes.results,
    info: state.episodes.info,
    hasErrored: state.reducerHasErrored,
    isLoading: state.isLoading,
  };
};

class EpisodesList extends React.Component {
  async componentDidMount() {
    await this.props.fetchData('https://rickandmortyapi.com/api/episode');
  }

  onPostClicked = async (page) => {
    console.log(page);
    await this.props.fetchData(
      `https://rickandmortyapi.com/api/episode?page=${page}`
    );
  };

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading characters</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    if (this.props.episodes !== undefined) {
      return (
        <>
          <div className='cardWrap'>
            {this.props.episodes.map((item) => (
              <CardItemEpisodes key={item.id} data={item} />
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

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesList);
