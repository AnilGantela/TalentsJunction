import React from "react";

import {
  NavContainer,
  NavImage,
  NavLink,
  NavLinkContainer,
  StyledLink,
} from "./styledComponents";

const Navbar = () => {
  return (
    <NavContainer>
      <div>
        <StyledLink to="/">
          <NavImage src="/homelogo.png" alt="home-logo" />
        </StyledLink>
      </div>
      <NavLinkContainer>
        <StyledLink to="/courses">
          <NavLink>Courses</NavLink>
        </StyledLink>
        <StyledLink to="/products">
          <NavLink>Products</NavLink>
        </StyledLink>
        <StyledLink to="/membership">
          <NavLink>Join Community</NavLink>
        </StyledLink>
        <StyledLink to="/workshops">
          <NavLink>Workshops</NavLink>
        </StyledLink>
      </NavLinkContainer>
    </NavContainer>
  );
};

export default Navbar;
