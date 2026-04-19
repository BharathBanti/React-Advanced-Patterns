import React from 'react';
import MoviesList from './MoviesList';
import MoviesAnalytics from './MoviesAnalytics';
import withDataFetching from './hoc/withDataFetching';

const MovieListWithData = withDataFetching(MoviesList);
const MovieAnalyticsWithData = withDataFetching(MoviesAnalytics);

function MoviesWithHOC() {
  return (
    <div>
      <MovieListWithData />
      <MovieAnalyticsWithData />
    </div>
  );
}

export default MoviesWithHOC;
