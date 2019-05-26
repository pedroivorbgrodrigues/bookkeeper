<template>
  <v-snackbar
    v-model="notification.snackbar"
    :color="notification.color"
    :multi-line="notification.mode === 'multi-line'"
    :timeout="notification.timeout"
    :vertical="notification.mode === 'vertical'"
    :bottom="notification.yposition === 'bottom'"
    :top="notification.yposition === 'top'"
    :left="notification.xposition === 'left'"
    :right="notification.xposition === 'right'"
  >
    {{ notification.text }}
    <v-btn dark flat @click="snackbar = false">
      Close
    </v-btn>
  </v-snackbar>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Notification",
  computed: {
    ...mapGetters(["notification"])
  },
  methods: {
    ...mapActions(["closeNotification"])
  }
};
</script>
