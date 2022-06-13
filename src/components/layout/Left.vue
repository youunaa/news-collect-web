<template>
    <div class="nav">
        <sidebar-menu 
            class="nav-list"
            style="width:250px;"
            :menu="treeData"
            :relative=true
            :hideToggle=true
            :showOneChild=false
            @item-click="reset()"
        />
        <sidebar-menu class="nav-list" 
            style="width:250px;" 
            :menu="treeData" 
            :relative=false 
            :showOneChild=false 
        />
    </div>
</template>

<script>
export default {
    name: "Left",
    data: () => ({
        message: "Left 컴포넌트",
        treeData: [
            {
                title: "수집 데이터 관리",
                href: "/contract",
            },
            {
                title: "수집 결과 관리",
                href: "/place",
            },
        ]
    }),
    methods: {
        reset: function() {
            localStorage.clear()
        }
    }
}
</script>
