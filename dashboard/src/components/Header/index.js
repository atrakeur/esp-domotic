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
        <img alt="Logo" src="https://keenthemes.com/metronic/preview/demo8/assets/media/logos/logo-8.png" class="kt-header__brand-logo-default" />
        <h1>Dashboard</h1>
      </HeaderTitle>
      <HeaderActions>
        <RoundButton>Logout</RoundButton>
      </HeaderActions>
    </HeaderWrapperInner>
  </HeaderWrapper>
)

export default Header
