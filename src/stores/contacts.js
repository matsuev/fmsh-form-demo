import { defineStore } from 'pinia'
import Contacts from '../dataset/contacts'

export const useContacts = defineStore({
  id: 'contacts',
  state: () => ({
    list: Contacts,
  }),
  getters: {
    getList: (state) => state.list,
    getById: (state) => {
      return (id) => state.list.find((contact) => contact.id == id)
    },
  },
  actions: {
    add(contact) {
      this.list.push(contact)
    },
  }
})
