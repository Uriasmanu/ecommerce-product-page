<template>
    <nav>
        <div class="cabecalho">
            <h1>tênis</h1>
            <ul>
                <li v-for="(item, index) in ['Coleções', 'Masculino', 'Feminino', 'Sobre', 'Contato']" :key="index"
                    @click="selectItem(index)" :class="{ active: selectedItem === index }">
                    {{ item }}
                </li>
            </ul>
        </div>
        <div class="usuario-carrinho">
            <div class="carrinho-usuario">
                <div class="carrinho">
                    <img :src="iconeCarrinho" alt="ícone do carrinho">
                </div>
                <div class="usuario">
                    <img :src="imagemUsuario" alt="imagem do usuário">
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import iconeCarrinho from '../../../assets/images/icon-cart.svg';
import imagemUsuario from '../../../assets/images/image-avatar.png';

const selectedItem = ref<number | null>(null);

function selectItem(index: number) {
    selectedItem.value = index;
}
</script>

<style scoped lang="scss">
@import './ComponenteHeader';
    .cabecalho ul li.active {
      border-bottom: solid 4px var(--orange);
      cursor: pointer;
    }
</style>
