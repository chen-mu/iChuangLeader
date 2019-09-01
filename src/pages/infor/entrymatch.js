import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import entryList from '@components/entry-list'



@connect(state => state, {

})
class DashboardIndex extends Component {
  config = {
    navigationBarTitleText: '参赛情况',
    enablePullDownRefresh: true,
  }

  componentDidMount() {

  }

  render() {

    return (<View>

      <entryList

      />
    </View>)
  }
}

export default DashboardIndex
