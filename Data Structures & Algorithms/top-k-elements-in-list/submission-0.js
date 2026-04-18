class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
            return Object.entries(
        nums
            .reduce((acc, curr) => {
                acc[curr] = (acc[curr] ?? 0) + 1
                return acc;
            }, {})
    )
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([target]) => +target)
    }
}
