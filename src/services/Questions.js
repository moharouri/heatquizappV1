import {ADD_REQUEST_BODY_API, ADD_REQUEST_FILE_API, EDIT_REQUEST_BODY_API, EDIT_REQUEST_FILE_API, GET_REQUEST_API, GET_REQUEST_BODY_API } from "./APIRequests";

//Searching
export function searchQuestionsRequest(b){
    return GET_REQUEST_BODY_API('SearchEngine/GetQuestions', b, true, true)
}

export function searchQuestionsByIdsRequest(b){
    return GET_REQUEST_BODY_API('SearchEngine/GetQuestionsByIds', b, true, true)
}

//Statistics
export function getQuestionMedianTimeRequest(b){
    return GET_REQUEST_BODY_API('Statistics/GetQuestionMedianTimeSpectrum', b, true, true)
}

export function GetQuestionStatisticsRequest(b){
    return GET_REQUEST_BODY_API('Statistics/GetQuestionStatistics', b, true, true)
}

export function addQuestionStatisticRequest(b){
    return ADD_REQUEST_BODY_API('Students/AddQuestionStatistic', b)
}

export function addQuestionPDFStatisticRequest(b){
    return ADD_REQUEST_BODY_API('Students/AddQuestionPDFStatistic', b)
}


//Get play 
export function getClickableQuestionPlayRequest(Id){
    return GET_REQUEST_API('Students/GetClickableQuestion', Id)
}

export function getMultipleChoiceQuestionPlayRequest(Id){
    return GET_REQUEST_API('Students/GetMultipleChoiceQuestion', Id)
}


//Mutliple choice question edit functions

export function getMultipleChoiceQuestionViewEditRequest(b){
    return GET_REQUEST_BODY_API('MultipleChoiceQuestion/GetQuestion', b, true, true)
}

export function addMultipleChoiceQuestionRequest(b){
    return ADD_REQUEST_FILE_API('MultipleChoiceQuestion/AddQuestionSingleStep', b, true, true)
}

export function addMultipleChoiceQuestionChoiceRequest(b){
    return ADD_REQUEST_FILE_API('MultipleChoiceQuestion/AddQuestionChoice', b, true, true)
}

export function removeMultipleChoiceQuestionChoiceLatexRequest(b){
    return EDIT_REQUEST_FILE_API('MultipleChoiceQuestion/RemoveQuestionChoiceLatex', b, true, true) 
}

export function removeMultipleChoiceQuestionChoiceImageRequest(b){
    return EDIT_REQUEST_FILE_API('MultipleChoiceQuestion/RemoveQuestionChoiceImage', b, true, true) 
}


export function editMultipleChoiceQuestionChoiceRequest(b){
    return EDIT_REQUEST_FILE_API('MultipleChoiceQuestion/EditQuestionChoice', b, true, true)
}

export function removeMultipleChoiceQuestionChoiceRequest(b){
    return EDIT_REQUEST_BODY_API('MultipleChoiceQuestion/RemoveQuestionChoice', b, true, true) 
}

//Keyboard question edit functions
export function getKeyboardQuestionPlayRequest(Id){
    return GET_REQUEST_API('KeyboardQuestion/GetQuestion_PORTAL', Id)
}

export function addKeyboardQuestionRequest(b){
    return ADD_REQUEST_FILE_API('KeyboardQuestion/AddQuestionSingleStep', b, true)
}

export function addKeyboardQuestionAnswerRequest(b){
    return EDIT_REQUEST_BODY_API('KeyboardQuestion/AddQuestionAnswer', b)
}

export function removeKeyboardQuestionAnswerRequest(b){
    return EDIT_REQUEST_BODY_API('KeyboardQuestion/RemoveQuestionAnswer', b)
}

export function editKeyboardQuestionLatexRequest(b){
    return EDIT_REQUEST_BODY_API('KeyboardQuestion/EditQuestionLatex', b)
}

export function editKeyboardQuestionImageRequest(b){
    return EDIT_REQUEST_FILE_API('KeyboardQuestion/AddEditQuestionImage', b)
}

export function getKeyboardQuestionWrongAnswersRequest(b){
    return GET_REQUEST_API('KeyboardQuestion/GetKeyboardQuestionWrongAnswers_PORTAL', b)
}

//Clickable question edit functions
export function getClickableQuestionViewEditRequest(b){
    return GET_REQUEST_BODY_API('SimpleClickableQuestion/GetQuestion', b, true, true)
}

export function addClickableQuestionRequest(b){
    return ADD_REQUEST_FILE_API('SimpleClickableQuestion/AddQuestionSingleStep', b, true, true)
}

export function editClickableQuestionAnswerRequest(b){
    return EDIT_REQUEST_BODY_API('SimpleClickableQuestion/UpdateClickableImageAnswer', b, true, true)
}

export function deleteClickableQuestionPartRequest(b){
    return EDIT_REQUEST_BODY_API('SimpleClickableQuestion/RemoveClickable', b, true, true)
}

export function addClickableQuestionPartsRequest(b){
    return ADD_REQUEST_FILE_API('SimpleClickableQuestion/AddNewQuestionParts', b, true, true)
}


//Shared functionalities
export function copyQuestionRequest(b){
    return ADD_REQUEST_BODY_API('SharedQuestion/CopyQuestion', b, true, true)
}

export function editQuestionBasicInfoRequest(b){
    return EDIT_REQUEST_BODY_API('SharedQuestion/EditQuestionBaseInfo', b, true, true)
}

export function removeQuestionSolutionRequest(b){
    return EDIT_REQUEST_FILE_API('SharedQuestion/RemoveQuestionSolution', b, true, true)
}

export function addQuestionSolutionRequest(b){
    return ADD_REQUEST_FILE_API('SharedQuestion/AddEditQuestionPDF', b, true, true)
}

export function editQuestionImageRequest(b){
    return EDIT_REQUEST_FILE_API('SharedQuestion/EditQuestionImage', b, true, true)
}

export function editQuestionLatexRequest(b){
    return EDIT_REQUEST_BODY_API('SharedQuestion/EditQuestionLatex', b, true, true)
}

export function getQuestionRelationsRequest(b){
    return GET_REQUEST_BODY_API('SharedQuestion/GetQuestionSeriesMapRelations', b, true, true)
}



