<template>
    <div class="star" :class="starSize">
        <span v-for="(itemClass,key) in itemClasses" :class="itemClass" class="star-item"></span>
    </div>
</template>
<script>
    const LENGTH = 5;
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';
    export default{
        props:{
            size:{ //尺寸，24,36,48
                type: Number
            },
            score:{
                type: Number
            }
        },
        computed:{
            starSize(){
                return 'star-'+ this.size;
            },
            itemClasses(){
                let result = [];
                let score = Math.floor(this.score)/2; //将数值调整为整数及.5的形式，例：4.3 => 4；4.6 => 4.5
                let hasDecimal = score %1 !==0;//true or false
                let integer = Math.floor(score);
                for(let i =0;i<integer;i++){
                    result.push(CLS_ON);
                }
                if(hasDecimal){
                    result.push(CLS_HALF);
                }
                while(result.length<LENGTH){
                    result.push(CLS_OFF);
                }
                return result;
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/mixin.styl";
.star
    font-size: 0
    .star-item
        display: inline-block
        background-repeat: no-repeat
    &.star-48
        .star-item
            width: 20px
            height: 20px
            margin-right: 10px
            background-size: 20px 20px
            &.last-child
                margin-right: 0
            &.on
                bg-image('star48_on')
            &.half
                bg-image('star48_half')
             &.off
                bg-image('star48_off')
    &.star-36
        .star-item
            width: 15px
            height: 15px
            margin-right: 6px
            background-size: 15px 15px
            &.last-child
                margin-right: 0
            &.on
                bg-image('star36_on')
            &.half
                bg-image('star36_half')
            &.off
                bg-image('star36_off')

    &.star-24
        .star-item
            width: 10px
            height: 10px
            margin-right: 3px
            background-size: 10px 10px
            &.last-child
                margin-right: 0
            &.on
                bg-image('star24_on')
            &.half
                bg-image('star24_half')
            &.off
                bg-image('star24_off')
</style>