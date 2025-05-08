import { computed, ref } from "vue"

const count = ref(1);
//funcion publica
export const useCounter = (initValue = 10) => {

    count.value = initValue;

    const countCuadrado = computed(()=> count.value * count.value);

    return{
        //objeto que sera visible
        count,
        countCuadrado
    }
}