<template>
    <form @submit.prevent="addTag">
        <InputField name="name" type="text" v-model="name" placeholder="name" label="Name" />        
        <p v-if="error">{{error}}</p>
        <button type="submit">Add</button>
    </form>
</template>
<script>
import { Meteor } from 'meteor/meteor';
import InputField from '../Input/InputField.vue';
export default ({
    data() {
        return {
            name: "",
            error: ""
        }
    },
    components: {
        InputField
    },
    methods: {
        addTag() {
            // console.log(this.name,this.email,this.permission)
            Meteor.call('tags.create', {
                name: this.name,
                org_id: this.$route.params.orgid,
            }, (err) => {
                if (err) {
                    this.error = err.error;
                } else {
                    this.$router.go(-1)
                }
            })
        }
    }
})
</script>