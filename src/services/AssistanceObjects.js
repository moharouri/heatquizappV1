import {ADD_REQUEST_FILE_API, EDIT_REQUEST_BODY_API, EDIT_REQUEST_FILE_API, GET_REQUEST_API, GET_REQUEST_BODY_API } from "./APIRequests";

export function getAllMapClickImageListsRequest(){
    return GET_REQUEST_BODY_API('CourseMapElementImages/GetAllImages', {}, true, true)
}

export function addMapClickImageListRequest(b){
    return ADD_REQUEST_FILE_API('CourseMapElementImages/AddList', b, true, true)
}

export function deleteMapClickImageListRequest(b){
    return EDIT_REQUEST_BODY_API('CourseMapElementImages/DeleteList', b, true, true)
}

export function editMapClickImageListNameRequest(b){
    return EDIT_REQUEST_FILE_API('CourseMapElementImages/EditCode', b, true, true)
}

export function editMapClickImageListImageRequest(b){
    return EDIT_REQUEST_FILE_API('CourseMapElementImages/EditImage', b, true, true)
}

export function getAllQuestionInformationRequest(){
    return GET_REQUEST_BODY_API('Information/GetAllInformation', {}, true, true)
}

export function getAllQuestionsAssignedInformationRequest(b){
    return GET_REQUEST_BODY_API('Information/SearchInformationQuestions', b, true, true)
}

export function assignQuestionsInformationRequest(b){
    return ADD_REQUEST_FILE_API('Information/AssignQuestions', b, true, true)
}

export function unassignQuestionsInformationRequest(b){
    return ADD_REQUEST_FILE_API('Information/DeassignQuestions', b, true)
}

export function addQuestionInformationRequest(b){
    return ADD_REQUEST_FILE_API('Information/AddInfo', b, true, true)
}

export function editQuestionInformationNameRequest(b){
    return EDIT_REQUEST_FILE_API('Information/EditCode', b, true, true)
}

export function editQuestionInformationLatexRequest(b){
    return EDIT_REQUEST_FILE_API('Information/EditLatex', b, true, true)
}

export function editQuestionInformationDocumentRequest(b){
    return EDIT_REQUEST_FILE_API('Information/EditPDF', b, true, true)
}

export function removeQuestionInformationDocumentRequest(b){
    return EDIT_REQUEST_FILE_API('Information/RemovePDF', b, true, true)
}

export function removeQuestionInformationRequest(b){
    return EDIT_REQUEST_BODY_API('Information/DeleteInfo', b, true, true)
}






