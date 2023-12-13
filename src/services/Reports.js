import { GET_REQUEST_BODY_API } from "./APIRequests";

export function getNumericStatisticsQuery(query){
    return GET_REQUEST_BODY_API('Reports/GetStudentReport', query, true, true)
}

export function getGraphicalStatisticsQuery(query){
    return GET_REQUEST_BODY_API('Reports/GetGraphicalStudentReport', query, true, true)
}

export function getPlayerTimelineQuery(query){
    return GET_REQUEST_BODY_API('Reports/GetSpecificStudentReportTimeline', query, true, true)
}


