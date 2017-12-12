# 2017.12.12

- 一开始想找一些 Array 独有的特性去做判断，比如：数组的索引、length，结果发现都不能准确的判断。
- 最后发现用 Object.prototype.toString.call(arg) === [object Array] 可以判断是不是数组，但是总感觉有点不对劲，不能相信居然这么简单。
