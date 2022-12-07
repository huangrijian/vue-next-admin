<template>
	<div class="system-user-container layout-padding">
		<el-card shadow="hover" class="layout-padding-auto">
			<div class="system-user-search mb15">
				<el-input size="default" placeholder="请输入用户名称" style="max-width: 180px"> </el-input>
				<el-button size="default" type="primary" class="ml10">
					<el-icon>
						<ele-Search />
					</el-icon>
					查询
				</el-button>
				<el-button size="default" type="success" class="ml10" @click="onOpenAddUser">
					<el-icon>
						<ele-FolderAdd />
					</el-icon>
					新增用户
				</el-button>
			</div>
			<el-table :data="tableData.data" style="width: 100%">
				<el-table-column type="index" label="序号" width="60" />
				<el-table-column prop="id" label="标签id" show-overflow-tooltip></el-table-column>
        <el-table-column prop="tag_name" label="标签名称" show-overflow-tooltip></el-table-column>
				<el-table-column prop="describe" label="文章列表" show-overflow-tooltip></el-table-column>
				<el-table-column prop="create_time" label="创建时间" show-overflow-tooltip></el-table-column>
				<el-table-column label="操作" width="100">
					<template #default="scope">
						<el-button :disabled="scope.row.userName === 'admin'" size="small" text type="primary" @click="gotoEdit(scope.row)">修改</el-button>
						<el-button :disabled="scope.row.userName === 'admin'" size="small" text type="primary" @click="onRowDel(scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
				@size-change="onHandleSizeChange"
				@current-change="onHandleCurrentChange"
				class="mt15"
				:pager-count="5"
				:page-sizes="[10, 20, 30]"
				v-model:current-page="tableData.param.pageNum"
				background
				v-model:page-size="tableData.param.pageSize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="tableData.total"
			>
			</el-pagination>
		</el-card>
		<AddUer ref="addUserRef" />
		<EditUser ref="editUserRef" />
	</div>
</template>

<script lang="ts">
import { defineAsyncComponent, toRefs, reactive, onMounted, ref, defineComponent } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';
import { useRoute, useRouter } from 'vue-router';
import { useArticleApi } from '/@/api/article'
import { useTagApi } from '/@/api/tag'
const articleApi = useArticleApi();
const tagApi = useTagApi();

// 定义接口来定义对象的类型
interface TableDataRow {
	id: number;
}
interface TableDataState {
	tableData: {
		data: Array<TableDataRow>;
		total: number;
		loading: boolean;
		param: {
			pageNum: number;
			pageSize: number;
		};
	};
}

export default defineComponent({
	name: 'systemUser',
	components: {
		AddUer: defineAsyncComponent(() => import('/@/views/system/user/component/addUser.vue')),
		EditUser: defineAsyncComponent(() => import('/@/views/system/user/component/editUser.vue')),
	},
	setup() {
    const route = useRoute();
    const router = useRouter();
		const addUserRef = ref();
		const editUserRef = ref();
		const state = reactive<TableDataState>({
			tableData: {
				data: [],
				total: 0,
				loading: false,
				param: {
					pageNum: 1,
					pageSize: 10,
				},
			},
		});
		// 初始化表格数据
		const initTableData = async () => {
      let res = await tagApi.getList()
      console.log(res)
			state.tableData.data = res.data;
			state.tableData.total = state.tableData.data.length;
		};
		// 打开新增用户弹窗
		const onOpenAddUser = () => {
			addUserRef.value.openDialog();
		};
		// 打开修改用户弹窗
		const gotoEdit = (row: TableDataRow) => {
			console.log(row.id)
      router.push({
        path:'/article/edit',
        query:{
          id:row.id
        },
      });
		};
		// 删除用户
		const onRowDel = (row: TableDataRow) => {
			ElMessageBox.confirm(`此操作将永久删除账户名称：“${row.userName}”，是否继续?`, '提示', {
				confirmButtonText: '确认',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					ElMessage.success('删除成功');
				})
				.catch(() => {});
		};
		// 分页改变
		const onHandleSizeChange = (val: number) => {
			state.tableData.param.pageSize = val;
		};
		// 分页改变
		const onHandleCurrentChange = (val: number) => {
			state.tableData.param.pageNum = val;
		};
		// 页面加载时
		onMounted(() => {
			initTableData();
		});
		return {
			addUserRef,
			editUserRef,
			onOpenAddUser,
			onRowDel,
			onHandleSizeChange,
			onHandleCurrentChange,
      gotoEdit,
			...toRefs(state),
		};
	},
});
</script>

<style scoped lang="scss">
.system-user-container {
	:deep(.el-card__body) {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: auto;
		.el-table {
			flex: 1;
		}
	}
}
</style>
