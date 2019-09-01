import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
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
        <Board className='fixed:top; p-3' border='bottom' >
          <View className='at-row'>
            <AtAvatar
              image={Taro.getStorageSync('imagUrl')}
              size='normal'
              circle
              ></AtAvatar>
            <View className='text-brand text-super text-bold ml-2 mt-1'>
            {Taro.getStorageSync('name')}
            </View>
          </View>
        </Board>
      </View>
    )
  }
}

export default audithesd
