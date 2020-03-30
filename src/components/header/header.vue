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
        <a href="#">Gioi thieu</a>
      </el-col>
      <el-col :span="2">
        <a href="#">Tin tuc</a>
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
  width: 100%;
  position: fixed;
  padding: 10px 0 10px 0;
  background-color: aquamarine;
}
.el-row {
  margin-bottom: 0;
}
</style>