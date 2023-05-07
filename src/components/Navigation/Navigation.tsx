import { Link, LinksContainer, NavigationContainer } from './Navigation.styles';
export const Navigation = () => {
  return (
    <NavigationContainer>
      <LinksContainer>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/info'}>About</Link>
      </LinksContainer>
    </NavigationContainer>
  );
};
