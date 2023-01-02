import request from '@/service/request';
export function getAllCity() {
    return request({ url: '/api/city/all', method: 'get' });
}
