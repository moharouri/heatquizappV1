import React, {useEffect, useState } from "react";
import {Button, Drawer} from "antd";
import { FilePdfOutlined } from '@ant-design/icons';

import './index.css'
import { useQuestions } from "../../contexts/QuestionsContext";
import { useAuth } from "../../contexts/AuthContext";

export function ViewSolutionComponent({question, correct}){

    const {postQuestionPDFStatistic} = useQuestions()
    const {currentPlayerKey} = useAuth()

    const [showModal, setShowModal] = useState(false)

    const {PDFURL} = question


    useEffect(() => {
       if(showModal){
            const VM = ({
                QuestionId: question.Id,
                Player: currentPlayerKey,
                Correct: correct
            })

            postQuestionPDFStatistic(VM)
       }

    }, [showModal])

    const renderModal = () => {

        return(
            <Drawer
                open={showModal}
                onClose={() => setShowModal(false)}
                width={'50%'}
                closable={false}
                
            >
                <div className="pdf-solution-view">
                <iframe 
                    title="pdf"
                    className="pdf-solution-view-internal"
                    src={PDFURL}
                    onClick={() => window.open(PDFURL)}    
                >
                </iframe>
                </div>

            </Drawer>
        )
    }

    return(
        <div>
            <Button
                size="small"
                onClick={() => setShowModal(true)}
                icon={<FilePdfOutlined />}
            >
                Solution
            </Button> 
            {renderModal()}
        </div>

    )
}
