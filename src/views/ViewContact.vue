<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">İletişim Görüntüle</p>
                <p class="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eligendi modi sint
                    in officiis quas
                    quis magni cumque numquam nobis veritatis tempora, est iusto eos assumenda dolorum a recusandae non?</p>
            </div>
        </div>

        <!-- spinner-->
        <div v-if="loading">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <Spinner />
                    </div>
                </div>
            </div>
        </div>

        <!-- Error Message-->
        <div v-if="!loading && errorMessage">
            <div class="container mt-3">
                <div class="row">
                    <div class="col">
                        <p class="h4 text-danger fw-bold">{{ errorMessage }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container" v-if="!loading && isDone()">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <img :src="contact.photo" alt="" class="contact-img-big">
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item">Ad : <span class="fw-bold">{{ contact.name }}</span></li>
                        <li class="list-group-item">Email : <span class="fw-bold">{{ contact.email }}</span></li>
                        <li class="list-group-item">Telefon : <span class="fw-bold">{{ contact.mobile }}</span></li>
                        <li class="list-group-item">Şirket : <span class="fw-bold">{{ contact.company }}</span></li>
                        <li class="list-group-item">Ünvan : <span class="fw-bold">{{ contact.title }}</span></li>
                        <li class="list-group-item">Grup : <span class="fw-bold">{{ group.name }}</span></li>
                    </ul>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i> Geri
                        Dön</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import { ContactService } from '@/services/ContactService'
export default {
    name: "ViewContact",
    components: { Spinner },
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            loading: false,
            contact: {},
            errorMessage: null,
            group: {}
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getContact(this.contactId);
            let groupResponse = await ContactService.getGroup(response.data);
            this.contact = response.data;
            this.group = groupResponse.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods : {
        isDone: function() {
            return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0;
        }
    }
}
</script>