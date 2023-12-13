import { ADD_REQUEST_FILE_API, GET_REQUEST_API, GET_REQUEST_BODY_API } from "./APIRequests";

export function getStudentFeedbackQuery(query){
    return GET_REQUEST_BODY_API('Feedback/GetFeedback', query, true, true)
}

export function getQuestionFeedbackQuery(q){
    return GET_REQUEST_BODY_API('Feedback/GetQuestionFeedback', q, true, true)
}

export function addQuestionFeedbackRequest(data){
    return ADD_REQUEST_FILE_API('Students/AddStudentFeedback', data)
}
