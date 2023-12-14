import { ADD_REQUEST_BODY_API, EDIT_REQUEST_BODY_API, EDIT_REQUEST_FILE_API, GET_REQUEST_API, GET_REQUEST_BODY_API } from "./APIRequests";

//Keys lists
export function getAllKeyListsRequest(){
    return GET_REQUEST_BODY_API('KeyList/GetAllKeyLists', {}, true, true)
}

export function getKeyListAssignedKeysRequest(b){
    return GET_REQUEST_BODY_API('KeyList/GetListAssignedKeys', b, true, true)
}

export function addKeyListRequest(b){
    return ADD_REQUEST_BODY_API('KeyList/AddList', b, true, true)
}

export function removeKeyListRequest(b){
    return EDIT_REQUEST_BODY_API('KeyList/RemoveKeyList', b, true, true)
}

export function reassignKeysToListRequest(b){
    return EDIT_REQUEST_BODY_API('KeyList/ReassignKeys', b, true, true)
}

export function editKeyListCodeRequest(b){
    return EDIT_REQUEST_FILE_API('KeyList/UpdateCode', b, true, true)
}

//Keys
export function searchKeysRequest(b){
    return GET_REQUEST_BODY_API('SearchEngine/SearchKeys', b, true, true)
}

export function searchKeysByIdsRequest(b){
    return GET_REQUEST_BODY_API('SearchEngine/SearchKeysByIds', b, true, true)
}

//Numeric keys
export function addNumericKeyRequest(b){
    return ADD_REQUEST_BODY_API('Keyboard/AddKeyboardNumericKey', b, true, true)
}

//Variable key
export function addVariableKeyRequest(b){
    return ADD_REQUEST_BODY_API('Keyboard/AddKeyboardVariableKey', b, true, true)
}

export function addKeyVariantRequest(b){
    return ADD_REQUEST_BODY_API('Keyboard/AddKeyboardVariableKeyVariation', b, true, true)
}

//Keyboard
export function getKeyboardRequest(Id){
    return GET_REQUEST_BODY_API('Keyboard/GetKeyboard', {Id}, true, true)
}

export function searchKeyboardsRequest(b){
    return GET_REQUEST_BODY_API('SearchEngine/SearchKeyoards', b, true, true)
}

export function searchKeyboardsByIdsRequest(b){
    return GET_REQUEST_BODY_API('SearchEngine/SearchKeyoardsByIds', b, true, true)
}

export function getKeyboardQuestionsRequest(k){
    return ADD_REQUEST_BODY_API('Keyboard/GetQuestionsSpecificKeyboard', k, true, true)
}


export function addKeyboardRequest(b){
    return ADD_REQUEST_BODY_API('Keyboard/AddKeyboard', b, true, true)
}

export function editKeyboardNameRequest(b){
    return EDIT_REQUEST_BODY_API('Keyboard/EditKeyboardName', b, true, true)
}

export function assignKeysToKeyboardRequest(b){
    return ADD_REQUEST_BODY_API('Keyboard/AssignKeysToKeyboard', b, true, true)
}

export function removeKeyFromKeyboardRequest(b){
    return EDIT_REQUEST_BODY_API('Keyboard/RemoveKeyFromKeyboard', b, true, true)
}

export function getKeyConnectedQuestionsRequest(b){
    return ADD_REQUEST_BODY_API('Keyboard/GetQuestionsForKeyboardKey', b, true, true)
}

export function swabKeyboardKeysRequest(b){
    return EDIT_REQUEST_BODY_API('Keyboard/SwabKeyboardKeys', b, true, true)
}

