import React from "react";
import { PagesWrapper } from "../../PagesWrapper";
import { useEffect } from "react";
import { useDatapools } from "../../contexts/DatapoolsContext";
import {Col, Divider, Dropdown, Row, Space, Spin, message } from "antd";
import { ErrorComponent } from "../../Components/ErrorComponent";

import './index.css'
import { handleResponse } from "../../services/Auxillary";

export function Settings(){
    const {datapools, errorGetDatapools, isLoadingDatapools, getAllDatapools,
        getUserNotificationSubscriptionsResult: subscriptions, errorGetUserNotificationSubscriptions, isLoadingGetUserNotificationSubscriptions, getUserNotificationSubscriptions,

        subscribeQuestionFeedback, unsubscribeQuestionFeedback,
    } = useDatapools()

    const [api, contextHolder] = message.useMessage()

    const loadData = () => {
        getAllDatapools()
        getUserNotificationSubscriptions()
    }

    useEffect(() => {
        loadData()
    }, [])

    const datapoolActions = (d, isSubscribed) => [{
        key:'change_status',
        label: isSubscribed ? "Unsubscribe" : "Subscribe",
        onClick: () => {
            if(!isSubscribed){
                const data = new FormData()
                data.append('DatapoolId', d.Id)

                subscribeQuestionFeedback(data).then(r => handleResponse(r, api, 'Subscribed successfully', 1, () => loadData()))
            }
            else{
                const data = new FormData()
                data.append('DatapoolId', d.Id)

                unsubscribeQuestionFeedback(data).then(r => handleResponse(r, api, 'Unsubscribed successfully', 1, () => loadData()))
            
            }
        }
    }]

    const renderNotificationSubscription = () => {
        const isLoading = (isLoadingDatapools || isLoadingGetUserNotificationSubscriptions)
        const error = (errorGetUserNotificationSubscriptions || errorGetDatapools)

        return(
            <Col xs={24}>
                    <div>
                        <small className="default-gray">Notifications subscription</small>

                        <br/>
                        <br/>

                        {(isLoadingDatapools || isLoadingGetUserNotificationSubscriptions) && <Spin />}

                        {errorGetDatapools && !isLoadingDatapools && 
                            <ErrorComponent 
                                error={errorGetDatapools}
                                onReload={() => getAllDatapools()}
                            />
                        }

                        {errorGetUserNotificationSubscriptions && !isLoadingGetUserNotificationSubscriptions && 
                            <ErrorComponent 
                                error={errorGetUserNotificationSubscriptions}
                                onReload={() => getAllDatapools()}
                            />
                        }

                        {!isLoading && !error && subscriptions && datapools &&
                            <Row
                                className="hq-full-width"
                                gutter={[4,4]}
                            >
                                {datapools.map((d, di) => {
                                    const {Id, NickName} = d

                                    const isSubscribed = subscriptions.filter(a => a.DatapoolId === d.Id).length

                                    return(
                                        <Col 
                                            key={Id}
                                            className={"hq-element-container hoverable" + (isSubscribed ? " hq-light-green-background" : "")}
                                        >
                                        <Dropdown
                                                menu={{
                                                    title:'Actions',
                                                    items:datapoolActions(d, isSubscribed)
                                                }}
                                        >
                                                <Space>
                                                    &nbsp; 
                                                    <p>{di+1}</p>
                                                    &nbsp; 
                                                    <p className={isSubscribed ? "hq-bold-font-weight" : ""}>{NickName}</p>
                                                    &nbsp; 
                                                </Space>
                                        </Dropdown>
                                        </Col>
                                        )
                                    })}
                            </Row>}
                    </div>
            </Col>
        )
    }

    return(
        <PagesWrapper>
            {contextHolder}
            <Divider orientation="left">
                Settings
            </Divider>

            <Row className="hq-full-width">
                {renderNotificationSubscription()}
                
            </Row>
        </PagesWrapper>
    )
}