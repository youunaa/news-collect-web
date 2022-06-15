<template>
    <section id="container">
    <div id="content" class="place">
        <div class="cont_header">
            <h2 class="page_title">수집데이터 결과</h2>
            <span class="page_path">HOME &gt; 수집데이터 결과</span>
        </div>
        <section class="cont_inner">
            <h3 class="cont_title">수집데이터 목록</h3>
            <table>
                <colgroup>
                    <col style="width: 60px;">
                    <col style="width: 100px;">
                    <col style="width: 100px;">
                    <col>
                    <col style="width:150px;">
                </colgroup>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>뉴스 구분</th>
                        <th>키워드</th>
                        <th>뉴스</th>
                        <th>등록일시</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in newsList" :key="index">
                        <td>{{ (page.size * (totalPages - page.page )) - index }}</td> 
                        <td>{{ newsTypeFormat(item.type) }}</td>
                        <td>{{ item.keyword }}</td>
                        <td class="txt_left">
                            <a :href="item.newsUrl" target="_blank" style="text-decoration:underline;color:rgba(51, 126, 169, 1)">
                                {{ item.subject }}
                            </a>
                        </td>
                        <td class="txt_left">{{ timeFormat(item.createDt) }}</td>
                    </tr>
                </tbody>
            </table>
            <page-component :pageData="page"
                @onPage="pageClick" 
            />
        </section>
    </div>
</section>
</template>

<script>
import pageComponent from "@/components/board/page";
import axios from "@/utils/CSNetwork.js";

export default {
    components: {
        pageComponent
    },

    data() {
        return {
            page:{
                page  : 0,
                total : 0,
                size : 10,
            },
            totalPages: 0,
            newsList : []
        }
    },

    mounted() {
        this.reqNewsList();
    },

    methods: {
        reqNewsList() {
            axios.reqNewsList(this.page)
            .then((res) => {
                this.newsList = res.body.content;
                this.page.total = res.body.totalElements;
                this.totalPages = res.body.totalPages;
            });
        },

        pageClick(page) {
            this.page.page = page;
            this.reqNewsList();
        },

        newsTypeFormat(type) {
            if(!type) return;

            var newsTypeDesc =  '';

            if(type === 'Naver') {
               newsTypeDesc  = '네이버'   
            } else if(type === 'Daum') {
                newsTypeDesc = '다음'
            }

            return newsTypeDesc;
        },

        timeFormat(time) {
            if(!time) return;

            var today = new Date(time);
            var date = today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            return date + " " + time;
        }

    }
}
</script>