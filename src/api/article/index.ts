import request from '/@/utils/request';

/**
 * 登录api接口集合
 * @method getList 获取列表
 * @method 
 */
export function useArticleApi() {
	return {
		getList: (params?: object) => {
			return request({
				url: '/article/getArticleList',
				method: 'get',
				params,
			});
		},
    getDetail: (params: object) => {
			return request({
				url: '/article/getArticleDetail',
				method: 'get',
				params,
			});
		},
    editArtDetail: (data: object) => {
			return request({
				url: '/article/edit',
				method: 'post',
				data,
			});
		},
	};
}
