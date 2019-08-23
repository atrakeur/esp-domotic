import { h } from 'preact';
import {
  HeaderWrapper,
  HeaderWrapperInner,
  HeaderTitle,
  HeaderActions, PanelWrapper, PanelTitleWrapper, PanelTitle, PanelActionsWrapper, PanelContentWrapper,
} from "./styles"

const Panel = ({
                 title,
                 actions = null,
                 children,
                }) => (<PanelWrapper>
  <PanelTitleWrapper>
    <PanelTitle>
      {title}
      </PanelTitle>
    <PanelActionsWrapper>
      {actions}
      </PanelActionsWrapper>
  </PanelTitleWrapper>
  <PanelContentWrapper>
    { children }
  </PanelContentWrapper>
</PanelWrapper>)

export default Panel
