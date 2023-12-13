import { ADD_REQUEST_BODY_API, ADD_REQUEST_FILE_API, EDIT_REQUEST_BODY_API, EDIT_REQUEST_FILE_API, GET_REQUEST_API, GET_REQUEST_BODY_API } from "./APIRequests";

export function getInterpretedTrees(){
    return GET_REQUEST_BODY_API('InterpretedImages/GetInterpretedTrees',{}, true, true)
}

export function getInterpretedValues(){
    return GET_REQUEST_BODY_API('InterpretedImages/GetValues', null, true, true)
}

export function addInterpretedTreeRequest(b){
    return ADD_REQUEST_BODY_API('InterpretedImages/AddTree', b, true, true)
}

export function editInterpretedTreeRequest(b){
    return EDIT_REQUEST_BODY_API('InterpretedImages/EditTree', b, true, true)
}

export function removeInterpretedTreeRequest(b){
    return EDIT_REQUEST_BODY_API('InterpretedImages/DeleteTree', b, true, true)
}

export function addImageRequest(b){
    return ADD_REQUEST_FILE_API('InterpretedImages/AddImageSingleStep', b, true, true)
}

export function removeInterpretedNodeRequest(b){
    return EDIT_REQUEST_BODY_API('InterpretedImages/DeleteNode', b, true, true)
}

export function editImageNameRequest(b){
    return EDIT_REQUEST_FILE_API('InterpretedImages/EditInterpretedImageName', b, true, true)
}

export function editImagePictureRequest(b){
    return EDIT_REQUEST_FILE_API('InterpretedImages/EditInterpretedImagePicture', b, true, true)
}

export function editImageValuesRequest(b){
    return EDIT_REQUEST_FILE_API('InterpretedImages/EditInterpretedImageValues', b, true, true)
}