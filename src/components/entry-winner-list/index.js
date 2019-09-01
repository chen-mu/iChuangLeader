import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import BaseList from '@components/base-list'
//自定义组件
import entryItem from '@components/entry-winner-item'

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

  render() {


    return (
      <View className='mt-2 mx-2'>

        <entryItem

        />
      </View>

    )
  }
}

export default BusinessList
