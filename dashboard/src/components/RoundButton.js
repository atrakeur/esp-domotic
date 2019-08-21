import { h } from "preact"
import picostyle from "picostyle"
const style = picostyle(h)

const RoundButton = style("a")({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',
  height: '42px',
  borderRadius: '25px',
  cursor: 'pointer',
  background: 'transparent',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  padding: '0 25px',
  color: '#fff',
})

export default RoundButton
