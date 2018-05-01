<template>
<v-app>
<v-container fluid fill-height>
  <v-layout row wrap align-center>
  <v-flex xs6 order-md3 order-xs2>
    <h1> fill out sending package information:</h1>
<v-form  @submit.prevent="submitting">
     <v-text-field xs6
      label="name"
      v-model="name"
    ></v-text-field>

     <v-text-field xs6
      label="phone number"
      v-model="number"
    ></v-text-field>

     <v-text-field xs6
      label="package type"
      v-model="packageType"
    ></v-text-field>

    <v-text-field xs6
      label="zip from"
      v-model="startZip"
    ></v-text-field>
      <h3>{{Startcity}}</h3>

    <v-text-field xs6
      label="zip to"
      v-model="endZip"
    ></v-text-field>
    <h3>{{Endcity}}</h3>

    <v-btn large
      type="submit"
    >
      submit
    </v-btn>
  </v-form>
  <v-card xs12>

        <h1>send information : </h1>
        <h2><pre>{{sendInfo}}</pre></h2>
        <v-btn v-if="sendInfo"  @click="confirmOrder">confirm data and post order</v-btn>
        <h2 v-if="confirmed"> phone number : {{packs.userId}} <br>
             name : {{packs.id}} <br>
             package type: {{packs.title}} <br>
             from and to: {{packs.body}}</h2>
  </v-card>
  </v-flex>
  </v-layout>
</v-container>
  </v-app>
</template>

<script>
  
  import {mapActions} from 'vuex'

export default {
  computed: {
      sendInfo() { 
        
          let info = this.$store.getters['zipModule/sendInfo']
          return info
          
        },
      startZip: { 
        get() {
          this.$store.getters['zipModule/startZip']
          },
        set(value) {
          this.$store.commit('zipModule/startZip',value)
          if(value.length === 5){
            this.$store.dispatch('zipModule/lookupS', value)
          }
          }
        },
      endZip: { 
        get() {
          this.$store.getters['zipModule/endZip']
          },
        set(value) {
          this.$store.commit('zipModule/endZip',value)
          if(value.length === 5){
            this.$store.dispatch('zipModule/lookupE', value)
          }
        }
      },
      Startcity() { 

         let city = this.$store.getters['zipModule/Startcity']
         return city
        },
      Endcity() { 
         let city = this.$store.getters['zipModule/Endcity']
         return city
      },
      name: { 
        get() {
          this.$store.getters['zipModule/name']
          },
        set(value) {
          this.$store.commit('zipModule/name',value)
          }
        },
      number: { 
        get() {
          this.$store.getters['zipModule/number']
          },
        set(value) {
          this.$store.commit('zipModule/number',value)
          }
        },
      packageType: { 
        get() {
          this.$store.getters['zipModule/packageType']
          },
        set(value) {
          this.$store.commit('zipModule/packageType',value)
          }
        },
      confirmed() { 
        
         let stat = this.$store.getters['zipModule/confirmed']
         return stat
            
        },
      packs() { 
        
        let pack = this.$store.getters['zipModule/packs']
        return pack
        
      },
  },
  methods : {
    ...mapActions([
      'lookupS',
      'lookupE',
      'submitting',
      'confirmOrder',
    ]),
  },

}
</script>