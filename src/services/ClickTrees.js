import { ADD_REQUEST_BODY_API, ADD_REQUEST_FILE_API, EDIT_REQUEST_BODY_API, EDIT_REQUEST_FILE_API, GET_REQUEST_API, GET_REQUEST_BODY_API } from "./APIRequests";

export function getClickTrees(){
    return GET_REQUEST_BODY_API('ImageAnswers/GetClickTrees', {}, true, true)
}


export function addTreeRequest(b){
    return ADD_REQUEST_BODY_API('ImageAnswers/AddTree', b, true, true)
}

export function editTreeRequest(b){
    return EDIT_REQUEST_BODY_API('ImageAnswers/EditTree', b, true, true)
}

export function removeTreeRequest(b){
    return EDIT_REQUEST_BODY_API('ImageAnswers/DeleteTree', b, true, true)
}

export function addImageTreeRequest(b){
    return ADD_REQUEST_FILE_API('ImageAnswers/AddAnswerImageOneStep', b, true, true)
}

export function editNodeRequest(b){
    return EDIT_REQUEST_FILE_API('ImageAnswers/EditAnswerImageOneStep', b, true, true)
}

export function removeNodeRequest(b){
    return EDIT_REQUEST_BODY_API('ImageAnswers/DeleteNode', b, true, true)
}
