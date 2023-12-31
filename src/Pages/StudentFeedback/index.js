import React, { useState } from "react";
import { PagesWrapper } from "../../PagesWrapper";
import { Button, Divider, Input, Space, DatePicker, message, Spin, Col, Badge, Dropdown, Row } from "antd";
import './StudentFeedback.css'
import { useStudentFeedback } from "../../contexts/StudentFeedbackContext";
import {MessageOutlined} from '@ant-design/icons';
import { ViewFeedbackList } from "./ViewFeedbackList";
import { ErrorComponent } from "../../Components/ErrorComponent";
import { QuestionPlayPocket } from "../Questions/QuestionPlayPocket/QuestionPlayPocket";
import { useNavigate } from "react-router-dom";

import { EditOutlined, TrophyOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;


export function StudentFeedback(){
    const [selectedQuestion, setSelectedQuestion] = useState({})

    const [showPlayQuestionModal, setShowPlayQuestionModal] = useState(false)

    const [showViewFeedbackListModal, setShowViewFeedbackListModal] = useState(false)

    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate()

    const { 
        loadingStudentFeedback,
        studentFeedback,
        getStudentFeedbackError,
        getStudentFeedback,
      
    } = useStudentFeedback()

    const [fromData, setFromData] = useState(null)
    const [toData, setToData] = useState(null)

    const searchFeedback = () => {
        if(!(fromData && toData)) {
            messageApi.destroy()
            messageApi.warning('Please add date range for search')
            
            return
        } 

        let VM = ({
            encryption:"-",
            FromDate: fromData,
            ToDate: toData
        })

        getStudentFeedback(VM)
    }

    function FeedbackSearchLine(){
        return(
                <div className="feedback-search-input">
                    <small className="default-gray">Feedback date range</small>
                    <RangePicker 
                    
                    onChange={(v) => {
                        const fromData = v[0].format('DD.MM.YYYY') + ' 00:00:00'
                        const toData = v[1].format('DD.MM.YYYY') + ' 23:59:59'

                        setFromData(fromData)
                        setToData(toData)
                    }}/>
                    <Space align="center">
                        <Button 
                            className="search-btn"
                            onClick={() => {
                                searchFeedback()
                            }}
                        >
                            Search 
                        </Button>
                        {studentFeedback &&
                        <p>
                             {studentFeedback.reduce((r, c) => r += c.feedback.length, 0)} <strong>new</strong> comments
                        </p>}
                    </Space>
                </div>
        )
    }

    const questionActionList = (q) => [{
        key: 'view_edit_question',
        label: 'View edit question',
        icon: <EditOutlined/>,
        onClick: () => navigate('/question_view_edit/'+q.Id+'/'+q.Type)
    },
    {
        key: 'play_question',
        label: 'Play question',
        icon: <TrophyOutlined style={{color:'green'}}/> ,
        onClick: () => {
            setSelectedQuestion(q)
            setShowPlayQuestionModal(true)
        }
    }]

    return(
        <PagesWrapper>
            {contextHolder}
            <Divider orientation="left">
                Student feedback
            </Divider>
            <Space align="start">
                {FeedbackSearchLine()}
            </Space>

            <Divider/>
            {loadingStudentFeedback && <Spin tip="Loading..."/>}

            {getStudentFeedbackError && !loadingStudentFeedback && 
                <ErrorComponent 
                    error={getStudentFeedbackError}
                    onReload={() => {
                        searchFeedback()
                    }}
                />}

            {!(loadingStudentFeedback || getStudentFeedbackError) && studentFeedback  &&
            <Row>
                {studentFeedback.map((f) => {
                const {data, feedback} = f

                const {Code, ImageURL} = data

                return(
                        <Col xs={6}> 
                            <Space className="hq-element-container hq-light-background" direction="vertical" align="start">
                                <Space direction="vertical">
                                    <Space direction="vertical" className="hq-full-width" align="center"> 
                                        <Dropdown
                                            menu={{
                                                title:'Actions',
                                                items:questionActionList(data)
                                            }}
                                        >
                                            <p className="hoverable hoverable-plus">{Code}</p>
                                        </Dropdown>
                                        <img
                                            src = {ImageURL}
                                            alt="question"
                                            className="question-feedback-image"
                                        />
                                    </Space>
                                    <Space 
                                    align="start" 
                                    className="sample-feedback-section" 
                                    onClick={() => {
                                        setShowViewFeedbackListModal(true)
                                        setSelectedQuestion(data)
                                    }}
                                    >
                                            <div className="sample-feedback-icon">
                                                <Badge 
                                                count={feedback.length} size="small">
                                                    <MessageOutlined />
                                                </Badge>
                                            </div>
                                            
                                            <p className="sample-feedback">
                                            {feedback[0].FeedbackContent}
                                            </p>
                                    </Space>
                                </Space>
                            </Space>
                        </Col>)
            })}
            </Row>}


            <ViewFeedbackList 
                open={showViewFeedbackListModal}
                onClose={()=> setShowViewFeedbackListModal(false)}
                question={selectedQuestion}
            />

            <QuestionPlayPocket 
                open={showPlayQuestionModal}
                onClose={() => setShowPlayQuestionModal(false)}

                Id={selectedQuestion.Id}
                Type={selectedQuestion.Type}
            />
        </PagesWrapper>
    )
}