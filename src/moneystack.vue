<template>
    <v-flex >
        <div v-for="(value,index) in revrsedMoneyArray">
            <div v-if="index == moneyCounter">
                <v-btn fab dark  color="red">{{currency_symbol}}{{value}}</v-btn>
            </div>
            <div v-else-if="index > moneyCounter">
                <v-btn fab dark  color="green">{{currency_symbol}}{{value}}</v-btn>
            </div>
             <div v-else>
                <v-btn fab dark  color="teal">{{currency_symbol}}{{value}}</v-btn>
            </div>
        </div>
        </v-flex>
</template>

<script>
export default {
        props: {
        moneyArray: Array,
        counter: Number,
        currency_symbol:String,
 },

 computed:{
     moneyCounter:function(){
         return this.moneyArray.length - this.counter;
     },

     revrsedMoneyArray:function(){
         var reverseMoney = Object.create(this.moneyArray);
         return reverseMoney.reverse();
     }
 },

   data() {
       return{}
       
   }
}
</script>


