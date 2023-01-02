import request from '@/service/request';
export function getAllUser() {
    return request({ url: '/api/city/all', method: 'get' });
}
