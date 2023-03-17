<template>
  <q-form ref="form" class="q-pa-md q-ma-md">
    {{ formData }}
    <div class="column">
      <q-input ref="inputref" v-model="formData.account_id" mask="S" reverse-fill-mask label="Account Id" />
      <q-input ref="inputref" v-model="formData.designation" mask="S" reverse-fill-mask type="char" label="Designation" />
      <q-input ref="inputref" v-model="formData.name" mask="S" reverse-fill-mask type="char" label="Name" />
      <q-select v-model="formData.status" label="Status" :options="['published', 'draft', 'archived']" />
      <q-input v-model="formData.sort" label="Sort" />
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
  methods: {
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
