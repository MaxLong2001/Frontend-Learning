import {onBeforeUnmount, onMounted, reactive} from "vue";

export default function () {
    let point = reactive({
        x: 0,
        y: 0,
    })

    function mouseMove(e) {
        point.x = e.pageX
        point.y = e.pageY
    }

    onMounted(() => {
        window.addEventListener('mousemove', mouseMove)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', mouseMove)
    })

    return point
}