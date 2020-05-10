<template>
<div>
    <transition-group name='fade' tag='div'>
      <div v-for="i in [currentIndex]" :key='i'>
        <img :src="currentImg" />
        <q class="centered-quote">{{currentText}}</q>
      </div>
    </transition-group>
    <a class="prev" @click="prev" href='#'>&#10094;</a>
  <a class="next" @click="next" href='#'>&#10095;</a>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      images: [
        'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
        'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg'
        ],
      descriptions: [
        'La educación ayuda a la persona a aprender a ser lo que es capaz de ser',
        'La enseñanza que deja huella no es la que se hace de cabeza a cabeza, sino de corazón a corazón',
        'Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo',
        'Un maestro es una brújula que activa los imanes de la curiosidad, el conocimiento y la sabiduría en los alumnos'

      ],
      timer: null,
      currentIndex: 0,
    }
  },
  
    mounted: function() {
      this.startSlide();
    },
  
    methods: {
      startSlide: function() {
        this.timer = setInterval(this.next, 4000);
      },
  
  
      next: function() {
        this.currentIndex += 1
      },
      prev: function() {
        this.currentIndex -= 1
      }
    },
  
    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      },
      currentText: function() {
        return this.descriptions[Math.abs(this.currentIndex) % this.descriptions.length]
      }
    }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;700&display=swap');
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}
img {
height:600px;
width:100%
  }
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
/* Position the "next button" to the right */
.next {
  right: 0;
}
.prev {
  left: 0;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
.centered-quote {
  font-family: 'Dancing Script', cursive;
  font-size: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  color: aliceblue;
}
@media only screen and (max-width: 600px) {
  .centered-quote {
    position: relative;
    color: #4d4d4d;
  }
}
</style>