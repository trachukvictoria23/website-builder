<template>
    <div class="draft">
        <sidebar />
    </div>
</template>

<script>
import Sidebar from "@/components/Draft/Sidebar"

export default {
    components: {
        Sidebar
    }
}
</script>

<style lang="scss" scoped>
    .draft {
        display: flex;
        height: 100%;
        width: 100%;
    }
</style>