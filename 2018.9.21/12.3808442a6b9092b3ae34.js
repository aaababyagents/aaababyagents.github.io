webpackJsonp([12],{1659:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return{isloading:e.loading.effects["blockiehome/query"],blockiehome:e.blockiehome}}Object.defineProperty(t,"__esModule",{value:!0});var d=a(178),r=l(d),u=a(179),c=l(u),m=a(82),i=l(m),f=a(11),o=l(f),s=a(182),_=l(s),p=a(60),E=l(p),g=a(26),v=l(g),y=a(1),b=l(y),h=a(6),N=l(h),k=a(2),C=l(k),x=a(3),I=l(x);a(334),a(335),a(89),a(33),a(230),a(71);var j=a(0),T=l(j),z=a(5),L=(l(z),a(34)),S=a(21),G=a(7),M=l(G),A=a(20),P=(l(A),a(43)),w=a(91),B=(l(w),a(719)),H=(l(B),a(724)),J=l(H),q=a(1685),F=l(q),V=function(e){function t(){var e,a,l,n;(0,b.default)(this,t);for(var d=arguments.length,r=Array(d),u=0;u<d;u++)r[u]=arguments[u];return a=l=(0,C.default)(this,(e=t.__proto__||(0,v.default)(t)).call.apply(e,[this].concat(r))),l.onChangePage=function(e,t){(0,l.props.dispatch)({type:"blockiehome/query",payload:{page:e,pageSize:t}})},n=a,(0,C.default)(l,n)}return(0,I.default)(t,e),(0,N.default)(t,[{key:"componentWillMount",value:function(){this.onChangePage(1,10)}},{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.isloading),a=e.blockiehome,l=a.myitems,n=(a.pageSize,a.page),d=a.totalItems,u=(0,P.myprofilemenus)(),m=T.default.createElement("div",{className:F.default.pageHeaderContent},T.default.createElement("div",{className:F.default.avatar},T.default.createElement(E.default,{size:"small"})),T.default.createElement("div",{className:F.default.content},T.default.createElement("div",{className:F.default.contentTitle},"\u60a8\u597d\uff0c Blockie\uff0c\u795d\u4f60\u5f00\u5fc3\u6bcf\u4e00\u5929\uff01"),T.default.createElement("div",null))),f=T.default.createElement("div",{className:F.default.extraContent},T.default.createElement("div",{className:F.default.statItem},T.default.createElement("p",null,"\u793e\u7fa4\u603b\u6570"),T.default.createElement("p",null,"56")),T.default.createElement("div",{className:F.default.statItem},T.default.createElement("p",null,"\u4f1a\u5458\u603b\u6570"),T.default.createElement("p",null,"2233")),T.default.createElement("div",{className:F.default.statItem},T.default.createElement("p",null,"\u8ba2\u5355\u603b\u6570"),T.default.createElement("p",null,"2,223")));return T.default.createElement(J.default,{content:m,extraContent:f},T.default.createElement(r.default,{gutter:24},T.default.createElement(c.default,{xl:16,lg:24,md:24,sm:24,xs:24},T.default.createElement(i.default,{className:F.default.projectList,style:{marginBottom:24},title:"\u6211\u7684\u793e\u7fa4",bordered:!1,extra:T.default.createElement(_.default,{size:"small",onChange:this.onChangePage,defaultCurrent:n,total:d}),loading:t,bodyStyle:{padding:0}},T.default.createElement(i.default.Grid,{className:F.default.projectGrid,key:"createtribeid"},T.default.createElement(S.Link,{to:"/myappadd"},T.default.createElement(i.default,{bodyStyle:{padding:0},bordered:!1},T.default.createElement(i.default.Meta,{title:T.default.createElement("div",{className:F.default.cardTitle},T.default.createElement(E.default,{size:"large",style:{backgroundColor:"white",verticalAlign:"middle"}},T.default.createElement(o.default,{type:"plus-circle-o",style:{fontSize:40,color:"#1890ff"}})),T.default.createElement("span",{className:F.default.titlename},"\u65b0\u5efa")),description:"\u65b0\u5efa\u4e00\u4e2a\u5c5e\u4e8e\u81ea\u5df1\u7684\u793e\u7fa4"}),T.default.createElement("div",{className:F.default.projectItemContent},T.default.createElement("span",{className:F.default.datetime},"\u7b49\u5f85\u60a8\u7684\u521b\u5efa"))))),l.map(function(e){return T.default.createElement(i.default.Grid,{className:F.default.projectGrid,key:e._id},T.default.createElement(S.Link,{to:"/appmg/"+e._id+"/tribemanage/tribehome"},T.default.createElement(i.default,{bodyStyle:{padding:0},bordered:!1},T.default.createElement(i.default.Meta,{title:T.default.createElement("div",{className:F.default.cardTitle},T.default.createElement(E.default,{size:"large",src:e.logo}),T.default.createElement("span",{className:F.default.titlename},e.name)),description:e.intro}),T.default.createElement("div",{className:F.default.projectItemContent},T.default.createElement("span",{className:F.default.datetime},(0,M.default)(e.createat).fromNow())))))}))),T.default.createElement(c.default,{xl:8,lg:24,md:24,sm:24,xs:24},T.default.createElement(i.default,{bodyStyle:{paddingTop:12,paddingBottom:12},bordered:!1,title:"\u5feb\u901f\u5f00\u59cb / \u4fbf\u6377\u5bfc\u822a"},T.default.createElement("div",{className:F.default.members},T.default.createElement(r.default,{gutter:48},u.map(function(e){return T.default.createElement(c.default,{xl:12,lg:8,md:8,sm:12,xs:12,key:"members-item-"+e.path},T.default.createElement(S.Link,{to:"/myprofile/"+e.path},T.default.createElement(E.default,{size:"small",icon:e.icon,style:{backgroundColor:"#1890ff",verticalAlign:"middle"}}),T.default.createElement("span",{className:F.default.member},e.name)))})))))))}}]),t}(j.Component);V.propTypes={},t.default=(0,L.connect)(n)(V),e.exports=t.default},1685:function(e,t){e.exports={activitiesList:"activitiesList___3dI0f",username:"username___2zI4Q",event:"event___2-gLo",pageHeaderContent:"pageHeaderContent___2Vr2F",avatar:"avatar___1E2cr",content:"content___3lJoL",contentTitle:"contentTitle___pxheE",extraContent:"extraContent___t8Kv3",statItem:"statItem___10uj5",members:"members___GttJo",member:"member___2AScn",projectList:"projectList___30SIH",cardTitle:"cardTitle___IhxNc",titlename:"titlename___11Nu_",projectGrid:"projectGrid___fBvhA",projectItemContent:"projectItemContent___2GRYi",datetime:"datetime___2zmr7",enterlink:"enterlink___3IDEp",item:"item___eToTM",link:"link___2EiUF",cover:"cover___2SP4n",title:"title___2urwg",activeCard:"activeCard___hcV_N"}}});