import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtIcon, AtDivider } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { InforHead } from '@components/infor-head'
import { PAGE_INFOR_ENTRYMATCH,PAGE_INFOR_ENTRYWINNER } from '@constants/page'
import Board from '../../components/board';


@connect(state => state, {

})
class DashboardIndex extends Component {
  config = {
    navigationBarTitleText: '我的',
    enablePullDownRefresh: true,
  }
  state = {
    imageUrl: ''
  }

  componentDidMount() {

  }
  //参赛情况
  onToWinning() {
    Taro.navigateTo({
      url:PAGE_INFOR_ENTRYWINNER
    })
  }

   //获奖情况
   onToEntry() {
    Taro.navigateTo({
      url:PAGE_INFOR_ENTRYMATCH
    })
  }

  render() {
    const { imageUrl } = this.state
    return (<View>
      <InforHead
        imageUrl={imageUrl}
      />

      <Board className='mt-2 p-2 ' border='none'>
        <View className='at-row at-row__justify--between' onClick={this.onToEntry}>
          <View className='text-large page-middile '>参赛情况</View>
          <AtIcon value='chevron-right' size='30' color='#3A5FCD'></AtIcon>
        </View>
      </Board>
      <AtDivider content='' height='0px' lineColor='#EDEDED' />
      <Board className='mb-2 p-2 ' border='none'>
        <View className='at-row at-row__justify--between' onClick={this.onToWinning}>
          <View className='text-large page-middile'>获奖情况</View>
          <AtIcon value='chevron-right' size='30' color='#3A5FCD'></AtIcon>
        </View>
      </Board>

    </View>)
  }
}

export default DashboardIndex
