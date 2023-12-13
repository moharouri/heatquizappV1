import { ADD_REQUEST_BODY_API, EDIT_REQUEST_BODY_API, GET_REQUEST_API, GET_REQUEST_BODY_API } from "./APIRequests";

export function getTopics(){
    return GET_REQUEST_BODY_API('Topic/GetAllTopics', {}, true, true)
}

export function editTopicName(b){
    return EDIT_REQUEST_BODY_API('Topic/EditTopic', b, true, true)
}

export function editSubtopicName(b){
    return EDIT_REQUEST_BODY_API('Topic/EditSubtopic', b, true, true)
}

export function addTopicRequest(b){
    return ADD_REQUEST_BODY_API('Topic/AddTopic', b, true, true)
}

export function removeTopicRequest(b){
    return EDIT_REQUEST_BODY_API('Topic/DeleteTopic', b, true, true)
}

export function addSubtopicRequest(b){
    return ADD_REQUEST_BODY_API('Topic/AddSubtopic', b, true, true)
}

export function removeSubtopicRequest(b){
    return EDIT_REQUEST_BODY_API('Topic/DeleteSubtopic', b, true, true)
}