<template>


    <div id="blogSidebar" class="shadow-sm" style="padding: 5px;">

        <h6 class="color-main mb-3" style="text-align: center;"><i class="fa-solid fa-file"></i> Notícias Studio Agro</h6>
            <li style="text-align: center;" type="button" @click="eventClearTagAndDate"><router-link  to="/noticiasmain"><i class="color-main fa-solid fa-calendar-days"></i> <b class="color-main">Todas as Notícias</b></router-link></li>
        <hr>

        <div class="">
            <h6>Buscar por Datas</h6>
            <ul class="px-2">
                <li :class="activeDate && date.month === activeDate.month && date.year === activeDate.year ? 'selectedDate' : ''" type="button" @click="eventClickDate(date)" v-for="date in dates"><i class="fa-solid fa-calendar-days"></i> {{ stringMonth[date.month] + ' de ' + date.year + ' ('+date.count+')'}}</li>
            </ul>
        </div>

        <div class="">
            <h6>Buscar por Áreas</h6>
            <ul class="px-2">
                <li :class="activeTag && tag.id === activeTag.id ? 'selectedTag' : ''" type="button" v-for="tag in tags" @click="eventClickTag(tag)">
                    <i class="fa fa-tag" aria-hidden="true"></i> {{ tag.name }}
                </li> 
            </ul>
        </div>
    </div>

</template>


<script>

export default {
    name: 'BlogSidebar',
    props: {
        tags: Array,
        activeTag: Object,
        activeDate: Object,
        dates: Array
    },
    data() {
        return {
            stringMonth: {
                1: 'Janeiro',
                2: 'Fevereiro',
                3: 'Março',
                4: 'Abril',
                5: 'Maio',
                6: 'Junho',
                7: 'Julho',
                8: 'Agosto',
                9: 'Setembro',
                10: 'Outubro',
                11: 'Novembro',
                12: 'Dezembro'
            },
        };
    },
    methods: {
        eventClickTag(idTag) {
            this.$emit('clickTag', idTag);
        },
        eventClearTagAndDate() {
            this.$emit('clearTagAndDate');
        },
        eventClickDate(date) {
            this.$emit('clickDate', date);
        },
    }
}

</script>

<style>
.selectedTag {
    color: #008360;
}

.selectedDate {
    color: #008360;
}
</style>