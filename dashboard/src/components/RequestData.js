import { h, Component } from 'preact'

class RequestData extends Component {
  state = {
    isLoading: false,
    data: null,
  }

  loadData = () => {
    const {
      url,
      data,
    } = this.props

    this.setState({
      isLoading: true,
    }, () => {
      fetch(url, {
        method: 'POST',
        body: new FormData(data)
      })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          data
        })
      })
    })
  }

  render() {

  }
}
export default RequestData