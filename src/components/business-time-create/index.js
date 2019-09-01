import Taro from '@tarojs/taro'
import { AtButton, AtIcon } from 'taro-ui'
import { View, Text } from '@tarojs/components'
import day from 'dayjs'

import Masks from '@components/masks'
import Board from '@components/board'
import BaseComponent from '@components/base'
import DateTimePicker from '@components/date-time-picker'
import { PAYLOAD_BUSINESS_EDIT_TIME } from '@constants/api'

import { COLOR_TEXT_SECONDARY } from '@constants/styles'
import { LOCALE_CONFIRM, LOCALE_BUSINESS_TIME } from '@constants/locale'

class BusinessTimeCreate extends BaseComponent {
  static defaultProps = {
    show: '',
    defaultPayload: PAYLOAD_BUSINESS_EDIT_TIME
  }

  state = {
    business: {},
    payload: PAYLOAD_BUSINESS_EDIT_TIME
  }

  onResetPayload({ id, order_time }) {
    let { payload } = this.state
    payload = payload || this.props.defaultPayload

    this.setState({
      payload: { ...payload, id, order_time }
    })
  }

  onPayloadChange({ order_time }) {
    let { payload } = this.state

    this.props.onConfirm({
      payload: { ...payload, order_time }
    })
  }

  render() {
    const { show } = this.props
    const { payload } = this.state
    const { order_time } = payload

    return (
      <Masks show={show}>
        <Board border='top' fixed>
          <View className='m-3'>
            {/* 头部 */}
            <View className='activity-create--header at-row at-row__align--center' onClick={this.props.onClose}>
              <AtIcon color={COLOR_TEXT_SECONDARY} value='chevron-left' size='25' />
              <View className='ml-1 text-huge'>{LOCALE_BUSINESS_TIME}</View>
            </View>

            <View className='my-5 text-blod'>
              <DateTimePicker time={order_time} onPayloadChange={this.onPayloadChange}>
                <AtButton type='primary' className='button--edit button--circle-small text-bold '>
                  <Text className='text-bold text-black ml-3'>
                    {day.unix(order_time).format('YYYY-MM-DD')}
                  </Text>
                  <Text className='text-bold text-black ml-3'>
                    {day.unix(order_time).format('(dddd)')}
                  </Text>
                  <Text className='text-bold text-black ml-3'>
                    {day.unix(order_time).format('hh:mm')}
                  </Text>
                </AtButton>
              </DateTimePicker>
            </View>

            <View className='at-row at-row__justify--center'>
              <AtButton type='primary' circle className='px-5'>{LOCALE_CONFIRM}</AtButton>
            </View>
          </View>
        </Board>
      </Masks>

    )
  }
}

export default BusinessTimeCreate
