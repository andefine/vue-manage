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
        <div style="width:400px;">
          <el-form label-width="100px">
            <el-form-item label="账户名">
              <el-input v-model="username" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="password" placeholder="" type="password"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-button type="" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
import { mapActions } from 'vuex'
import http from '../utils/http'

export default {
  data () {
    return {
      username: '',
      password: '',
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
    this.login()
  },
  methods: {
    ...mapActions(['test']),
    getFullPath (path) {
      console.log(this)
    },
    login () {
      // const username = this.username
      // const password = this.password
      const username = 'linglingke'
      const password = 'Ling@2018'
      return http.request({
        // withCredentials: true,
        url: 'https://pay.zijimedia.cc/admin/login.do',
        method: 'POST',
        withCredentials: true,
        data: {
          username: username,
          password: password
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'
        },
        transformRequest: [function (data) {
          let ret = ''
          for (let attr in data) {
            ret += `${attr}=${data[attr]}&`
          }
          ret = ret.slice(0, ret.length - 1)
          return ret
        }]
      }).then(() => {
        return http.request({
          url: 'https://pay.zijimedia.cc/admin/member.json'
        })
      }).catch(() => {
        return http.request({
          url: 'https://pay.zijimedia.cc/admin/member.json',
          withCredentials: true
        })
      })
    },
    test () {
      http.request({
        url: 'https://pay.zijimedia.cc/box/by-device/T0009.json',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })

      http.request({
        url: 'https://pay.zijimedia.cc/box/T0009/status.json',
        method: 'post'
      })
    }
  }
}
</script>

<style>
.el-aside {
  width: 50px;
}
</style>
