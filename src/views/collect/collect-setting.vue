<template>
    <section id="container">
        <div id="content" class="place">
            <div class="cont_header">
                <h2 class="page_title">수집데이터 설정</h2>
                <span class="page_path">HOME &gt; 수집데이터 설정</span>
            </div>
            
            <section class="cont_inner">
                <h3 class="cont_title">키워드 추가</h3>
                
                <span style="margin-right:10px">뉴스</span>
                <select class="news-select" v-model="newsType">
                    <option value="Naver">네이버</option>
                    <option value="Daum">다음</option>
                </select>
                
                <span style="margin-right:10px">키워드</span>
                <input type="text" v-model="keyword" style="border: 1px solid gray; width: 300px;">
                
                <button class="regist" @click="kewordSaveClick">
                    등록
                </button>

                <h3 class="cont_title">키워드 목록</h3>
                <table>
                    <colgroup>
                        <col style="width: 60px;">
                        <col style="width: 100px;">
                        <col>
                        <col style="width: 200px;">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>뉴스 구분</th>
                            <th>키워드</th>
                            <th>등록일시</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in collectDataList" :key="index">
                            <td>{{ item.id }}</td> 
                            <td>{{ newsTypeFormat(item.newsType) }}</td>
                            <td>{{ item.keyword }}</td>
                            <td class="txt_left">{{ timeFormat(item.createDt) }}</td>
                        </tr>
                        <tr v-if="collectDataList.length === 0">
                            <td colspan="4">검색 결과가 없습니다.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </section>
</template>

<script>
import pageComponent from "@/components/board/page";
import axios from "@/utils/CSNetwork.js";

export default {
    components: {
        pageComponent,
    },

    data() {
        return {
            keyword:'',
            newsType:'Naver',
            collectDataList: [],
        };
    },

    created() {
        // 수집데이터 목록 요청
        this.reqKewordList();
    },

    methods: {
        // 수집데이터 목록 요청
        reqKewordList() {
            axios.reqKewordList()
            .then((res) => {
                this.collectDataList = res.body;
            });
        },


        // 키워드 등록처리
        kewordSaveClick() {
            const param = {};
            param.keyword = this.keyword;
            param.newsType = this.newsType;

            axios.reqKewordRegist(param)
            .then((res) => {
                alert("등록되었습니다.");
                this.reqKewordList();
                // 데이터 초기화
                this.keyword = '';
                this.newsType = 'Naver';
            });
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

    },
};
</script>