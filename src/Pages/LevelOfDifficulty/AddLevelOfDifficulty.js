import {Button, ColorPicker, Drawer, Form, Input, Space, message} from "antd";
import React from "react";
import {ArrowLeftOutlined} from '@ant-design/icons';
import { useState } from "react";
import { useEffect } from "react";
import { handleResponse } from "../../services/Auxillary";
import { useLevelsOfDifficulty } from "../../contexts/LevelOfDifficultyContext";

export function AddLevelOfDifficulty({open, onClose, reloadData}){

    if(!open) return <div/>;

    useEffect(() => {
      setName('')
      setColor('green')
    }, [open])

    const [name, setName] = useState('')
    const [color, setColor] = useState('green')

    const [api, contextHolder] = message.useMessage()

    const { isLoadingAddLOD, addLOD} = useLevelsOfDifficulty()

    return(
        <Drawer
        title="Add level of difficulty"
        width={'50%'}
        onClose={onClose}
        open={open}

        closeIcon={<ArrowLeftOutlined />}
        maskClosable={false}
        >
          {contextHolder}
          <Form>
            <Form.Item>
              <small className="default-gray">Name</small>
              <Input 
                placeholder="New level of difficulty name"
                value={name}
                onChange={(v) => setName(v.target.value)}
              />
          
            </Form.Item>
            <Form.Item>
              <Space
                direction="vertical"
                size={'small'}
              >
                <small className="default-gray">Color</small>
                <Space
                  size={'small'}
                >
                  <ColorPicker 
                  defaultValue={color}
                  onChange={(v,h) => {
                    console.log(v)
                    console.log(h)

                    setColor(h)
                  }}
                  size="large" 
                  showText = {true} />

                  <p>{color}</p>
                </Space>
              </Space>
            </Form.Item>
          </Form>
          <Button 
            type="primary" 
            size="small"
            onClick={() => {
              const VM = ({
                Name: name,
                HexColor: color
              })

              addLOD(VM)
              .then(r => handleResponse(r, api, 'Added successfully', 1, () => {
                reloadData()
                onClose()
              }))
            }}
            loading = {isLoadingAddLOD}
            >
              Add
          </Button>
        </Drawer>
    )
}