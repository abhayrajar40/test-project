<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">

      <q-btn color="grey-4" text-color="purple" glossy unelevated icon="camera_enhance" label=" purple text" />
      <q-btn round color="primary" icon="shopping_cart" />
      <q-btn color="primary" icon="mail" label="On Left" />
      <q-btn color="secondary" icon-right="mail" label="On Right" />
      <q-btn color="red" icon="mail" icon-right="send" label="On Left and Right" />
      <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
      <q-btn round color="primary" icon="shopping_cart" />
      <q-btn round color="secondary" icon="navigation" />
      <q-btn round color="amber" glossy text-color="black" icon="layers_clear" />
      <q-btn round color="brown-5" icon="directions" />
      <q-btn round color="deep-orange" icon="edit_location" />
      <q-btn round color="purple" glossy icon="local_grocery_store" />
      <q-btn round color="black" icon="my_location" />
      <q-btn square color="primary" icon="shopping_cart" />
      <q-btn square color="secondary" icon="navigation" />
      <q-btn square color="amber" glossy text-color="black" icon="layers_clear" />
      <q-btn square color="brown-5" icon="directions" />
      <q-btn square color="deep-orange" icon="edit_location" />
      <q-btn square color="purple" glossy icon="local_grocery_store" />
      <q-btn square color="black" icon="my_location" />
      <q-icon left size="3em" name="map" />
      <div>Label</div>
      <q-btn round>
        <q-avatar size="42px">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg">
        </q-avatar>
        <q-btn flat color="primary" label="Flat" />
        <q-btn flat rounded color="primary" label="Flat Rounded" />
        <q-btn flat round color="primary" icon="card_giftcard" />
        <br>
        <q-btn align="left" class="btn-fixed-width" color="primary" label="Align to left" />
      </q-btn>
      <q-btn-group push>
        <q-btn push label="First" icon="timeline" />
        <q-btn push label="Second" icon="visibility" />
        <q-btn push label="Third" icon="update" />
      </q-btn-group>
      <q-btn-group spread>
        <q-btn color="purple" label="First" icon="timeline" />
        <q-btn color="purple" label="Second" icon="visibility" />
      </q-btn-group>
      <q-btn-dropdown color="primary" label="Dropdown Button">
        <q-list>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Photos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Videos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Articles</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn-dropdown class="glossy" color="purple" label="Account Settings">
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

            <q-btn color="primary" label="Logout" push size="sm" v-close-popup />
          </div>
        </div>
      </q-btn-dropdown>
    </div>
  </q-page>
</template>
