
(function () {

    Vue.component('my-component',{
        template:'<div>A custom component!</div>'
    })


    var app = new Vue({
        el: '#app',
        data: {
            username: 'tom',
            time: new Date().toJSON(),
            firstName:'tom',
            lastName:'jack'
        },
        computed:{
            fullName: function () {
                return this.firstName+' '+this.lastName;
            }
        },
        methods: {
            sayHi: function (msg) {
                console.log(msg);
            },
            setUserName: function (name) {
                this.username = name;
            }
        }
    });
    setInterval(function () {
        app.time = new Date().toJSON();
    }, 1000);

})();


(function () {
    var formEditor = new Vue({
        el: '#formEditor',
        data: {
            newPerson: {
                name: '',
                age: null,
                sex: 'Male'
            },
            Persons: [
                {
                    name: 'tom',
                    age: 12,
                    sex: 'Male'
                },
                {
                    name: 'jack',
                    age: 14,
                    sex: 'Male'
                },
                {
                    name: 'lucy',
                    age: 22,
                    sex: 'Female'
                }
            ]
        },
        methods: {
            createPerson: function () {
                if (!this.newPerson.name) {
                    console.clear();
                    console.log('name is empty');
                    return false;
                }
                if (!this.newPerson.age) {
                    console.clear();
                    console.log('age is empty');
                    return false;
                }
                this.Persons.push(this.newPerson);
                this.newPerson = {
                    name: '',
                    age: '',
                    sex: 'Male'
                };
            },
            deletePerson: function (index) {
                console.clear();
                console.log(index);
                var result = confirm("确定要删除?");
                if (result) {
                    this.Persons.splice(index, 1);
                }
            }
        },
        filters:{
            capitalize: function (value) {
                if(!value) return '';
                value=value.toString();
                return value.toUpperCase();
            }
        }
    })
})();


$(function () {
    $(document).keyup(function (e) {
        if(e.keyCode===13){
            $('#sayHiBtn').trigger('click');
        }
    })
});
