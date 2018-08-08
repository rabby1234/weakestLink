<template>
<v-container fluid >
    <v-layout row justify-center>
        <v-flex xs3>
            <moneystack v-bind:moneyArray="money" 
            v-bind:counter="counter"    
            v-bind:currency_symbol="currency_symbol"
            ></moneystack>
        </v-flex>

        <v-flex xs9 align-center      
        color="red lighten-2"
        dark >
            <questionscreen v-show="!show_message" :question="questions[counter]"
            v-on:increaseCounter="increaseCounter"
            v-on:lost="lost"></questionscreen>            
            <message v-show="show_message" :message="message" ></message>
    </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import moneystack from './moneystack.vue';
import message from './message.vue';
import questionscreen from './questionscreen.vue';
import questions from './questions';

export default {
    components:{
      'moneystack':moneystack,
      'questionscreen':questionscreen,
      'message':message,
    },
    created(){
        console.log(this.props);
    },
data(){
    return {        
        message:"",
        show_message:false,
    }
},
props:{
    counter:Number,
    money:Array,
    questions:Object,
    currency_symbol:String,
},
computed:{
    // questions:function(){
    //     return this.props.questions;
    // }
},
methods:{
 lost(){
     console.log('YOu lost');
     this.show_message= true;
     this.message = "You have lost the game...!!"
 },
 increaseCounter(){
     this.$emit("increaseCounter");
 }
}

}

</script>