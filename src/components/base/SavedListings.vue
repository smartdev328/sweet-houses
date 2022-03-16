<template>
    <div>
        <div class="item1 container my-5">
            <p class="Roboto-Medium text-color-1 my-3">Saved Listings</p>
            <div class="cards">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.item1 p{
font-weight: 600;
font-size: 28px;
}
.item1 .cards{
    display: grid;
    grid-template-columns: auto auto auto ;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
}
@media only screen and (max-width: 600px){
    .item1 .cards{
    display: grid;
    grid-template-columns: auto   ;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
}
}
</style>