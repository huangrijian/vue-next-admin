<template>
	<div class="editor-container layout-pd">
		<el-card shadow="hover" :header="categoryDetail.name">
			<el-form :model="categoryDetail" label-width="100px">
				<el-form-item label="分类名称">
					<el-input v-model="categoryDetail.name" />
				</el-form-item>
				<el-form-item label="文章列表">
					<el-select multiple v-model="categoryDetail.articleInfoArr"  placeholder="请选择文章">
						<el-option v-for="item in artList" :key="item.id" :label="item.title" :value="item.id" />
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleSava">保存</el-button>
					<el-button>Cancel</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, toRefs, reactive, onMounted, ref, toRef } from 'vue';
import { useRoute } from 'vue-router';
import { useArticleApi } from '/@/api/article';
import { useCategoryApi } from '/@/api/category';
import { useTagApi } from '/@/api/tag';
import { ElMessage, ElMessageBox } from 'element-plus';
const articleApi = useArticleApi();
const categoryApi = useCategoryApi();


export default defineComponent({
	name: 'editArticle',
	components: {
		Editor: defineAsyncComponent(() => import('/@/components/editor/index.vue')),
	},
	setup() {
		const route = useRoute();
		const EditorRef = ref();
		const state = reactive({
			disable: false,
			categoryDetail: {
				name: '',
				articleInfoArr: [],
			},
			categoryList: [],
			artList: [],
		});

		const handleSava = async () => {
			let { msg } = await categoryApi.editDetail(state.categoryDetail);
			// ElMessage.success(msg);
		};

		const getCategoryDetail = async () => {
			let res = await categoryApi.getDetail({id:route.query.id});
			state.categoryDetail = res.data;
		};
    const getArtList = async () => {
			let res = await articleApi.getList();
      res.data = res.data.map(item => {
        return {
          id:item.id, title:item.title
        }
      })
			state.artList = res.data;
		};

		onMounted(() => {
			getCategoryDetail();
      getArtList();
		});

		return {
			...toRefs(state),
			EditorRef,
			handleSava,
		};
	},
});
</script>
