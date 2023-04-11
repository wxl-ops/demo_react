import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function List() {
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
  const listRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    for (let i = 0; i < listRef.current.children.length; i++) {
      setTimeout(() => {
        listRef.current.children[i].classList.add("list-content-animation");
      }, i * 300);
    }
  }, [listState]);
  return (
    <div className="list">
      <div className="header">
        <div className="left">
          <img
            src={require("../../assets/logo_zc.png")}
            className="logo"
            alt=""
          />
          {/* <div v-if="configInfo.session" className="title">
        {{ configInfo.session + configInfo.name + configInfo.system }}
      </div> */}
          <div className="title">世界智能大会</div>
        </div>
        <div className="right">官网首页</div>
      </div>
      <div className="page-login-outer">
        <div className="page-login-wrap">
          <img
            src={require("../../assets/login_banner.png")}
            className="page-login-banner"
            alt=""
          />
          <div className="page-login-inner">
            {/* <div className="page-login-hd" v-if="configInfo.name">
          {{ configInfo.name + configInfo.system }}
        </div> */}
            <div className="page-login-hd">世界智能大会</div>
            <div className="page-login-opt">服务政企、企企之间交流合作</div>
          </div>
        </div>
      </div>
      <div className="list-bgc">
        <div className="list-wrapper" ref={listRef}>
          {listState.map((listItem, index) => {
            return (
              <div
                className={
                  (index + 1) % 2
                    ? "list-content"
                    : "list-content list-content-reverse"
                }
                key={index}
              >
                <div className="list-content-img">
                  <div
                    className="img"
                    style={{
                      background: `url(${require(`../../assets/pic0${
                        index + 1
                      }.jpg`)}) 50% / cover`,
                    }}
                  ></div>
                </div>
                <div className="list-content-desc">
                  <div className="desc-title">
                    <h4>{listItem.title}</h4>
                  </div>
                  <div className="desc-detail">
                    <div>{listItem.abstract}</div>
                  </div>
                  <div className="desc-btn">
                    <button
                      className="desc-btn-style"
                      onClick={() => {
                        navigate(`/list/listDetails/${listItem.article_id}`);
                      }}
                    >
                      查看详情
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="page-login-bottom">
        <span className="bottom-text">
          世界智能大会 WORLD INTELLIGENCE CONGRESS
        </span>
        <span className="bottom-text">津ICP备17008349号-3</span>
        <img
          src={require("../../assets/ioc_bootom.png")}
          className="bottom-logo"
          alt=""
        />
        <span className="bottom-text">津公网安备 12010302002098号</span>
      </div>
    </div>
  );
}
