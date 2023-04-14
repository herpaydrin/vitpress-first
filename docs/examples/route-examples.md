# 路由示例

## 跳转链接示例
```md
[Getting Started](./getting-started)
[Getting Started](../guide/getting-started)

<!-- Don't -->
[Getting Started](./getting-started.md)
[Getting Started](./getting-started.html)

```
## 路由重写

在 `confog.js` 里配置
```js{6}
rewrites: {
  // 单个处理
  'examples/rewrites/pkg-a/package-a.md': 'pkg-a/index.md',
  'examples/rewrites/pkg-a/package-b.md': 'pkg-b/index.md'
  // 批量处理
  'examples/rewrites/:pkg/(.*).md': ':pkg/(.*).md'
},
```
[跳转到 package-a](../pkg-a/package-a)  
[跳转到 package-ab](../pkg-a/package-ab)  
[跳转到 package-b](../pkg-b/)


## 动态路由
需要两个文件 `packages/[pkg].md` 和 `packages/[pkg].paths.js`
- 项目文件目录
```
.
└─ packages
   ├─ [pkg]-[version].md
   └─ [pkg]-[version].paths.js
```


- 静态配置 `paths.js`
```js
export default {
  paths: () => [
    { params: { pkg: 'foo', version: '1.0.0' }},
    { params: { pkg: 'foo', version: '2.0.0' }},
    { params: { pkg: 'bar', version: '1.0.0' }},
    { params: { pkg: 'bar', version: '2.0.0' }}
  ]
}
```


- 远程请求配置  `paths.js`
```js
export default {
  async paths() {
    const { data } = await (await fetch('https://www.fastmock.site/mock/fa83415cfb92ea4ae7c0f86afc97b6ab/paydrin/package')).json()
    return data.map((pkg) => {
      return {
        params: { ...pkg }
      }
    })
  }
}
```
[跳转到 paydrin-1.2.3](../examples/packages/paydrin-1.2.3.html)