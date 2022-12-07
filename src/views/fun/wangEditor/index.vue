<template>
	<div class="editor-container layout-pd">
		<el-card shadow="hover" header="wangeditor富文本编辑器">
			<!-- <el-alert
				title="感谢优秀的 `wangeditor`，项目地址：https://github.com/wangeditor-team/wangEditor"
				type="success"
				:closable="false"
				class="mb15"
			></el-alert> -->
			<Editor v-model="editor.value" :disable="editor.disable" />
			<div>
				<button @click="handleSava">保存1</button>
			</div>
			html的展示 ------------------
			<div v-html="editor.value" />
		</el-card>
	</div>
</template>

<script lang="ts">
import { defineAsyncComponent, toRefs, reactive, defineComponent,onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
	name: 'funWangEditor',
	components: {
		Editor: defineAsyncComponent(() => import('/@/components/editor/index.vue')),
	},
	setup() {
		const state = reactive({
			editor: {
				value:'<p>222212399</p>',
				disable: false,
			},
		});

		const handleSava = () => {
			var config = {
				method: 'post',
				url: 'http://127.0.0.1:3000/article/addArticle',
				headers: {
					'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)',
					'Content-Type': 'application/json',
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjkyMzY5MTM3MiIsImlhdCI6MTY2OTQ4NDM1NCwiZXhwIjoxNjY5NTcwNzU0fQ.mZlgqbWT5qCX8ZVLMQTNPKSBviXcz1XKz-il7O8hF9Y',
				},
				data: {
					title: 'sss',
					content:state.editor.value,
					brief: '看算话再确别但通直书近过东京。',
					tag_id_list: ['21', '1', '3', '4', '5'],
					cid: '8091985363199818',
				},
			};
			axios(config)
				.then(function (response) {
					console.log(JSON.stringify(response.data));
				})
				.catch(function (error) {
					console.log(error);
				});
		};

    const getArt = () => {
      var config = {
				method: 'get',
        url: 'http://127.0.0.1:3000/article/getArticleDetail',
        params:{
          id:254
        }
			};
      axios(config)
				.then(function (response) {
					console.log(JSON.stringify(response.data));
          console.log(response.data.data[0].content)
          state.editor.value = response.data.data[0].content
          console.log(state.editor.value)
				})
				.catch(function (error) {
					console.log(error);
				});
    }

    onMounted(() => {
      getArt();
    })

		return {
			...toRefs(state),
			handleSava,
		};
	},
});
</script>
