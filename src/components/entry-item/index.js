/**行程服务主页样式 */
import Taro from '@tarojs/taro'
import day from 'dayjs'
import 'dayjs/locale/zh-cn'
import { AtAvatar, AtIcon, AtButton } from 'taro-ui'
import { View } from '@tarojs/components'

import Board from '@components/board'
import BaseComponent from '@components/base'
import { COLOR_TEXT_SECONDARY, COLOR_TEXT_BLUE } from '@constants/styles'
import { PAGE_BUSINESS_MESSAGE } from '@constants/page'

day.locale('zh-cn')

class Business extends BaseComponent {

  static defaultProps = {
    name: '',
    status: 0,
    mobile: '',
    avatar: '',
    orderTime: 0,
    businessId: 0,
    apartmentTitle: '',
    houseTypeTitle: '',
    score: 0,//分数
  }

  state = {
    status: 3,
  }
  onShowMessage() {
    const { businessId } = this.props

    Taro.navigateTo({ url: `${PAGE_BUSINESS_MESSAGE}?id=${businessId}` })
  }

  onMakePhoneCall() {
    const { mobile } = this.props

    Taro.makePhoneCall({
      phoneNumber: mobile
    })
  }


  render() {

    const { status } = this.state
    return (
      <Board
        className='mx-2 mb-3'
      >

        <View className='px-3 py-2 text-normal'>
          {/**上方个人信息 */}
          <View className='mt-2 border-bottom  pb-3'>
            <View>
              <View className='at-row at-row__align--center'>

                <View className='pl-2 at-row at-row__justify--between'>

                  <View className='text-large at-row'>

                    <View className='text-bold '>袁阳</View>
                  </View>
                  <View className='text-large '>15979983871</View>
                </View>
              </View>
            </View>

          </View>
          {/**上方个人信息 */}
          <View className='at-row at-row__justify--between mt-3' >
            {/**放在左边 */}
            <View at-col at-col-5>
              <View className='at-row at-row__align--start '>
                <AtIcon className='mr-2' color={COLOR_TEXT_SECONDARY} value='bookmark' size='12'></AtIcon>
                <View>互联网+大赛</View>

              </View>

              <View className='at-row at-row__align--center mt-3'>
                <AtIcon
                  className='mr-2'
                  color={COLOR_TEXT_SECONDARY}
                  value='sketch'
                  size='12'
                ></AtIcon>
                <View></View>
                <View className='text-bold'>i创创业社工团</View>
              </View>
            </View>
            {/**放在左边布局 */}
            {/**放在右边布局 */}
            <View at-col at-col-5>
              <View className=''>


              </View>
            </View>
            {/**放在右边布局 */}
          </View>


        </View>
      </Board>
    )
  }
}

export default Business
