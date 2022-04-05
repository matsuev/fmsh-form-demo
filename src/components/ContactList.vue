<template>
	<div class="contact-list">
		<div
			class="contact-list-card"
			v-for="contact in contacts.getList"
			:key="contact.id"
		>
			<ContactListItem :contact="contact" />
			<div class="contact-actions">
				<el-button size="small" :icon="Edit" @click="doEditContact(contact)"
					>Редактировать</el-button
				>
			</div>
		</div>
		<el-button type="primary" :icon="CirclePlus" @click="createNewContact"
			>Добавить контакт</el-button
		>
		<ContactDialog
			:contact="dialogContact"
			:visible="dialogVisible"
			:role="dialogRole"
			@cancel="doCancelAction"
			@submit="doSubmitAction"
		/>
	</div>
</template>

<script setup>
import { useContacts } from "../stores/contacts";
import { ref } from "vue";
import ContactListItem from "./ContactListItem.vue";
import ContactDialog from "../dialogs/ContactDialog.vue";
import { Edit, CirclePlus } from "@element-plus/icons-vue";

const contacts = useContacts();

const dialogContact = ref(null);
const dialogVisible = ref(false);
const dialogRole = ref("edit");

function doEditContact(contact) {
	dialogContact.value = contact;
	dialogRole.value = "edit";
	dialogVisible.value = true;
}

function doCancelAction() {
	dialogVisible.value = false;
}

function doSubmitAction() {
	dialogVisible.value = false;
	if (dialogRole.value == "add") {
		contacts.add(dialogContact.value);
	}
}

function createNewContact() {
	dialogContact.value = {
		id: 0,
		name: "",
		phone: "",
	};
	dialogRole.value = "add";
	dialogVisible.value = true;
}
</script>

<style>
.contact-list {
	box-sizing: border-box;
	max-width: 600px;
}

.contact-list-card {
	border-bottom: 1px dashed rgba(0, 0, 0, 0.5);
	margin: 10px 0px;
	padding: 10px 0px;
}

.contact-actions {
	text-align: right;
}
</style>