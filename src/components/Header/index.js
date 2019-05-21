import React from 'react';

import { Container, Search, User } from './styles';
import SearchIcon from '../../assets/images/search.svg';

const Header = () => (
  <Container>
    <Search>
      <img src={SearchIcon} alt="Search" />
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars2.githubusercontent.com/u/2254731?v=4"
        alt="Avatar"
      />
      Diego Fernandes
    </User>
  </Container>
);

export default Header;
