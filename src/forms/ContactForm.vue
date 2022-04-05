<template>
	<el-form :model="contact">
		<el-form-item label="Фамилия Имя" label-width="140px">
			<el-input v-model="contact.name" autocomplete="off" />
		</el-form-item>
		<el-form-item label="Номер телефона" label-width="140px">
			<el-input v-model="contact.phone" autocomplete="off" />
		</el-form-item>
	</el-form>
</template>

<script setup>
const props = defineProps(["contact"]);
</script>