<template>
  <div class="input-wrap u-rela">
    <span>搜索</span>
    <input placeholder="请输入要搜索的内容" type="text" />
    <div class="icon">
      <svg
        t="1608889566770"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="13109"
        width="18"
        height="18"
      >
        <path
          d="M1012.685414 957.5424l-178.8416-178.2784c70.0416-82.6368 112.4352-189.3888 112.2304-305.9712C945.715814 212.48 733.184614 0.5632 472.320614 0.9728S-0.408986 213.9648 0.000614 474.7776s212.9408 472.7296 473.8048 472.32c116.736-0.2048 223.4368-43.0592 305.92-113.5104l178.8416 178.2272a38.3488 38.3488 0 0 0 27.136 11.2128c9.8304 0 19.6096-3.7888 27.0848-11.264 14.9504-15.0016 14.9504-39.2704-0.1024-54.2208zM473.651814 870.4c-218.5728 0.3584-396.6464-177.2032-396.9536-395.7248-0.3584-218.5728 177.2032-396.6464 395.7248-396.9536s396.6464 177.2032 396.9536 395.7248c0.3584 218.5728-177.152 396.6464-395.7248 396.9536z"
          p-id="13110"
          fill="#2b8371"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSearch'
}
</script>

<style lang="less" scoped>
.input-wrap {
  padding: 0 15px;

  input {
    margin-left: 10px;
    padding: 0 40px 0 5px;
    width: 200px;
    height: 28px;
    font-size: 12px;
    text-align: left;
    border-radius: 4px;
    border: none;
  }
  input:focus {
    border: none;
    outline: none;
  }

  .icon {
    position: absolute;
    right: 14px;
    top: 10px;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #ebebeb;

    svg {
      vertical-align: sub;
    }
  }
}
</style>