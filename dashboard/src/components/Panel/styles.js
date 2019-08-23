import { h } from "preact"
import picostyle from "picostyle"
const style = picostyle(h)

const PanelWrapper = style("div")({
  marginBottom: '10px',
  padding: '5px',
  backgroundColor: 'rgb(255, 255, 255)',
  borderBottom: '3px solid rgba(113, 106, 202, 0.2)',
  boxShadow: '0px 0px 13px 0px rgba(82, 63, 105, 0.05)',
  borderRadius: '4px',
})

const PanelTitleWrapper = style("div")({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const PanelTitle = style("h2")({

})

const PanelActionsWrapper = style("div")({

})

const PanelContentWrapper = style("div")({

})


export {
  PanelWrapper,
  PanelTitleWrapper,
  PanelTitle,
  PanelActionsWrapper,
  PanelContentWrapper,
}