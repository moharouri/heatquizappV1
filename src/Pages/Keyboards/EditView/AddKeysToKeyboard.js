import { Button, Drawer, Space, message } from "antd";
import React, {useState } from "react"
import {ArrowLeftOutlined} from '@ant-design/icons';
import { SelectKeyList } from "../Shared/SelectKeyList";
import { useEffect } from "react";
import { NUMERIC_KEY, VARIABLE_KEY } from "../../../Components/Keyboard/constants";
import { useKeyboard } from "../../../contexts/KeyboardContext";
import { handleResponse } from "../../../services/Auxillary";

export function AddKeysToKeyboard({open, onClose, keyboard, reloadData}){

    if(!open) return <div />;

    const [messageApi, contextHolder] = message.useMessage();
    
    const [selectedKeys, setSelectedKeys] = useState([])

    const {isLoadingAssignKeysToKeyboard, assignKeysToKeyboard,} = useKeyboard()

    const {NumericKeys, VariableKeys} = keyboard

    const existingKeys = [...NumericKeys.map((k) => ({Id: k.NumericKey.Id, Type: NUMERIC_KEY})), ...VariableKeys.map((k) => ({Id: k.VariableKey.Id, Type: VARIABLE_KEY}))]
    useEffect(() => {
        setSelectedKeys([])
    }, [open])

    return(
        <div>
            {contextHolder}
            <Drawer
                title={
                    <Space>
                        <p>Add keys</p>

                        <Button
                            size="small"
                            type="primary"
                            onClick={() => {
                                if(!selectedKeys.length){
                                    messageApi.destroy()
                                    messageApi.warning("Please select atleast one key")
                                    return
                                }

                                const VM = ({
                                    Id: keyboard.Id,

                                    NumericKeys: selectedKeys
                                    .map((k, i) => ({...k, Order:i}))
                                    .filter((k) => (k.Type === NUMERIC_KEY)),
                                    
                                    VariableKeys: selectedKeys
                                    .map((k, i) => ({...k, Order:i}))
                                    .filter((k) => (k.Type === VARIABLE_KEY)),

                                })

                                assignKeysToKeyboard(VM).then(r => handleResponse(r, messageApi, 'Added successfully', 1, () => {
                                    reloadData()
                                    onClose()
                                }))
                            }}

                            loading={isLoadingAssignKeysToKeyboard}
                        >
                            Add
                        </Button>
                    </Space>
                }
                width={'100%'}
                onClose={onClose}
                open={open}
                bodyStyle={{}}
                closeIcon={<ArrowLeftOutlined />}
            >
               <SelectKeyList 
                    onSelect={(l) => setSelectedKeys(l)}
                    existingKeys={existingKeys}
               />
            </Drawer>
        </div>
    )
}