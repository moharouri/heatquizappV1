import React from "react"
import { PagesWrapper } from "../../../PagesWrapper"
import { Col, Divider, Dropdown, Empty, List, Popconfirm, Row, Skeleton, Space, Tooltip, message } from "antd"
import { SeriesSearchTool } from "./SeriesSearchTool"
import { useSeries } from "../../../contexts/SeriesContext"
import { beautifyDatetime, handleResponse } from "../../../services/Auxillary"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {EditOutlined, TrophyOutlined, DeleteOutlined} from '@ant-design/icons';
import { SeriesPlayPocket } from "../Play/SeriesPlayPocket"
import { ErrorComponent } from "../../../Components/ErrorComponent"

export function SeriesList(){
    const {isLoadingSeriesQuery, errorGetSeriesQuery, SeriesQuery, 
        removeSeries
    } = useSeries() 

    const [firstIndex, setFirstIndex] = useState(0)

    const [showPlaySeriesModal, setShowPlaySeriesModal] = useState(false)
    const [selectedSeries, setSelectedSeries] = useState({Code:''})

    const [api, contextHolder] = message.useMessage()

    const naviagate = useNavigate()

    const seriesActionList = (s) => [{
        key: 'view_edit_series',
        label: 'View / edit',
        icon: <EditOutlined/>,
        onClick: () => naviagate('/series_edit_view/'+s.Code)
    },
    {
        key: 'play_series',
        label: 'Play',
        icon: <TrophyOutlined style={{color:'green'}}/> ,
        onClick: () => {
            setShowPlaySeriesModal(true)
            setSelectedSeries(s)
        }
    },
    {
        key: 'play_series_with_link',
        label: 'Play with link',
        icon: <TrophyOutlined style={{color:'green'}}/> ,
        onClick: () => naviagate('/series_play/'+s.Code)
    },
    {
        key: 'delete_series',
        label: 
        <Popconfirm
        title="Remove series"
        description="Are you sure to delete this series?"
                onConfirm={() => {
                    removeSeries({Id: s.Id})
                    .then(r => handleResponse(
                        r,
                        api,
                        'Removed',
                        1,
                        () => window.location.reload()))
                }}
        onCancel={() => {}}
        okText="Yes"
        cancelText="No"
        placement="right"
    >
    
        Delete
    </Popconfirm>,
        icon: <DeleteOutlined/> ,
        onClick: () => {}
    }]

    const renderSeries = () => {
        const series = SeriesQuery.Series
      
        return(
           <div>
            {series.length ? 
            <Row
                gutter={24}
            >
                {series.map((q, qi) => {

                const {Id, Code, AddedByName, DateCreated, IsRandom, Elements, MapElements} = q

                let linkedMaps = []

                if(MapElements.length){
                    for(let me of MapElements){
                        if(!linkedMaps.map(a => a.Id).includes(me.Map.Id)){
                            linkedMaps.push(me.Map)
                        }
                    }
                }

                return(
                    <Col
                        xs={12}
                        className="series-list-item-container-0"
                        key={Id}
                    >
                    <div className="series-list-item-container-0-internal">
                            <div className="series-list-item-container-1">
                                <Dropdown
                                    menu={{
                                        items:seriesActionList(q),
                                        title:'Actions'
                                    }}
                                >
                                    <p className="hoverable-plus">
                                        <span className="series-list-item-index">{firstIndex + qi+1}</span>
                                        {Code}
                                    </p>
                                </Dropdown>
                                <br/>

                                <p className="series-list-item-code-adder-date-stats">{AddedByName}</p>
                                <p className="series-list-item-code-adder-date-stats">{beautifyDatetime(DateCreated)}</p>


                            </div>
                            <div>
                                <p className="series-list-item-code-adder-date-stats">{Elements.length} elements</p>
                                {IsRandom && <p className="series-list-item-random-series">Random series</p>}
                                <br/>
                                {linkedMaps.length
                                ?
                                <List 
                                    dataSource={linkedMaps}
                                    renderItem={(me, mei) => (
                                        <div 
                                            key={mei}
                                            size={'large'}> 
                                                
                                                <Tooltip 
                                                        color="white"
                                                        title={<img 
                                                            src={me.ImageURL}
                                                            alt={me.Title}
                                                            className="hq-img hq-clickable"
                                                            onClick={() => naviagate('/playcoursemap/'+me.Id)}
                                                        />}
                                                        
                                                    > 
                                                        <p className="series-list-item-map">{me.Title}</p>
                                                    </Tooltip>
                                            </div>
                                        )}
                                /> : <div/>}

                            </div>
                    </div>
                    
                </Col>
                )
                })}
                </Row> : <Space align="center">{!isLoadingSeriesQuery && <Empty />}</Space>}
           </div>
        )
    }


    return(
        <PagesWrapper>
            {contextHolder}
            <Divider orientation="left">
                Series List
            </Divider>
            <SeriesSearchTool  onSetFirstIndex={(i) => setFirstIndex(i)}/>

            <br/>
            {isLoadingSeriesQuery && <Skeleton />}
            {(!isLoadingSeriesQuery && SeriesQuery) && renderSeries()}

            {errorGetSeriesQuery && !isLoadingSeriesQuery && 
                <ErrorComponent 
                    error={errorGetSeriesQuery}
                    onReload={() => window.location.reload()}
                />
            }

            <SeriesPlayPocket 
                open={showPlaySeriesModal}
                onClose={() => setShowPlaySeriesModal(false)}
                Code={selectedSeries.Code}
            />
        </PagesWrapper>
    )
}