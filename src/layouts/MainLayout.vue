<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
</q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
const linksList = [
  {
    title: 'Accounts',
    caption: '',
    icon: 'school',
    link: '/modules/accounts/'
  },
  {
    title: 'Accounting Taxes',
    caption: '',
    icon: 'people',
    link: '/modules/accounting_taxes/'
  },
  {
    title: 'Invoices Details',
    caption: '',
    icon: 'attachment',
    link: '/modules/invoice_details/'
  },
  {
    title: 'Invoices',
    caption: '',
    icon: 'styles',
    link: '/modules/invoices/'
  },
  {
    title: 'Items',
    caption: '',
    icon: 'book',
    link: '/modules/items/'
  },
  {
    title: 'Organisation',
    caption: '',
    icon: 'window',
    link: '/modules/organisation/'
  },
  {
    title: 'Contacts',
    caption: '',
    icon: 'phone',
    link: '/modules/contacts/'
  },
  {
    title: 'Driver',
    caption: '',
    icon: 'warning',
    link: '/modules/driver/'
  },
  {
    title: 'Vehicles',
    caption: '',
    icon: 'traffic',
    link: '/modules/vehicles/'
  },
  {
    title: 'Log Book',
    caption: '',
    icon: 'book',
    link: '/modules/log_book/'
  },
  {
    title: 'Contracts',
    caption: '',
    icon: 'page',
    link: '/modules/contracts/'
  },
  {
    title: 'Vehicle Type',
    caption: '',
    icon: '',
    link: '/modules/vehicle_type/'
  },
  {
    title: 'Banks',
    caption: '',
    icon: 'money',
    link: '/modules/banks/'
  },
  {
    title: 'Document Sequence',
    caption: '',
    icon: '',
    link: '/modules/document_sequence/'
  }
]
export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  setup() {
    const leftDrawerOpen = ref(false)
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
