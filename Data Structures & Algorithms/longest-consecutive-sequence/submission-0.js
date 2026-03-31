class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         if(nums.length===0) return 0
        nums=nums.sort();
        let numset= new Set(nums)
        let longest=0
        for(let num of numset){
            if(!numset.has(num-1)){
                let current =num
                let streak=1
                while(numset.has(current+1)){
                    current++
                    streak++
                }
             longest=Math.max(longest,streak)
            }
        }
        return longest;  
    }
}
