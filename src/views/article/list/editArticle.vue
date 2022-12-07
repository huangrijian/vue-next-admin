<template>
	<div class="editor-container layout-pd">
		<el-card shadow="hover" :header="articleDetail.title">
			<el-form :model="articleDetail" label-width="100px">
				<el-form-item label="标题">
					<el-input v-model="articleDetail.title" />
				</el-form-item>
        <el-form-item label="分类">
					<el-select v-model="articleDetail.cid" placeholder="请选择标签">
						<el-option v-for="categoryItem in categoryList" :key="categoryItem.id" :label="categoryItem.name" :value="categoryItem.id" />
					</el-select>
				</el-form-item>
				<el-form-item label="标签">
					<el-select multiple v-model="articleDetail.tag_id_list" placeholder="请选择标签">
						<el-option v-for="tagItem in tagList" :key="tagItem.id" :label="tagItem.tag_name" :value="tagItem.id" />
					</el-select>
				</el-form-item>

        <!-- 
				<el-form-item label="是否发布">
					<el-switch v-model="form.delivery" />
				</el-form-item>
				<el-form-item label="类型">
					<el-radio-group v-model="form.resource">
						<el-radio label="正式" />
						<el-radio label="草稿" />
					</el-radio-group>
				</el-form-item> -->
			</el-form>
			<Editor class="margin-tb-xs" ref="EditorRef" v-model="articleDetail.content" :disable="disable" />
			<div>
				<el-button type="primary" @click="handleSava">保存</el-button>
				<el-button>Cancel</el-button>
			</div>
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
const tagApi = useTagApi();

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
			articleDetail: {
				title: '',
				content: '',
        cid:'',
        tag_id_list:[]
			},
      categoryList:[],
      tagList:[]
		});

		const handleSava = async () => {
      console.log(state.articleDetail)
			let data = {
				id: route.query.id,
				...state.articleDetail,
			};
			let { msg } = await articleApi.editArtDetail(data);
      ElMessage.success(msg)
		};
		
    const getCategoryList = async () => {
			let res = await categoryApi.getList();
			state.categoryList = res.data;
		};
    const getTagList = async () => {
			let res = await tagApi.getList();
      console.log(res.data)
			state.tagList = res.data;
		};
    const getArt = async () => {
			let res = await articleApi.getDetail({ id: route.query.id });
			state.articleDetail = res.data;
		};
    

		onMounted(() => {
      getCategoryList();
      getTagList();
      getArt();
		});

		return {
			...toRefs(state),
			EditorRef,
			handleSava,
		};
	},
});
</script>
