<template>
    <section id="container">
    <div id="content" class="place">
        <div class="cont_header">
            <h2 class="page_title">수집 결과 관리</h2>
            <span class="page_path">HOME &gt; 수집 결과 관리</span>
        </div>
        <div class="srch_box" v-on:keyup.enter="searchClick">
            <ul class="srch_option_list">
                <li>
                    <strong>뉴스 구분</strong>
                    <select v-model="search.content_idx">
                        <option value="">전체</option>
                        <option value="true">네이버</option>
                        <option value="false">다음</option>
                    </select>
                </li>
                <li>
                    <strong>키워드</strong>
                    <select v-model="search.category">
                        <option value="">전체</option>
                        <option value="tourism">코로나</option>
                        <option value="accommodation">숙소</option>
                        <option value="restaurant">맛집</option>
                    </select>
                </li>
                <li>
                    <strong>서비스 상태</strong>
                    <select v-model="search.op_yn">
                        <option value="">전체</option>
                        <option value="true">서비스 중</option>
                        <option value="false">서비스 중지</option>
                    </select>
                </li>
                <li class="colspan">
                    <strong>검색어</strong>
                    <input type="text" v-model="search.spot_name">
                </li>
            </ul>
            <button class="btn srch_btn" @click="searchClick"><i></i>검색</button>
        </div>
        <section class="cont_inner">
            <h3 class="cont_title">추천장소 목록</h3>
            <table>
                <colgroup>
                    <col style="width: 60px;">
                    <col style="width: 100px;">
                    <col style="width: 100px;">
                    <col>
                    <col>
                    <col style="width:100px;">
                    <col style="width:100px;">
                </colgroup>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>뉴스 구분</th>
                        <th>키워드</th>
                        <th>뉴스 제목</th>
                        <th>뉴스 URL</th>
                        <th>등록일시</th>
                        <th>업데이트일시</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(list,item) in spotList" :key="item" @click="trClick(list.recomm_spot_id)">
                        <td>{{page.total - ((item + page.pageIdx) - 1)}}</td>
                        <td v-if="list.content_idx === undefined">직접 등록</td>
                        <td v-else>인포디오</td>
                        <td>{{getCategory(list.category)}}</td>
                        <td class="txt_left">{{list.spot_name_kor}}</td>
                        <td>한국어</td>
                        <td v-if="list.lang_kor === true"><span class="lang_true"></span></td>
                        <td v-else><span class="lang_false"></span></td>
                        <td v-if="list.lang_eng === true"><span class="lang_true"></span></td>
                        <td v-else><span class="lang_false"></span></td>
                        <td v-if="list.lang_jpn === true"><span class="lang_true"></span></td>
                        <td v-else><span class="lang_false"></span></td>
                        <td v-if="list.lang_chn === true"><span class="lang_true"></span></td>
                        <td v-else><span class="lang_false"></span></td>
                        <td>{{list.review_tot_count}}</td>
                        <td>{{list.admin_name}}</td>
                        <td>{{dateUtil.parser(list.create_dt)}}</td>
                        <td v-if="list.op_yn === true" class="clr_blue">서비스중</td>
                        <td v-else class="clr_gray">서비스중지</td>
                    </tr>
                    <tr>
                        <td colspan="7">검색 결과가 없습니다.</td>
                    </tr>
                </tbody>
            </table>
            <!-- 엑셀용 테이블 -->
            <table id="table" style="display : none">
                <colgroup>
                    <col style="width: 60px;">
                    <col style="width: 100px;">
                    <col style="width: 100px;">
                    <col>
                    <col style="width:100px;">
                    <col style="width:80px;">
                    <col style="width:80px;">
                    <col style="width:80px;">
                    <col style="width:80px;">
                    <col style="width:50px;">
                    <col style="width:100px;">
                    <col style="width:180px;">
                    <col style="width:100px;">
                </colgroup>
                <thead>
                    <tr>
                        <th rowspan="2">No</th>
                        <th rowspan="2">데이터 구분</th>
                        <th rowspan="2">카테고리</th>
                        <th rowspan="2">추천장소명</th>
                        <th rowspan="2">원본</th>
                        <th colspan="4">등록언어</th>
                        <th rowspan="2">리뷰수</th>
                        <th rowspan="2">등록자</th>
                        <th rowspan="2">등록일시</th>
                        <th rowspan="2">서비스 상태</th>
                    </tr>
                    <tr>
                        <th>한국어</th>
                        <th>영어</th>
                        <th>일본어</th>
                        <th>중국어</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(list,item) in excelList" :key="item">
                        <td>{{page.total - ((item + page.pageIdx) - 1)}}</td>
                        <td v-if="list.content_idx === undefined">직접 등록</td>
                        <td v-else>인포디오</td>
                        <td>{{list.category}}</td>
                        <td class="txt_left">{{list.spot_name_kor}}</td>
                        <td>한국어</td>
                        <td v-if="list.lang_kor === true">O</td>
                        <td v-else><span class="lang_false"></span></td>
                        <td v-if="list.lang_eng === true">O</td>
                        <td v-else><span class="lang_false"></span></td>
                        <td v-if="list.lang_jpn === true">O</td>
                        <td v-else><span class="lang_false"></span></td>
                        <td v-if="list.lang_chn === true">O</td>
                        <td v-else><span class="lang_false"></span></td>
                        <td>{{list.review_tot_count}}</td>
                        <td>{{list.admin_name}}</td>
                        <td>{{dateUtil.parser(list.create_dt)}}</td>
                        <td v-if="list.op_yn === true" class="clr_blue">서비스중</td>
                        <td v-else class="clr_gray">서비스중지</td>
                    </tr>
                </tbody>
                <!-- //엑셀용 테이블 -->
            </table>
        </section>
    </div>
</section>
</template>

<script>
import pageComponent from "@/components/board/page"
import localStorageUtils from "@/utils/localStorage.util.js"
// import businessUtils from "@/utils/BusinessUtils.js"
import CSNetwork from '@/utils/CSNetwork.js'
import dateUtil from "@/utils/date.js"
import XLSX from 'xlsx';
import moment from 'moment';

export default {
    components: {
        pageComponent
    },
    data() {
        return {
            flag: false
            , page:{
                page    : localStorage.getItem('page')
                , total : localStorage.getItem('total')
                , count : 20
            }
            , spotList : []
            , excelList : []
            , search: {
                content_idx : localStorage.getItem('content_idx')
                , category  : localStorage.getItem('category')
                , reg_lng   : localStorage.getItem('reg_lng')
                , op_yn     : localStorage.getItem('op_yn')
                , spot_name : localStorage.getItem('spot_name')
                , page      : localStorage.getItem('page')
                , count     : 20
            }
        }
    },
    created() {
        this.dateUtil = dateUtil;
        this.pageLoadHandler(this.page.page)
    },
    mounted() {
        if(this.search.content_idx === null) {
            this.search.content_idx = ''
        }
        if(this.search.category === null) {
            this.search.category = ''
        }
        if(this.search.reg_lng === null) {
            this.search.reg_lng = ''
        }
        if(this.search.op_yn === null) {
            this.search.op_yn = ''
        }
        if(this.search.spot_name === null) {
            this.search.spot_name = ''
        }
    },
    methods: {
        trClick(recomm_spot_id) {

            this.$router.push({name: 'placedetail', params: { recomm_spot_id : recomm_spot_id}})
        },
        addClient() {
            this.$router.push({name: 'placewrite'})
        },
        searchClick() {
            localStorageUtils.set_data(this.search)
            this.pageLoadHandler(1);
        },
        pageClick(page) {
            this.search.page = page
            localStorageUtils.set_data(this.search)
            this.pageLoadHandler(page)
        },
        pageLoadHandler(page) {
            this.search.page = page
            CSNetwork.request_recom_spot_list(this.search)
            .then(res => {
                this.spotList = res.body
                
                this.page = res.page
                localStorageUtils.set_data(res.page)
                 if(this.spotList[0] === undefined) {
                    this.flag = true
                } else {
                    this.flag = false
                }
            })
        },
        excelDownload: function(type, fn, dl) {
            CSNetwork.request_recom_spot_excel(this.search)
            .then(data => {
                this.excelList = data.body;
                return this.$nextTick()
            })
            .then(() => {
                this.title = '추천장소목록'+moment().format('YYYYMMDDHHMMSS')+'.'
                var elt = document.getElementById('table');
                var wb = XLSX.utils.table_to_book(elt, {sheet:"Sheet JS"});
                return dl ?
                XLSX.write(wb, {bookType:type, bookSST:true, type: 'base64'}) :
                XLSX.writeFile(wb, fn || (this.title + (type || 'xlsx')));
            })
        },
        getCategory(category){
            if(category === "tourism")
                return "관광지"
            else if (category === "accommodation")
                return "숙소"
            else(category === "restaurant")
                return "맛집"
        }
    }
}
</script>