import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'




import Index from './pages/index'
import configStore from './store'

import './styles/app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      "pages/user/auth",
      'pages/dashboard/index',

      "pages/infor/index",
      "pages/infor/entrymatch",
      "pages/infor/entryWinner",
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#E4E4E4",
      selectedColor: "#255BFF",
      backgroundColor: "#fff",
      borderStyle: "black",
      list: [

        {
          pagePath: "pages/dashboard/index",
          text: "审核",
          iconPath: "assets/icons/business.png",
          selectedIconPath: "assets/icons/business-active.png"
        },
        {
          pagePath: "pages/infor/index",
          text: "我的",
          iconPath: "assets/icons/brand.png",
          selectedIconPath: "assets/icons/brand-active.png"
        },
      ],
    },
    navigateToMiniProgramAppIdList: [
      'wxd9fb8d8974dc39bb'
    ],
  }

  componentDidMount() {
  }

  componentDidShow() { }

  componentDidHide() { }

  componentCatchError() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
