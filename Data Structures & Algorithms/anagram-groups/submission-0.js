class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map= new Map();
       for(let str of strs){
        let sortedArr=str.split('').sort().join('')
        if(!map.has(sortedArr)){
            map.set(sortedArr,[])
        }
        map.get(sortedArr).push(str)
        
       }

       return Array.from(map.values())
    }

        
}
