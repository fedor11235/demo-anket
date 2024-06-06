<template>
  <div>
    <div class="question">
      <div ref="header" class="header-scroll">
        <div ref="headerContainer" class="header">
          <div class="table__cell-empty"></div>
          <div
            v-for="cell of table.col"
            :key="cell"
            ref="tableCell"
            class="table__cell"
          ></div>
        </div>
      </div>
      <div class="body">
        <div ref="headerLeft" class="header-left-scroll">
          <div class="header-left">
            <div
              v-for="cell of table.row"
              :key="cell"
              class="table__cell"
              style="height: 198px; width: 150px"
            ></div>
          </div>
        </div>
        <div class="scroll" ref="container">
          <div ref="table">
            <div v-for="row of table.row" :key="row" class="test">
              <div
                class="table__cell"
                v-for="cell of table.col"
                :key="cell"
                ref="tableCell"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="default-btn default-btn--success mt-5"
        @click="handlerFinish"
      >
        Готово
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelect: false,
      table: {
        col: 5,
        row: 3,
      },
    };
  },
  methods: {
    handlerFinish() {
      if (!this.isSelect) {
        this.$store.commit("increment");
      }
      this.isSelect = true;
    },
    setCellWidth() {
      const windowWidth = window.innerWidth;

      if (windowWidth < 767.98) {
        this.$refs.container.style.width = `${windowWidth - 150 - 80}px`;
        this.$refs.header.style.width = `${windowWidth - 80}px`;
      } else if (windowWidth < 1200) {
        this.$refs.container.style.width = `${windowWidth - 150 - 240}px`;
        this.$refs.header.style.width = `${windowWidth - 240}px`;
      } else {
        this.$refs.container.style.width = "";
        this.$refs.header.style.width = "";
      }
      const minWidth = this.$refs.container.clientWidth / this.table.col;
      if (minWidth < 150) {
        for (let index = 0; index < this.$refs.tableCell.length; index++) {
          this.$refs.tableCell[index].style.width = "150px";
        }
        const tableWidth = this.table.col * 150;
        this.$refs.table.style.width = `${tableWidth}px`;
        this.$refs.headerContainer.style.width = `${tableWidth + 150}px`;
      } else {
        for (let index = 0; index < this.$refs.tableCell.length; index++) {
          this.$refs.tableCell[index].style.width = `${minWidth}px`;
        }
        this.$refs.table.style.width = "";
        this.$refs.headerContainer.style.width = "";
      }
      for (let index = 0; index < this.$refs.tableCell.length; index++) {
        this.$refs.tableCell[index].style.height = "198px";
      }
    },
    handlerScroll() {
      const scrollTop = this.$refs.container.scrollTop;
      const scrollLeft = this.$refs.container.scrollLeft;
      this.$refs.header.scrollTo(scrollLeft, 0);
      this.$refs.headerLeft.scrollTo(0, scrollTop);
    },
  },
  mounted() {
    this.setCellWidth();
    if (this.table.row > 2) {
      this.$refs.headerContainer.style.marginRight = "16px";
    }
    window.addEventListener("resize", this.setCellWidth);
    this.$refs.container.addEventListener("scroll", this.handlerScroll);
  },
};
</script>

<style scoped>
.header-scroll {
  overflow: hidden;
}

.header-left {
  margin-bottom: 16px;
}

.header-left-scroll {
  overflow: hidden;
  height: 396px;
}

.header {
  display: flex;
  /* margin-right: 16px; */
}
.body {
  display: flex;
}
.test {
  display: flex;
  flex-wrap: nowrap;
}

.table__cell {
  border-radius: 12px;
  border: 1px #dddddd solid;
}

.table__cell-empty {
  position: sticky;
  left: 0;
  background-color: #fdfdfd;
  width: 150px;
  height: 198px;
}

.scroll {
  overflow: auto;
  height: 396px;
  width: calc(100% - 150px);
}
</style>
