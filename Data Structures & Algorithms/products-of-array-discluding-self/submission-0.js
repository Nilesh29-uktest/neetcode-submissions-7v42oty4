class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let mult=1;
       let op=[]
    for(let i=0;i<nums.length;i++){
            mult= nums.reduce((acc,num,index)=>{
                if(index!==i){
                     acc=acc*num;
                }
                return acc
            },1)
            op.push(mult)

    }
    return op
    }
}
