let markButton = {
    template: '<button @click="recalculateRatio(1)" type="button" class="btn btn-primary">1</button>',
    methods: {
        recalculateRatio(value) {
            this.markCount++;
            this.markSum += value;

            if (this.markCount !== 0)
            //this.ratio = Math.round(this.markSum / this.markCount);
                this.ratio = this.markSum / this.markCount;
        }
    }
};

const app = new Vue({
    el: '#app',
    components: {
        markButton
    },
    data: {
        markSum: 0,
        markCount: 0,
        ratio: 0
    }
});

