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
                <form>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Ad">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Resim URL">
                    </div>
                    <div class="mb-2">
                        <input type="email  " class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input type="number" class="form-control" placeholder="Telefon">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Şirket">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Ünvan">
                    </div>
                    <div class="mb-2">
                        <select class="form-control">
                            <option value="">Seç</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-primary" value="Ekle">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddContact"
}
</script>