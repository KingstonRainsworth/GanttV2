import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

const Navbar = () => (
  <Container>
    <Menu secondary>
      <Menu.Item header fitted="horizontally">
        <Image src="../../images/icon-512x512.png" />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>HOME</Menu.Item>
        <Menu.Item>ABOUT US</Menu.Item>
        <Menu.Item>RECRUITMENT</Menu.Item>
      </Menu.Menu>
    </Menu>
  </Container>
);

export default Navbar;
