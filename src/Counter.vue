<script setup>

//importar valores desde funcion externa
import { useCounter } from './composables/useCounter';

const {count, countCuadrado} = useCounter(20); 



//Eventos
defineEmits('send');

//Permitir pasar variables desde afuera
    //cosnt props = defineProps(['value']);
const props = defineProps({
        value: {
            type: Number,
            //required: true,
            default: 1
        }
    })


</script>

<template>
  <h1>contador: {{ count }}</h1>
  <h2>count cuadrado : {{ countCuadrado }}</h2>
  <button @click="count++">+</button>
  <button @click="count--">-</button>

  <button @click= "$emit('send','hola desde el Counter')">Enviar un evento al padre</button>
</template>