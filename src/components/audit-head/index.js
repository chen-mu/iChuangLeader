import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import BaseList from '@components/base-list'

import BaseComponent from '../base';
import Board from '../board';

class audithesd extends BaseComponent {
  static defaultProps = {
    ...BaseList.defaultProps,
  }

  render() {
    const { hasMore, loading } = this.state
    // const { items } = this.props

    return (
      <View >
        <Board className='fixed:top; p-2' border='bottom' >
          <View className='at-row at-row__justify--between'>
            <View className='at-col at-col-5 '>
              <View className='page-middile'>500</View>
              <View className='page-middile'>待审核</View>
            </View>
            <View className='at-col at-col-5 '>
              <View className='page-middile'>10</View>
              <View className='page-middile'>已审核</View>
            </View>
          </View>
        </Board>
      </View>
    )
  }
}

export default audithesd
