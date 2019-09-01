import Taro from '@tarojs/taro'
import { AtIcon, AtButton, AtTextarea, AtTag } from 'taro-ui'
import { View } from '@tarojs/components'


import Masks from '@components/masks'
import Board from '@components/board'
import BaseComponent from '@components/base'
import { COLOR_TEXT_SECONDARY, COLOR_TEXT_RED } from '@constants/styles'





class auditRemarkCreate extends BaseComponent {
  static defaultProps = {
    show: '',

  }

  state = {
    business: {},

  }



  render() {
    const { show,isPass,isOut ,remark} = this.props


    return (
      <Masks show={show}>
        <Board border='top' fixed>
          <View className='m-3'>
            {/* 头部 */}
            <View className='activity-create--header at-row at-row__justify--between at-row__align--center'>
              <View className='at-row at-row__align--center' onClick={this.props.onClose}>
                <AtIcon color={COLOR_TEXT_SECONDARY} value='chevron-left' size='25' />
                <View className='ml-1 text-bold text-huge'>审核</View>
              </View>
              <View>
                <AtButton className='px-4' size='small' type='primary'
                  circle onClick={this.props.onComfire.bind(this)}
                >确定</AtButton>
              </View>
            </View>

            {/* 意向 */}
            <View className='at-row mt-2'>
              <AtTag
                name='tag-1'
                type='primary'
                circle
                active={isPass}
                onClick={this.props.onClickPass}
              >
                通过
            </AtTag>
              <AtTag
                className='ml-3'
                name='tag-1'
                type='primary'
                circle
                active={isOut}
                onClick={this.props.onClickOut}
              >
               暂定
            </AtTag>
            </View>

            {/* 输入框 */}
            <View className='mt-4'>
              <AtTextarea
                fixed
                count
                value={remark}
                maxLength={200}
                className='mt-3 textarea text-normal '
                height='330px'
                onChange={this.props.onRemark}
                placeholder='请给出通过或者暂定的原因'
              />
            </View>
          </View>


        </Board>
      </Masks>

    )
  }
}

export default auditRemarkCreate
