<template>
<div ref="number" class="wrap-container"></div>
</template>
<script>
export default {
  name: 'num',
  data () {
    return {
      html: ''
    }
  },
  props: {
    vv: String
  },
  created() {

  },
  methods: {
    init() {
      // this.vv.toString().split('').forEach(v => {
      //   this.html += '<div class="wrap"><ul class="list scroll' + v + '">'
      //   for (let i = 0; i <= 9; i++) {
      //     this.html += '<li>' + i + '</li>'
      //   }
      //   this.html += '</ul></div>'
      // })
      // this.$refs.number.innerHTML = this.html
      this.vv.toString().split('').forEach(v => {
        this.html += '<div class="wrap"><ul class="list scroll' + v + '">'
        for (let i = 0; i <= 9; i++) {
          this.html += '<li>' + i + '</li>'
        }
        this.html += '</ul></div>'
      })
      this.$refs.number.innerHTML = this.html
    },
    fontsizeSet(size) {
      var len = document.getElementsByClassName('wrap').length;
      for(var i=0; i<len; i++) {
        document.getElementsByClassName('wrap')[i].style="font-size: "+ size +"px";
      }
    }
  },
  mounted() {
    this.init();
  }
}
</script>
<style>
.wrap-container {
  display:flex;
  justify-content: center;
  width: 20%;
  margin: 15px 0;
}

.wrap{
  width:15px;
  height:18px;
  position:relative;
  overflow:hidden;
  box-sizing: border-box;
  /* font-size: 24px; */
}

.list {
  position:absolute;
  left:0;
  top:0;
  margin:0;
  padding:0;
  height:100%;
  box-sizing: border-box;
}
.list li{
  list-style:none;
  width:12px;
  height:18px;
  line-height:18px;
  color:#ffeecc;
  text-align:center;
  float:left;
  box-sizing: border-box;
}
@keyframes move9{0%{top:0;}100%{top:-900%;}}
@keyframes move8{0%{top:0;}100%{top:-800%;}}
@keyframes move7{0%{top:0;}100%{top:-700%;}}
@keyframes move6{0%{top:0;}100%{top:-600%;}}
@keyframes move5{0%{top:0;}100%{top:-500%;}}
@keyframes move4{0%{top:0;}100%{top:-400%;}}
@keyframes move3{0%{top:0;}100%{top:-300%;}}
@keyframes move2{0%{top:0;}100%{top:-200%;}}
@keyframes move1{0%{top:0;}100%{top:-100%;}}
.scroll9 {animation:1s move9 /*infinite*/ linear;top:-900%; }
.scroll8 {animation:1s move8 /*infinite*/ linear;top:-800%; }
.scroll7 {animation:1s move7 /*infinite*/ linear;top:-700%; }
.scroll6 {animation:1s move6 /*infinite*/ linear;top:-600%; }
.scroll5 {animation:1s move5 /*infinite*/ linear;top:-500%; }
.scroll4 {animation:1s move4 /*infinite*/ linear;top:-400%; }
.scroll3 {animation:1s move3 /*infinite*/ linear;top:-300%; }
.scroll2 {animation:1s move2 /*infinite*/ linear;top:-200%; }
.scroll1 {animation:1s move1 /*infinite*/ linear;top:-100%; }
</style>
