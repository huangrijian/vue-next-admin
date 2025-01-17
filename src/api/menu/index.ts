import { rejects } from 'assert';
import { resolve } from 'path';
import request from '/@/utils/request';

/**
 * 后端控制菜单模拟json，路径在 https://gitee.com/lyt-top/vue-next-admin-images/tree/master/menu
 * 后端控制路由，isRequestRoutes 为 true，则开启后端控制路由
 * @method getMenuAdmin 获取后端动态路由菜单(admin)
 * @method getMenuTest 获取后端动态路由菜单(test)
 */
export function useMenuApi() {
	return {
		getMenuAdmin: (params?: object) => {
			// return request({
			// 	url: '/gitee/lyt-top/vue-next-admin-images/raw/master/menu/adminMenu.json',
			// 	method: 'get',
			// 	params,
			// });
      return new Promise((resolve, reject) => {
        let json = {
          "code": 0,
          "type": "adminMenu",
          "data": [
            {
              "path": "/article",
              "name": "article",
              "component": "article/index",
              "meta": {
                "title": "message.router.article",
                "isLink": "",
                "isHide": false,
                "isKeepAlive": true,
                "isAffix": true,
                "isIframe": false,
                "roles": ["admin", "common"],
                "icon": "iconfont icon-shouye"
              }
            },
            {
              "path": "/home",
              "name": "home",
              "component": "home/index",
              "meta": {
                "title": "message.router.home",
                "isLink": "",
                "isHide": false,
                "isKeepAlive": true,
                "isAffix": true,
                "isIframe": false,
                "roles": ["admin", "common"],
                "icon": "iconfont icon-shouye"
              }
            },
            {
              "path": "/system",
              "name": "system",
              "component": "layout/routerView/parent",
              "redirect": "/system/menu",
              "meta": {
                "title": "message.router.system",
                "isLink": "",
                "isHide": false,
                "isKeepAlive": true,
                "isAffix": false,
                "isIframe": false,
                "roles": ["admin"],
                "icon": "iconfont icon-xitongshezhi"
              },
              "children": [
                {
                  "path": "/system/menu",
                  "name": "systemMenu",
                  "component": "system/menu/index",
                  "meta": {
                    "title": "message.router.systemMenu",
                    "isLink": "",
                    "isHide": false,
                    "isKeepAlive": true,
                    "isAffix": false,
                    "isIframe": false,
                    "roles": ["admin"],
                    "icon": "iconfont icon-caidan"
                  }
                },
                {
                  "path": "/system/user",
                  "name": "systemUser",
                  "component": "system/user/index",
                  "meta": {
                    "title": "message.router.systemUser",
                    "isLink": "",
                    "isHide": false,
                    "isKeepAlive": true,
                    "isAffix": false,
                    "isIframe": false,
                    "roles": ["admin"],
                    "icon": "iconfont icon-icon-"
                  }
                }
              ]
            },
            {
              "path": "/limits",
              "name": "limits",
              "component": "layout/routerView/parent",
              "redirect": "/limits/frontEnd",
              "meta": {
                "title": "message.router.limits",
                "isLink": "",
                "isHide": false,
                "isKeepAlive": true,
                "isAffix": false,
                "isIframe": false,
                "roles": ["admin", "common"],
                "icon": "iconfont icon-quanxian"
              },
              "children": [
                {
                  "path": "/limits/backEnd",
                  "name": "limitsBackEnd",
                  "component": "layout/routerView/parent",
                  "meta": {
                    "title": "message.router.limitsBackEnd",
                    "isLink": "",
                    "isHide": false,
                    "isKeepAlive": true,
                    "isAffix": false,
                    "isIframe": false,
                    "roles": ["admin", "common"]
                  },
                  "children": [
                    {
                      "path": "/limits/backEnd/page",
                      "name": "limitsBackEndEndPage",
                      "component": "limits/backEnd/page/index",
                      "meta": {
                        "title": "message.router.limitsBackEndEndPage",
                        "isLink": "",
                        "isHide": false,
                        "isKeepAlive": true,
                        "isAffix": false,
                        "isIframe": false,
                        "roles": ["admin", "common"]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "path": "/menu",
              "name": "menu",
              "component": "layout/routerView/parent",
              "redirect": "/menu/menu1",
              "meta": {
                "title": "message.router.menu",
                "isLink": "",
                "isHide": false,
                "isKeepAlive": true,
                "isAffix": false,
                "isIframe": false,
                "roles": ["admin", "common"],
                "icon": "iconfont icon-caidan"
              },
              "children": [
                {
                  "path": "/menu/menu1",
                  "name": "menu1",
                  "component": "layout/routerView/parent",
                  "redirect": "/menu/menu1/menu11",
                  "meta": {
                    "title": "message.router.menu1",
                    "isLink": "",
                    "isHide": false,
                    "isKeepAlive": true,
                    "isAffix": false,
                    "isIframe": false,
                    "roles": ["admin", "common"],
                    "icon": "iconfont icon-caidan"
                  },
                  "children": [
                    {
                      "path": "/menu/menu1/menu11",
                      "name": "menu11",
                      "component": "menu/menu1/menu11/index",
                      "meta": {
                        "title": "message.router.menu11",
                        "isLink": "",
                        "isHide": false,
                        "isKeepAlive": true,
                        "isAffix": false,
                        "isIframe": false,
                        "roles": ["admin", "common"],
                        "icon": "iconfont icon-caidan"
                      }
                    },
                    {
                      "path": "/menu/menu1/menu12",
                      "name": "menu12",
                      "component": "layout/routerView/parent",
                      "redirect": "/menu/menu1/menu12/menu121",
                      "meta": {
                        "title": "message.router.menu12",
                        "isLink": "",
                        "isHide": false,
                        "isKeepAlive": true,
                        "isAffix": false,
                        "isIframe": false,
                        "roles": ["admin", "common"],
                        "icon": "iconfont icon-caidan"
                      },
                      "children": [
                        {
                          "path": "/menu/menu1/menu12/menu121",
                          "name": "menu121",
                          "component": "menu/menu1/menu12/menu121/index",
                          "meta": {
                            "title": "message.router.menu121",
                            "isLink": "",
                            "isHide": false,
                            "isKeepAlive": true,
                            "isAffix": false,
                            "isIframe": false,
                            "roles": ["admin", "common"],
                            "icon": "iconfont icon-caidan"
                          }
                        },
                        {
                          "path": "/menu/menu1/menu12/menu122",
                          "name": "menu122",
                          "component": "menu/menu1/menu12/menu122/index",
                          "meta": {
                            "title": "message.router.menu122",
                            "isLink": "",
                            "isHide": false,
                            "isKeepAlive": true,
                            "isAffix": false,
                            "isIframe": false,
                            "roles": ["admin", "common"],
                            "icon": "iconfont icon-caidan"
                          }
                        }
                      ]
                    },
                    {
                      "path": "/menu/menu1/menu13",
                      "name": "menu13",
                      "component": "menu/menu1/menu13/index",
                      "meta": {
                        "title": "message.router.menu13",
                        "isLink": "",
                        "isHide": false,
                        "isKeepAlive": true,
                        "isAffix": false,
                        "isIframe": false,
                        "roles": ["admin", "common"],
                        "icon": "iconfont icon-caidan"
                      }
                    }
                  ]
                },
                {
                  "path": "/menu/menu2",
                  "name": "menu2",
                  "component": "menu/menu2/index",
                  "meta": {
                    "title": "message.router.menu2",
                    "isLink": "",
                    "isHide": false,
                    "isKeepAlive": true,
                    "isAffix": false,
                    "isIframe": false,
                    "roles": ["admin", "common"],
                    "icon": "iconfont icon-caidan"
                  }
                }
              ]
            },
            {
              "path": "/fun",
              "name": "funIndex",
              "component": "layout/routerView/parent",
              "redirect": "/fun/tagsView",
              "meta": {
                "title": "message.router.funIndex",
                "isLink": "",
                "isHide": false,
                "isKeepAlive": true,
                "isAffix": false,
                "isIframe": false,
                "roles": ["admin", "common"],
                "icon": "iconfont icon-crew_feature"
              },
              "children": [
                {
                  "path": "/fun/tagsView",
                  "name": "funTagsView",
                  "component": "fun/tagsView/index",
                  "meta": {
                    "title": "message.router.funTagsView",
                    "isLink": "",
                    "isHide": false,
                    "isKeepAlive": true,
                    "isAffix": false,
                    "isIframe": false,
                    "roles": ["admin", "common"],
                    "icon": "ele-Pointer"
                  }
                }
              ]
            },
            {
              "path": "/chart",
              "name": "chartIndex",
              "component": "chart/index",
              "meta": {
                "title": "message.router.chartIndex",
                "isLink": "",
                "isHide": false,
                "isKeepAlive": true,
                "isAffix": false,
                "isIframe": false,
                "roles": ["admin", "common"],
                "icon": "iconfont icon-ico_shuju"
              }
            },
            {
              "path": "/personal",
              "name": "personal",
              "component": "personal/index",
              "meta": {
                "title": "message.router.personal",
                "isLink": "",
                "isHide": false,
                "isKeepAlive": true,
                "isAffix": false,
                "isIframe": false,
                "roles": ["admin", "common"],
                "icon": "iconfont icon-gerenzhongxin"
              }
            },
            {
              "path": "/tools",
              "name": "tools",
              "component": "tools/index",
              "meta": {
                "title": "message.router.tools",
                "isLink": "",
                "isHide": false,
                "isKeepAlive": true,
                "isAffix": false,
                "isIframe": false,
                "roles": ["admin", "common"],
                "icon": "iconfont icon-gongju"
              }
            },
            {
              "path": "/link",
              "name": "layoutLinkView",
              "component": "layout/routerView/link",
              "meta": {
                "title": "message.router.layoutLinkView",
                "isLink": "https://element-plus.gitee.io/#/zh-CN/component/installation",
                "isHide": false,
                "isKeepAlive": false,
                "isAffix": false,
                "isIframe": false,
                "roles": ["admin"],
                "icon": "iconfont icon-caozuo-wailian"
              }
            },
            {
              "path": "/iframes",
              "name": "layoutIfameView",
              "component": "layout/routerView/iframe",
              "meta": {
                "title": "message.router.layoutIfameView",
                "isLink": "https://gitee.com/lyt-top/vue-next-admin",
                "isHide": false,
                "isKeepAlive": true,
                "isAffix": true,
                "isIframe": true,
                "roles": ["admin"],
                "icon": "iconfont icon-neiqianshujuchucun"
              }
            }
          ]
        }
        resolve(json)
      })
		},
		getMenuTest: (params?: object) => {
			return request({
				url: '/gitee/lyt-top/vue-next-admin-images/raw/master/menu/testMenu.json',
				method: 'get',
				params,
			});
		},
	};
}
