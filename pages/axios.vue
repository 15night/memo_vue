<template>
    <section class = "container">
        <h1>{{title}}</h1>
        <p>{{message}}</p>
        <div>
            <input type = "text" v-model = "msg" />
            <button @click = "doClick">Click</button>
        </div>
        <hr>
        <table>
            <tr>
                <th>User ID</th>
                <td>{{json_data.userId}}</td>
            </tr>
            <tr>
                <th>ID</th>
                <td>{{json_data.id}}</td>
            </tr>
            <tr>
                <th>Title</th>
                <td>{{json_data.title}}</td>
            </tr>
            <tr>
                <th>Body</th>
                <td>{{json_data.body}}</td>
            </tr>
        </table>
    </section>
</template>

<script>
import axios from "axios"

let url = "https://jsonplaceholder.typicode.com/posts/"

export default {
    data: function() {
        return {
            title: 'Axios',
            message: 'axios sample',
            msg: '',
            json_data: {}
        }
    },
    methods: {
        doClick: function(event) {
            axios.get(url + this.msg)
            .then((res) => {
                this.message = 'get ID =' + this.msg
                this.json_data = res.data
            })
            .catch(() => {
                this.message = 'ERROR!'
                this.json_data = {}
            })
        }
    },
}
</script>

<style>
input {
    font-size: 14pt;
}
button {
    font-size: 14pt;
}
tr th {
    width: 150px;
    background-color: darkblue;
    color: white;
    font-size: 16pt;
}
tr td {
    padding: 5px 10px;
    background-color: #eef;
    font-size: 14pt;
}
.container {
    padding: 5px 10px;
}
h1 {
    font-size: 60pt;
    color: #345980;
}
p {
    padding-top: 5px;
    font-size: 20pt;
}
div {
    font-size: 14pt;
}
pre {
    padding: 10px;
    font-size: 18pt;
    background-color: #efefef;
    white-space: pre-wrap;
}
hr {
    margin: 10px 0px;
}
</style>