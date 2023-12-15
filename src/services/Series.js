import {ADD_REQUEST_BODY_API, ADD_REQUEST_FILE_API, EDIT_REQUEST_BODY_API, GET_REQUEST_API, GET_REQUEST_BODY_API } from "./APIRequests";



export function getSeriesViewEditRequest(Code){
    return GET_REQUEST_BODY_API('QuestionSeries/GetSeriesExtended', {Code}, true, true)
}

export function getSeriesMedianTimeSpectrumRequest(b){
    return GET_REQUEST_BODY_API('Statistics/GetSeriesMedianTimeSpectrum', b, true, true)
}

export function getSeriesStatisticsRequest(b){
    return GET_REQUEST_BODY_API('Statistics/GetSeriesStatistics', b, true, true)
}

export function getSeriesAddersRequest(){
    return GET_REQUEST_BODY_API('QuestionSeries/GetSeriesAdders', {}, true, true)
}

export function searchSeriesRequest(b){
    return GET_REQUEST_BODY_API('SearchEngine/SearchSeries', b, true, true)
}

export function searchSeriesByIdsRequest(b){
    return GET_REQUEST_BODY_API('SearchEngine/SearchSeriesByIds', b, true, true)
}

export function addSeriesRequest(b){
    return ADD_REQUEST_BODY_API('QuestionSeries/AddSeries', b, true, true)
}

export function removeSeriesRequest(b){
    return EDIT_REQUEST_BODY_API('QuestionSeries/RemoveSeries', b, true, true)
}

export function addQuestionsToSeriesRequest(b){
    return ADD_REQUEST_BODY_API('QuestionSeries/AddSeriesElements', b, true, true)
}

export function editQuestionsInfoRequest(b){
    return EDIT_REQUEST_BODY_API('QuestionSeries/EditSeriesInfo', b, true, true)
}

export function assignQuestionsToPoolRequest(b){
    return EDIT_REQUEST_BODY_API('QuestionSeries/AssignElementsToPool', b, true, true)
}

export function deselectQuestionFromSeriesRequest(b){
    return EDIT_REQUEST_BODY_API('QuestionSeries/DeselectElementSeries', b, true, true)
}

export function decreasePoolsNumberSeriesRequest(b){
    return EDIT_REQUEST_BODY_API('QuestionSeries/DecreasePoolsNumber', b, true, true)
}

export function increasePoolsNumberSeriesRequest(b){
    return EDIT_REQUEST_BODY_API('QuestionSeries/IncreasePoolsNumber', b, true, true)
}

export function rearrangeSeriesRequest(b){
    return EDIT_REQUEST_BODY_API('QuestionSeries/RearrangeSeries', b, true, true)
}

//Students
export function getSeriesRequest(Code){
    return GET_REQUEST_API('Students/GetSeriesPlayByCode', Code)
}

export function addSeriesStatisticRequest(b){
    return ADD_REQUEST_FILE_API('Students/AddSeriesStatistic', b)
}
