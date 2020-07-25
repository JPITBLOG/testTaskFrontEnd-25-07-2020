import baseService from './baseService';

export function getPageInfo() {
    return baseService.get(`api/student/getPagination`);
}