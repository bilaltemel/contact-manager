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
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img-big">
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item">Ad : <span class="fw-bold">Ad</span></li>
                        <li class="list-group-item">Email : <span class="fw-bold">Email</span></li>
                        <li class="list-group-item">Telefon : <span class="fw-bold">Telefon</span></li>
                        <li class="list-group-item">Şirket : <span class="fw-bold">Şirket</span></li>
                        <li class="list-group-item">Ünvan : <span class="fw-bold">Ünvan</span></li>
                        <li class="list-group-item">Grup : <span class="fw-bold">Grup</span></li>
                    </ul>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i> Geri Dön</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ViewContact"
}
</script>