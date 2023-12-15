import { ADD_REQUEST_BODY_API, ADD_REQUEST_FILE_API, EDIT_REQUEST_BODY_API, EDIT_REQUEST_FILE_API, GET_REQUEST_API, GET_REQUEST_BODY_API } from "./APIRequests";

const MAP_LS_STORAGE_NAME = 'MAP_HEAT_QUIZ_2023_ABCDEFG'
const MAP_KEY_LS_STORAGE_NAME = 'MAP_HEAT_QUIZ_2023_ABCDEFG_KEY'
const MAP_VISITS_LS_STORAGE_NAME = 'MAP_HEAT_QUIZ_2023_ABCDEFG_VISITS'

//Students
export function getRecentlyVistedMapsRequest(Ids){
    return ADD_REQUEST_BODY_API('Students/GetRecentlyVisitedCourseMapsByIds/', Ids)
}

export function getMapRequest(Id){
    return GET_REQUEST_API('Students/GetCourseMapPlayById/'+Id)
}

export function addMapPDFStatisticRequest(b){
    return ADD_REQUEST_FILE_API('Students/AddMapPDFStatistic/', b)
}

//Map
export function getMapExtendedRequest(Id){
    return GET_REQUEST_BODY_API('CourseMap/GetCourseMapViewEditById/', {Id}, true, true)
}

export function getMapElementStatisticsRequest(Id){
    return GET_REQUEST_BODY_API('Statistics/GetCourseMapStatisticsById/', {Id}, true, true)
}

export function addMapRequest(b){
    return ADD_REQUEST_FILE_API('CourseMap/AddMap/', b, true, true)
}

export function addMapElementsRequest(b){
    return ADD_REQUEST_FILE_API('CourseMap/AddMapElements/', b, true, true)
}

export function copyMapRequest(b){
    return ADD_REQUEST_BODY_API('CourseMap/CopyMap/', b, true, true)
}

export function removeMapRequest(b){
    return EDIT_REQUEST_BODY_API('CourseMap/RemoveMap/', b, true, true)
}

export function deleteMapElementRequest(b){
    return ADD_REQUEST_BODY_API('CourseMap/DeleteElement/', b, true, true)
}

export function attachMapToElementRequest(b){
    return ADD_REQUEST_FILE_API('CourseMap/AttachMapToElement/', b, true, true)
}

export function deattachMapToElementRequest(b){
    return ADD_REQUEST_FILE_API('CourseMap/DeattachMapToElement/', b, true, true)
}

export function editMapBasicInfoRequest(b){
    return EDIT_REQUEST_BODY_API('CourseMap/EditMapBasicInfo/', b, true, true)
}

export function addMapBadgeSystemRequest(b){
    return ADD_REQUEST_FILE_API('CourseMap/AddBadgeGroup/', b, true, true)
}

export function editMapBadgeSystemRequest(b){
    return EDIT_REQUEST_FILE_API('CourseMap/EditBadgeGroup/', b, true, true)
}

export function assignSeriesToMapElementRequest(b){
    return EDIT_REQUEST_BODY_API('CourseMap/SetElementSeries/', b, true, true)
}

export function removeSeriesFromMapElementRequest(b){
    return EDIT_REQUEST_BODY_API('CourseMap/DeleteElementSeries/', b, true, true)
}

export function assignPDFToMapElementRequest(b){
    return EDIT_REQUEST_FILE_API('CourseMap/AddEditElementPDF/', b, true, true)
}

export function removePDFToMapElementRequest(b){
    return EDIT_REQUEST_FILE_API('CourseMap/RemoveElementPDF/', b, true, true)
}

export function assignRelationToMapElementRequest(b){
    return ADD_REQUEST_BODY_API('CourseMap/AddEditElementRelation/', b, true, true)
}

export function removeRelationToMapElementRequest(b){
    return EDIT_REQUEST_BODY_API('CourseMap/RemoveElementRelation/', b, true, true)
}

export function removeMapElementBadgeRequest(b){
    return EDIT_REQUEST_BODY_API('CourseMap/RemoveElementBadge/', b, true, true)
}

export function editMapElementBadgeProgressRequest(b){
    return EDIT_REQUEST_BODY_API('CourseMap/EditElementBadgePercentage/', b, true, true)
}

export function editMapElementBadgeImageRequest(b){
    return EDIT_REQUEST_FILE_API('CourseMap/EditElementBadge/', b, true, true)
}

export function assignClickListToMapElementRequest(b){
    return EDIT_REQUEST_FILE_API('CourseMapElementImages/SelectImageGroup/', b, true, true)
}

export function deassignClickListToMapElementRequest(b){
    return EDIT_REQUEST_BODY_API('CourseMapElementImages/DeassignImagesList/', b, true, true)
}

export function removeMapElementRequest(b){
    return EDIT_REQUEST_BODY_API('CourseMap/EditMapElementBasicInfo/', b, true, true)
}

export function removeMapBadgeEntityRequest(b){
    return EDIT_REQUEST_FILE_API('CourseMap/RemoveBadgeGroupEntity/', b, true, true)
}

export function editMapElementBasicInfoRequest(b){
    return EDIT_REQUEST_BODY_API('CourseMap/EditMapElementBasicInfo/', b, true, true)
}

export function editBadgeSystemEntityRequest(b){
    return EDIT_REQUEST_FILE_API('CourseMap/EditBadgeGroupEntity/', b, true, true)
}

export function addBadgeSystemEntityRequest(b){
    return ADD_REQUEST_FILE_API('CourseMap/AddBadgeGroupEntities/', b, true, true)
}

export function assignBadgeSystemToElementRequest(b){
    return ADD_REQUEST_FILE_API('CourseMap/CopyBadgeGroupEntities/', b, true, true)
}

export function reassignMapToCourseRequest(b){
    return EDIT_REQUEST_FILE_API('CourseMap/ReassignMap/', b, true, true)
}

export function removeBadgeSystemRequest(b){
    return EDIT_REQUEST_FILE_API('CourseMap/RemoveBadgeGroup/', b, true, true)
}

export function getMapPlayStatisticsRequest_LS(Id){
    const results_LS = localStorage.getItem(MAP_LS_STORAGE_NAME + Id)

    const result_JSON = results_LS ? JSON.parse(results_LS) : ({
        ElementsProgress:[]
    })

    return result_JSON
}

export function updateMapPlayStatisticsRequest_LS(data){
    const {Id, ElementsProgress} = data

    localStorage.setItem(MAP_LS_STORAGE_NAME + Id, JSON.stringify(({
        ElementsProgress:ElementsProgress
    })))

    const result_JSON = localStorage.getItem(MAP_LS_STORAGE_NAME + Id)

    return JSON.parse(result_JSON)
}

export function getMapKey_LS(Id){
    const key = localStorage.getItem(MAP_KEY_LS_STORAGE_NAME + Id)
    return key
}

export function updateMapKey_LS(Id, key){
    localStorage.setItem(MAP_KEY_LS_STORAGE_NAME + Id, key)
    return key
}

export function getMapVisit_LS(){
    const results_LS = localStorage.getItem(MAP_VISITS_LS_STORAGE_NAME) || ""

    return results_LS.split(',')
}

export function recordMapVisit_LS(Id){
    //read from local storage
    let results_LS = localStorage.getItem(MAP_VISITS_LS_STORAGE_NAME) || ""

    //convert to list
    //omit empty or null values
    results_LS = results_LS.split(',').filter(a => a)

    //check if already included
    if(!results_LS.includes(Id)){

        //Top 5 visited
        if(results_LS.length < 5) {
            results_LS.push(Id);
        }
        //First in last out data structure
        else{
            let new_list = results_LS.slice(1)
            new_list.push(Id)

            results_LS = new_list
        }
    }

    //convert back to string 
    results_LS = results_LS.join(',')

    //save to local storage
    localStorage.setItem(MAP_VISITS_LS_STORAGE_NAME, results_LS)
}