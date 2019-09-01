import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { queryStringToJSON } from '@utils/request'

import Audit from '@components/audit-list'
import AuditHead from '@components/audit-head'




@connect(state => state, {

})
class DashboardIndex extends Component {
  config = {
    navigationBarTitleText: '审核',
    enablePullDownRefresh: true,
  }



  render() {

    return (<View className='p2'>

      {/* 首页头部 */}
      <AuditHead

      />

      <View className='mt-2'>
        <Audit
          // onClickRemarkCreate={this.onClickRemarkCreate}
        />

        {/* 专家审核 */}
      </View>
    </View>)
  }
}

export default DashboardIndex
