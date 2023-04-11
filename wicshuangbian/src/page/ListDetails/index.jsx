import React, { useRef, useState } from "react";
import "./index.scss";
import { useNavigate, Link } from "react-router-dom";
export default function ListDetails() {
  const [listStateDetails] = useState({
    title: "2022中国（天津）工业APP创新应用大赛",
    cover_image: "",
    match_time: "2022年6月-2022年11月",
    match_video: {
      video_url:
        "https://1500004708.vod2.myqcloud.com/6c99c01bvodcq1500004708/6a6f4a66387702302464543232/f0.mp4",
      video_img_url:
        "https://sixcdn.wicongress.org.cn/media/0d19e82a6e27cf3195183091960f8ba8.jpg",
    },
    liveroom_id: "",
    live_type: "3",
    live_id: "",
    live_url: "https://competition2022.caitis.cn/",
    live_h5_url: "",
    live_img_url: "",
    live_record_video_url: "",
    live_record_video_img_url: "",
    live_start_time: "",
    live_end_time: "",
    match_detail: [
      {
        title: "大赛主题",
        info: "<p>融合创新 智造未来</p>",
      },
      {
        title: "组织机构设置",
        info: '<p>（一）主办单位</p><p style="text-indent: 0em;">工业和信息化部<br/></p><p style="text-indent: 0em;">天津市人民政府<br/></p><p><br/></p><p>（二）承办单位</p><p>天津市工业和信息化局</p><p>工业和信息化部电子第五研究所</p><p>中国工业技术软件化产业联盟</p><p>天津滨海高新技术产业开发区管理委员会</p>',
      },
      {
        title: "大赛亮点",
        info: '<p>（一）热点赛道 赋能制造<br/></p><p style="text-indent: 2em;">为落实国家软件产业发展相关战略部署，聚焦国内重点领域，以推动工业技术软件化快速发展为主线，2022年大赛将通过设置工业APP助力企业数字化转型、工业APP助力双碳发展、工业APP助力信息服务、工业APP设计挑战四个创新赛道，征集全国范围内推广价值高、带动作用强、应用范围广的工业互联网APP案例，为制造产业融合发展提供有力支撑。</p><p style="text-indent: 2em;"><br/></p><p>（二）名师汇聚 百花齐放</p><p style="text-indent: 2em;">本次大赛拟邀请国内制造业企业、软件企业、科研院所、高校顶尖专家资源，为天津制造业高质量发展建言献策，同时也为大赛提供专业指导，高效精准促进会议成果转化。</p><p style="text-indent: 2em;"><br/></p><p>（三）夯实基础 汇聚人才</p><p style="text-indent: 2em;">本次大赛面向国内高校学生特设“工业APP设计挑战赛”，通过以赛促学，以赛促教，激发高校创新活力，挖掘工业技术软件化创新发展人才。</p><p style="text-indent: 2em;"><br/></p>',
      },
    ],
    publish_time: 1656355496,
    sort: 999,
    lang: "zh",
    article:
      '<p style="text-indent: 2em;">为贯彻国家软件发展战略，落实工业和信息化部《“十四五”软件和信息技术服务业发展规划》《工业互联网创新发展行动计划（2021-2023年）》，持续推进百万工业APP培育工程，由工业和信息化部、天津市人民政府共同主办的“2022中国（天津）工业APP创新应用大赛”（以下简称“大赛”）在第六届世界智能大会期间正式启动。</p><p style="text-indent: 2em;"><br/></p><p style="text-indent: 2em;">大赛作为世界智能大会的重要赛事之一，自2018年以来，已成连续举办4届<span style="text-indent: 2em;">，是我国工业技术软件化领域持续举办时间最长、规模最大、最具影响力的赛事。历届大赛汇聚了全国范围内各行业优秀的工业互联网APP解决方案，凝聚了一批行业龙头企业，集结了全国一流的高校、科研院所专家资源，已发展成为工业技术软件化领域重要产学研用对接交流平台。</span></p><p style="text-indent: 2em;"><br/></p><p style="text-indent: 2em;">2022年大赛将聚焦国内工业互联网APP重点应用领域，以推动工业技术软件化快速发展为主线，设置多个创新赛道，面向全国征集推广价值高、带动作用强、广泛应用的工业互联网APP优秀解决方案，为制造产业融合发展提供有力支撑。</p><p><br/></p>',
    from: "cloud_match_article",
    article_id: "627e2c10328e8f3d46121392",
    live_type_name: "无直播",
  });
  const [currentContent, setCurrentContent] = useState(0);
  const [listState] = useState([
    {
      article_id: "6295d46401e5b16fae551b1b",
      title: "2022 世界智能驾驶挑战赛",
      abstract:
        "世界智能驾驶挑战赛（World Intelligent Driving Challenge，WIDC）作为世界智能大会的重要组成部分，自2017年首次举办以来，始终受到部委领导、两院院士、整车企业、车联网产业链企业和科研机构的高度关注和认可，平均每年超过百支国内外赛队参与赛事，多次被中央电视台等国内外知名媒体报道。世界智能驾驶挑战赛为参与企业提供了面向行业和消费者的汽车智能科技展示平台，为智能网联汽车行业培养了一批高质量科技人才。",
      publish_time: 1656085226,
      cover_image:
        "https://sixcdn.wicongress.org.cn/media/1b090e0ba48e2eba1cc77de4ab35d020.jpg",
      sort: 10,
      lang: "zh",
      article: "",
      from: "cloud_match",
      match_type_id: 2,
      match_type_name: "页面跳转",
      skip_pc_url: "https://widc.icvrc.cn",
      skip_web_url: "https://widc.icvrc.cn/live",
    },
    {
      article_id: "629efa3671263b5d9b4b2ca4",
      title: "2022 中国（天津）工业 APP 创新应用大赛",
      abstract:
        "为贯彻国家软件发展战略，落实工业和信息化部《“十四五”软件和信息技术服务业发展规划》《工业互联网创新发展行动计划（2021-2023年）》，持续推进百万工业APP培育工程，由工业和信息化部、天津市人民政府共同主办的“2022中国（天津）工业APP创新应用大赛”（以下简称“大赛”）在第六届世界智能大会期间正式启动。",
      publish_time: 1655887353,
      cover_image:
        "https://sixcdn.wicongress.org.cn/media/0d19e82a6e27cf3195183091960f8ba8.jpg",
      sort: 20,
      lang: "zh",
      article: "",
      from: "cloud_match",
      match_type_id: 1,
      match_type_name: "文章详情",
      match_article_id: "627e2c10328e8f3d46121392",
    },
    {
      article_id: "629ef86171263b5d9b4b2ca0",
      title: "2022 中国华录杯 · 数据湖算法大赛",
      abstract:
        "本届华录杯大赛以“收、存、治、用、易”为理念，着力于智慧城市业务中的真实应用场景，旨在结合运用消防、市政、交通等真实行业领域数据，设置定向算法赛及应用算法赛。大赛旨在挑选出优秀的人工智能算法，并遴选出杰出的算法达人。同时，大赛中涌现的优秀团队将有机会入驻易华录科技企业孵化器，享受专业孵化服务，加速产品、项目落地。 ",
      publish_time: 1655866431,
      cover_image:
        "https://sixcdn.wicongress.org.cn/media/5c2b91cb9f9351077a49fc933ae230ac.png",
      sort: 30,
      lang: "zh",
      article: "",
      from: "cloud_match",
      match_type_id: 1,
      match_type_name: "文章详情",
      match_article_id: "629eca2c71263b5d9b4b2c8d",
    },
    {
      article_id: "629ecd86da6ee45ca95cca63",
      title: "2022 国际智能体育大会",
      abstract:
        "2022国际智能体育大会是第六届世界智能大会赛事的重要组成部分。自2019年在世界智能大会中首创《国际智能体育大会》赛事品牌以来，已成功的举办了三届，来自三十余个国家和地区的300余位职业选手和爱好者参加了比赛，完成了电子竞技、无人机、机器人、线上健步走和网络棋牌五大类共10个比赛项目超亿人参与，通过赛事平台引进了腾讯、阿里体育、上海歌速等行业顶级企业，为世界智能大会增加了亮点，为推动全国智能体育的发展起到了引领和示范作用，为人工智能与体育产业的深度融合奠定了基础。",
      publish_time: 1656209100,
      cover_image:
        "https://sixcdn.wicongress.org.cn/media/8557d01cf1600bdcc712736cd1a71b6c.png",
      sort: 40,
      lang: "zh",
      article: "",
      from: "cloud_match",
      match_type_id: 1,
      match_type_name: "文章详情",
      match_article_id: "629ecab271263b5d9b4b2c8e",
    },
    {
      article_id: "62a5b924d0c7c65010563a0f",
      title: "2022 亚太机器人世界杯天津国际邀请赛",
      abstract:
        "作为天津市第六届世界智能大会的重要组成部分，2022亚太机器人世界杯天津国际邀请赛（简称“RCAP天津国际邀请赛”）将于2022年6月4日以线上形式举办。本届大赛以创新、突破、融合为宗旨，增设新赛项、增加新亮点，采取线上连接全球的模式举办，与全球多个卫星赛场比拼，并首次携手津南区政府，为您呈现一场精彩的科技盛宴。",
      publish_time: 1655365019,
      cover_image:
        "https://sixcdn.wicongress.org.cn/media/2cf4bc55069577a8512397c1765ffda6.jpg",
      sort: 50,
      lang: "zh",
      article: "",
      from: "cloud_match",
      match_type_id: 1,
      match_type_name: "文章详情",
      match_article_id: "62a5b8e45b761f794b2bdea0",
    },
  ]);
  const navigate = useNavigate();
  const video_ref = useRef(null);
  const i_ref = useRef(null);
  function handleCurrentContent(index) {
    setCurrentContent(index);
  }
  function handleVideoOpen() {
    video_ref.current.play();
  }
  function handleVideoStop() {
    i_ref.current.style.display = "block";
  }
  function handleVideoAction() {
    i_ref.current.style.display = "none";
  }
  return (
    <div className="list-details">
      <div className="header">
        <div className="left">
          <img
            src={require("../../assets/logo_zc.png")}
            className="logo"
            alt=""
          />

          <div className="title">世界智能大会</div>
        </div>
      </div>
      <div className="page-login-outer">
        <div className="page-login-wrap">
          <img
            src={require("../../assets/login_banner.png")}
            className="page-login-banner"
            alt=""
          />
          <div className="page-login-inner">
            <div className="page-login-hd">世界智能大会</div>
            <div className="page-login-opt">服务政企、企企之间交流合作</div>
          </div>
        </div>
      </div>
      <div className="list-section-wrapper">
        <section className="list-section">
          <div className="list-section-header">
            <div className="list-section-header-left">
              <p onClick={() => navigate("/list")}>
                <i>
                  <svg
                    t="1680748150018"
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="901"
                  >
                    <path
                      d="M662.656 169.344a32 32 0 0 0-40.832-3.648l-4.48 3.648-320 320a32 32 0 0 0-3.648 40.832l3.648 4.48 320 320a32 32 0 0 0 48.96-40.832l-3.648-4.48L365.248 512l297.408-297.344a32 32 0 0 0 3.648-40.832l-3.648-4.48z"
                      fill="#a8a8a8"
                      p-id="902"
                    ></path>
                  </svg>
                </i>
                &nbsp;返回智能赛事
              </p>
            </div>
            <div className="list-section-header-right">
              <p>
                <i>
                  <svg
                    t="1680748325382"
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2034"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M160 86.890667h320c17.066667 0 32 14.933333 32 32 0 16.042667-13.226667 30.229333-29.013333 31.829333l-2.986667 0.170667h-320c-5.696 0-9.685333 3.370667-10.517333 8.597333L149.333333 161.557333v704c0 5.674667 3.370667 9.685333 8.618667 10.496l2.048 0.170667h704c5.696 0 9.685333-3.370667 10.517333-8.618667l0.149334-2.048v-320c0-17.066667 14.933333-32 32-32 16.064 0 30.229333 13.226667 31.850666 29.013334l0.149334 2.986666v320c0 39.168-31.893333 72.384-70.634667 74.538667l-4.032 0.128h-704c-39.189333 0-72.384-31.914667-74.56-70.656L85.333333 865.557333v-704C85.333333 122.368 117.226667 89.173333 155.968 86.997333l4.032-0.106666h320z m704-1.685334a74.666667 74.666667 0 0 1 74.666667 74.666667v213.333333a32 32 0 1 1-64 0V194.453333l-340.053334 340.053334a32 32 0 0 1-42.816 2.197333l-2.432-2.197333a32 32 0 0 1 0-45.248l340.032-340.053334H650.666667a32 32 0 0 1 0-64h213.333333z"
                      fill="#a8a8a8"
                      p-id="2035"
                    ></path>
                  </svg>
                </i>
                &nbsp;分享给好友
              </p>
            </div>
          </div>
          <div className="list-section-artical">
            <div className="list-section-artical-menu-left">
              <div className="menu-left-wrapper">
                <h3>全文概览</h3>
                <ul>
                  {["赛事简介", "大赛主题", "组织机构设置", "大赛亮点"].map(
                    (item, index) => {
                      return (
                        <li
                          className={
                            currentContent === index ? "active-li" : ""
                          }
                          key={index}
                          onClick={(index) => handleCurrentContent(index)}
                        >
                          {item}
                        </li>
                      );
                    }
                  )}
                </ul>
                <p onClick={() => navigate("/list")}>
                  <i>
                    <svg
                      t="1680748150018"
                      className="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="901"
                    >
                      <path
                        d="M662.656 169.344a32 32 0 0 0-40.832-3.648l-4.48 3.648-320 320a32 32 0 0 0-3.648 40.832l3.648 4.48 320 320a32 32 0 0 0 48.96-40.832l-3.648-4.48L365.248 512l297.408-297.344a32 32 0 0 0 3.648-40.832l-3.648-4.48z"
                        fill="#a8a8a8"
                        p-id="902"
                      ></path>
                    </svg>
                  </i>
                  &nbsp;返回智能赛事
                </p>
              </div>
            </div>
            <div className="list-section-artical-content">
              <div className="list-section-artical-content-title">
                <h1>2022中国（天津）工业APP创新应用大赛</h1>
                <p>2022年6月-2022年11月</p>
              </div>
              <div className="list-section-artical-content-desc">
                <h2>赛事简介</h2>
                <div
                  className="content-desc"
                  dangerouslySetInnerHTML={{ __html: listStateDetails.article }}
                ></div>
              </div>
              <div className="list-section-artical-content-video">
                <i ref={i_ref} onClick={handleVideoOpen}>
                  <svg
                    width="60"
                    height="60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 0C13.5 0 0 13.275 0 29.5S13.5 59 30 59s30-13.275 30-29.5S46.5 0 30 0zM5.04 29.5C5.04 43 16.272 54.044 30 54.044 43.728 54.044 54.96 43 54.96 29.5S43.728 4.956 30 4.956C16.272 4.956 5.04 16 5.04 29.5zm17.567 8.429c0 .737.429 1.369 1.072 1.79.32.211.75.316 1.071.316.321 0 .75-.105 1.071-.316l14.893-8.428c.644-.316 1.072-1.054 1.072-1.791 0-.738-.428-1.37-1.072-1.791L25.821 19.28a1.973 1.973 0 00-2.142 0c-.643.315-1.072 1.053-1.072 1.79v16.86z"
                      fill="#FFF"
                      fillRule="evenodd"
                    />
                  </svg>
                </i>
                <video
                  controls
                  controlsList="nodownload"
                  disablePictureInPicture
                  src={listStateDetails.match_video.video_url}
                  ref={video_ref}
                  onPause={handleVideoStop}
                  onPlay={handleVideoAction}
                ></video>
              </div>
              <div className="list-section-artical-content-match_detail">
                {listStateDetails.match_detail.map((detail, index) => {
                  return (
                    <div key={index}>
                      <h2>{detail.title}</h2>
                      <div
                        className="content-match_detail"
                        dangerouslySetInnerHTML={{ __html: detail.info }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="list-section-artical-menu-right">
              <div className="menu-right-wrapper">
                <h2>相关赛事</h2>
                <ul>
                  {listState.map((listItem, index) => {
                    return (
                      <li key={index}>
                        <Link to={`/list/listDetails/:${listItem.article_id}`}>
                          {listItem.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="page-login-bottom">
        <span className="bottom-text">
          世界智能大会 WORLD INTELLIGENCE CONGRESS
        </span>
        <span className="bottom-text">津ICP备17008349号-3</span>
        <img src="../../assets/ioc_bootom.png" className="bottom-logo" alt="" />
        <span className="bottom-text">津公网安备 12010302002098号</span>
      </div>
    </div>
  );
}
