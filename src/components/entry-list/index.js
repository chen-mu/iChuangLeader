import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import BaseList from '@components/base-list'
//自定义组件
import entryItem from '@components/entry-item'
import Audit from '@components/audit-item'

class BusinessList extends BaseList {
  static defaultProps = {
    ...BaseList.defaultProps,
  }
  state = {
    showRemark: false,
    isPass: false,
    isOut: false,
    remark: ''
  }

  //输入框
  onRemark({ currentTarget: { value } }) {

    this.setState({
      remark: value
    })
  }
  //关闭审核框
  onClose() {
    this.setState({
      showRemark: false
    })
  }
  //点击确定
  onComfire() {
    this.setState({
      showRemark: false,
      remark: '',
      isPass: false,
      isOut: false
    })
  }
  render() {
    const { hasMore, loading, showRemark, isOut, isPass, remark } = this.state
    // const { items } = this.props

    return (
      <View className='mt-2 mx-2'>

        <entryItem

        />
      </View>

    )
  }
}

export default BusinessList
