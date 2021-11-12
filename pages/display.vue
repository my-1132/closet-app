<template>
    <div class="container">
        <div class="date">今日</div>
        <span class="location">東京</span>
        <p>{{ today }}</p>
    </div>
</template>

<script>
export default {
    data: () => {
        return {

        }
    },
    computed: {
        today(){
        // 気象情報表示部分の今日の日付
            const now = new  Date()
            const week = ['日','月','火','水','木','金','土']
            return `${now.getMonth()+1}/${now.getDate()}(${week[now.getDay()]}）`
        }
    }

}
</script>

