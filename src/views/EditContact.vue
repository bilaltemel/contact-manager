<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">İletişim Düzenle</p>
                <p class="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eligendi modi sint
                    in officiis quas
                    quis magni cumque numquam nobis veritatis tempora, est iusto eos assumenda dolorum a recusandae non?</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="updateSubmit()">
                    <div class="mb-2">
                        <input v-model="contact.name" type="text" class="form-control" placeholder="Ad">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.photo" type="text" class="form-control" placeholder="Resim URL">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.email" type="email  " class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.mobile" type="number" class="form-control" placeholder="Telefon">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.company" type="text" class="form-control" placeholder="Şirket">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.title" type="text" class="form-control" placeholder="Ünvan">
                    </div>
                    <div class="mb-2">
                        <select v-model="contact.groupId" class="form-control" v-if="groups.length > 0">
                            <option value="">Seç</option>
                            <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-warning" value="Düzenle">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img :src="contact.photo" alt="" class="contact-img">
            </div>
        </div>
    </div>
</template>

<script>
import { ContactService } from '@/services/ContactService'
export default {
    name: "EditContact",
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            loading: false,
            contact: {
                name: "",
                photo: "",
                email: "",
                mobile: "",
                company: "",
                title: "",
                groupId: ""
            },
            errorMessage: null,
            groups: []
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getContact(this.contactId);
            let groupResponse = await ContactService.getAllGroups();
            this.contact = response.data;
            this.groups = groupResponse.data;
            this.loading = false;
        } catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
        updateSubmit: async function () {
            try {
                let response = await ContactService.updateContact(this.contact, this.contactId);
                if (response) {
                    return this.$router.push("/");
                } else {
                    return this.$router.push(`/contacts/edit/${this.contactId}`);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style></style>