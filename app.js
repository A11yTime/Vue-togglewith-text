const app = Vue.createApp({
    data(){
        return{
            enteredTask: '',
            goals: [],
            taskisVisible: true,
            
        }
    },
    methods: {
        addTask(){
            this.goals.push(this.enteredTask);
        },
        toggleTask(){
           this.taskisVisible = !this.taskisVisible
        }
    },
    computed: {
        taskText(){
            return this.taskisVisible ? 'Hide Task' : 'Show Task'
        }
    }
});
app.mount('#assignment')