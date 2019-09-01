import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import entryWinnerList from '@components/entry-winner-list'



@connect(state => state, {

})
class DashboardIndex extends Component {
  config = {
    navigationBarTitleText: '获奖情况',
    enablePullDownRefresh: true,
  }

  componentDidMount() {

  }

  render() {

    return (<View>

      <entryWinnerList

      />
    </View>)
  }
}

export default DashboardIndex
