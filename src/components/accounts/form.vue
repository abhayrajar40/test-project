<template>
  <q-form ref="form" class="q-pa-md q-ma-md">
    {{ formData }}
    <div class="column">
      <q-input ref="inputref" v-model="formData.account_name" mask="S" reverse-fill-mask type="char" label="Account Name*"
        :rules="[(val) => (val && val.length > 0) || 'Required Field']" />
      <q-input v-model="formData.account_address" label="Account Address*" type="text"
        :rules="[(val) => (val && val.length > 0) || 'Required Field']" />
      <q-input ref="inputref" v-model="formData.contact_number" mask="(###) -###-####)" label="Contact Number"
        prefix="+91" />
      <q-input ref="inputref" v-model="formData.email" mask="x" reverse-fill-mask label="Email" type="email" />
      <q-input ref="inputref" v-model="formData.city" label="City" mask="S" reverse-fill-mask />
      <q-input ref="inputref" v-model="formData.state" label="State" mask="S" type="char" reverse-fill-mask />
      <q-input ref="inputref" v-model="formData.pin_code" mask="######" label="Pin Code" />
      <q-input ref="inputref" v-model="formData.country" mask="s" reverse-fill-mask type="char" label="Country" />
      <q-input v-model="formData.accounting_receipts" label="Accounting Receipts" />
      <q-input v-model="formData.status" label="Status" :options="['published', 'draft', 'archived']" />
      <q-input v-model="formData.invoices" label="Invoices" />
      <q-input ref="inputref" v-model="formData.contacts" mask="(###) ### - ####" label="Contacts" />
      <q-input v-model="formData.log_book" label="Log Book" />
      <q-input ref="inputref" v-model="formData.contracts" mask="#" reverse-fill-mask type="number" label="Contracts" />
      <q-input ref="inputref" v-model="formData.gst" mask="s" reverse-fill-mask type="char" label="Gst" />
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
      if (!validate) {
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
