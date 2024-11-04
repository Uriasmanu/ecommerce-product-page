<template>
    <div class="container-home">
        <header>
            <ComponenteHeader/>
        </header>

        <main>
            <ComponenteProduto/>
        </main>
  
    </div>
</template>

<script setup lang="ts">
import ComponenteProduto from '@/components/ComponenteProduto/ComponenteProduto.vue';
import ComponenteHeader from '@/components/shared/ComponenteHeader/ComponenteHeader.vue';

</script>

<style scoped>
@import './_HomeView.scss';
</style>