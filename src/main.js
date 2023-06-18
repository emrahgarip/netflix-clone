import './assets/scss/main.scss'
//ICONS
import AppLogo from './components/icons/AppLogo.vue';
import CaretDown from './components/icons/CaretDown.vue';
import GlobalEarth from './components/icons/GlobalEarth.vue';
import PlusIcon from './components/icons/PlusIcon.vue';
import RightArrow from './components/icons/RightArrow.vue';

//LAYOUTS
import AppHeader from './components/layouts/AppHeader.vue';

//FORMS
import EmailForm from './components/form/EmailForm.vue';

//APP LEVEL
import AppAccordion from './components/AppAccordion.vue';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)



//ICONS
app.component('AppLogo', AppLogo);
app.component('CaretDown', CaretDown);
app.component('GlobalEarth', GlobalEarth);
app.component('PlusIcon', PlusIcon);
app.component('RightArrow', RightArrow);

//LAYOUTS
app.component('AppHeader', AppHeader);

//FORMS
app.component('EmailForm', EmailForm);

//APP LEVEL
app.component('AppAccordion', AppAccordion);
app.mount('#app')
