import request from '/@/utils/request';

/**
 * 登录api接口集合
 * @method getList 获取列表
 * @method 
 */
export function useTagApi() {
	return {
		getList: (params?: object) => {
			return request({
				url: '/tag/list',
				method: 'get',
				params,
			});
		},
	};
}
