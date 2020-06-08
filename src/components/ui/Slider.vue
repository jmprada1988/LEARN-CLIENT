<template>
  <v-carousel 
  cycle
  :show-arrows="false"
  :interval="5000"
  >
    <v-carousel-item
      v-for="(item,i) in images"
      :key="i"
      :src="item.src"
      reverse-transition="scroll-x-transition"
      hide-delimiter-background
      show-arrows-on-hover
    >
    <v-sheet
        color="transparent"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-1 white--text text-xs-center flex">"{{ item.desc }}"</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      images: [
        {
          src: 'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
          desc: 'La educación ayuda a la persona a aprender a ser lo que es capaz de ser'
        },
        {
          src: 'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
          desc: 'La enseñanza que deja huella no es la que se hace de cabeza a cabeza, sino de corazón a corazón'
          },
        {
          src: 'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
          desc: 'Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo'
          },
        {
          src: 'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg',
          desc: 'Un maestro es una brújula que activa los imanes de la curiosidad, el conocimiento y la sabiduría en los alumnos'
          }
        ],
    }
  },  
}
</script>

<style>
.slide-description {
  color: black;
}
</style>