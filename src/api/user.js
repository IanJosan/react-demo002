import request from '../utils/request'

export const login = (mobile, code) => {
  return request({
    method: 'post',
    url: '/authorizations',
    data: {
      mobile,
      code,
    },
  })
}
