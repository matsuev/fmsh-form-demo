<template>
	<el-dialog v-model="visible" title="Данные контакта">
		<ContactForm :contact="contact" />
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="$emit('cancel')">Отменить</el-button>
				<el-button type="primary" @click="$emit('submit')">{{
					buttonLabel
				}}</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script setup>
import { computed } from "vue";
import ContactForm from "../forms/ContactForm.vue";

const props = defineProps(["contact", "visible", "role"]);
const emit = defineEmits(["cancel", "submit"]);

const buttonLabel = computed(() =>
	props.role == "add" ? "Добавить" : "Сохранить"
);
</script>