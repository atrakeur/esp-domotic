import { h } from 'preact';
import {
  HeaderWrapper,
  HeaderWrapperInner,
  HeaderTitle,
  HeaderActions,
} from "./styles"
import RoundButton from "../RoundButton";

const Header = ({

              }) => (
  <HeaderWrapper>
    <HeaderWrapperInner>
      <HeaderTitle>
        <h1>Dashboard</h1>
      </HeaderTitle>
      <HeaderActions>
        <RoundButton>Logout</RoundButton>
      </HeaderActions>
    </HeaderWrapperInner>
  </HeaderWrapper>
)

export default Header
