// 静态
// export default {
//   paths: () => [
//     { params: { pkg: 'foo', version: '1.0.0' } },
//     { params: { pkg: 'foo', version: '2.0.0' } },
//     { params: { pkg: 'bar', version: '1.0.0' } },
//     { params: { pkg: 'bar', version: '2.0.0' } }
//   ]
// }

// 服务端接口返回
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
