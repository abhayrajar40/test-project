<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by Abhay Raj</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by Abhay Raj</div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn flat>Actions 1</q-btn>
        <q-btn flat>Actions 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card flat bordered class="my-card bg-grey-1">
      <q-card-section>
        <div class="row items-centre no-wrap">
          <div class="col">
            <div class="text-h6">Our Planet</div>
            <div class="text-subtitle2">by Abhay Raj</div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Remove Card</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Send Feedback</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Share</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat>Actions 1</q-btn>
        <q-btn flat>Actions 2</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>
