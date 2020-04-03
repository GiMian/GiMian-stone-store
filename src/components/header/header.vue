<template>
  <div class="header">
    <el-row>
      <el-col :span="3">
        <a href="#">
          <div>
            <font-awesome-icon icon="store-alt" />
            <b>Dan Thuy</b>
          </div>
        </a>
      </el-col>
      <el-col :span="2" :offset="13">
        <router-link to="/">Gioi thieu</router-link>
      </el-col>
      <el-col :span="2">
        <router-link to="/about">About</router-link>
      </el-col>
      <el-col :span="2">
        <a href="#">Lien he</a>
      </el-col>
      <el-col :span="2">
        <font-awesome-icon icon="search" />
      </el-col>
    </el-row>
  </div>
</template>
<style>
a {
  text-decoration: none;
}
.header {
  left: 20px;
  right: 20px;
  position: fixed;
  padding: 10px 20px;
  background-color: aquamarine;
  z-index: 99;
}
</style>