(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1456:function(n,a){n.exports={content:["section",["p","显示当前页面在系统层级结构中的位置，并能向上返回。"],["h2","何时使用"],["ul",["li",["p","当系统拥有超过两级以上的层级结构时；"]],["li",["p","当需要告知用户『你在哪里』时；"]],["li",["p","当需要向上导航的功能时。"]]]],meta:{category:"Components",subtitle:"面包屑",type:"导航",title:"Breadcrumb",filename:"components/breadcrumb/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Breadcrumb"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","itemRender"],["td","自定义链接函数，和 react-router 配置使用"],["td","(route, params, routes, paths) => ReactNode"],["td","-"]],["tr",["td","params"],["td","路由的参数"],["td","object"],["td","-"]],["tr",["td","routes"],["td","router 的路由栈信息"],["td",["a",{title:null,href:"#routes"},"routes","[","]"]],["td","-"]],["tr",["td","separator"],["td","分隔符自定义"],["td","string","|","ReactNode"],["td","'/'"]]]],["h3","Breadcrumb.Item"],["table",["thead",["tr",["th","参数"],["th","参数"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","href"],["td","链接的目的地"],["td","string"],["td","-"]],["tr",["td","separator"],["td","自定义的分隔符"],["td","string","|","ReactNode"],["td","'/'"]],["tr",["td","overlay"],["td","下来菜单的内容"],["td",["a",{title:null,href:"/components/menu"},"Menu"]," ","|"," () => Menu"],["td","-"]],["tr",["td","onClick"],["td","单击事件"],["td","(e:MouseEvent)=>void"],["td","-"]]]],["h3","routes"],["pre",{lang:"ts",highlighted:'<span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>\n  path<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n  breadcrumbName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n  children<span class="token punctuation">:</span> <span class="token keyword">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n    breadcrumbName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","interface Route {\n  path: string;\n  breadcrumbName: string;\n  children: Array<{\n    path: string;\n    breadcrumbName: string;\n  }>;\n}"]],["h3","和 browserHistory 配合"],["p","和 react-router 一起使用时，默认生成的 url 路径是带有 ",["code","#"]," 的，如果和 browserHistory 一起使用的话，你可以使用 ",["code","itemRender"]," 属性定义面包屑链接。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">\'index\'</span><span class="token punctuation">,</span>\n    breadcrumbName<span class="token punctuation">:</span> <span class="token string">\'home\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">\'first\'</span><span class="token punctuation">,</span>\n    breadcrumbName<span class="token punctuation">:</span> <span class="token string">\'first\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        path<span class="token punctuation">:</span> <span class="token string">\'/general\'</span><span class="token punctuation">,</span>\n        breadcrumbName<span class="token punctuation">:</span> <span class="token string">\'General\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        path<span class="token punctuation">:</span> <span class="token string">\'/layout\'</span><span class="token punctuation">,</span>\n        breadcrumbName<span class="token punctuation">:</span> <span class="token string">\'Layout\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        path<span class="token punctuation">:</span> <span class="token string">\'/navigation\'</span><span class="token punctuation">,</span>\n        breadcrumbName<span class="token punctuation">:</span> <span class="token string">\'Navigation\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">\'second\'</span><span class="token punctuation">,</span>\n    breadcrumbName<span class="token punctuation">:</span> <span class="token string">\'second\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">itemRender</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> params<span class="token punctuation">,</span> routes<span class="token punctuation">,</span> paths<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> last <span class="token operator">=</span> routes<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span> <span class="token operator">===</span> routes<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> last <span class="token operator">?</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>breadcrumbName<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>paths<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>breadcrumbName<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span> <span class="token attr-name">itemRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>itemRender<span class="token punctuation">}</span></span> <span class="token attr-name">routes</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>routes<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code","import { Link } from 'react-router';\n\nconst routes = [\n  {\n    path: 'index',\n    breadcrumbName: 'home',\n  },\n  {\n    path: 'first',\n    breadcrumbName: 'first',\n    children: [\n      {\n        path: '/general',\n        breadcrumbName: 'General',\n      },\n      {\n        path: '/layout',\n        breadcrumbName: 'Layout',\n      },\n      {\n        path: '/navigation',\n        breadcrumbName: 'Navigation',\n      },\n    ],\n  },\n  {\n    path: 'second',\n    breadcrumbName: 'second',\n  },\n];\n\nfunction itemRender(route, params, routes, paths) {\n  const last = routes.indexOf(route) === routes.length - 1;\n  return last ? (\n    <span>{route.breadcrumbName}</span>\n  ) : (\n    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>\n  );\n}\n\nreturn <Breadcrumb itemRender={itemRender} routes={routes} />;"]]]}}}]);