import React, { useEffect } from "react"
import { PagesWrapper } from "../../PagesWrapper"
import { useAuth } from "../../contexts/AuthContext"
import { Col, Divider, Input, QRCode, Row, Skeleton, Space } from "antd"
import './Dashboard.css'
import { getMapVisit_LS } from "../../services/Maps"
import { useMaps } from "../../contexts/MapsContext"
import { ErrorComponent } from "../../Components/ErrorComponent"

import './Dashboard.css'
import {goToMapPlaySamePage } from "../../services/Auxillary"
import { useNavigate } from "react-router-dom"

export function Dashboard(){
    const {currentPlayerKey} = useAuth()

    const {loadingRecentlyVistedMaps, recentlyVistedMaps, getRecentlyVistedMapsError, getRecentlyVistedMaps} = useMaps()

    const navigate = useNavigate()

    const loadRecentlyVisitedMaps = () => {
        let mapIds = getMapVisit_LS() || []
        
        mapIds = mapIds.filter(a => a)

        if(!mapIds.length) return;

        const VM = ({
            Ids: mapIds
        })


        getRecentlyVistedMaps(VM)
    }

    useEffect(() => {
        loadRecentlyVisitedMaps()
    }, [])


    const renderRecentlyVisitedMaps = () => {

        return(
            <div>
                <Divider orientation="left"><p>Recently visited maps</p></Divider>
                {loadingRecentlyVistedMaps && <Skeleton />}

                {getRecentlyVistedMapsError && !loadingRecentlyVistedMaps && 
                    <ErrorComponent 
                        error={getRecentlyVistedMapsError}
                        onReload={() => loadRecentlyVisitedMaps()}
                    />
                }

                {!(loadingRecentlyVistedMaps || getRecentlyVistedMapsError) && recentlyVistedMaps && 
                    <Row>
                        
                        {recentlyVistedMaps.map((m) => {
                            const {Id, Title, ImageURL} = m

                            return(
                            <Col 
                                key={Id}
                                className="hoverable hq-element-container"
                                onClick={() => goToMapPlaySamePage(navigate, m)}
                            >
                                <Space 
                                    direction="vertical" 
                                    
                                    align="center"
                                >
                                <img 
                                    alt={Title}
                                    src={ImageURL}
                                    className="recently-visited-maps-img"
                                />
                                <small className="default-gray">{Title}</small>
                                </Space>
                            </Col>)
                        })}
                     </Row>
                }
            </div>
        )
    }

    const renderPlayStats = () => {

        return(
            <div  className="hq-full-width"> 
               
            </div>
        )
    }

    return(
        <PagesWrapper>
            
            <Space>
                <Space direction="vertical" align="center">
                    <QRCode
                        value={currentPlayerKey||'-'}
                    />
                    <Input
                        value={currentPlayerKey}
                        disabled
                        style={{backgroundColor:'white', cursor:'text', textAlign:'center', color:'black'}}
                    />
                </Space>
                {renderPlayStats()}
            </Space>

            <br/>
            <br/>
            {renderRecentlyVisitedMaps()}
        </PagesWrapper>
    )
}