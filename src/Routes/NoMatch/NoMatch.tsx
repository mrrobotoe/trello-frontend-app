import { Link } from 'react-router-dom';

import { NoMatchContainer } from './NoMatch.styled';
export const NoMatch = () => {
  return (
    <NoMatchContainer>
      <div>
        Uh oh, 404 page!
        <div>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    </NoMatchContainer>
  );
};
