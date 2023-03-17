<template>
  <q-form ref="form" class="q-pa-md q-ma-md">
    {{ formData }}
    <div class="column">
      <q-input ref="inputref" v-model="formData.bank_name" mask="S" reverse-fill-mask type="char" label="Bank Name" />
      <q-input ref="inputref" v-model="formData.account_name" mask="S" reverse-fill-mask type="char"
        label="Account Name" />
      <q-input ref="inputref" v-model="formData.account_no" mask="#" reverse-fill-mask label="Account Number" />
      <q-input ref="inputref" v-model="formData.ifsc" mask="N" reverse-fill-mask label="Ifsc" />
      <q-input ref="inputref" v-model="formData.branch" mask="S" reverse-fill-mask type="char" label="Branch" />
      <q-select v-model="formData.organisation_id" label="Organisation Id" :options="organisation"
        option-label="organisation_name" option-value="id" map-options emit-value />
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
      organisation: [],
    };
  },
  created() {
    this.fetchOrganisation();
  },
  methods: {
    async fetchOrganisation() {
      let response = await this.$api.get("items/organisation");
      let resp = await this.$api.get("items/banks");
      this.organisation = response.data.data;
      this.banks = resp.data.data;
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
