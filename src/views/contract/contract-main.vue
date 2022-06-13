<template>
    <section id="container">
        <div id="content" class="calculate_client">
            <div class="cont_header">
            <h2 class="page_title">수집 데이터 관리</h2>
            <span class="page_path">HOME &gt; 수집 데이터 관리</span>
        </div>

        <section class="cont_inner">
            <h4 class="cont_title type2">키워드 설정</h4>
            <div class="chip-container">
                <div class="chip" v-for="(chip, i) of chips" :key="chip.label">
                {{ chip }}
                <i class="material-icons" @click="deleteChip(i)">x</i>
                </div>
                <input
                v-model="currentInput"
                @keypress.enter="saveChip"
                @keydown.delete="backspaceDelete"
                />
            </div>
            <button
                @click="kewordSaveClick"
                style="margin-top: 10px; padding: 2px 8px"
            >
                키워드 등록
            </button>

            <h4 class="cont_title type2">뉴스 사이트 설정</h4>
            <ul>
                <li><input type="radio" name="gate_num" checked="true" value="n">
                    <label>네이버</label>
                </li>
                <li>
                    <input type="radio" name="gate_num" value="y">
                    <label>다음</label>
                </li>
            </ul>
            <button
                @click="siteSaveClick"
                style="margin-top: 10px; padding: 2px 8px"
            >
                저장
            </button>
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
            chips: [],
            sites: [],
            currentInput: "",
        };
    },
    
    created() {
        this.init();
    },

    methods: {
        init() {
            // 키워드 목록 요청
            this.reqKewordList();
            // 사이트 목록 요청
            this.reqSiteList();
        },

        saveChip() {
            const { chips, currentInput, set } = this;
            ((set && chips.indexOf(currentInput) === -1) || !set) && chips.push(currentInput);
            this.currentInput = "";
        },

        deleteChip(index) {
            this.chips.splice(index, 1);
        },

        backspaceDelete({ which }) {
            which == 8 && this.currentInput === "" && this.chips.splice(this.chips.length - 1);
        },

        // 키워드 목록 요청
        reqKewordList() {
            axios.reqKewordList(this.chips).then((res) => {
                this.chips = res.body;
            });
        },
        
        // 사이트 목록 요청
        reqSiteList() {
            axios.reqSiteList(this.chips).then((res) => {
                this.sites = res.body;
            });
        },
        
        // 키워드 등록처리
        kewordSaveClick() {
            axios.reqKewordRegist(this.chips).then((res) => {
                alert("등록되었습니다.");
                this.reqKewordList();
            });
        },

        // 사이트 저장클릭
        siteSaveClick() {
            axios.reqSiteRegist(this.chips).then((res) => {
                alert("저장되었습니다.");
                this.reqSiteList();
            });
        },
        
    },
};
</script>

<style>
.chip-container {
    width: 400px;
    border: 1px solid #ccc;
    min-height: 34px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
}
.chip {
    margin: 4px;
    background: #e0e0e0;
    padding: 0px 4px;
    border: 1px solid #ccc;
    border-radius: 3px;
    display: flex;
    align-items: center;
}
i {
    cursor: pointer;
    opacity: 0.56;
    margin-left: 8px;
}
input {
    flex: 1 1 auto;
    width: 30px;
    border: none;
    outline: none;
    padding: 4px;
}
</style>
