<script>
export default {
  name: 'BaseButton',
  props: {
    text:{
      type: String,
    }
  },
}
</script>

<template>
  <!-- This v-on="$attrs" is a way
  to assign events to an element in a component.
  Without it, Vue does not know where to listen
  for the events. -->
  <button v-on="$attrs">
    <span>{{text}}</span>
  </button>
</template>

<style></style>