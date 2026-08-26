function isBadVersion(version) {
    const firstBad = 4;
    return version >= firstBad;
}

let solution = function(isBadVersion) {
    return function(n) {
        let l = 1;
        let r = n;

        while (l < r) {
            let m = l + Math.floor((r - l) / 2);

            if (!isBadVersion(m)) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        return r;
    };
};

const firstBadVersion = solution(isBadVersion);

console.log(firstBadVersion(5)); // 4
