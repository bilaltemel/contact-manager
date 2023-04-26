<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">İletişim Ekle</p>
                <p class="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eligendi modi sint
                    in officiis quas
                    quis magni cumque numquam nobis veritatis tempora, est iusto eos assumenda dolorum a recusandae non?</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="submitCreate()">
                    <div class="mb-2">
                        <input required v-model="contact.name" type="text" class="form-control" placeholder="Ad">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.photo" type="text" class="form-control" placeholder="Resim URL">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.email" type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.mobile" type="number" class="form-control" placeholder="Telefon">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.company" type="text" class="form-control" placeholder="Şirket">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.title" type="text" class="form-control" placeholder="Ünvan">
                    </div>
                    <div class="mb-2">
                        <select required v-model="contact.groupId" class="form-control" v-if="groups.length > 0">
                            <option value="">Seç</option>
                            <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-primary" value="Ekle">
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
    name: "AddContact",
    data: function () {
        return {
            contact: {
                name: "",
                photo: "",
                email: "",
                mobile: "",
                company: "",
                title: "",
                groupId: "",
            },
            groups: []
        }
    },
    created: async function () {
        try {
            let response = await ContactService.getAllGroups();
            this.groups = response.data;
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        submitCreate: async function () {
            try {
                let response = await ContactService.createContact(this.contact);
                if (response) {
                    return this.$router.push("/");
                }
                else {
                    return this.$router.push("contacts/add");
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>