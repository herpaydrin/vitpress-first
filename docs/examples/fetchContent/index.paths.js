export default {
  async paths() {
    const { data } = await (await fetch('https://www.fastmock.site/mock/fa83415cfb92ea4ae7c0f86afc97b6ab/paydrin/contents')).json()
    return data.map((content) => {
      return {
        params: {},
        content
      }
    })
  }
}
