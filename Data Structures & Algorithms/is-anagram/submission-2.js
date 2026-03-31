class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;
        let map1= new Map();
        for(let str of s){           
                map1.set(str,(map1.get(str)||0)+1);          
        }
        for(let str of t){
             if(!map1.has(str)) return  false
          if(map1.has(str)){
            map1.set(str,map1.get(str)-1)
          }
          if(map1.get(str)==0) map1.delete(str)
       }
        return map1.size===0;

        
    }
}
