import { ADD_REQUEST_BODY_API, ADD_REQUEST_FILE_API, EDIT_REQUEST_BODY_API, EDIT_REQUEST_FILE_API, GET_REQUEST_API } from "./APIRequests";

const DATAPOOL_LS_ID_KEY = 'USER_DATA_POOL_ID_HEAT_QUIZ_APP'

export function getDatapools(){
    return GET_REQUEST_API('Datapool/GetDataPools')
}

export function getDatapoolsAdmin(){
    return GET_REQUEST_API('Datapool/GetDataPoolsAdmin')
}

export function AddDataPoolRequest(b){
    return ADD_REQUEST_BODY_API('Datapool/AddDataPool', b, false)
}

export function EditDataPoolRequest(b){
    return EDIT_REQUEST_BODY_API('Datapool/EditDataPool', b, false)
}

export function EditDataPoolAccessRequest(b){
    return EDIT_REQUEST_BODY_API('Datapool/EditDataPoolAccess', b, false)
}

export function HideUnhideDatapoolRequest(b){
    return EDIT_REQUEST_BODY_API('Datapool/HideUnhideDataPool', b, false)
}

export function getUserNotificationSubscriptionsRequest(){
    return GET_REQUEST_API('Datapool/GetUserNotificationSubscriptions')
}

export function subscribeQuestionFeedbackRequest(data){
    return ADD_REQUEST_FILE_API('Datapool/SubscribeNotifications', data, false)
}

export function unsubscribeQuestionFeedbackRequest(data){
    return ADD_REQUEST_FILE_API('Datapool/UnsubscribeNotifications', data, false)
}

export function registerFeedbackSeenRequest(){
    return GET_REQUEST_API('Datapool/RegisterSeenNotifications')
}



export function getCurrentDatapool(){
    const datapoolId = localStorage.getItem(DATAPOOL_LS_ID_KEY)

    return Number(datapoolId)
}

export function setCurrentDatapool(datapool){
    localStorage.setItem(DATAPOOL_LS_ID_KEY, datapool.value) 
}