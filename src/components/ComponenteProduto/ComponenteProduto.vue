<template>
    <div class="container-produto">

        <div class="imagem-produto">
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

        <div class="info-produto">
            <p>Empresa de Tênis</p>
            <h2>Tênis Edição Limitada Outono</h2>
            <p>Esses tênis de perfil baixo são o seu companheiro perfeito para um visual casual. Com uma
                sola de borracha durável, eles resistem a tudo o que o clima pode oferecer.</p>
            <div class="preco">
                <p>R$ 125,00</p>
                <p>50%</p>
            </div>
            <p>R$ 250,00</p>

            <div class="botoes">
                <div class="buton-somar">
                    <button>-</button>
                    <input type="text" value="0">
                    <button>+</button>
                </div>
                <div class="buton-cart">
                    <button>
                        <img :src="iconeCarrinho" alt="imagem carrinho">
                        adicionar
                    </button>
                </div>
            </div>
        </div>
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

import iconeCarrinho from '../../assets/images/icon-cart.svg';
</script>

<style scoped>
@import './_ComponenteProduto.scss';
</style>
