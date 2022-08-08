import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


export default new Vuetify({
    theme: {
      themes: {
        light: {
          // match to colors in variables.scss
          primary: '#33658A', 
          secondary: '#86BBD8', 
          accent: '#F26419', 
          error: '#92140C',
          warning: '#F6AE2D', 
          info: '#011936',
          success: '#5FAD56',
        }
      }
    }
  })
