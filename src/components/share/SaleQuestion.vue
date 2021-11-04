<template>
  <div class="salequestion">
      <div v-for="(item,key) in items" :key="item.id">
            <div
      class="accordion md-accordion"
      id="accordionEx"
      role="tablist"
      aria-multiselectable="true"
    >
      <div class="card my-3 shadow-sm">
        <div
          class="card-header border-0 bg-white py-4"
          role="tab"
          @click="toggleExpansion(key)"
        >
          <div class="d-flex justify-content-between pointer">
            <div>
              <p class="mb-0 text-color-1 title DMSerifRegular questioncontent" :class="{ expanded: isExpanded(key) }">{{item.title}}</p>
            </div>
            <div class="accordicon">
              <p class="h2">
                <b-icon
                v-show="!isExpanded(key)"
              icon="plus"
              variant="#434242"
            ></b-icon>
              <b-icon
                v-show="isExpanded(key)"
              icon="dash"
              variant="warning"
            ></b-icon>
               </p>
            </div>
          </div>
        </div>

        <div v-show="isExpanded(key)">
          <div class="card-body">
                    <p class="text-color-2 Roboto-Regular answercontent"> {{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
      </div>
  
  </div>
</template>
<script>

export default {
  props:["items"],
  data() {
    return {
      expandedGroup: [],
    };
  },
  components:{
    
  },
  methods: {
    toggleExpansion(key) {
      if (this.isExpanded(key)) {
        this.expandedGroup.splice(this.expandedGroup.indexOf(key), 1);
      } else {
        this.expandedGroup.push(key);
      }
    },
    isExpanded(key) {
      return this.expandedGroup.indexOf(key) !== -1;
    },
  },
};
</script>
<style scoped>
.salequestion .accordion .card{
    border: 1px  solid #7070708a;
}
.salequestion .accordion .card:first-child .title{
    color: #FFB600;
}
.expanded{
    color: #FFB600 !important;
}
.questioncontent{
font-size: 22px;
}
.answercontent{
font-size: 18px;
}

</style>