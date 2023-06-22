import './assets/scss/main.scss'
//ICONS
import AppLogo from './components/icons/AppLogo.vue';
import CaretDown from './components/icons/CaretDown.vue';
import GlobalEarth from './components/icons/GlobalEarth.vue';
import PlusIcon from './components/icons/PlusIcon.vue';
import RightArrow from './components/icons/RightArrow.vue';
import CheckIcon from "./components/icons/CheckIcon.vue";
import SearchIcon from "./components/icons/SearchIcon.vue";
import BellIcon from "./components/icons/BellIcon.vue";

//LAYOUTS
import AppHeader from './components/layouts/AppHeader.vue';
import AppNavigation from './components/layouts/AppNavigation.vue';

//DROPDOWN

import AppDropdown from "./components/dropdown/AppDropdown.vue";

//FORMS
import EmailForm from './components/form/EmailForm.vue';
import CustomCheckbox from "./components/form/CustomCheckbox.vue";

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
app.component('CheckIcon', CheckIcon);
app.component('SearchIcon', SearchIcon);
app.component('BellIcon', BellIcon);

//LAYOUTS
app.component('AppHeader', AppHeader);
app.component('AppNavigation', AppNavigation);

//FORMS
app.component('EmailForm', EmailForm);
app.component('CustomCheckbox', CustomCheckbox);

//DROPDOWN
app.component('AppDropdown', AppDropdown);

//APP LEVEL
app.component('AppAccordion', AppAccordion);
app.mount('#app')
