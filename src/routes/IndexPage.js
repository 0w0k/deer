import React from 'react';
import { connect } from 'dva';
import './IndexPage.less';

class Home extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="home">
        <div className="header">
          <div className="logo">
            <img src={require('../assets/home/logo.png')} alt="logo"/>
          </div>
          <div className="menu">
            <span>目录</span>
          </div>
        </div>
        <div>
          <h1>开始创建你的个人网站吧!</h1>
          <p>在这里，你可以上传自己的作品，分享生活的点滴，你还可以结识来个本行业和其他行业的大神，你们可以互相学习、交流，互相鞭策，一起进步，走上自己的人生巅峰。</p>
          <button>登陆</button>
          <button>注册</button>
        </div>
        <div className="banner">
          <div className="banner-tool">
            <div className="banner-l"></div>
            <div className="banner-text">
              <p>你需要一个平台，向让自己不断挑战自己，向你的梦想靠近，实现自我价值其实并不难，只要一直坚持下去。这里有很多正在追逐梦想的人，他们会陪你走下去，鞭策你进步，加入我们吧。</p>
              <span>&lt;</span>
              <span>&gt;</span>
            </div>
            <div className="banner-g"></div>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
};

export default connect()(Home);
