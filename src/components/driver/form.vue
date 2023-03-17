<template>
  <q-form ref="form" class="q-pa-md q-ma-md">
    {{ formData }}
    <div class="column">
      <q-input ref="inputref" v-model="formData.driver_name" mask="N" reverse-fill-mask label="Driver Name" />
      <q-input ref="inputref" v-model="formData.address" mask="S" reverse-fill-mask label="Address" :options="address" />
      <q-input ref="inputref" v-model="formData.contact_no" mask="##########" label="Contact Number" />
      <q-select clearable v-model="formData.status" label="Status" :options="['published', 'draft', 'archived']" />
    </div>
    <div class="q-py-md">
      <q-btn color="red" label="submit" @click="submitData"></q-btn>
    </div>
    <div class="q-py-md">
      <q-btn color="red" label="close" to="./"></q-btn>
    </div>
  </q-form>
</template>
<script>
export default {
  data() {
    return {
      formData: {},
    };
  },
  created() {
    this.fetchDriver();
  },
  methods: {
    async fetchDriver() {
      let response = await this.$api.get("items/driver");
      this.driver = response.data.data;
    },
    async submitData() {
      let validation = await this.$refs.form.validate();
      if (!validation) {
        alert("invalid form");
        return;
      }
      console.log("Emitting Event of submitting form with data");
      alert();
      this.$emit("formSubmit", this.formData);
      console.log("Resetting Form");
      alert();
      this.formData = {};
    },
  },
};
</script>
