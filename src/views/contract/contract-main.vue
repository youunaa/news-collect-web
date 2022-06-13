<template>
    <section id="container">
    <div id="content" class="calculate_client">
        <div class="cont_header">
            <h2 class="page_title">수집 데이터 관리</h2>
            <span class="page_path">HOME &gt; 수집 데이터 관리</span>
        </div>
        <section class="cont_inner">
            <h4 class="cont_title type2">키워드 현황</h4>
            <input type="text" name="" id="" style="border:1px solid gray;margin-top:10px;margin-bottom:10px;width:300px">
            <button class="btn" style="height: 30px;margin-left: 10px;padding-left: 10px;padding-right: 10px;"><i></i>키워드 등록</button>
            <table>
                <colgroup>
                    <col>
                    <col style="width:230px;">
                    <col style="width:150px;">
                    <col style="width:150px;">
                </colgroup>
                <thead>
                    <tr>
                        <th>키워드</th>
                        <th>사용여부</th>
                        <th>삭제</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>코로나</td>
                        <td>
                            <input type="checkbox" :checked='true'>
                        </td>
                        <td>
                            <button class="bgClr_red">삭제</button>
                        </td>
                        <td>2020-06-10</td>
                    </tr>
                    <tr>
                        <td>코로나</td>
                        <td>
                            <input type="checkbox" :checked='true'>
                        </td>
                        <td>
                            <button class="bgClr_red">삭제</button>
                        </td>
                        <td>2020-06-10</td>
                    </tr>
                </tbody>
            </table>

            <h4 class="cont_title type2">뉴스 사이트 목록</h4>
            <table>
                <colgroup>
                    <col style="width:150px;">
                    <col>
                    <col style="width:150px;">
                    <col style="width:150px;">
                    <col style="width:150px;">
                </colgroup>
                <thead>
                    <tr>
                        <th>사이트</th>
                        <th>사이트 URL</th>
                        <th>사용여부</th>
                        <th>삭제</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>네이버</td>
                        <td>https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=</td>
                        <td>
                            <input type="checkbox" :checked='true'>
                        </td>
                        <td>
                            <button class="bgClr_red">삭제</button>
                        </td>
                        <td>2020-06-10</td>
                    </tr>
                    <tr>
                        <td>다음</td>
                        <td>https://search.daum.net/search?w=news&nil_search=btn&DA=NTB&enc=utf8&cluster=y&cluster_page=1&q=</td>
                        <td>
                            <input type="checkbox" :checked='true'>
                        </td>
                        <td>
                            <button class="bgClr_red">삭제</button>
                        </td>
                        <td>2020-06-10</td>
                    </tr>
                </tbody>
            </table>
            <page-component :pageData="pageContainer" @onPage="pageClick"></page-component>
        </section>
    </div>
</section>
</template>

<script>
import pageComponent from "@/components/board/page"
const $ = window.$

export default {
    components: {
        pageComponent
    },
    data() {
        return {
            pageContainer:{
                page:1,
                total:1,
                count:20
            }
        }
    },
    mounted() {
        $(function () {
            $('#dateFrom, #dateTo').datepicker({
                dateFormat: 'yy-mm-dd'
            });
        })
    },
    methods: {
        addClick() {
            this.$router.push({name: 'calculatedetail'})
        }
    }
}
</script>