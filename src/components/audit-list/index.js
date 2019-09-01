import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import BaseList from '@components/base-list'
//自定义组件
import AuditRemark from '@components/audit-remark'
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
  //点击按钮弹出审核结果框
  onClickRemarkCreate() {
    this.setState({
      showRemark: true
    })
  }
  //选择通过
  onClickPass() {
    this.setState({
      isPass: true,
      isOut: false
    })
  }
  //选择暂定通过
  onClickOut() {
    this.setState({
      isPass: false,
      isOut: true
    })
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
      <View className='mx-2'>

        <Audit
          onClickRemarkCreate={this.onClickRemarkCreate}
        />
        <AuditRemark
          show={showRemark}
          isOut={isOut}
          isPass={isPass}
          remark={remark}
          onClickPass={this.onClickPass}
          onClickOut={this.onClickOut}
          onRemark={this.onRemark}
          onClose={this.onClose}
          onComfire={this.onComfire}
        />
      </View>

    )
  }
}

export default BusinessList
