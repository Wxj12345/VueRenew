<template>
  <input class="form-control ime" @focus="changesta()" :placeholder="text" type="text" v-model="inputvalue" @input.native="updateValue">
</template>
<script>
  export default {
    props: ['value','text','type','max'],
    name: 'Numberinput',
    data() {
      return {
        inputvalue: this.value
      }
    },
    watch: {
      inputvalue(val,oldval)  {
        if(!val){
          this.$emit('input', '')
          this.$emit('change', '')
          return;
        }
        let re = /[\u4E00-\u9FA5]/g;
        if (re.test(val)){
          this.inputvalue = oldval;
          return;
        }

        if(this.type==='nospecial'){
          let pattern = new RegExp(/^[A-Za-z0-9_]{0,16}$/) ;
          if(!pattern.exec(val)){
            this.inputvalue = oldval;
            return;
          }
        }

        if(this.type==='number'){
          let r = /^[0-9]*[0-9][0-9]*$/ ;
          if (!r.test(val)){
            this.inputvalue = oldval;
            return;
          }
        }
        if(this.type==='float'){
          let numval = Number(val);
          if(Number.isNaN(numval)){
            if(Number.isNaN(oldval)){
              this.inputvalue = null;
            }else{
              this.inputvalue = oldval;
            }
          }
        }
        this.$emit('input', this.inputvalue)
        this.$emit('change', this.inputvalue)
      },
      value(val,oldval){
        this.inputvalue = val;
      }
    },
    methods: {
      updateValue(event) {
        if(!event.isComposing){
          return event.data;
        }else{
          event.preventDefault();
        }
      },
      changesta(){
        this.$emit('focus', "")
      }
    }
  }
</script>
<style lang="scss">
  .ime{
    ime-mode: disabled;
  }
  .ime::placeholder{
    color: #c0c4cc;
  }
</style>
