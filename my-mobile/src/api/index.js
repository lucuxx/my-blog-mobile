import instance from '@/utils/http.js'

// export async function getuers() {
//   try {
//     const res = await instance.get('/api/users')
//     return res
//   } catch (error) {
//     return error
//   }
// }

// 获取文章
export async function getArticle() {
  try {
    const res = await instance.get('/api/article/getAllArticle')
    return res
  } catch (error) {
    return error
  }
}

// 获取分类所有文章
export async function getCurrentClassArticle(params) {
  try {
    const res = await instance.get('/api/article/getArticle', params)
    return res
  } catch (error) {
    return error
  }
}

// 获取指定文章详情
export async function getArticleDetails(params) {
  try {
    const res = await instance.get('/api/article/details', params)
    return res
  } catch (error) {
    return error
  }
}

//获取指定标签的文章
export async function getTagArticle(params) {
  try {
    const res = await instance.get('/api/article/getTagArticle', params)
    return res
  } catch (error) {
    return error
  }
}

// 更新文章
export async function updateArticle(params) {
  try {
    const res = await instance.post('/api/article/updateArticle', params)
    return res
  } catch (error) {
    return error
  }
}

// 分类
export async function getArticleClass() {
  try {
    const res = await instance.get('/api/class/getArticleClass')
    return res
  } catch (error) {
    return error
  }
}

const utilUrl = 'comment'

// 获取留言
export async function getComment() {
  try {
    const res = await instance.get('/api/comment/getComment')
    return res
  } catch (error) {
    return error
  }
}

// 发表留言
export async function addComment(params) {
  try {
    const res = await instance.post('/api/comment/addComment', params)
    return res
  } catch (error) {
    return error
  }
}

// 更新留言
export async function updateComment(params) {
  try {
    const res = await instance.post('/api/comment/updateComment', params)
    return res
  } catch (error) {
    return error
  }
}

// 获取文章标签
export async function getArticleTags() {
  try {
    const res = await instance.get('/api/tags/getArticleTags')
    return res
  } catch (error) {
    return error
  }
}

// -----------------------------------------------------------------------
