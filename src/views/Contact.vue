<script>
import {  mapState } from "vuex"
export default {
  name: "Contact",
  computed: {
    ...mapState({
      contact: "contact"
    })
  }
}
</script>

<template>
  <div>
    <h2>Contactez nous</h2>
    <p>Adresse : {{ contact.address }}</p>
    <p>Téléphone : {{ contact.phone }}</p>
    <p>Email : {{ contact.email }}</p>
    <p>Horaires :</p>
    <ul>
      <li>L-V: 06:00 à 16:00</li>
      <li>Samedi: 07:00 à 14:00</li>
      <li>Dimanche: 07:00 à 12:00</li>
    </ul>
  </div>
</template>



<style lang="scss">

</style>