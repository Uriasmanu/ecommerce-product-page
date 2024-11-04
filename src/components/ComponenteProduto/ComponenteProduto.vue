<template>
    <div class="container-produto">
        <img :src="fotoProduto1" alt="imagem do produto" class="produto">
        <ul>
            <li class="img">
                <img :src="fotoProduto1Tamb" alt="miniatura do produto">
            </li>
            <li class="img">
                <img :src="fotoProduto2Tamb" alt="miniatura do produto">

            </li>
            <li class="img">
                <img :src="fotoProduto3Tamb" alt="miniatura do produto">

            </li>
            <li class="img">
                <img :src="fotoProduto4Tamb" alt="miniatura do produto">

            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import fotoProduto1 from '../../assets/images/image-product-1.jpg'
import fotoProduto2 from '../../assets/images/image-product-2.jpg'
import fotoProduto3 from '../../assets/images/image-product-3.jpg'
import fotoProduto4 from '../../assets/images/image-product-4.jpg'

import fotoProduto1Tamb from '../../assets/images/image-product-1-thumbnail.jpg'
import fotoProduto2Tamb from '../../assets/images/image-product-2-thumbnail.jpg'
import fotoProduto3Tamb from '../../assets/images/image-product-3-thumbnail.jpg'
import fotoProduto4Tamb from '../../assets/images/image-product-4-thumbnail.jpg'

</script>

<style scoped>
@import './_ComponenteProduto.scss';
</style>