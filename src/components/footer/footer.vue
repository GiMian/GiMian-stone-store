<template>
  <div class="footer">
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
.footer {
  width: 100%;
  height: 20px;
  background-color: aquamarine;
}
.el-row {
  margin-bottom: 0;
}
</style>