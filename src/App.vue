<template>
  <v-app>

    <v-container v-if="!start" fluid>
       <v-flex xs12 >
         <v-content  align-content-center dark>
          <p class="headline">Welcome to the THe WeakestLInk</p>
          <v-btn  dark large @click="startFun">Start Game</v-btn>
          <v-btn dark large @click="show_rules=!show_rules">Rules</v-btn>
          <v-content v-show="show_rules">
            These are the Rules
          </v-content>
         </v-content>
         </v-flex>
    </v-container>
    <v-container v-if="start" fluid xs>
       <v-layout row wrap>
         <v-flex xs12 center>
          <h2>Round {{roundNum}}</h2>
         </v-flex>

        <v-flex xs12>         
          <round v-bind:counter="counter"
          :money="current_money"
          :questions="current_questions"
          :currency_symbol="currency_symbol"
          v-on:increaseCounter="increaseCounter"></round>
          <message v-show="show_message" :msg="message" ></message>
        </v-flex>

      <v-flex xs12>        
          <v-flex left d-inline><v-btn dark @click="bankit">  
            <span class="text-md-center">Bank {{currency_symbol}}{{bank}}</span></v-btn></v-flex>
          <v-flex d-inline right>
            <v-btn dark fab large>
              <span class="text-md-center">{{ time | two_digits }}</span>
          </v-btn></v-flex>
     
      </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import round from './round.vue';
import questions from './questions.js';
import message from './message.vue';
  export default {
    components:{
      'message':message,
      'round':round,
    },
    created(){
      console.log(this.rounds[this.roundNum]);     
    },
    computed:{
      current_questions:function(){
        return this.rounds[this.roundNum].questions;
      },
      current_money:function(){
        return this.rounds[this.roundNum].money;
      },
      counter:function(){
        return this.local_counter;
      }
    },
    methods:{
 increaseCounter(){
     this.local_counter = this.local_counter+1;
 },
 bankit(){
   if(!(this.local_counter-1) <= 0)
    this.bank = this.rounds[this.roundNum].money[this.local_counter-2];
   else
    console.error('Cannot bank');
 },
  toggleTimer() {
      if (this.isRunning) {
        clearInterval(this.interval);
        console.log('timer stops');
      } else {
        this.interval = setInterval(this.decrementTime,1000);
      }
      this.isRunning = !this.isRunning;
    },
    decrementTime() {
      if(this.time == 0){
        this.start = false;
      }
      else
      this.time = parseInt(this.time) - 1;
    },
    startFun(){
      this.start = true;
      this.time = 60;            
      this.toggleTimer();
    }
},
    data () {
      return {
        time: 0,
        isRunning: false,
        interval: null,
        roundNum:1,
        message: "",
        show_message: false,
        local_counter:1,
        bank:0,    
        currency_symbol:"$",
        start:false,
        show_rules:false,
        rounds:{
          1:{
            "money":[50,100,200,400,800,1000,1500,2000,3000,5000],
            "questions": Object.assign(questions),
          },
          2:{
            "money":[10000,20000,30000,40000,50000,60000,70000,80000,90000,10000],
            "questions": Object.assign(questions),

          }
        },   
        
      }
    }
  }
</script>

<style>
block {
    display: flex;
    flex-direction: column;
    margin: 10px;
}

.text {
    color: #1abc9c;
    font-size: 20px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 20;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
}

.digit {
    color: #ecf0f1;
    font-size: 20px;
    font-weight: 20;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
}
</style>

