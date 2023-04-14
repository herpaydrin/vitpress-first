# Markdown 示例

## 表格
**Input**
```md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

**Output**
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Emoji 🎉
**Input**
```
:tada: :100:
```
**Output**
:tada: :100:

[可用 emojis 列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

## 目录
**Input**
```
[[toc]]
```
**Output**
[[toc]]

## 自定义容器
### 默认标题
**Input** 
```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```


**Output**
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### 自定义标题
**Input**
```md
::: danger 禁止
危险区域，请勿继续处理
:::

::: details 点击查看代码
```js
console.log('Hello, VitePress!')
:::
```

**Output**
::: danger 禁止
危险区域，请勿继续处理
:::

::: details 点击查看代码
```js
console.log('Hello, VitePress!')
:::

## 代码块高亮
- 类型后面`{}`内的数字是高亮的行   
- 在代码后面 加 `// [!code hl]`，单独高亮某一行

[类型列表](https://github.com/shikijs/shiki/blob/main/docs/languages.md)    
**Input**
```md
```js{4,6,8-11}
export default {
  data () {
    return {
      name: '小王',
      // 备注年龄是虚岁
      age: 18,
      // 学校是高中
      school: '清华',
      class: '信息一班',
      score: 98,
      rank: 1,
      // 单独高亮
      msg: "我是单独高亮" // [!code  hl]
    }
  }
}
```

**Output**
```js{4,6,8-11}
export default { // Highlighted
  data () {
    return {
      name: '小王',
      // 备注年龄是虚岁
      age: 18,
      // 学校是高中
      school: '清华',
      class: '信息一班',
      score: 98,
      rank: 1,
      // 单独高亮
      msg: "我是单独高亮" // [!code hl]
    }
  }
}
```

## 强制关注代码块
- 在代码块后加`// [!code focus]` 关注当前行
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```
- 在代码块后加`// [!code focus:2]` 关注当前行及后面的 `n` 行
```js

export default {
  data () {
    return { // [!code focus:2]
      msg: 'Focused!'
    }
  }
}
```

## 代码块颜色差异
行尾添加 `// [!code --]` 或 `// [!code ++]` 的注释，标记创建差异，携带颜色（中间只有一个空格）  
行尾添加 `// [!code warning]` 或 `// [!code error]` 注释会相应地为其着色      
**Input**
```md
```js
export default {
  data () {
    return {
      msg: 'Removed', // [!code  --]
      msg: 'Added', // [!code  ++]
      line: 'line',
      ErrorMsg: "Error", // [!code  warning]`
      WarningMsg: "Error",// [!code  error]
    }
  }
}
```
**Output**
```js
export default {
  data () {
    return {
      msg: 'Removed', // [!code --]
      msg: 'Added', // [!code ++]
      line: 'line',
      ErrorMsg: "Error", // [!code warning]`
      WarningMsg: "Error",// [!code error]
    }
  }
}
```

## 代码组
对代码块进行分组

**Input**  

````md
::: code-group
```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}
export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'
const config: UserConfig = {
  // ...
}
export default config
```
:::
````

**Output**  
::: code-group
```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}
export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'
const config: UserConfig = {
  // ...
}
export default config
```
:::