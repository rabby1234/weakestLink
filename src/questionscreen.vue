<template>
     <v-flex xs12>
     <v-card dark>
        <v-card-title wrap>
          <div >
                <span class="headline" v-text="question.question"></span>
          </div>
        </v-card-title>
        <v-card-actions>
            <v-list>
          <v-list-tile
            v-for="option in question.options"
            :key="option"
            @click="markAnswer(option)"
            two-line
            dark
            hover
          >
            <v-list-tile-action>
              <v-icon v-if="option" color="teal">radio_button_unchecked</v-icon>
            </v-list-tile-action>

            <v-list-tile-content color="grey lighten-1" >
              <v-list-tile-title v-text="option"></v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
          
        </v-card-actions>
      </v-card>
      </v-flex>
</template>

<script>
export default {
    props :{
        question:Object
},
    data()
    {
return{}
    },
    methods:{
        markAnswer:function(option){
            if(option == this.question.answer)
                this.$emit("increaseCounter");
            else
                this.$emit("lost");

        }
    }
}
</script>


