import request from '/@/utils/request';

/**
 * 登录api接口集合
 * @method getList 获取列表
 * @method 
 */
export function useCategoryApi() {
	return {
		getList: (params?: object) => {
			return request({
				url: '/category/back/list',
				method: 'get',
				params,
			});
		},
    getDetail: (params?: object) => {
			return request({
				url: '/category/back/detail',
				method: 'get',
				params,
			});
		},
    editDetail: (data: object) => {
			return request({
				url: '/category/back/edit',
				method: 'post',
				data,
			});
		},
	};
}
