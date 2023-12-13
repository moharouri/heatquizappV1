import { ADD_REQUEST_FILE_API, EDIT_REQUEST_FILE_API, GET_REQUEST_API, GET_REQUEST_BODY_API } from "./APIRequests";

export function getAllCourses(){
    return GET_REQUEST_BODY_API('Course/GetAllCourses', {}, true)
}

export function getCourse(Id){
    return GET_REQUEST_API('Course/GetCourseById/'+Id, null, false)
}

export function addCourseRequest(b){
    return ADD_REQUEST_FILE_API('Course/AddCourseSingleStep', b, true)
}

export function editCourseRequest(b){
    return EDIT_REQUEST_FILE_API('Course/EditCourseSingleStep', b, true)
}
