import { h } from "preact"
import picostyle from "picostyle"
const style = picostyle(h)

const StyledBody = style("div")({
  backgroundImage: 'url("https://keenthemes.com/metronic/preview/demo8/assets/media/demos/demo8/bg-1.jpg")',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  color: '#646c9a',
})

const StyledContainer = style("div")({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 30px',
  width: '1380px',
  margin: '0 auto',
})

const StyledContentContainer = style("div")({
  width: '100%',
  backgroundColor: 'rgb(249, 249, 252)',
  padding: '20px 20px',
})

export {
  StyledBody,
  StyledContainer,
  StyledContentContainer,
}
