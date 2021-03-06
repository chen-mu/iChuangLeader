import BaseComponent from '@components/base'
import { PAGE_SIZE } from '@constants/api'

class BaseList extends BaseComponent {
  static defaultProps = {
    items: [],
    message: '暂无数据',
    defaultPayload: {},
    dispatchList: null,
    pageSize: PAGE_SIZE,
    dispatchNextPageList: null,
  }

  state = {
    page: 1,
    loading: false,
    hasMore: true,
    payload: {},
  }

  componentDidShow() {
    this.onReset()
  }

  onReset(payload) {
    payload = payload || this.props.defaultPayload

    this.setState({
      page: 1,
      payload,
      loading: false,
      hasMore: true,
    }, () => this.onNextPage())
  }

  onNextPage() {
    let { page, payload, loading, hasMore } = this.state
    let { pageSize } = this.props

    if (!hasMore || loading || !this.props.dispatchList || !this.props.dispatchNextPageList) return;

    this.setState({ loading: true })

    payload = { ...payload, current_page: page }

    const onSuccess = res => this.setState({
      page: page + 1,
      loading: false,
      hasMore: res.data.data.total > pageSize * page,
    })

    const onFail = () => this.setState({
      loading: false,
      hasMore: false,
    })

    page === 1
      ? this.props.dispatchList(payload).then(onSuccess).catch(onFail)
      : this.props.dispatchNextPageList(payload).then(onSuccess).catch(onFail)
  }
}

export default BaseList
