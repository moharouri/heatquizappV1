import React, { useContext} from "react"

import { useAsyncFn } from "../hooks/useAsync"
import {addKeyListRequest, addKeyVariantRequest, addKeyboardRequest, addNumericKeyRequest, addVariableKeyRequest, assignKeysToKeyboardRequest, editKeyListCodeRequest, editKeyboardNameRequest, getAllKeyListsRequest, getKeyConnectedQuestionsRequest, getKeyListAssignedKeysRequest, getKeyboardQuestionsRequest, getKeyboardRequest, reassignKeysToListRequest, removeKeyFromKeyboardRequest, removeKeyListRequest, removeKeyboardRequest, searchKeyboardsByIdsRequest, searchKeyboardsRequest, searchKeysByIdsRequest, searchKeysRequest, swabKeyboardKeysRequest } from "../services/Keyboard"

const Context = React.createContext()

export function useKeyboard(){
    return useContext(Context)
}

export function KeyboardProvider ({children}){
    //Fetch from API
    const {value: keyboards, error:errorGetKeyboards, loading:isLoadingKeyboards, execute: searchKeyboards} = useAsyncFn((b, substream) => {
        if(substream){
            return searchKeyboardsByIdsRequest(b)
        }
        else{
            return searchKeyboardsRequest(b)
        }
    }) 

    const {value: keys, error:errorGetKeys, loading:isLoadingKeys, execute: searchKeys} = useAsyncFn((b, substream) => {
        if(substream){
            return searchKeysByIdsRequest(b)
        }
        else{
            return searchKeysRequest(b)
        }
    }) 
    
    const {value: Keyboard, error:errorGetKeyboard, loading:isLoadingKeyboard, execute: getKeyboard} = useAsyncFn((Id) => getKeyboardRequest(Id)) 
    const {value: keyboardQuestions, error:errorGetKeyboardQuestions, loading:isLoadingKeyboardQuestions, execute: getKeyboardQuestions} = useAsyncFn((Id) => getKeyboardQuestionsRequest(Id)) 

    //Key lists
    const {value: keyLists, error:errorGetKeyLists, loading:isLoadingKeyLists, execute: getAllKeyLists} = useAsyncFn((Id) => getAllKeyListsRequest(Id)) 
    const {value: getKeyListAssignedKeysResult, error:errorGetKeyListAssignedKeys, loading:isLoadingGetKeyListAssignedKeys, execute: getKeyListAssignedKeys} = useAsyncFn((b) => getKeyListAssignedKeysRequest(b)) 

    const {value: addKeyListResult, error:errorAddKeyList, loading:isLoadingAddKeyList, execute: addKeyList} = useAsyncFn((b) => addKeyListRequest(b)) 
    const {value: removeKeyListResult, error:errorRemoveKeyList, loading:isLoadingRemoveKeyList, execute: removeKeyList} = useAsyncFn((b) => removeKeyListRequest(b)) 
    const {value: editKeyListCodeResult, error:errorEditKeyListCode, loading:isLoadingEditKeyListCode, execute: editKeyListCode} = useAsyncFn((b) => editKeyListCodeRequest(b)) 
    const {value: reassignKeysToListResult, error:errorReassignKeysToList, loading:isLoadingReassignKeysToList, execute: reassignKeysToList} = useAsyncFn((b) => reassignKeysToListRequest(b)) 

    const {value: addKeyResult, error:errorAddKey, loading:isLoadingAddKey, execute: addKey} = useAsyncFn((b, isVariableKey) => {
        if(isVariableKey){
            return addVariableKeyRequest(b)
        }
        else{
            return addNumericKeyRequest(b)
        }
    }) 

    const {value: addKeyVariantResult, error:errorAddKeyVariant, loading:isLoadingAddKeyVariant, execute: addKeyVariant} = useAsyncFn((b) => addKeyVariantRequest(b)) 
    
    const {value: addKeyboardResult, error:errorAddKeyboard, loading:isLoadingAddKeyboard, execute: addKeyboard} = useAsyncFn((b) => addKeyboardRequest(b)) 

    const {value: removeKeyboardResult, error:errorRemoveKeyboard, loading:isLoadingRemoveKeyboard, execute: removeKeyboard} = useAsyncFn((b) => removeKeyboardRequest(b)) 

    const {value: editKeyboardNameResult, error:errorEditKeyboardName, loading:isLoadingEditKeyboardName, execute: editKeyboardName} = useAsyncFn((b) => editKeyboardNameRequest(b)) 
    const {value: assignKeysToKeyboardResult, error:errorAssignKeysToKeyboard, loading:isLoadingAssignKeysToKeyboard, execute: assignKeysToKeyboard} = useAsyncFn((b) => assignKeysToKeyboardRequest(b)) 
    const {value: removeKeyFromKeyboardResult, error:errorRemoveKeyFromKeyboard, loading:isLoadingRemoveKeyFromKeyboard, execute: removeKeyFromKeyboard} = useAsyncFn((b) => removeKeyFromKeyboardRequest(b)) 
    const {value: swabKeyboardKeysResult, error:errorSwabKeyboardKeys, loading:isLoadingSwabKeyboardKeys, execute: swabKeyboardKeys} = useAsyncFn((b) => swabKeyboardKeysRequest(b)) 

    const {value: getKeyConnectedQuestionsResult, error:errorGetKeyConnectedQuestions, loading:isLoadingKeyConnectedQuestions, execute: getKeyConnectedQuestions} = useAsyncFn((Id) => getKeyConnectedQuestionsRequest(Id)) 



    return(
        <Context.Provider value = {{
            isLoadingKeyboard,
            errorGetKeyboard,
            Keyboard,
            getKeyboard,

            isLoadingKeyLists,
            keyLists,
            errorGetKeyLists,
            getAllKeyLists,

            isLoadingKeyboards,
            keyboards,
            errorGetKeyboards,
            searchKeyboards,

            isLoadingKeyboardQuestions,
            keyboardQuestions,
            errorGetKeyboardQuestions,
            getKeyboardQuestions,

            addKeyListResult,
            errorAddKeyList,
            isLoadingAddKeyList,
            addKeyList,

            editKeyListCodeResult,
            isLoadingEditKeyListCode,
            errorEditKeyListCode,
            editKeyListCode,

            getKeyListAssignedKeysResult,
            errorGetKeyListAssignedKeys,
            isLoadingGetKeyListAssignedKeys,
            getKeyListAssignedKeys,

            addKeyResult,
            errorAddKey,
            isLoadingAddKey,
            addKey,

            removeKeyListResult,
            errorRemoveKeyList,
            isLoadingRemoveKeyList,
            removeKeyList,

            reassignKeysToListResult,
            errorReassignKeysToList,
            isLoadingReassignKeysToList,
            reassignKeysToList,

            keys,
            errorGetKeys,
            isLoadingKeys,
            searchKeys,

            addKeyVariantResult,
            errorAddKeyVariant,
            isLoadingAddKeyVariant,
            addKeyVariant,

            addKeyboardResult,
            isLoadingAddKeyboard,
            errorAddKeyboard,
            addKeyboard,

            removeKeyboardResult,
            isLoadingRemoveKeyboard,
            errorRemoveKeyboard,
            removeKeyboard,

            editKeyboardNameResult,
            errorEditKeyboardName,
            isLoadingEditKeyboardName,
            editKeyboardName,

            assignKeysToKeyboardResult,
            errorAssignKeysToKeyboard,
            isLoadingAssignKeysToKeyboard,
            assignKeysToKeyboard,
            
            removeKeyFromKeyboardResult,
            errorRemoveKeyFromKeyboard,
            isLoadingRemoveKeyFromKeyboard,
            removeKeyFromKeyboard,

            isLoadingKeyConnectedQuestions,
            getKeyConnectedQuestionsResult,
            errorGetKeyConnectedQuestions,
            getKeyConnectedQuestions,

            isLoadingSwabKeyboardKeys,
            errorSwabKeyboardKeys,
            swabKeyboardKeysResult,
            swabKeyboardKeys

        }}>
            {children}
        </Context.Provider>
    )
}