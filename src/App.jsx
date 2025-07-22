import './index.css';
import instituteLogo from './assets/institute-logo.png';
// 在文件顶部导入图片
import conferencePoster from './assets/conference-poster.jpg';
import qrCode from './assets/conference-qrcode.png';

function App() {
  return (
    <div className="container">
      {/* 头部 - 研究所标志和大会标题 */}
      <header className="header">
        <div className="logo-section">
          {/* 直接显示透明背景的Logo */}
          <img
            src={instituteLogo}
            alt="中国科学院杭州医学研究所"
            className="institute-logo"
          />
          <div className="conference-title">
            <h1>核酸适配体与功能核酸大会</h1>
            <p>2025年学术交流会议</p>
          </div>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="content">

        <section className="conference-poster-section">
          <div className="poster-container">
            {/* 海报背景图 */}
            <div className="poster-background">
              <img
                src={conferencePoster}
                alt="核酸适配体与功能核酸大会海报"
                className="poster-image"
              />
            </div>

            {/* 悬浮在右侧的链接 */}
            <div className="floating-link-box">
              <h3>会议官方网站</h3>
              <a
                href="https://mm.sciconf.cn/cn/minisite/index/30691"
                target="_blank"
                rel="noopener noreferrer"
                className="conference-link"
              >
                立即访问会议官网
              </a>

              <div className="qr-container">
                <img src={qrCode} alt="会议官网二维码" className="qr-code" />
                <p>手机扫码访问</p>
              </div>
            </div>
          </div>
        </section>
        {/* 会议信息部分 */}
        <section className="section">
          <h2>会议简介</h2>
          <p>本次核酸适配体与功能核酸大会由中国科学院杭州医学研究所主办，旨在促进核酸适配体与功能核酸领域的研究交流与合作。会议将邀请国内外知名专家学者做学术报告，分享最新研究成果和发展趋势。</p>

          <div className="info-grid">
            <div className="info-card">
              <h3>会议时间</h3>
              <p>2025年11月1日-2日</p>
            </div>
            <div className="info-card">
              <h3>会议地点</h3>
              <p>中国科学院杭州医学研究所会议中心</p>
            </div>
            <div className="info-card">
              <h3>主办单位</h3>
              <p>中国科学院杭州医学研究所</p>
            </div>
          </div>
        </section>

        {/* 会议链接部分 */}

        {/* 研究所介绍部分 */}
        <section className="section">
          <h2>关于中国科学院杭州医学研究所</h2>
          <p>中国科学院杭州医学研究所是中国科学院在浙江省设立的重要医学研究机构，聚焦医学前沿领域，致力于转化医学研究和精准医学发展。研究所汇聚了一批国内外顶尖科研人才，在核酸适配体、功能核酸等研究领域取得了一系列重要突破。</p>

          <div className="gallery">
            <div className="gallery-item">
              <div className="image-placeholder">研究所图片展示</div>
            </div>
            <div className="gallery-item">
              <div className="image-placeholder">实验室环境</div>
            </div>
            <div className="gallery-item">
              <div className="image-placeholder">科研团队</div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 - 联系信息 */}
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h3>联系我们</h3>
            <p>地址：浙江省杭州市西湖区云栖小镇</p>
            <p>电话：0571-88888888</p>
            <p>邮箱：contact@hias.ac.cn</p>
          </div>

          <div className="copyright">
            <p>© 2025 中国科学院杭州医学研究所 版权所有</p>
            <p>核酸适配体与功能核酸大会组委会</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;