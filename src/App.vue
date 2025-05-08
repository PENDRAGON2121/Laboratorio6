<script setup>
import Counter from './Counter.vue';
import Question from './components/Question.vue';

const number = 30;

function mostrarMensaje (msj){
    alert(msj);
}
</script>

<template>

<h1>hola mundo</h1>
<Counter :value="number" @send="mostrarMensaje"></Counter>

<Question></Question>


</template>