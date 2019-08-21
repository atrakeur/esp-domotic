import { h } from "preact"
import picostyle from "picostyle"
const style = picostyle(h)

const RoundButton = style("a")({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',
  height: '42px',
  borderRadius: '50%',
  cursor: 'pointer',
  background: 'transparent',
  border: '1px solid rgba(255, 255, 255, 0.2)',
})

export default RoundButton
