<template>
  <q-card class="q-pa-md q-ma-md">
    {{ formData }}
    <div class="column">
      <q-input v-model="formData.id" label="Id" />
      <q-input v-model="formData.item_name" label="Item Name" :options="item_name" />
      <q-select clearable v-model="formData.item_type" label="Item Type" :options="['service', 'service with rate']" />
      <q-select clearable v-model="formData.status" label="Status" :options="['public', 'draft', 'archieved']" />
      <q-input clearable v-model="formData.user_created" label="User Created" type="date" stack-label
        :rules="[validationDateMandatory, validateDateFuture]" />
      <q-input clearable v-model="formData.date_updated" label="Date Updated" type="date" stack-label
        :rules="[validationDateMandatory, validateDateFuture]" />
      <q-input clearable v-model="formData.user_updated" label="User Updated" type="date" stack-label
        :rules="[validationDateMandatory, validateDateFuture]" />
      <q-input clearable v-model="formData.date_updated" label="Date Updated" type="date" stack-label
        :rules="[validationDateMandatory, validateDateFuture]" />
    </div>
    <div class="q-py-md">
      <q-btn color="red" label="submit" @click="submitData"></q-btn>
    </div>
    <div class="q-py-md">
      <q-btn color="red" label="close" to="./"></q-btn>
    </div>
  </q-card>
</template>
<script>
import { date } from "quasar";
export default {
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    validationDateMandatory(val) {
      return !!val || "Required field";
    },
    validateDateFuture(val) {
      let today = new Date();
      let valDate = new Date(val);
      let dateDiff = date.getDateDiff(today, valDate);
      let validation = " Date must be in future";
      if (dateDiff < 0) {
        validation = true;
      }
      return validation;
    },
    submitData() {
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
