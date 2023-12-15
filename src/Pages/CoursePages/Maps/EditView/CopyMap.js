import {Button, Drawer, Space, message, Form, Select, Input,} from "antd";
import React, { useState } from "react";
import {ArrowLeftOutlined} from '@ant-design/icons';
import { useMaps } from "../../../../contexts/MapsContext";
import { useCourses } from "../../../../contexts/CoursesContext";
import { useEffect } from "react";
import { handleResponse } from "../../../../services/Auxillary";
import { MAX_MAP_NAME } from "./Constants";

export function CopyMap({open, onClose, Map, reloadData}){
    
    if(!open) return <div/>;

    const {loadingCopyMap, copyMap,} = useMaps()


    const {courses} = useCourses()

    const [selectedCourse, setSelectedCourse] = useState(null)

    const [name, setName] = useState('')

    const [api, contextHolder] = message.useMessage()

    useEffect(() => {
        if(open){
            setSelectedCourse(null)
        }
    }, [open])

    return(
        <div>
            {contextHolder}
            <Drawer
            title={
            <Space>

                <Button
                    size="small"
                    type="primary"
                    loading={loadingCopyMap}
                    onClick={() => {
                        if(!selectedCourse){
                            api.destroy()
                            api.warning("Please select a course")
                            return
                        }

                        if(!name.trim()){
                            api.destroy()
                            api.warning("Please add new map name")
                            return
                        }

                        const VM = ({
                            MapId: Map.Id,
                            CourseId: selectedCourse.Id, 
                            Title: name
                        })

                        copyMap(VM)
                        .then(r => handleResponse(r, api, 'Copied successfully', 1, () => {
                            onClose()

                            if(reloadData) reloadData()
                        }))
                    }}
                >
                    Copy
                </Button>
            </Space>}
            width={'40%'}
            onClose={onClose}
            open={open}
            bodyStyle={{}}
            closeIcon={<ArrowLeftOutlined />}
            maskClosable={false}
            >
            <Form>
                <Form.Item>
                    <small className="default-gray">Course</small>
                    <Select
                            
                        onChange={(v, option) => {
                            const findCourse = courses.filter(l => l.Id === option.value)[0]
                            setSelectedCourse(findCourse)
                        }}
                        
                        defaultValue={'please select'}
                        value={(selectedCourse || {'Name': 'please select'}).Name}

                        options={(courses || []).map((d) => ({
                            value: d.Id,
                            label: d.Name
                        }))}
                    />
                </Form.Item>
            </Form>

            <Form>
                <small className="default-gray">Title</small>
                <Form.Item>
                    <Input 
                            className="map-meta-data-input"
                            placeholder="Unique map name"
                            value={name}
                            onChange={(v) => setName(v.target.value)}
                            maxLength={MAX_MAP_NAME}
                            showCount
                        />
                </Form.Item>
            </Form>

            </Drawer>
        </div>
    )
}