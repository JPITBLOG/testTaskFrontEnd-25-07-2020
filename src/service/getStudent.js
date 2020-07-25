import baseService from './baseService';

export function getStudent(pageIndex) {
    return baseService.get(`api/student/getAllStudent?currentPage=${pageIndex}`);
}
