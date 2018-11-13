<template>
  <el-container class="home">

    <el-aside width="200px">
      <el-menu default-active="" router>
        <el-submenu index="">
          <template slot="title">销售管理</template>
          <el-menu-item index="container">货柜管理</el-menu-item>
        </el-submenu>
        <el-menu-item index=""></el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>头部</el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      asideList: [
        {
          title: '首页'
        },
        {
          title: '销售管理',
          children: [
            {
              title: '货柜管理'
            },
            {
              title: '商品管理'
            },
            {
              title: '订单管理'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.getFullPath()
    this.test()
  },
  methods: {
    ...mapActions(['test']),
    getFullPath (path) {
      console.log(this)
    }
  }
}
</script>

<style>
.el-aside {
  width: 50px;
}
</style>
