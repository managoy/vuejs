import Vue from 'vue';
import Accordion  from "./components/Accordion";
import List from './components/List';

/*new Vue({
    el: '#app',
    components:{
        Accordion,
    },
    data: {
        items: [
            { id:1, title: 'Title 1', description: 'Description for Tab 1'},
            {id:2, title: 'Title 2', description: 'Description for Tab 2'},
            {id:3, title: 'Title 3', description: 'Description for Tab 3'},
        ]
    }

});*/
new Vue({
    el: '#app',
    components:{
        List,
    },
    data: {
        //
    }

});