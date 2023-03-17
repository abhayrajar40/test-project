
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Indexpage.vue') },
      { path:  'buttons' , component: () => import('pages/Buttons.vue') },
      { path:  'input' , component: () => import('pages/input.vue') },
      { path:  'card' , component: () => import('pages/card.vue') },
      { path:  'Carousel' , component: () => import('pages/Carousel.vue') },
      { path:  'Chatmessage' , component: () => import('pages/Chatmessage.vue') },
      { path:  'chip' , component: () => import('pages/chip.vue') },
      { path:  'Form' , component: () => import('pages/Form.vue') },
      { path:  'table' , component: () => import('pages/table.vue') },
      { path:  'login' , component: () => import('pages/login.vue') },
      { path:  'form1' , component: () => import('pages/form1.vue') }

    ]
  },
  {
    path: '/modules',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
         path: ':moduleName/:mode?',
       component: () => import('src/pages/Module.vue'),
       props: true
    },

    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
