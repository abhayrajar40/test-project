
<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
    <div class="q-pa-md bg-grey-10 text-white">
      <div class="q-gutter-y-md column" style="max-width: 300px">
        <div>
          <q-toggle v-model="readonly" label="Readonly" dark />
          <q-toggle v-model="disable" label="Disable" dark />
        </div>

        <q-input dark v-model="text" :readonly="readonly" :disable="disable">
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>

        <q-input dark filled v-model="text" :readonly="readonly" :disable="disable">
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>

        <q-input dark outlined v-model="text" :readonly="readonly" :disable="disable">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-dark.svg">
          </q-avatar>
        </q-input>

        <q-input dark standout bottom-slots v-model="text" label="Label" counter :readonly="readonly"
          :disable="disable">
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>

          <template v-slot:hint>
            Field hint
          </template>
        </q-input>

        <q-input dark borderless v-model="text" :readonly="readonly" :disable="disable">
          <template v-slot:append>
            <q-icon name="search" />

          </template>
        </q-input>
      </div>
    </div>
  </div>
</template>
