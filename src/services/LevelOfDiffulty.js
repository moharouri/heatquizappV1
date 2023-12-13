import {ADD_REQUEST_BODY_API, DELETE_REQUEST_API, EDIT_REQUEST_BODY_API, GET_REQUEST_API } from "./APIRequests";

export function getLODs(){
    return GET_REQUEST_API('LevelOfDifficulty/GetLevelsOfDifficulty', null)
}

export function getLODsExtended(){
    return GET_REQUEST_API('LevelOfDifficulty/GetLevelsOfDifficultyDetailed', null, false)
}

export function getLODQuestionsRequest(Id){
    return GET_REQUEST_API('LevelOfDifficulty/GetLevelOfDifficultyQuestions', Id, false)
}

export function addLODRequest(l){
    return ADD_REQUEST_BODY_API('LevelOfDifficulty/AddLevel', l, false)
}

export function editLODRequest(l){
    return EDIT_REQUEST_BODY_API('LevelOfDifficulty/EditLevel', l, false)
}

export function deleteLODRequest(l){
    return DELETE_REQUEST_API('LevelOfDifficulty/DeleteLevel', l.Id, false)
}

