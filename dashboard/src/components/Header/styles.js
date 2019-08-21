import { h } from "preact"
import picostyle from "picostyle"
const style = picostyle(h)

const HeaderWrapper = style("div")({
  height: '90px',
  width: '100%',
  display: 'flex',
  alignItems: 'stretch',
  marginBottom: '10px',
})

const HeaderWrapperInner = style("div")({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const HeaderTitle = style("h1")({
  display: 'flex',
  padding: 0,
  alignItems: 'stretch',
  alignContent: 'flex-end',
  '> h1': {
    color: 'white',
    fontSize: '1.2em',
    margin: '0',
    padding: '0',
  }
})

const HeaderActions = style("div")({

})

export {
  HeaderWrapper,
  HeaderWrapperInner,
  HeaderTitle,
  HeaderActions,
}