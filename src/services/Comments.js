import { ADD_REQUEST_BODY_API, ADD_REQUEST_FILE_API, GET_REQUEST_BODY_API } from "./APIRequests";


export function getQuestionCommentsQuery(q){
    return GET_REQUEST_BODY_API('QuestionComments/GetQuestionComments', q, true, true)
}

export function searchUserCommentsQuery(b){
    return GET_REQUEST_BODY_API('QuestionComments/GetComments', b, true, true)
}

export function getUnreadCommentsQuery(){
    return GET_REQUEST_BODY_API('QuestionComments/GetUnseenComments', {}, true, true)
}

export function addQuestionCommentRequest(b){
    return ADD_REQUEST_FILE_API('QuestionComments/AddQuestionComment', b, true, true)
}

export function registerCommentViewRequest(v){
    return ADD_REQUEST_BODY_API('QuestionComments/RegisterSeenNotification', v, true, true)
}