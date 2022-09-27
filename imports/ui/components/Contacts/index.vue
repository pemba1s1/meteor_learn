<template>
    <div v-if="$subReady.contacts">
        Contact Page
        <p>Name : {{contacts.name}}</p>
        <p>Email : {{contacts.email}}</p>
    </div>
</template>
<script>
import { Contacts } from "../../../api/collections/Contacts";

export default({
    meteor:{
        $subscribe:{
            'contacts'() {
                return [{ _id: this.$route.params.contactId }];
            },
        },
        contacts(){
            return Contacts.findOne({})
        }
    }
})
</script>
