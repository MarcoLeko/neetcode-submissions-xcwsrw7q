class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
            const result = new Map();

    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort().join('');
        if(!result.has(key)) result.set(key, []);
        result.get(key).push(strs[i]);
    }   

    return Array.from(result.values());
    }
}
